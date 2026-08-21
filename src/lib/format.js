// DB의 timestamptz(created_at)를 카드/상세에서 쓰는 "2026.08.18" 형식으로.
export function formatDate(isoString) {
  const d = new Date(isoString)
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}.${m}.${day}`
}

// 카드 목록에서 본문 앞부분만 보여줄 때 쓰는 짧은 발췌.
export function makeExcerpt(content, maxLength = 60) {
  const oneLine = content.replace(/\s+/g, ' ').trim()
  if (oneLine.length <= maxLength) return oneLine
  return `${oneLine.slice(0, maxLength)}...`
}
