import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useTheme } from '../lib/ThemeContext'
import { Mail, Lock, User, Github } from 'lucide-react'

export default function SignupPage() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Signup is a demo. No backend connected.')
  }

  const inputStyle = {
    flex: 1, padding: '10px 12px 10px 0', border: 'none',
    outline: 'none', fontSize: '14px', backgroundColor: 'transparent',
    color: isDark ? '#E5E7EB' : '#111827',
  }
  const rowStyle = {
    borderRadius: '8px', overflow: 'hidden',
    border: `1px solid ${isDark ? '#374151' : '#E5E7EB'}`,
    backgroundColor: isDark ? '#0F172A' : '#F9FAFB',
  }
  const iconStyle = { padding: '0 12px', color: isDark ? '#6B7280' : '#9CA3AF' }

  return (
    <div className="flex items-center justify-center" style={{ minHeight: 'calc(100vh - 64px)', padding: '40px 24px' }}>
      <div style={{ width: '100%', maxWidth: '400px', padding: '32px', borderRadius: '16px', border: `1px solid ${isDark ? '#1F2937' : '#E5E7EB'}`, backgroundColor: isDark ? '#111827' : '#FFFFFF' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #10B981, #22D3EE)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
            <span style={{ color: '#fff', fontWeight: 800, fontSize: '20px', fontFamily: 'var(--font-mono)' }}>&gt;_</span>
          </div>
          <h1 style={{ fontSize: '24px', fontWeight: 700, color: isDark ? '#F9FAFB' : '#111827', marginBottom: '4px' }}>Create an account</h1>
          <p style={{ fontSize: '14px', color: isDark ? '#9CA3AF' : '#6B7280' }}>Start your prompt engineering journey</p>
        </div>

        <button style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '10px', borderRadius: '8px', border: `1px solid ${isDark ? '#374151' : '#E5E7EB'}`, backgroundColor: 'transparent', cursor: 'pointer', fontSize: '14px', fontWeight: 500, color: isDark ? '#E5E7EB' : '#374151', marginBottom: '24px' }}>
          <Github size={18} /> Sign up with GitHub
        </button>

        <div className="flex items-center" style={{ gap: '12px', marginBottom: '24px' }}>
          <div style={{ flex: 1, height: '1px', backgroundColor: isDark ? '#1F2937' : '#E5E7EB' }} />
          <span style={{ fontSize: '12px', color: isDark ? '#6B7280' : '#9CA3AF' }}>or</span>
          <div style={{ flex: 1, height: '1px', backgroundColor: isDark ? '#1F2937' : '#E5E7EB' }} />
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: isDark ? '#E5E7EB' : '#374151', marginBottom: '6px' }}>Name</label>
            <div className="flex items-center" style={rowStyle}>
              <span style={iconStyle}><User size={16} /></span>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" style={inputStyle} />
            </div>
          </div>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: isDark ? '#E5E7EB' : '#374151', marginBottom: '6px' }}>Email</label>
            <div className="flex items-center" style={rowStyle}>
              <span style={iconStyle}><Mail size={16} /></span>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" style={inputStyle} />
            </div>
          </div>
          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: isDark ? '#E5E7EB' : '#374151', marginBottom: '6px' }}>Password</label>
            <div className="flex items-center" style={rowStyle}>
              <span style={iconStyle}><Lock size={16} /></span>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" style={inputStyle} />
            </div>
          </div>
          <button type="submit" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: 'none', cursor: 'pointer', fontSize: '14px', fontWeight: 600, color: '#fff', background: 'linear-gradient(135deg, #10B981, #059669)' }}>Create Account</button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '24px', fontSize: '14px', color: isDark ? '#9CA3AF' : '#6B7280' }}>
          Already have an account? <Link to="/login" style={{ color: '#10B981', textDecoration: 'none', fontWeight: 500 }}>Sign in</Link>
        </p>
      </div>
    </div>
  )
}
