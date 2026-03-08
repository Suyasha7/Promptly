import { useParams, Navigate, Link } from 'react-router-dom'
import { useRef, useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import Prism from 'prismjs'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-json'
import { getLessonBySlug, getLessonNavigation } from '../services/contentService'
import { useTheme } from '../lib/ThemeContext'
import ScrollProgress from '../components/ScrollProgress'
import Breadcrumb from '../components/Breadcrumb'
import DifficultyBadge from '../components/DifficultyBadge'
import { Clock, ChevronLeft, ChevronRight } from 'lucide-react'

function LoadingSkeleton() {
  return (
    <div style={{ padding: '48px 32px', maxWidth: '760px', margin: '0 auto' }}>
      <div className="skeleton" style={{ height: '20px', width: '200px', marginBottom: '24px' }} />
      <div className="skeleton" style={{ height: '40px', width: '70%', marginBottom: '16px' }} />
      <div className="skeleton" style={{ height: '16px', width: '30%', marginBottom: '40px' }} />
      <div className="skeleton" style={{ height: '16px', width: '100%', marginBottom: '12px' }} />
      <div className="skeleton" style={{ height: '16px', width: '95%', marginBottom: '12px' }} />
      <div className="skeleton" style={{ height: '16px', width: '88%', marginBottom: '24px' }} />
      <div className="skeleton" style={{ height: '140px', width: '100%', marginBottom: '24px' }} />
      <div className="skeleton" style={{ height: '16px', width: '100%', marginBottom: '12px' }} />
      <div className="skeleton" style={{ height: '16px', width: '80%' }} />
    </div>
  )
}

export default function LessonPage() {
  const { slug } = useParams()
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const articleRef = useRef(null)
  const [isLoading, setIsLoading] = useState(true)
  const lesson = getLessonBySlug(slug)
  const { previous, next } = getLessonNavigation(slug)

  useEffect(() => { setIsLoading(true) }, [slug])

  useEffect(() => {
    if (lesson) {
      const t = setTimeout(() => { Prism.highlightAll(); setIsLoading(false) }, 80)
      return () => clearTimeout(t)
    }
  }, [slug, lesson])

  useEffect(() => { articleRef.current?.scrollTo(0, 0) }, [slug])

  if (!lesson) return <Navigate to="/404" replace />

  const sectionTitle = lesson.module?.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())

  return (
    <>
      <ScrollProgress containerRef={articleRef} />
      <div ref={articleRef} className="overflow-y-auto" style={{ height: 'calc(100vh - 64px)', scrollBehavior: 'smooth' }}>
        {isLoading && <LoadingSkeleton />}
        <article style={{ maxWidth: '760px', margin: '0 auto', padding: '40px 32px 80px', display: isLoading ? 'none' : 'block' }}>
          <Breadcrumb items={[{ label: 'Modules', href: '/modules' }, { label: sectionTitle, href: '/modules' }, { label: lesson.title }]} />
          <div className="flex flex-wrap items-center" style={{ gap: '12px', marginBottom: '32px' }}>
            {lesson.difficulty && <DifficultyBadge level={lesson.difficulty} />}
            <span className="flex items-center" style={{ gap: '4px', fontSize: '13px', color: isDark ? '#6B7280' : '#9CA3AF' }}><Clock size={14} />{lesson.duration} min read</span>
          </div>
          <div className="prose" style={{ maxWidth: '100%' }}>
            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{lesson.content}</ReactMarkdown>
          </div>

          {/* Prev/Next navigation */}
          <nav className="flex items-center justify-between" style={{ marginTop: '48px', paddingTop: '24px', borderTop: `1px solid ${isDark ? '#1F2937' : '#E5E7EB'}`, gap: '16px' }} aria-label="Lesson navigation">
            {previous ? (
              <Link to={`/topic/${previous.slug}`} className="flex flex-col" style={{ padding: '12px 16px', borderRadius: '8px', border: `1px solid ${isDark ? '#1F2937' : '#E5E7EB'}`, textDecoration: 'none', maxWidth: '50%', transition: 'border-color 0.15s' }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = '#10B981'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = isDark ? '#1F2937' : '#E5E7EB'}>
                <span className="flex items-center" style={{ gap: '4px', fontSize: '12px', color: isDark ? '#9CA3AF' : '#6B7280', fontWeight: 500 }}><ChevronLeft size={14} /> Previous</span>
                <span style={{ fontSize: '14px', color: '#10B981', fontWeight: 500, marginTop: '2px' }}>{previous.title}</span>
              </Link>
            ) : <div />}
            {next ? (
              <Link to={`/topic/${next.slug}`} className="flex flex-col items-end" style={{ padding: '12px 16px', borderRadius: '8px', border: `1px solid ${isDark ? '#1F2937' : '#E5E7EB'}`, textDecoration: 'none', maxWidth: '50%', marginLeft: 'auto', transition: 'border-color 0.15s' }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = '#10B981'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = isDark ? '#1F2937' : '#E5E7EB'}>
                <span className="flex items-center" style={{ gap: '4px', fontSize: '12px', color: isDark ? '#9CA3AF' : '#6B7280', fontWeight: 500 }}>Next <ChevronRight size={14} /></span>
                <span style={{ fontSize: '14px', color: '#10B981', fontWeight: 500, marginTop: '2px' }}>{next.title}</span>
              </Link>
            ) : <div />}
          </nav>
        </article>
      </div>
    </>
  )
}
