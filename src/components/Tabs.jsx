import { useState } from 'react'
import { useTheme } from '../lib/ThemeContext'

export default function Tabs({ tabs = [] }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <div className="flex" style={{ gap: '0', borderBottom: `1px solid ${isDark ? '#1F2937' : '#E5E7EB'}`, marginBottom: '16px' }}>
        {tabs.map((tab, i) => (
          <button key={i} onClick={() => setActiveIndex(i)} style={{ padding: '10px 20px', fontSize: '14px', fontWeight: 500, background: 'none', border: 'none', cursor: 'pointer', borderBottom: i === activeIndex ? '2px solid #10B981' : '2px solid transparent', color: i === activeIndex ? '#10B981' : isDark ? '#9CA3AF' : '#6B7280', transition: 'color 0.15s ease' }}>
            {tab.label}
          </button>
        ))}
      </div>
      <div>{tabs[activeIndex]?.content}</div>
    </div>
  )
}
