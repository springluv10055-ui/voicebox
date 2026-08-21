import { Link } from 'react-router-dom'
import { ORG_NAME, ICON_PATH } from '../constants/brand'
import { useAuth } from '../contexts/AuthContext'
import './Header.css'

export default function Header() {
  const { user, loading } = useAuth()
  const avatarUrl = user?.user_metadata?.avatar_url || user?.user_metadata?.picture
  const displayName = user?.user_metadata?.full_name || user?.user_metadata?.name || user?.email

  return (
    <header className="site-header">
      <Link to="/" className="site-header__brand">
        <img src={ICON_PATH} alt={`${ORG_NAME} 아이콘`} width={26} height={26} />
        <span className="site-header__org-name">{ORG_NAME}</span>
      </Link>

      {!loading && (
        <div className="site-header__auth">
          {user ? (
            <Link to="/mypage" className="site-header__avatar" aria-label="마이페이지">
              {avatarUrl ? (
                <img src={avatarUrl} alt={displayName} />
              ) : (
                <span className="site-header__avatar-fallback">{displayName?.[0] ?? '?'}</span>
              )}
            </Link>
          ) : (
            <>
              <Link to="/login" className="site-header__auth-btn">
                로그인
              </Link>
              <Link to="/signup" className="site-header__auth-btn site-header__auth-btn--primary">
                회원가입
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  )
}
