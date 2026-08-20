import { STATUS_FILTERS } from '../data/posts'
import './StatusFilterBar.css'

// 전체/접수/처리중/완료 — 개수가 고정이라 항상 4개 다 보여준다.
// design.md의 2탭 tab-bar와는 다른 컴포넌트(pill 필터)다.
export default function StatusFilterBar({ value, onChange }) {
  return (
    <div className="status-filter-bar" role="group" aria-label="처리상태 필터">
      {STATUS_FILTERS.map((item) => (
        <button
          key={item.value}
          type="button"
          className={item.value === value ? 'active' : ''}
          onClick={() => onChange(item.value)}
        >
          {item.label}
        </button>
      ))}
    </div>
  )
}
