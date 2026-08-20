import { Link } from 'react-router-dom'
import StatusBadge from './StatusBadge'
import PhotoPlaceholderIcon from './PhotoPlaceholderIcon'
import './PostCard.css'

export default function PostCard({ post }) {
  return (
    <Link to={`/posts/${post.id}`} className="post-card">
      <div className="post-card__photo">
        <PhotoPlaceholderIcon />
      </div>
      <div className="post-card__body">
        <div className="post-card__top-row">
          <StatusBadge status={post.status} />
          <span className="post-card__cat">{post.category}</span>
        </div>
        <h3 className="post-card__title">{post.title}</h3>
        <p className="post-card__excerpt">{post.excerpt}</p>
        <p className="post-card__meta">
          {post.author} · {post.createdAt}
        </p>
      </div>
    </Link>
  )
}
