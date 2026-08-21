import { Link } from 'react-router-dom'
import StatusBadge from './StatusBadge'
import PhotoPlaceholderIcon from './PhotoPlaceholderIcon'
import { formatDate, makeExcerpt } from '../lib/format'
import './PostCard.css'

// onDelete를 넘기면(마이페이지 "내가 쓴 글") 카드 우상단에 삭제 버튼이 뜬다.
// 홈 목록에서는 onDelete를 안 넘기니 버튼이 아예 없다.
export default function PostCard({ post, onDelete }) {
  return (
    <Link to={`/posts/${post.id}`} className="post-card">
      <div className="post-card__photo">
        {post.photo_url ? (
          <img src={post.photo_url} alt="" />
        ) : (
          <PhotoPlaceholderIcon />
        )}
      </div>
      <div className="post-card__body">
        <div className="post-card__top-row">
          <StatusBadge status={post.status} />
          <span className="post-card__cat">{post.category}</span>
        </div>
        <h3 className="post-card__title">{post.title}</h3>
        <p className="post-card__excerpt">{makeExcerpt(post.content)}</p>
        <p className="post-card__meta">
          {post.author} · {formatDate(post.created_at)}
        </p>
      </div>
      {onDelete && (
        <button
          type="button"
          className="post-card__delete"
          aria-label="이 글 삭제"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            onDelete(post)
          }}
        >
          ×
        </button>
      )}
    </Link>
  )
}
