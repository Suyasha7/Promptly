import { useTheme } from '../lib/ThemeContext'
import { getAllSections, getAllLessons, getLessonsBySection } from '../services/contentService'
import ProgressBar from '../components/ProgressBar'
import Breadcrumb from '../components/Breadcrumb'
import { Link } from 'react-router-dom'
import { BookOpen, Target, TrendingUp, Clock } from 'lucide-react'

export default function DashboardPage() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const sections = getAllSections()
  const allLessons = getAllLessons()
  const totalLessons = allLessons.length

  const stats = [
    { icon: BookOpen, label: 'Total Lessons', value: totalLessons, color: '#10B981' },
    { icon: Target, label: 'Challenges', value: 3, color: '#22D3EE' },
    { icon: TrendingUp, label: 'Modules', value: sections.length, color: '#F59E0B' },
    { icon: Clock, label: 'Est. Time', value: `${allLessons.reduce((a, l) => a + (l.duration || 0), 0)} min`, color: '#EF4444' },
  ]

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 24px' }}>
      <Breadcrumb items={[{ label: 'Dashboard' }]} />
      <h1 style={{ fontSize: '2.25rem', fontWeight: 800, marginBottom: '8px', color: isDark ? '#F9FAFB' : '#111827' }}>Dashboard</h1>
      <p style={{ fontSize: '16px', color: isDark ? '#9CA3AF' : '#6B7280', marginBottom: '32px' }}>Track your learning progress and find what to study next.</p>

      {/* Stats grid */}
      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', marginBottom: '40px' }}>
        {stats.map((s) => {
          const Icon = s.icon
          return (
            <div key={s.label} style={{ padding: '20px', borderRadius: '12px', border: `1px solid ${isDark ? '#1F2937' : '#E5E7EB'}`, backgroundColor: isDark ? '#111827' : '#FFFFFF' }}>
              <Icon size={20} style={{ color: s.color, marginBottom: '8px' }} />
              <p style={{ fontSize: '24px', fontWeight: 700, color: isDark ? '#F9FAFB' : '#111827' }}>{s.value}</p>
              <p style={{ fontSize: '13px', color: isDark ? '#9CA3AF' : '#6B7280' }}>{s.label}</p>
            </div>
          )
        })}
      </div>

      {/* Module progress */}
      <h2 style={{ fontSize: '18px', fontWeight: 600, color: isDark ? '#F9FAFB' : '#111827', marginBottom: '20px' }}>Module Progress</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
        {sections.map((section) => {
          const lessons = getLessonsBySection(section.id)
          return (
            <div key={section.id} style={{ padding: '20px', borderRadius: '10px', border: `1px solid ${isDark ? '#1F2937' : '#E5E7EB'}`, backgroundColor: isDark ? '#111827' : '#FFFFFF' }}>
              <ProgressBar current={0} total={lessons.length} label={section.title} />
            </div>
          )
        })}
      </div>

      {/* Recommended */}
      <h2 style={{ fontSize: '18px', fontWeight: 600, color: isDark ? '#F9FAFB' : '#111827', marginBottom: '20px' }}>Recommended Next</h2>
      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '16px' }}>
        {allLessons.slice(0, 3).map((lesson) => (
          <Link key={lesson.slug} to={`/topic/${lesson.slug}`} style={{ display: 'block', padding: '16px', borderRadius: '8px', border: `1px solid ${isDark ? '#1F2937' : '#E5E7EB'}`, backgroundColor: isDark ? '#1F2937' : '#FFFFFF', textDecoration: 'none', transition: 'border-color 0.15s' }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = '#10B981'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = isDark ? '#1F2937' : '#E5E7EB'}>
            <h3 style={{ fontSize: '15px', fontWeight: 600, color: isDark ? '#F9FAFB' : '#111827', marginBottom: '4px' }}>{lesson.title}</h3>
            <p style={{ fontSize: '13px', color: isDark ? '#6B7280' : '#9CA3AF' }}>{lesson.duration} min read</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
