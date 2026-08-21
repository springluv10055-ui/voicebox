// 서버(/api/generate-report)를 통해서만 Gemini를 호출한다. 키는 클라이언트에 없다.
export async function generateReportDraft(draft) {
  const res = await fetch('/api/generate-report', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ draft }),
  })

  const data = await res.json().catch(() => ({}))

  if (!res.ok) {
    throw new Error(data.error || 'AI 초안 작성에 실패했어요.')
  }

  return data // { title, content, category }
}
