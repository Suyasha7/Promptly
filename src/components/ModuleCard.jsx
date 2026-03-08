import { Link } from 'react-router-dom'
import { useTheme } from '../lib/ThemeContext'
import { Clock, BookOpen } from 'lucide-react'
import DifficultyBadge from './DifficultyBadge'

export default function ModuleCard({ title, description, slug, duration, difficulty, lessonCount }) {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <Link to={`/topic/${slug}`} style={{ display: 'block', padding: '24px', borderRadius: '12px', border: `1px solid ${isDark ? '#1F2937' : '#E5E7EB'}`, backgroundColor: isDark ? '#1F2937' : '#FFFFFF', textDecoration: 'none', transition: 'transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease' }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = isDark ? '0 8px 24px rgba(0,0,0,0.3)' : '0 8px 24px rgba(0,0,0,0.08)'; e.currentTarget.style.borderColor = '#10B981' }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = isDark ? '#1F2937' : '#E5E7EB' }}>
      <div className="flex items-start justify-between" style={{ marginBottom: '12px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: 600, color: isDark ? '#F9FAFB' : '#111827', lineHeight: 1.3 }}>{title}</h3>
        {difficulty && <DifficultyBadge level={difficulty} />}
      </div>
      <p style={{ fontSize: '14px', color: isDark ? '#9CA3AF' : '#6B7280', lineHeight: 1.6, marginBottom: '16px' }}>{description}</p>
      <div className="flex items-center" style={{ gap: '16px' }}>
        {duration && <span className="flex items-center" style={{ gap: '4px', fontSize: '13px', color: isDark ? '#6B7280' : '#9CA3AF' }}><Clock size={14} />{duration} min</span>}
        {lessonCount && <span className="flex items-center" style={{ gap: '4px', fontSize: '13px', color: isDark ? '#6B7280' : '#9CA3AF' }}><BookOpen size={14} />{lessonCount} lessons</span>}
      </div>
    </Link>
  )
}
