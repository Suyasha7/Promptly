import { useTheme } from '../lib/ThemeContext'
import { getAllSections, getLessonsBySection } from '../services/contentService'
import Breadcrumb from '../components/Breadcrumb'
import { Link } from 'react-router-dom'
import { FileText, Clock } from 'lucide-react'

export default function DocsPage() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const sections = getAllSections()

  return (
    <div style={{ maxWidth: '760px', margin: '0 auto', padding: '40px 32px' }}>
      <Breadcrumb items={[{ label: 'Documentation' }]} />
      <h1 style={{ fontSize: '2.25rem', fontWeight: 800, marginBottom: '8px', color: isDark ? '#F9FAFB' : '#111827' }}>Documentation</h1>
      <p style={{ fontSize: '16px', color: isDark ? '#9CA3AF' : '#6B7280', marginBottom: '40px', lineHeight: 1.7 }}>Browse the complete prompt engineering reference guide.</p>

      {sections.map((section) => {
        const lessons = getLessonsBySection(section.id)
        return (
          <div key={section.id} style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '16px', fontWeight: 600, color: '#10B981', marginBottom: '12px' }}>{section.title}</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {lessons.map((lesson) => (
                <Link key={lesson.slug} to={`/topic/${lesson.slug}`} className="flex items-center justify-between" style={{ padding: '14px 16px', borderRadius: '8px', border: `1px solid ${isDark ? '#1F2937' : '#E5E7EB'}`, backgroundColor: isDark ? '#111827' : '#FFFFFF', textDecoration: 'none', transition: 'border-color 0.15s' }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = '#10B981'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = isDark ? '#1F2937' : '#E5E7EB'}>
                  <div className="flex items-center" style={{ gap: '12px' }}>
                    <FileText size={16} style={{ color: isDark ? '#6B7280' : '#9CA3AF' }} />
                    <div>
                      <h3 style={{ fontSize: '14px', fontWeight: 500, color: isDark ? '#E5E7EB' : '#111827' }}>{lesson.title}</h3>
                      <p style={{ fontSize: '13px', color: isDark ? '#6B7280' : '#9CA3AF' }}>{lesson.description}</p>
                    </div>
                  </div>
                  <span className="flex items-center" style={{ gap: '4px', fontSize: '12px', color: isDark ? '#6B7280' : '#9CA3AF', flexShrink: 0 }}><Clock size={12} />{lesson.duration}m</span>
                </Link>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
