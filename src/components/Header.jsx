import { Link } from 'react-router-dom'
import { ORG_NAME, ICON_PATH } from '../constants/brand'
import './Header.css'

export default function Header() {
  return (
    <header className="site-header">
      <Link to="/" className="site-header__brand">
        <img src={ICON_PATH} alt={`${ORG_NAME} 아이콘`} width={26} height={26} />
        <span className="site-header__org-name">{ORG_NAME}</span>
      </Link>
    </header>
  )
}
