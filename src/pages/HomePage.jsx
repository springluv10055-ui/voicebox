import { useMemo, useState } from 'react'
import Hero from '../components/Hero'
import StatusFilterBar from '../components/StatusFilterBar'
import CategoryChips from '../components/CategoryChips'
import PostGrid from '../components/PostGrid'
import { POSTS, CATEGORIES } from '../data/posts'
import './HomePage.css'

export default function HomePage() {
  const [statusFilter, setStatusFilter] = useState('all')
  const [categoryFilter, setCategoryFilter] = useState('all')

  const filteredPosts = useMemo(() => {
    return POSTS.filter((post) => {
      const statusMatch = statusFilter === 'all' || post.status === statusFilter
      const categoryMatch =
        categoryFilter === 'all' || post.category === categoryFilter
      return statusMatch && categoryMatch
    })
  }, [statusFilter, categoryFilter])

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
        <PostGrid posts={filteredPosts} />
      </section>
    </main>
  )
}
