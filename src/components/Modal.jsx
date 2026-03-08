import { useTheme } from '../lib/ThemeContext'
import { X } from 'lucide-react'

export default function Modal({ isOpen, onClose, title, children }) {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center" style={{ padding: '24px' }}>
      <div className="fixed inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }} onClick={onClose} />
      <div className="relative w-full" style={{ maxWidth: '520px', borderRadius: '12px', backgroundColor: isDark ? '#1F2937' : '#FFFFFF', border: `1px solid ${isDark ? '#374151' : '#E5E7EB'}`, boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)' }}>
        <div className="flex items-center justify-between" style={{ padding: '16px 20px', borderBottom: `1px solid ${isDark ? '#374151' : '#E5E7EB'}` }}>
          <h3 style={{ fontSize: '16px', fontWeight: 600, color: isDark ? '#F9FAFB' : '#111827' }}>{title}</h3>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: isDark ? '#9CA3AF' : '#6B7280', padding: '4px' }} aria-label="Close modal"><X size={18} /></button>
        </div>
        <div style={{ padding: '20px' }}>{children}</div>
      </div>
    </div>
  )
}
