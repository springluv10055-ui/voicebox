import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import TabBar from '../components/TabBar'
import PostGrid from '../components/PostGrid'
import { useAuth } from '../contexts/AuthContext'
import { useToast } from '../contexts/ToastContext'
import { fetchPostsByUser, deletePost } from '../lib/postsApi'
import { formatDate } from '../lib/format'
import './MyPage.css'

const TABS = [
  { key: 'my-posts', label: '내가 쓴 글' },
  { key: 'my-info', label: '내 정보' },
]

export default function MyPage() {
  const { user, loading: authLoading, signOut } = useAuth()
  const [activeTab, setActiveTab] = useState('my-posts')

  if (!authLoading && !user) {
    return <Navigate to="/login" replace />
  }

  if (authLoading || !user) {
    return (
      <main className="mypage">
        <p className="mypage__status">불러오는 중...</p>
      </main>
    )
  }

  return (
    <>
      <TabBar tabs={TABS} active={activeTab} onChange={setActiveTab} />
      <main className="mypage">
        {activeTab === 'my-posts' ? <MyPosts userId={user.id} /> : <MyInfo user={user} signOut={signOut} />}
      </main>
    </>
  )
}

function MyPosts({ userId }) {
  const { showToast } = useToast()
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    let cancelled = false
    async function load() {
      setLoading(true)
      setErrorMessage('')
      try {
        const data = await fetchPostsByUser(userId)
        if (!cancelled) setPosts(data)
      } catch (err) {
        if (!cancelled) setErrorMessage('의견 목록을 불러오지 못했어요.')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    load()
    return () => {
      cancelled = true
    }
  }, [userId])

  async function handleDelete(post) {
    if (!window.confirm('이 의견을 삭제할까요? 되돌릴 수 없어요.')) return
    try {
      await deletePost(post.id)
      setPosts((prev) => prev.filter((p) => p.id !== post.id))
      showToast('삭제했어요.')
    } catch (err) {
      showToast('삭제하지 못했어요. 잠시 후 다시 시도해주세요.')
    }
  }

  if (loading) return <p className="mypage__status">불러오는 중...</p>
  if (errorMessage) return <p className="mypage__status mypage__status--error">{errorMessage}</p>

  return (
    <div className="mypage__posts">
      <PostGrid posts={posts} onDelete={handleDelete} emptyMessage="아직 남긴 의견이 없어요." />
    </div>
  )
}

function MyInfo({ user, signOut }) {
  const name = user.user_metadata?.full_name || user.user_metadata?.name || '이름 없음'
  const joinedAt = formatDate(user.created_at)

  return (
    <div className="mypage__info">
      <div className="mypage__info-row">
        <span className="mypage__info-label">이름</span>
        <span className="mypage__info-value">{name}</span>
      </div>
      <div className="mypage__info-row">
        <span className="mypage__info-label">이메일</span>
        <span className="mypage__info-value">{user.email}</span>
      </div>
      <div className="mypage__info-row">
        <span className="mypage__info-label">가입일</span>
        <span className="mypage__info-value">{joinedAt}</span>
      </div>
      <button type="button" className="btn btn-outline mypage__signout" onClick={() => signOut()}>
        로그아웃
      </button>
    </div>
  )
}
