// status는 'received' | 'progress' | 'done' 세 가지 고정값만 쓴다 (posts 테이블의 post_status enum과 동일).

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

// 분야 목록은 아직 별도 테이블 없이 화면에서 고정으로 관리한다.
// (나중에 관리자 "분야 관리" 화면이 생기면 테이블로 옮길 수 있다.)
export const CATEGORIES = [
  '안전·조명',
  '놀이터',
  '주차',
  '조경',
  '시설관리',
  '소음',
  '기타',
]
