import { useTheme } from '../lib/ThemeContext'
import { getAllSections, getLessonsBySection } from '../services/contentService'
import ModuleCard from '../components/ModuleCard'
import Breadcrumb from '../components/Breadcrumb'

export default function ModulesPage() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const sections = getAllSections()

  return (
    <div style={{ maxWidth: '960px', margin: '0 auto', padding: '40px 32px' }}>
      <Breadcrumb items={[{ label: 'Modules' }]} />
      <h1 style={{ fontSize: '2.25rem', fontWeight: 800, marginBottom: '8px', color: isDark ? '#F9FAFB' : '#111827' }}>Learning Modules</h1>
      <p style={{ fontSize: '16px', color: isDark ? '#9CA3AF' : '#6B7280', marginBottom: '40px', lineHeight: 1.7 }}>Explore the complete prompt engineering curriculum from fundamentals to advanced techniques.</p>

      {sections.map((section) => {
        const lessons = getLessonsBySection(section.id)
        return (
          <div key={section.id} style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#10B981', marginBottom: '16px', paddingBottom: '8px', borderBottom: `2px solid ${isDark ? 'rgba(16,185,129,0.2)' : 'rgba(16,185,129,0.15)'}` }}>{section.title}</h2>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
              {lessons.map((lesson) => (
                <ModuleCard key={lesson.slug} title={lesson.title} description={lesson.description} slug={lesson.slug} duration={lesson.duration} difficulty={lesson.difficulty} />
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
