// 저장(백엔드) 연동 전 화면 확인용 샘플 데이터.
// status는 'received' | 'progress' | 'done' 세 가지 고정값만 쓴다.

export const STATUS = {
  received: { label: '접수', className: 'status-received' },
  progress: { label: '처리중', className: 'status-progress' },
  done: { label: '완료', className: 'status-done' },
}

export const STATUS_FILTERS = [
  { value: 'all', label: '전체' },
  { value: 'received', label: '접수' },
  { value: 'progress', label: '처리중' },
  { value: 'done', label: '완료' },
]

// 실제 게시글에 쓰이는 분야 + 앞으로 늘어날 수 있는 분야 몇 개를 섞어
// 칩이 개수와 상관없이 줄바꿈으로 대응하는지 보여준다.
export const CATEGORIES = [
  '안전·조명',
  '놀이터',
  '주차',
  '조경',
  '시설관리',
  '소음',
  '기타',
]

export const POSTS = [
  {
    id: 1,
    title: '정문 앞 가로등이 며칠째 안 켜져요',
    excerpt:
      '저녁에 정문 쪽으로 걸어오는데 가로등이 꺼져 있어서 좀 무서웠어요. 벌써 며칠째 그대로예요.',
    content:
      '저녁에 정문 쪽으로 걸어오는데 가로등이 꺼져 있어서 좀 무서웠어요. 벌써 며칠째 그대로예요.\n\n어두워지고 나서 정문을 이용하시는 분들이 많은데, 가로등이 꺼져 있으니 발밑도 잘 안 보이고 안전상 걱정이 됩니다. 확인 부탁드려요.',
    category: '안전·조명',
    status: 'received',
    author: '이OO',
    createdAt: '2026.08.18',
    hasPhoto: true,
  },
  {
    id: 2,
    title: '놀이터 그네가 삐걱거려요',
    excerpt:
      '아이가 그네를 탈 때마다 삐걱거리는 소리가 심하게 나요. 안전한지 점검이 필요할 것 같습니다.',
    content:
      '아이가 그네를 탈 때마다 삐걱거리는 소리가 심하게 나요. 안전한지 점검이 필요할 것 같습니다.\n\n소리만 나는 건지 실제로 부품이 헐거워진 건지 육안으로는 잘 모르겠어서, 시설 담당하시는 분이 한 번 봐주시면 좋겠습니다.',
    category: '놀이터',
    status: 'progress',
    author: '박OO',
    createdAt: '2026.08.14',
    hasPhoto: true,
  },
  {
    id: 3,
    title: '지하주차장 2구역이 너무 어두워요',
    excerpt: '밤에 주차하고 내릴 때 조명이 부족해서 발밑이 잘 안 보여요.',
    content:
      '밤에 주차하고 내릴 때 조명이 부족해서 발밑이 잘 안 보여요.\n\n특히 2구역 안쪽 기둥 근처가 유독 어두운 것 같습니다. 조도 개선 부탁드립니다.',
    category: '주차',
    status: 'received',
    author: '최OO',
    createdAt: '2026.08.12',
    hasPhoto: true,
  },
  {
    id: 4,
    title: '화단에 잡초가 많이 자랐어요',
    excerpt:
      '단지 중앙 화단에 잡초가 많이 올라와서 보기에도 안 좋고 관리가 필요해 보여요.',
    content:
      '단지 중앙 화단에 잡초가 많이 올라와서 보기에도 안 좋고 관리가 필요해 보여요.\n\n확인 후 정리해 주셔서 지금은 깔끔해졌습니다. 감사합니다.',
    category: '조경',
    status: 'done',
    author: '김OO',
    createdAt: '2026.08.05',
    hasPhoto: true,
  },
  {
    id: 5,
    title: '커뮤니티실 에어컨 소리가 너무 커요',
    excerpt:
      '커뮤니티실에서 모임을 하는데 에어컨 소음이 심해서 대화가 어려울 정도예요.',
    content:
      '커뮤니티실에서 모임을 하는데 에어컨 소음이 심해서 대화가 어려울 정도예요.\n\n필터 청소나 점검이 필요하지 않을까 싶어 남깁니다.',
    category: '시설관리',
    status: 'progress',
    author: '정OO',
    createdAt: '2026.08.02',
    hasPhoto: true,
  },
]
