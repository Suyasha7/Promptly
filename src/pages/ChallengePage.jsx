import { useState } from 'react'
import { useTheme } from '../lib/ThemeContext'
import Breadcrumb from '../components/Breadcrumb'
import DifficultyBadge from '../components/DifficultyBadge'
import { Play, Lightbulb, MessageCircle } from 'lucide-react'

const challenges = [
  { id: 1, title: 'Explain Like I\'m 5', description: 'Write a prompt that gets the AI to explain blockchain to a 5-year-old.', difficulty: 'beginner', hint: 'Specify the audience age and ask for a simple analogy.' },
  { id: 2, title: 'Structured Code Review', description: 'Ask the AI to review a Python function and provide feedback in a structured format.', difficulty: 'intermediate', hint: 'Define the review format: summary, issues, suggestions.' },
  { id: 3, title: 'Multi-Step Reasoning', description: 'Write a prompt that forces the AI to show step-by-step reasoning for a math problem.', difficulty: 'advanced', hint: 'Use chain-of-thought: "Think step by step before answering."' },
]

export default function ChallengePage() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const [selected, setSelected] = useState(null)
  const [prompt, setPrompt] = useState('')
  const [showHint, setShowHint] = useState(false)

  const active = challenges.find((c) => c.id === selected)

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 24px' }}>
      <Breadcrumb items={[{ label: 'Challenges' }]} />
      <h1 style={{ fontSize: '2.25rem', fontWeight: 800, marginBottom: '8px', color: isDark ? '#F9FAFB' : '#111827' }}>Prompt Challenges</h1>
      <p style={{ fontSize: '16px', color: isDark ? '#9CA3AF' : '#6B7280', marginBottom: '32px', lineHeight: 1.7 }}>Test your prompt engineering skills with hands-on challenges.</p>

      <div className="grid lg:grid-cols-3" style={{ gap: '16px', marginBottom: '32px' }}>
        {challenges.map((c) => (
          <button key={c.id} onClick={() => { setSelected(c.id); setPrompt(''); setShowHint(false) }} style={{ padding: '20px', borderRadius: '10px', border: `1px solid ${selected === c.id ? '#10B981' : isDark ? '#1F2937' : '#E5E7EB'}`, backgroundColor: selected === c.id ? (isDark ? 'rgba(16,185,129,0.08)' : 'rgba(16,185,129,0.05)') : isDark ? '#111827' : '#FFFFFF', cursor: 'pointer', textAlign: 'left', transition: 'border-color 0.15s' }}>
            <div className="flex items-start justify-between" style={{ marginBottom: '8px' }}>
              <h3 style={{ fontSize: '15px', fontWeight: 600, color: isDark ? '#F9FAFB' : '#111827' }}>{c.title}</h3>
              <DifficultyBadge level={c.difficulty} />
            </div>
            <p style={{ fontSize: '13px', color: isDark ? '#9CA3AF' : '#6B7280', lineHeight: 1.5 }}>{c.description}</p>
          </button>
        ))}
      </div>

      {active && (
        <div style={{ borderRadius: '12px', border: `1px solid ${isDark ? '#1F2937' : '#E5E7EB'}`, overflow: 'hidden' }}>
          <div style={{ padding: '16px 20px', backgroundColor: isDark ? '#1E293B' : '#F9FAFB', borderBottom: `1px solid ${isDark ? '#1F2937' : '#E5E7EB'}` }}>
            <h3 style={{ fontSize: '16px', fontWeight: 600, color: isDark ? '#F9FAFB' : '#111827' }}>{active.title}</h3>
            <p style={{ fontSize: '14px', color: isDark ? '#9CA3AF' : '#6B7280', marginTop: '4px' }}>{active.description}</p>
          </div>
          <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder="Write your prompt here..." style={{ width: '100%', minHeight: '180px', padding: '20px', border: 'none', outline: 'none', resize: 'vertical', fontFamily: 'var(--font-mono)', fontSize: '14px', lineHeight: 1.7, backgroundColor: isDark ? '#0F172A' : '#FFFFFF', color: isDark ? '#E2E8F0' : '#111827' }} />
          <div className="flex flex-wrap items-center justify-between" style={{ padding: '12px 20px', backgroundColor: isDark ? '#1E293B' : '#F9FAFB', borderTop: `1px solid ${isDark ? '#1F2937' : '#E5E7EB'}`, gap: '8px' }}>
            <button onClick={() => setShowHint(!showHint)} className="flex items-center" style={{ gap: '6px', padding: '8px 14px', borderRadius: '6px', border: 'none', cursor: 'pointer', fontSize: '13px', fontWeight: 500, backgroundColor: isDark ? '#374151' : '#E5E7EB', color: isDark ? '#E5E7EB' : '#374151' }}><Lightbulb size={14} /> {showHint ? 'Hide' : 'Show'} Hint</button>
            <button className="flex items-center" style={{ gap: '6px', padding: '8px 16px', borderRadius: '6px', border: 'none', cursor: prompt.trim() ? 'pointer' : 'not-allowed', fontSize: '13px', fontWeight: 600, background: prompt.trim() ? 'linear-gradient(135deg, #10B981, #059669)' : isDark ? '#374151' : '#D1D5DB', color: '#fff', opacity: prompt.trim() ? 1 : 0.6 }}><Play size={14} /> Submit</button>
          </div>
          {showHint && (
            <div style={{ padding: '16px 20px', borderTop: `1px solid ${isDark ? '#1F2937' : '#E5E7EB'}`, backgroundColor: isDark ? 'rgba(16,185,129,0.05)' : 'rgba(16,185,129,0.03)' }}>
              <p style={{ fontSize: '14px', color: '#10B981', lineHeight: 1.5 }}>💡 <strong>Hint:</strong> {active.hint}</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
