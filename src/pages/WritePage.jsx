import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PhotoPlaceholderIcon from '../components/PhotoPlaceholderIcon'
import { CATEGORIES } from '../data/posts'
import './WritePage.css'

// 지금은 저장(백엔드) 연동 전이라 제출해도 실제로 저장되지 않는다.
// 화면과 폼 검증만 확인하는 단계.
export default function WritePage() {
  const navigate = useNavigate()
  const [category, setCategory] = useState(CATEGORIES[0])
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [photoFile, setPhotoFile] = useState(null)
  const [photoUrl, setPhotoUrl] = useState(null)
  const [titleError, setTitleError] = useState('')
  const [contentError, setContentError] = useState('')

  useEffect(() => {
    if (!photoFile) {
      setPhotoUrl(null)
      return
    }
    const url = URL.createObjectURL(photoFile)
    setPhotoUrl(url)
    return () => URL.revokeObjectURL(url)
  }, [photoFile])

  function handlePhotoChange(e) {
    const file = e.target.files?.[0]
    if (file) setPhotoFile(file)
  }

  function handleRemovePhoto() {
    setPhotoFile(null)
  }

  function handleSubmit(e) {
    e.preventDefault()

    const nextTitleError = title.trim() ? '' : '제목을 입력해주세요'
    const nextContentError = content.trim() ? '' : '내용을 입력해주세요'
    setTitleError(nextTitleError)
    setContentError(nextContentError)

    if (nextTitleError || nextContentError) return

    // 저장은 다음 단계에서 연동한다. 지금은 화면 확인용.
    window.alert('아직 저장 기능은 연결되지 않았어요. 화면만 확인하는 단계예요.')
  }

  const now = new Date()
  const nowLabel = `${now.getFullYear()}.${String(now.getMonth() + 1).padStart(2, '0')}.${String(
    now.getDate()
  ).padStart(2, '0')}`

  return (
    <main className="write-page">
      <h2 className="write-page__title">의견 쓰기</h2>

      <form className="write-form" onSubmit={handleSubmit} noValidate>
        <div className="write-form__field">
          <span className="write-form__label">분야</span>
          <div className="chip-row">
            {CATEGORIES.map((item) => (
              <button
                key={item}
                type="button"
                className={item === category ? 'chip active' : 'chip'}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="write-form__field">
          <label className="write-form__label" htmlFor="post-title">
            제목
          </label>
          <input
            id="post-title"
            type="text"
            className={titleError ? 'input-text input-text--error' : 'input-text'}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="어떤 불편이나 제안인가요?"
          />
          {titleError && <p className="write-form__error">{titleError}</p>}
        </div>

        <div className="write-form__field">
          <label className="write-form__label" htmlFor="post-content">
            내용
          </label>
          <textarea
            id="post-content"
            className={contentError ? 'input-textarea input-text--error' : 'input-textarea'}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="언제, 어디서, 무슨 일이 있었는지 적어주세요."
          />
          {contentError && <p className="write-form__error">{contentError}</p>}
        </div>

        <div className="write-form__field">
          <span className="write-form__label">사진 (선택, 최대 1장)</span>
          <div className="photo-upload">
            {photoUrl ? (
              <>
                <img src={photoUrl} alt="첨부한 사진 미리보기" />
                <button
                  type="button"
                  className="photo-upload__remove"
                  onClick={handleRemovePhoto}
                  aria-label="사진 삭제"
                >
                  ×
                </button>
              </>
            ) : (
              <label className="photo-upload__empty">
                <PhotoPlaceholderIcon size="28px" />
                <span>사진 추가</span>
                <input type="file" accept="image/*" onChange={handlePhotoChange} hidden />
              </label>
            )}
          </div>
        </div>

        <p className="write-form__meta-note">
          로그인한 사용자 이름과 등록 시각({nowLabel})이 자동으로 채워져요.
        </p>

        <button type="submit" className="btn btn-primary write-form__submit">
          등록하기
        </button>
      </form>
    </main>
  )
}
