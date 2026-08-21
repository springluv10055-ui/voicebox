import { Link, useNavigate } from 'react-router-dom'
import { SERVICE_NAME, SERVICE_TAGLINE } from '../constants/brand'
import { useAuth } from '../contexts/AuthContext'
import './Hero.css'

// 서비스 전체에서 "의견 남기기"로 이어지는 유일한 글쓰기 진입점.
// 다른 화면(목록, 상세)에는 이 버튼을 복제하지 않는다.
export default function Hero() {
  const { user } = useAuth()
  const navigate = useNavigate()

  function handleClick(e) {
    if (!user) {
      e.preventDefault()
      navigate('/login')
    }
  }

  return (
    <section className="hero">
      <h1 className="hero__title">{SERVICE_NAME}</h1>
      <p className="hero__body">{SERVICE_TAGLINE}</p>
      <Link to="/write" onClick={handleClick} className="btn btn-primary hero__cta">
        의견 남기기
      </Link>
    </section>
  )
}
