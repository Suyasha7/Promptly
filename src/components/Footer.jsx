import { useTheme } from '../lib/ThemeContext'
import { Github } from 'lucide-react'

const footerSections = [
  { title: 'Product', links: [{ label: 'Learn', href: '#/modules' }, { label: 'Playground', href: '#/playground' }, { label: 'Challenges', href: '#/challenges' }] },
  { title: 'Docs', links: [{ label: 'Documentation', href: '#/docs' }, { label: 'Getting Started', href: '#/modules' }] },
  { title: 'Community', links: [{ label: 'GitHub', href: 'https://github.com', external: true }, { label: 'Discussions', href: '#' }] },
]

export default function Footer() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <footer style={{ borderTop: `1px solid ${isDark ? '#1F2937' : '#E5E7EB'}`, backgroundColor: isDark ? '#111827' : '#FFFFFF' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 24px 24px' }}>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '32px', marginBottom: '32px' }}>
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 style={{ fontSize: '14px', fontWeight: 600, color: isDark ? '#F9FAFB' : '#111827', marginBottom: '12px' }}>{section.title}</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {section.links.map((link) => (
                  <li key={link.label} style={{ marginBottom: '8px' }}>
                    <a href={link.href} {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} style={{ fontSize: '14px', color: isDark ? '#9CA3AF' : '#6B7280', textDecoration: 'none', transition: 'color 0.15s' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#10B981'}
                      onMouseLeave={(e) => e.currentTarget.style.color = isDark ? '#9CA3AF' : '#6B7280'}
                    >{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-between" style={{ paddingTop: '24px', borderTop: `1px solid ${isDark ? '#1F2937' : '#E5E7EB'}`, gap: '12px' }}>
          <p style={{ fontSize: '13px', color: isDark ? '#6B7280' : '#9CA3AF' }}>© {new Date().getFullYear()} Promptly — Built with React + Vite + TailwindCSS</p>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ color: isDark ? '#6B7280' : '#9CA3AF' }}><Github size={18} /></a>
        </div>
      </div>
    </footer>
  )
}
