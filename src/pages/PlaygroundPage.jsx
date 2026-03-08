import { useTheme } from '../lib/ThemeContext'
import PromptEditor from '../components/PromptEditor'
import Breadcrumb from '../components/Breadcrumb'

const examplePrompts = [
  { title: 'Explain a Concept', prompt: 'Explain machine learning to a 10-year-old using an analogy with cooking.' },
  { title: 'Code Generation', prompt: 'Write a Python function that checks if a string is a palindrome. Include comments and type hints.' },
  { title: 'Structured Output', prompt: 'List 5 benefits of renewable energy.\n\nFormat:\n- Bullet points\n- Include one sentence explanation per point' },
  { title: 'Role Prompting', prompt: 'You are a senior software engineer reviewing code.\n\nReview this function and suggest improvements:\n\ndef add(a, b):\n  return a + b' },
]

export default function PlaygroundPage() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 24px' }}>
      <Breadcrumb items={[{ label: 'Playground' }]} />
      <h1 style={{ fontSize: '2.25rem', fontWeight: 800, marginBottom: '8px', color: isDark ? '#F9FAFB' : '#111827' }}>Prompt Playground</h1>
      <p style={{ fontSize: '16px', color: isDark ? '#9CA3AF' : '#6B7280', marginBottom: '32px', lineHeight: 1.7 }}>Experiment with prompts in an interactive editor. Write, run, and refine your prompts.</p>

      <PromptEditor />

      {/* Example prompts */}
      <div style={{ marginTop: '48px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 600, color: isDark ? '#F9FAFB' : '#111827', marginBottom: '20px' }}>Example Prompts</h2>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '16px' }}>
          {examplePrompts.map((ex) => (
            <div key={ex.title} style={{ padding: '16px', borderRadius: '8px', border: `1px solid ${isDark ? '#1F2937' : '#E5E7EB'}`, backgroundColor: isDark ? '#111827' : '#FFFFFF', cursor: 'pointer', transition: 'border-color 0.15s' }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = '#10B981'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = isDark ? '#1F2937' : '#E5E7EB'}
              onClick={() => {
                const textarea = document.querySelector('textarea')
                if (textarea) {
                  const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, 'value').set
                  nativeInputValueSetter.call(textarea, ex.prompt)
                  textarea.dispatchEvent(new Event('input', { bubbles: true }))
                }
              }}>
              <h3 style={{ fontSize: '14px', fontWeight: 600, color: isDark ? '#F9FAFB' : '#111827', marginBottom: '8px' }}>{ex.title}</h3>
              <p style={{ fontSize: '13px', color: isDark ? '#6B7280' : '#9CA3AF', fontFamily: 'var(--font-mono)', lineHeight: 1.5, overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>{ex.prompt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
