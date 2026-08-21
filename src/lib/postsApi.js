import { supabase } from './supabaseClient'

const SELECT_COLUMNS = 'id, title, content, author, photo_url, status, category, created_at'
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
export async function createPost({ title, content, author, category, photoUrl }) {
  const { data, error } = await supabase
    .from('posts')
    .insert({
      title,
      content,
      author,
      category,
      photo_url: photoUrl ?? null,
    })
    .select(SELECT_COLUMNS)
    .single()

  if (error) throw error
  return data
}
