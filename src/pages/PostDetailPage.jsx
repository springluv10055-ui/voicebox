import { Link, useParams } from 'react-router-dom'
import StatusBadge from '../components/StatusBadge'
import PhotoPlaceholderIcon from '../components/PhotoPlaceholderIcon'
import { POSTS } from '../data/posts'
import './PostDetailPage.css'

export default function PostDetailPage() {
  const { id } = useParams()
  const post = POSTS.find((p) => String(p.id) === id)

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
        <PhotoPlaceholderIcon size="60px" />
      </div>

      <div className="post-detail__top-row">
        <StatusBadge status={post.status} />
        <span className="post-detail__cat">{post.category}</span>
      </div>

      <h2 className="post-detail__title">{post.title}</h2>
      <p className="post-detail__meta">
        {post.author} · {post.createdAt}
      </p>

      <p className="post-detail__content">{post.content}</p>
    </main>
  )
}
