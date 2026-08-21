import AuthGateCard from '../components/AuthGateCard'
import './AuthGatePage.css'

export default function SignupPage() {
  return (
    <AuthGateCard
      title="회원가입"
      description="구글 계정으로 간편하게 시작하세요. 별도 가입 절차 없이 바로 이용할 수 있어요."
      switchText="이미 계정이 있으신가요?"
      switchTo="/login"
      switchLabel="로그인"
    />
  )
}
