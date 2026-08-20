import './CategoryChips.css'

// 분야 칩 — flex-wrap이라 개수가 늘어나도 레이아웃이 깨지지 않는다.
// 단일 선택: 전체 또는 분야 하나.
export default function CategoryChips({ categories, value, onChange }) {
  return (
    <div className="chip-row" role="group" aria-label="분야 필터">
      <button
        type="button"
        className={value === 'all' ? 'chip active' : 'chip'}
        onClick={() => onChange('all')}
      >
        전체
      </button>
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className={value === category ? 'chip active' : 'chip'}
          onClick={() => onChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
