import { supabase } from './supabaseClient'
import { markOAuthPending } from '../contexts/AuthContext'

const CONFIRM_MESSAGE =
  '구글 계정으로 계속합니다. 처음이면 회원가입이, 이미 회원이면 로그인이 진행됩니다. 계속할까요?'

// 로그인/회원가입 두 화면이 완전히 동일한 방식으로 쓰는 구글 인증 시작 함수.
// Supabase OAuth는 신규/기존 사용자를 알아서 구분해 처리하므로 두 화면이 다를 이유가 없다.
export async function startGoogleAuth() {
  const confirmed = window.confirm(CONFIRM_MESSAGE)
  if (!confirmed) return { started: false }

  markOAuthPending()
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: { redirectTo: window.location.origin },
  })

  if (error) {
    sessionStorage.removeItem('vb_oauth_pending')
    return { started: false, error }
  }
  return { started: true }
}
