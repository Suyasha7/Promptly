import { useTheme } from '../lib/ThemeContext'

export default function ProgressBar({ current = 0, total = 1, label }) {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const percentage = total > 0 ? Math.round((current / total) * 100) : 0

  return (
    <div style={{ marginBottom: '16px' }}>
      {label && <div className="flex items-center justify-between" style={{ marginBottom: '6px' }}>
        <span style={{ fontSize: '13px', fontWeight: 500, color: isDark ? '#E5E7EB' : '#374151' }}>{label}</span>
        <span style={{ fontSize: '13px', fontWeight: 600, color: '#10B981' }}>{current}/{total}</span>
      </div>}
      <div style={{ width: '100%', height: '6px', borderRadius: '3px', backgroundColor: isDark ? '#1F2937' : '#E5E7EB', overflow: 'hidden' }}>
        <div style={{ width: `${percentage}%`, height: '100%', borderRadius: '3px', background: 'linear-gradient(90deg, #10B981, #22D3EE)', transition: 'width 0.3s ease' }} />
      </div>
    </div>
  )
}
