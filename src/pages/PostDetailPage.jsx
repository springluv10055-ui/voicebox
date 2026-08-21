import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import StatusBadge from '../components/StatusBadge'
import PhotoPlaceholderIcon from '../components/PhotoPlaceholderIcon'
import { formatDate } from '../lib/format'
import { fetchPostById } from '../lib/postsApi'
import './PostDetailPage.css'

export default function PostDetailPage() {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    let cancelled = false

    async function load() {
      setLoading(true)
      setErrorMessage('')
      try {
        const data = await fetchPostById(id)
        if (!cancelled) setPost(data)
      } catch (err) {
        if (!cancelled) setErrorMessage('의견을 불러오지 못했어요. 잠시 후 다시 시도해주세요.')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [id])

  if (loading) {
    return (
      <main className="post-detail post-detail--empty">
        <p>불러오는 중...</p>
      </main>
    )
  }

  if (errorMessage) {
    return (
      <main className="post-detail post-detail--empty">
        <p>{errorMessage}</p>
        <Link to="/" className="btn btn-outline">
          목록으로
        </Link>
      </main>
    )
  }

  if (!post) {
    return (
      <main className="post-detail post-detail--empty">
        <p>게시글을 찾을 수 없어요.</p>
        <Link to="/" className="btn btn-outline">
          목록으로
        </Link>
      </main>
    )
  }

  return (
    <main className="post-detail">
      <Link to="/" className="post-detail__back">
        ← 목록으로
      </Link>

      <div className="post-detail__photo">
        {post.photo_url ? (
          <img src={post.photo_url} alt="" />
        ) : (
          <PhotoPlaceholderIcon size="60px" />
        )}
      </div>

      <div className="post-detail__top-row">
        <StatusBadge status={post.status} />
        <span className="post-detail__cat">{post.category}</span>
      </div>

      <h2 className="post-detail__title">{post.title}</h2>
      <p className="post-detail__meta">
        {post.author} · {formatDate(post.created_at)}
      </p>

      <p className="post-detail__content">{post.content}</p>
    </main>
  )
}
