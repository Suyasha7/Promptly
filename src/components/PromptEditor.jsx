import { useState } from 'react'
import { useTheme } from '../lib/ThemeContext'
import { Play, RotateCcw } from 'lucide-react'

export default function PromptEditor() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const [prompt, setPrompt] = useState('')
  const [output, setOutput] = useState('')
  const [isRunning, setIsRunning] = useState(false)

  const handleRun = () => {
    if (!prompt.trim()) return
    setIsRunning(true)
    setOutput('')
    setTimeout(() => {
      setOutput(`[Simulated AI Response]\n\nBased on your prompt:\n"${prompt.trim()}"\n\nThis is a simulated response from the AI model. In a production environment, this would connect to an actual LLM API to generate real responses.\n\nYour prompt was ${prompt.length} characters long.`)
      setIsRunning(false)
    }, 1200)
  }

  const handleReset = () => {
    setPrompt('')
    setOutput('')
  }

  return (
    <div className="grid lg:grid-cols-2" style={{ gap: '0', border: `1px solid ${isDark ? '#1F2937' : '#E5E7EB'}`, borderRadius: '12px', overflow: 'hidden' }}>
      {/* Editor panel */}
      <div style={{ borderRight: isDark ? '1px solid #1F2937' : '1px solid #E5E7EB' }}>
        <div className="flex items-center justify-between" style={{ padding: '12px 16px', backgroundColor: isDark ? '#1E293B' : '#F9FAFB', borderBottom: `1px solid ${isDark ? '#1F2937' : '#E5E7EB'}` }}>
          <span style={{ fontSize: '13px', fontWeight: 600, color: isDark ? '#9CA3AF' : '#6B7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Prompt</span>
          <div className="flex items-center" style={{ gap: '8px' }}>
            <button onClick={handleReset} style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '6px 12px', borderRadius: '6px', border: 'none', cursor: 'pointer', fontSize: '13px', fontWeight: 500, backgroundColor: isDark ? '#374151' : '#E5E7EB', color: isDark ? '#9CA3AF' : '#6B7280' }}><RotateCcw size={14} /> Reset</button>
            <button onClick={handleRun} disabled={isRunning || !prompt.trim()} style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '6px 16px', borderRadius: '6px', border: 'none', cursor: prompt.trim() && !isRunning ? 'pointer' : 'not-allowed', fontSize: '13px', fontWeight: 600, background: prompt.trim() && !isRunning ? 'linear-gradient(135deg, #10B981, #059669)' : isDark ? '#374151' : '#D1D5DB', color: '#fff', opacity: prompt.trim() && !isRunning ? 1 : 0.6 }}><Play size={14} /> {isRunning ? 'Running...' : 'Run'}</button>
          </div>
        </div>
        <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder="Type your prompt here..." style={{ width: '100%', minHeight: '300px', padding: '20px', border: 'none', outline: 'none', resize: 'vertical', fontFamily: 'var(--font-mono)', fontSize: '14px', lineHeight: 1.7, backgroundColor: isDark ? '#0F172A' : '#FFFFFF', color: isDark ? '#E2E8F0' : '#111827' }} />
      </div>

      {/* Output panel */}
      <div>
        <div style={{ padding: '12px 16px', backgroundColor: isDark ? '#1E293B' : '#F9FAFB', borderBottom: `1px solid ${isDark ? '#1F2937' : '#E5E7EB'}` }}>
          <span style={{ fontSize: '13px', fontWeight: 600, color: isDark ? '#9CA3AF' : '#6B7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Output</span>
        </div>
        <div style={{ minHeight: '300px', padding: '20px', fontFamily: 'var(--font-mono)', fontSize: '14px', lineHeight: 1.7, backgroundColor: isDark ? '#0B1220' : '#F9FAFB', color: isDark ? '#E2E8F0' : '#111827', whiteSpace: 'pre-wrap' }}>
          {isRunning ? (
            <div className="flex items-center" style={{ gap: '8px', color: '#10B981' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10B981', animation: 'pulse 1s infinite' }} />
              Generating response...
            </div>
          ) : output ? output : (
            <span style={{ color: isDark ? '#4B5563' : '#9CA3AF' }}>Output will appear here after running your prompt...</span>
          )}
        </div>
      </div>
      <style>{`@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }`}</style>
    </div>
  )
}
