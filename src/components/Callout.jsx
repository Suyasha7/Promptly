import { useTheme } from '../lib/ThemeContext'
import { Info, AlertTriangle, Lightbulb, AlertCircle } from 'lucide-react'

const variants = {
  tip: { icon: Lightbulb, color: '#10B981', bgDark: 'rgba(16,185,129,0.08)', bgLight: 'rgba(16,185,129,0.06)' },
  warning: { icon: AlertTriangle, color: '#F59E0B', bgDark: 'rgba(245,158,11,0.08)', bgLight: 'rgba(245,158,11,0.06)' },
  important: { icon: AlertCircle, color: '#EF4444', bgDark: 'rgba(239,68,68,0.08)', bgLight: 'rgba(239,68,68,0.06)' },
  example: { icon: Info, color: '#22D3EE', bgDark: 'rgba(34,211,238,0.08)', bgLight: 'rgba(34,211,238,0.06)' },
}

export default function Callout({ type = 'tip', title, children }) {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const variant = variants[type] || variants.tip
  const Icon = variant.icon

  return (
    <div style={{ display: 'flex', gap: '12px', padding: '16px', borderRadius: '8px', borderLeft: `4px solid ${variant.color}`, backgroundColor: isDark ? variant.bgDark : variant.bgLight, marginBottom: '1.5rem' }}>
      <Icon size={20} style={{ color: variant.color, flexShrink: 0, marginTop: '2px' }} />
      <div>
        {title && <p style={{ fontSize: '14px', fontWeight: 600, color: variant.color, marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.03em' }}>{title}</p>}
        <div style={{ fontSize: '14px', color: isDark ? '#E5E7EB' : '#374151', lineHeight: 1.6 }}>{children}</div>
      </div>
    </div>
  )
}
