import { NavLink, useLocation } from 'react-router-dom'
import { getSidebarNavigation } from '../lib/navigation'
import { useTheme } from '../lib/ThemeContext'
import { ChevronRight, X } from 'lucide-react'
import { useState } from 'react'

export default function Sidebar({ isOpen, onClose }) {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const location = useLocation()
  const navigation = getSidebarNavigation()
  const [expanded, setExpanded] = useState(() => new Set(navigation.map((s) => s.id)))

  const currentSlug = location.pathname.startsWith('/topic/') ? location.pathname.split('/topic/')[1] : null

  function toggleSection(id) {
    setExpanded((prev) => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n })
  }

  const sidebarContent = (
    <nav style={{ padding: '16px 0' }} aria-label="Lesson navigation">
      {navigation.map((section) => (
        <div key={section.id} style={{ marginBottom: '4px' }}>
          <button onClick={() => toggleSection(section.id)} className="flex items-center justify-between w-full text-left transition-colors" style={{ padding: '8px 20px', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: isDark ? '#9CA3AF' : '#6B7280', background: 'none', border: 'none', cursor: 'pointer' }}>
            <span>{section.title}</span>
            <ChevronRight size={14} style={{ transform: expanded.has(section.id) ? 'rotate(90deg)' : 'rotate(0)', transition: 'transform 0.2s ease' }} />
          </button>
          {expanded.has(section.id) && (
            <ul style={{ listStyle: 'none', padding: '0 12px', margin: '2px 0 8px 0' }}>
              {section.lessons.map((lesson) => {
                const isActive = currentSlug === lesson.slug
                return (
                  <li key={lesson.slug}>
                    <NavLink to={`/topic/${lesson.slug}`} onClick={onClose} style={{ display: 'block', padding: '7px 12px', fontSize: '14px', fontWeight: isActive ? 500 : 400, color: isActive ? '#10B981' : isDark ? '#9CA3AF' : '#6B7280', backgroundColor: isActive ? (isDark ? 'rgba(16, 185, 129, 0.1)' : 'rgba(16, 185, 129, 0.08)') : 'transparent', borderRadius: '6px', textDecoration: 'none', lineHeight: '1.5', borderLeft: isActive ? '2px solid #10B981' : '2px solid transparent' }}
                      onMouseEnter={(e) => { if (!isActive) { e.currentTarget.style.color = isDark ? '#E5E7EB' : '#111827'; e.currentTarget.style.backgroundColor = isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)' } }}
                      onMouseLeave={(e) => { if (!isActive) { e.currentTarget.style.color = isDark ? '#9CA3AF' : '#6B7280'; e.currentTarget.style.backgroundColor = 'transparent' } }}
                    >{lesson.title}</NavLink>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      ))}
    </nav>
  )

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:block flex-shrink-0 overflow-y-auto" style={{ width: '260px', position: 'sticky', top: '64px', height: 'calc(100vh - 64px)', backgroundColor: isDark ? '#111827' : '#FFFFFF', borderRight: `1px solid ${isDark ? '#1F2937' : '#E5E7EB'}` }}>
        {sidebarContent}
      </aside>

      {/* Mobile overlay */}
      {isOpen && (
        <>
          <div className="fixed inset-0 z-50 lg:hidden" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }} onClick={onClose} />
          <aside className="fixed top-0 left-0 z-50 h-full overflow-y-auto lg:hidden" style={{ width: '280px', backgroundColor: isDark ? '#111827' : '#FFFFFF', boxShadow: '4px 0 24px rgba(0, 0, 0, 0.3)', animation: 'slideIn 0.2s ease-out' }}>
            <div className="flex items-center justify-between" style={{ height: '64px', padding: '0 20px', borderBottom: `1px solid ${isDark ? '#1F2937' : '#E5E7EB'}` }}>
              <span style={{ fontSize: '16px', fontWeight: 700, color: isDark ? '#F9FAFB' : '#111827' }}>Navigation</span>
              <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: isDark ? '#9CA3AF' : '#6B7280', padding: '4px' }} aria-label="Close"><X size={20} /></button>
            </div>
            {sidebarContent}
          </aside>
        </>
      )}
      <style>{`@keyframes slideIn { from { transform: translateX(-100%); } to { transform: translateX(0); } }`}</style>
    </>
  )
}
