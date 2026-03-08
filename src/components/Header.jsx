import { Link, NavLink } from 'react-router-dom'
import { useTheme } from '../lib/ThemeContext'
import { Sun, Moon, Github, Menu, X } from 'lucide-react'
import { useState } from 'react'

const navLinks = [
  { to: '/modules', label: 'Learn' },
  { to: '/playground', label: 'Playground' },
  { to: '/challenges', label: 'Practice' },
  { to: '/docs', label: 'Docs' },
]

export default function Header() {
  const { theme, toggleTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isDark = theme === 'dark'

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-md"
      style={{
        height: '64px',
        borderBottom: `1px solid ${isDark ? '#1F2937' : '#E5E7EB'}`,
        backgroundColor: isDark ? 'rgba(11, 18, 32, 0.9)' : 'rgba(255, 255, 255, 0.9)',
      }}
    >
      <div className="flex items-center justify-between h-full" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 24px' }}>
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2" style={{ textDecoration: 'none' }}>
          <div className="flex items-center justify-center rounded-lg" style={{ width: '32px', height: '32px', background: 'linear-gradient(135deg, #10B981, #22D3EE)' }}>
            <span style={{ color: '#fff', fontWeight: 800, fontSize: '16px', fontFamily: 'var(--font-mono)' }}>&gt;_</span>
          </div>
          <span style={{ fontSize: '20px', fontWeight: 700, color: isDark ? '#F9FAFB' : '#111827', letterSpacing: '-0.025em' }}>Promptly</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center" style={{ gap: '8px' }}>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="transition-colors"
              style={({ isActive }) => ({
                padding: '8px 16px',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: 500,
                textDecoration: 'none',
                color: isActive ? '#10B981' : isDark ? '#9CA3AF' : '#6B7280',
                backgroundColor: isActive ? (isDark ? 'rgba(16, 185, 129, 0.1)' : 'rgba(16, 185, 129, 0.08)') : 'transparent',
              })}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Right section */}
        <div className="flex items-center" style={{ gap: '8px' }}>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hidden sm:flex items-center justify-center rounded-lg transition-colors" style={{ width: '36px', height: '36px', color: isDark ? '#9CA3AF' : '#6B7280' }}
            onMouseEnter={(e) => e.currentTarget.style.color = isDark ? '#E5E7EB' : '#111827'}
            onMouseLeave={(e) => e.currentTarget.style.color = isDark ? '#9CA3AF' : '#6B7280'}
          >
            <Github size={20} />
          </a>

          <button onClick={toggleTheme} aria-label="Toggle theme" className="flex items-center justify-center rounded-lg transition-colors" style={{ width: '36px', height: '36px', background: 'none', border: 'none', cursor: 'pointer', color: isDark ? '#9CA3AF' : '#6B7280' }}
            onMouseEnter={(e) => e.currentTarget.style.color = isDark ? '#E5E7EB' : '#111827'}
            onMouseLeave={(e) => e.currentTarget.style.color = isDark ? '#9CA3AF' : '#6B7280'}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <Link to="/login" className="hidden sm:inline-flex items-center transition-colors" style={{ padding: '8px 16px', borderRadius: '6px', fontSize: '14px', fontWeight: 500, textDecoration: 'none', color: isDark ? '#9CA3AF' : '#6B7280' }}>Login</Link>

          <Link to="/signup" className="hidden sm:inline-flex items-center" style={{ padding: '8px 16px', borderRadius: '8px', fontSize: '14px', fontWeight: 600, textDecoration: 'none', color: '#fff', background: 'linear-gradient(135deg, #10B981, #059669)', boxShadow: '0 2px 8px rgba(16, 185, 129, 0.3)' }}>Sign Up</Link>

          {/* Mobile menu button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="flex lg:hidden items-center justify-center rounded-lg" style={{ width: '36px', height: '36px', background: 'none', border: 'none', cursor: 'pointer', color: isDark ? '#9CA3AF' : '#6B7280' }} aria-label="Toggle menu">
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden" style={{ backgroundColor: isDark ? '#111827' : '#FFFFFF', borderBottom: `1px solid ${isDark ? '#1F2937' : '#E5E7EB'}`, padding: '16px 24px' }}>
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} onClick={() => setMobileMenuOpen(false)} style={({ isActive }) => ({ display: 'block', padding: '10px 0', fontSize: '15px', fontWeight: 500, textDecoration: 'none', color: isActive ? '#10B981' : isDark ? '#E5E7EB' : '#111827' })}>
              {link.label}
            </NavLink>
          ))}
          <div className="flex items-center" style={{ gap: '12px', marginTop: '16px', paddingTop: '16px', borderTop: `1px solid ${isDark ? '#1F2937' : '#E5E7EB'}` }}>
            <Link to="/login" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '14px', fontWeight: 500, textDecoration: 'none', color: isDark ? '#9CA3AF' : '#6B7280' }}>Login</Link>
            <Link to="/signup" onClick={() => setMobileMenuOpen(false)} style={{ padding: '8px 16px', borderRadius: '8px', fontSize: '14px', fontWeight: 600, textDecoration: 'none', color: '#fff', background: 'linear-gradient(135deg, #10B981, #059669)' }}>Sign Up</Link>
          </div>
        </div>
      )}
    </header>
  )
}
