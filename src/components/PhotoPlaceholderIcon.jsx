export default function PhotoPlaceholderIcon({ size = '34%' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <circle cx="12" cy="12" r="3.2" />
      <path d="M8 5l1.5-2h5L16 5" />
    </svg>
  )
}
