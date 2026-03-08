import CopyButton from './CopyButton'
import { useTheme } from '../lib/ThemeContext'

export default function CodeBlock({ children, language = 'text' }) {
  const { theme } = useTheme()
  const code = typeof children === 'string' ? children : String(children)

  return (
    <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
      <div className="flex items-center justify-between" style={{ backgroundColor: '#1E293B', padding: '8px 16px', borderRadius: '8px 8px 0 0', borderBottom: '1px solid #334155' }}>
        <span style={{ fontSize: '12px', fontWeight: 500, color: '#64748B', textTransform: 'uppercase' }}>{language}</span>
        <CopyButton text={code} />
      </div>
      <pre style={{ backgroundColor: '#0F172A', color: '#E2E8F0', padding: '20px', borderRadius: '0 0 8px 8px', overflow: 'auto', fontSize: '14px', lineHeight: 1.6, fontFamily: 'var(--font-mono)', margin: 0 }}>
        <code>{code}</code>
      </pre>
    </div>
  )
}
