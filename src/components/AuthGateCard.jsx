import { useState } from 'react'
import { Link } from 'react-router-dom'
import GoogleIcon from './GoogleIcon'
import { startGoogleAuth } from '../lib/googleAuth'

// /login, /signup 두 화면이 그대로 공유하는 카드. design.md 규칙대로 두 화면은
// 문구만 다르고 구성은 동일하다 — Supabase OAuth가 신규/기존을 알아서 구분해서다.
export default function AuthGateCard({ title, description, switchText, switchTo, switchLabel }) {
  const [submitting, setSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  async function handleClick() {
    setErrorMessage('')
    setSubmitting(true)
    const result = await startGoogleAuth()
    if (!result.started) {
      setSubmitting(false)
      if (result.error) {
        setErrorMessage('구글 로그인을 시작하지 못했어요. 잠시 후 다시 시도해주세요.')
      }
    }
    // 성공 시엔 구글로 페이지 자체가 넘어가므로 별도 상태 처리가 필요 없다.
  }

  return (
    <main className="auth-gate">
      <div className="auth-card">
        <h2 className="auth-card__title">{title}</h2>
        <p className="auth-card__desc">{description}</p>

        <button type="button" className="btn-google" onClick={handleClick} disabled={submitting}>
          <GoogleIcon />
          Google로 계속하기
        </button>

        {errorMessage && <p className="auth-card__error">{errorMessage}</p>}

        <p className="auth-card__switch">
          {switchText} <Link to={switchTo}>{switchLabel}</Link>
        </p>
      </div>
    </main>
  )
}
