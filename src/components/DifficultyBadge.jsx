const levels = {
  beginner: { label: 'Beginner', color: '#10B981', bg: 'rgba(16, 185, 129, 0.15)' },
  intermediate: { label: 'Intermediate', color: '#F59E0B', bg: 'rgba(245, 158, 11, 0.15)' },
  advanced: { label: 'Advanced', color: '#EF4444', bg: 'rgba(239, 68, 68, 0.15)' },
}

export default function DifficultyBadge({ level = 'beginner' }) {
  const config = levels[level] || levels.beginner
  return (
    <span style={{ display: 'inline-block', padding: '3px 10px', borderRadius: '9999px', fontSize: '12px', fontWeight: 600, color: config.color, backgroundColor: config.bg, letterSpacing: '0.02em', flexShrink: 0 }}>
      {config.label}
    </span>
  )
}
