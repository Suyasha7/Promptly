import { Link } from 'react-router-dom'
import { useTheme } from '../lib/ThemeContext'

export default function NotFoundPage() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <div className="flex flex-col items-center justify-center" style={{ minHeight: 'calc(100vh - 64px - 73px)', padding: '60px 24px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '6rem', fontWeight: 800, lineHeight: 1, marginBottom: '16px', background: 'linear-gradient(135deg, #10B981, #22D3EE)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>404</h1>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: isDark ? '#F9FAFB' : '#111827', marginBottom: '12px' }}>Page not found</h2>
      <p style={{ fontSize: '16px', color: isDark ? '#9CA3AF' : '#6B7280', marginBottom: '32px', maxWidth: '400px' }}>The page you are looking for does not exist or has been moved.</p>
      <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', borderRadius: '8px', background: 'linear-gradient(135deg, #10B981, #059669)', color: '#fff', fontSize: '14px', fontWeight: 600, textDecoration: 'none' }}>← Back to Home</Link>
    </div>
  )
}
