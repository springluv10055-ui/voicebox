import { useEffect, useMemo, useState } from 'react'
import Hero from '../components/Hero'
import StatusFilterBar from '../components/StatusFilterBar'
import CategoryChips from '../components/CategoryChips'
import PostGrid from '../components/PostGrid'
import { CATEGORIES } from '../data/posts'
import { fetchPosts } from '../lib/postsApi'
import './HomePage.css'

export default function HomePage() {
  const [statusFilter, setStatusFilter] = useState('all')
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    let cancelled = false

    async function load() {
      setLoading(true)
      setErrorMessage('')
      try {
        const data = await fetchPosts()
        if (!cancelled) setPosts(data)
      } catch (err) {
        if (!cancelled) setErrorMessage('의견 목록을 불러오지 못했어요. 잠시 후 다시 시도해주세요.')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [])

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const statusMatch = statusFilter === 'all' || post.status === statusFilter
      const categoryMatch =
        categoryFilter === 'all' || post.category === categoryFilter
      return statusMatch && categoryMatch
    })
  }, [posts, statusFilter, categoryFilter])

  return (
    <main>
      <Hero />

      <section className="home-filters">
        <StatusFilterBar value={statusFilter} onChange={setStatusFilter} />
        <CategoryChips
          categories={CATEGORIES}
          value={categoryFilter}
          onChange={setCategoryFilter}
        />
      </section>

      <section className="home-list">
        {loading && <p className="home-list__status">불러오는 중...</p>}
        {!loading && errorMessage && (
          <p className="home-list__status home-list__status--error">{errorMessage}</p>
        )}
        {!loading && !errorMessage && <PostGrid posts={filteredPosts} />}
      </section>
    </main>
  )
}
