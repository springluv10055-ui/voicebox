import PostCard from './PostCard'
import './PostGrid.css'

export default function PostGrid({ posts, onDelete, emptyMessage = '조건에 맞는 의견이 아직 없어요.' }) {
  if (posts.length === 0) {
    return <p className="post-grid__empty">{emptyMessage}</p>
  }

  return (
    <div className="post-grid">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} onDelete={onDelete} />
      ))}
    </div>
  )
}
