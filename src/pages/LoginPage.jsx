import AuthGateCard from '../components/AuthGateCard'
import './AuthGatePage.css'

export default function LoginPage() {
  return (
    <AuthGateCard
      title="로그인"
      description="구글 계정으로 위별 목소리함에 로그인하세요."
      switchText="계정이 없으신가요?"
      switchTo="/signup"
      switchLabel="회원가입"
    />
  )
}
