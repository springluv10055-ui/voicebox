import { STATUS } from '../data/posts'
import './StatusBadge.css'

export default function StatusBadge({ status }) {
  const meta = STATUS[status]
  if (!meta) return null
  return <span className={`status-badge ${meta.className}`}>{meta.label}</span>
}
