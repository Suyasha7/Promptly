import { Link } from 'react-router-dom'
import { useTheme } from '../lib/ThemeContext'
import { ChevronRight, Home } from 'lucide-react'

export default function Breadcrumb({ items = [] }) {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <nav className="flex items-center flex-wrap" style={{ gap: '6px', marginBottom: '24px', fontSize: '14px' }} aria-label="Breadcrumb">
      <Link to="/" style={{ color: isDark ? '#9CA3AF' : '#6B7280', textDecoration: 'none', display: 'flex', alignItems: 'center' }}
        onMouseEnter={(e) => e.currentTarget.style.color = '#10B981'}
        onMouseLeave={(e) => e.currentTarget.style.color = isDark ? '#9CA3AF' : '#6B7280'}>
        <Home size={14} />
      </Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center" style={{ gap: '6px' }}>
          <ChevronRight size={14} style={{ color: isDark ? '#4B5563' : '#D1D5DB' }} />
          {item.href ? (
            <Link to={item.href} style={{ color: isDark ? '#9CA3AF' : '#6B7280', textDecoration: 'none' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#10B981'}
              onMouseLeave={(e) => e.currentTarget.style.color = isDark ? '#9CA3AF' : '#6B7280'}>
              {item.label}
            </Link>
          ) : (
            <span style={{ color: isDark ? '#E5E7EB' : '#111827', fontWeight: 500 }}>{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
