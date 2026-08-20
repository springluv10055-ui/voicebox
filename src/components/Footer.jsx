import { ORG_NAME, ORG_TAGLINE } from '../constants/brand'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      © {ORG_NAME} · {ORG_TAGLINE}
    </footer>
  )
}
