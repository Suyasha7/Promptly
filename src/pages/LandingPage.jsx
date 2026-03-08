import { Link } from 'react-router-dom'
import { useTheme } from '../lib/ThemeContext'
import { getAllSections, getLessonsBySection } from '../services/contentService'
import { ArrowRight, BookOpen, Code, Zap, Target, Terminal, Users } from 'lucide-react'

const features = [
  { icon: BookOpen, title: 'Structured Lessons', desc: 'Learn prompt engineering through organized, progressive modules.' },
  { icon: Terminal, title: 'Prompt Playground', desc: 'Experiment with prompts in an interactive editor environment.' },
  { icon: Target, title: 'Practice Challenges', desc: 'Test your skills with real-world prompt engineering challenges.' },
  { icon: Code, title: 'Code Examples', desc: 'Study practical code examples with syntax highlighting.' },
  { icon: Zap, title: 'Fast Performance', desc: 'Blazing fast static site with instant page transitions.' },
  { icon: Users, title: 'Community Driven', desc: 'Open source platform built for the developer community.' },
]

export default function LandingPage() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const sections = getAllSections()

  return (
    <div>
      {/* Hero */}
      <section className="flex flex-col items-center" style={{ padding: '80px 24px 64px', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '9999px', fontSize: '13px', fontWeight: 600, color: '#10B981', backgroundColor: isDark ? 'rgba(16,185,129,0.1)' : 'rgba(16,185,129,0.08)', marginBottom: '24px', border: `1px solid ${isDark ? 'rgba(16,185,129,0.2)' : 'rgba(16,185,129,0.15)'}` }}>
          <Zap size={14} /> Open Source Learning Platform
        </div>
        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '20px', letterSpacing: '-0.03em', maxWidth: '800px' }}>
          Master{' '}<span style={{ background: 'linear-gradient(135deg, #10B981, #22D3EE)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Prompt Engineering</span>
        </h1>
        <p style={{ fontSize: '18px', lineHeight: 1.7, color: isDark ? '#9CA3AF' : '#6B7280', marginBottom: '40px', maxWidth: '600px' }}>
          Build smarter AI interactions through structured lessons, interactive practice, and real-world challenges.
        </p>
        <div className="flex flex-wrap items-center justify-center" style={{ gap: '12px' }}>
          <Link to="/modules" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', borderRadius: '10px', background: 'linear-gradient(135deg, #10B981, #059669)', color: '#fff', fontSize: '15px', fontWeight: 600, textDecoration: 'none', boxShadow: '0 4px 14px rgba(16, 185, 129, 0.35)', transition: 'transform 0.15s ease, box-shadow 0.15s ease' }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(16,185,129,0.4)' }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 14px rgba(16,185,129,0.35)' }}>
            Start Learning <ArrowRight size={16} />
          </Link>
          <Link to="/playground" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', borderRadius: '10px', fontSize: '15px', fontWeight: 600, textDecoration: 'none', border: `1px solid ${isDark ? '#374151' : '#E5E7EB'}`, color: isDark ? '#E5E7EB' : '#111827', transition: 'border-color 0.15s ease' }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = '#10B981'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = isDark ? '#374151' : '#E5E7EB'}>
            Try Playground
          </Link>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '64px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '30px', fontWeight: 700, textAlign: 'center', marginBottom: '48px', color: isDark ? '#F9FAFB' : '#111827' }}>Built for Developers</h2>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {features.map((f) => {
            const Icon = f.icon
            return (
              <div key={f.title} style={{ padding: '24px', borderRadius: '12px', border: `1px solid ${isDark ? '#1F2937' : '#E5E7EB'}`, backgroundColor: isDark ? '#111827' : '#FFFFFF', transition: 'border-color 0.15s' }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = '#10B981'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = isDark ? '#1F2937' : '#E5E7EB'}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(34,211,238,0.15))', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                  <Icon size={20} style={{ color: '#10B981' }} />
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '8px', color: isDark ? '#F9FAFB' : '#111827' }}>{f.title}</h3>
                <p style={{ fontSize: '14px', color: isDark ? '#9CA3AF' : '#6B7280', lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Learning Modules */}
      <section style={{ padding: '64px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '30px', fontWeight: 700, textAlign: 'center', marginBottom: '16px', color: isDark ? '#F9FAFB' : '#111827' }}>Learning Modules</h2>
        <p style={{ textAlign: 'center', color: isDark ? '#9CA3AF' : '#6B7280', marginBottom: '48px', fontSize: '16px' }}>Progressive curriculum from fundamentals to advanced techniques.</p>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
          {sections.map((section) => {
            const lessons = getLessonsBySection(section.id)
            return (
              <Link key={section.id} to={lessons.length > 0 ? `/topic/${lessons[0].slug}` : '/modules'} style={{ display: 'block', padding: '24px', borderRadius: '12px', border: `1px solid ${isDark ? '#1F2937' : '#E5E7EB'}`, backgroundColor: isDark ? '#1F2937' : '#FFFFFF', textDecoration: 'none', transition: 'transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease' }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.borderColor = '#10B981'; e.currentTarget.style.boxShadow = isDark ? '0 8px 24px rgba(0,0,0,0.3)' : '0 8px 24px rgba(0,0,0,0.06)' }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = isDark ? '#1F2937' : '#E5E7EB'; e.currentTarget.style.boxShadow = 'none' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 600, color: isDark ? '#F9FAFB' : '#111827', marginBottom: '8px' }}>{section.title}</h3>
                <p style={{ fontSize: '14px', color: isDark ? '#9CA3AF' : '#6B7280', marginBottom: '12px', lineHeight: 1.5 }}>{section.description}</p>
                <span style={{ fontSize: '13px', fontWeight: 500, color: '#10B981' }}>{lessons.length} lesson{lessons.length !== 1 ? 's' : ''} →</span>
              </Link>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="flex flex-col items-center" style={{ padding: '80px 24px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '30px', fontWeight: 700, marginBottom: '16px', color: isDark ? '#F9FAFB' : '#111827' }}>Ready to Master Prompt Engineering?</h2>
        <p style={{ fontSize: '16px', color: isDark ? '#9CA3AF' : '#6B7280', marginBottom: '32px', maxWidth: '500px' }}>Start learning for free. No account required to begin.</p>
        <Link to="/modules" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 32px', borderRadius: '10px', background: 'linear-gradient(135deg, #10B981, #059669)', color: '#fff', fontSize: '15px', fontWeight: 600, textDecoration: 'none', boxShadow: '0 4px 14px rgba(16,185,129,0.35)' }}>
          Get Started <ArrowRight size={16} />
        </Link>
      </section>
    </div>
  )
}
