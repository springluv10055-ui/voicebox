import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

// 모든 화면 공통 뼈대: 헤더 + (화면별 콘텐츠) + 푸터.
// 히어로는 화면 전용이라 여기 없다 — HomePage 안에서만 그린다.
export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
