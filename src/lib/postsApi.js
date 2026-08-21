import { supabase } from './supabaseClient'

const SELECT_COLUMNS = 'id, title, content, author, photo_url, status, category, created_at, user_id'
const PHOTO_BUCKET = 'photos'

// 첨부 사진을 Storage에 올리고 공개 URL을 돌려준다.
export async function uploadPostPhoto(file) {
  const ext = file.name.split('.').pop()
  const path = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`

  const { error: uploadError } = await supabase.storage.from(PHOTO_BUCKET).upload(path, file)
  if (uploadError) throw uploadError

  const { data } = supabase.storage.from(PHOTO_BUCKET).getPublicUrl(path)
  return data.publicUrl
}

// 목록: 최신순.
export async function fetchPosts() {
  const { data, error } = await supabase
    .from('posts')
    .select(SELECT_COLUMNS)
    .order('created_at', { ascending: false })

  if (error) throw error
  return data
}

// 마이페이지 "내가 쓴 글": 특정 사용자 글만, 최신순.
export async function fetchPostsByUser(userId) {
  const { data, error } = await supabase
    .from('posts')
    .select(SELECT_COLUMNS)
    .eq('user_id', userId)
    .order('created_at', { ascending: false })

  if (error) throw error
  return data
}

// 상세: id 하나.
export async function fetchPostById(id) {
  const { data, error } = await supabase
    .from('posts')
    .select(SELECT_COLUMNS)
    .eq('id', id)
    .maybeSingle()

  if (error) throw error
  return data
}

// 글쓰기: status/created_at은 DB 기본값(접수, 지금 시각)을 그대로 쓴다.
// user_id는 RLS의 "본인 글만" 정책이 그대로 검사하므로 로그인한 사용자 id를 반드시 넘겨야 한다.
export async function createPost({ title, content, author, category, photoUrl, userId }) {
  const { data, error } = await supabase
    .from('posts')
    .insert({
      title,
      content,
      author,
      category,
      photo_url: photoUrl ?? null,
      user_id: userId,
    })
    .select(SELECT_COLUMNS)
    .single()

  if (error) throw error
  return data
}

// 마이페이지에서 본인 글 삭제. RLS가 본인 글이 아니면 막는다.
export async function deletePost(id) {
  const { error } = await supabase.from('posts').delete().eq('id', id)
  if (error) throw error
}
