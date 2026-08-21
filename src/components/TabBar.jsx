import './TabBar.css'

// design.md 2탭 전용 컴포넌트. 마이페이지/관리자 화면에서 재사용한다.
// 탭은 항상 정확히 2개로 쓴다.
export default function TabBar({ tabs, active, onChange }) {
  return (
    <div className="tab-bar" role="tablist">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          type="button"
          role="tab"
          aria-selected={tab.key === active}
          className={tab.key === active ? 'tab-item tab-item--active' : 'tab-item'}
          onClick={() => onChange(tab.key)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}
