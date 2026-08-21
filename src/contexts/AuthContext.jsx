import { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabaseClient'
import { useToast } from './ToastContext'

const AuthContext = createContext(null)

// signInWithOAuth 호출 직전에 이 플래그를 세워두고, 로그인이 실제로 막
// 완료된 시점(리다이렉트로 돌아온 직후)에만 토스트+이동을 하기 위한 표시.
// 이게 없으면 이미 로그인된 채로 새로고침할 때마다 "로그인되었습니다"가 뜬다.
const OAUTH_PENDING_KEY = 'vb_oauth_pending'

export function markOAuthPending() {
  sessionStorage.setItem(OAUTH_PENDING_KEY, '1')
}

function isNewlyCreatedUser(user) {
  if (!user?.created_at || !user?.last_sign_in_at) return false
  const created = new Date(user.created_at).getTime()
  const lastSignIn = new Date(user.last_sign_in_at).getTime()
  return Math.abs(lastSignIn - created) < 5000
}

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const { showToast } = useToast()

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session)
      setLoading(false)
    })

    const { data: subscription } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession)
      setLoading(false)

      const oauthWasPending = sessionStorage.getItem(OAUTH_PENDING_KEY) === '1'
      if (nextSession?.user && oauthWasPending) {
        sessionStorage.removeItem(OAUTH_PENDING_KEY)
        showToast(
          isNewlyCreatedUser(nextSession.user)
            ? '가입을 마쳤습니다. 환영해요!'
            : '로그인되었습니다.'
        )
        navigate('/')
      }
    })

    return () => subscription.subscription.unsubscribe()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const value = {
    session,
    user: session?.user ?? null,
    loading,
    signOut: () => supabase.auth.signOut(),
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth는 AuthProvider 안에서만 쓸 수 있어요.')
  return ctx
}
