// Vercel 서버리스 함수. Gemini API 키는 여기(서버)에서만 읽는다 — 클라이언트 번들엔 절대 안 들어간다.
const CATEGORIES = ['안전·조명', '놀이터', '주차', '조경', '시설관리', '소음', '기타']
const MODEL = 'gemini-3.5-flash-lite'

const SYSTEM_INSTRUCTION = `너는 아파트 단지 커뮤니티 "목소리함"의 민원 작성 도우미야.
주민이 짧게 적은 메모를 실제 민원 게시판에 올릴 수 있는 정식 글로 다듬어줘.

규칙:
- title: 15~30자 정도의 명확하고 간결한 제목.
- content: 상황을 구체적으로 설명하는 정중한 본문 2~4문장. 원문에 없는 사실을 지어내지 말고, 있는 내용만 자연스러운 문장으로 다듬어.
- category: 반드시 다음 목록 중 하나만 골라야 해: ${CATEGORIES.join(', ')}. 애매하면 '기타'로 골라.
- 반드시 JSON으로만 답해. 다른 설명은 절대 붙이지 마.`

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'POST 요청만 지원해요.' })
    return
  }

  const apiKey = process.env.GEMINI_API_KEY
  if (!apiKey) {
    res.status(500).json({ error: '서버에 GEMINI_API_KEY가 설정되어 있지 않아요.' })
    return
  }

  const draft = typeof req.body?.draft === 'string' ? req.body.draft.trim() : ''
  if (!draft) {
    res.status(400).json({ error: '내용을 먼저 입력해주세요.' })
    return
  }

  try {
    const geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: SYSTEM_INSTRUCTION }] },
          contents: [{ role: 'user', parts: [{ text: draft }] }],
          generationConfig: {
            responseMimeType: 'application/json',
            responseSchema: {
              type: 'OBJECT',
              properties: {
                title: { type: 'STRING' },
                content: { type: 'STRING' },
                category: { type: 'STRING', enum: CATEGORIES },
              },
              required: ['title', 'content', 'category'],
            },
          },
        }),
      }
    )

    if (!geminiRes.ok) {
      const errText = await geminiRes.text()
      console.error('Gemini API error:', geminiRes.status, errText)
      res.status(502).json({ error: 'AI 초안 작성에 실패했어요. 잠시 후 다시 시도해주세요.' })
      return
    }

    const data = await geminiRes.json()
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text

    if (!text) {
      console.error('Gemini API: empty response', JSON.stringify(data))
      res.status(502).json({ error: 'AI가 답을 만들지 못했어요. 다시 시도해주세요.' })
      return
    }

    const parsed = JSON.parse(text)
    if (!CATEGORIES.includes(parsed.category)) {
      parsed.category = '기타'
    }

    res.status(200).json({
      title: String(parsed.title ?? '').trim(),
      content: String(parsed.content ?? '').trim(),
      category: parsed.category,
    })
  } catch (err) {
    console.error('generate-report error:', err)
    res.status(500).json({ error: 'AI 초안 작성 중 오류가 발생했어요.' })
  }
}
