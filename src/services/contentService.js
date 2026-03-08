import sectionsConfig from '../config/sections.json'

const markdownFiles = import.meta.glob('../content/**/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
})

function parseFrontmatter(raw) {
  const match = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/)
  if (!match) return { metadata: {}, content: raw }
  const frontmatterBlock = match[1]
  const content = match[2]
  const metadata = {}
  frontmatterBlock.split('\n').forEach((line) => {
    const colonIndex = line.indexOf(':')
    if (colonIndex === -1) return
    const key = line.slice(0, colonIndex).trim()
    let value = line.slice(colonIndex + 1).trim()
    if (!isNaN(value) && value !== '') value = Number(value)
    metadata[key] = value
  })
  return { metadata, content }
}

const lessons = Object.entries(markdownFiles).map(([path, raw]) => {
  const { metadata, content } = parseFrontmatter(raw)
  return { ...metadata, content, path }
})

function getSectionOrder(moduleId) {
  const section = sectionsConfig.find((s) => s.id === moduleId)
  return section ? section.order : 999
}

lessons.sort((a, b) => {
  const sectionDiff = getSectionOrder(a.module) - getSectionOrder(b.module)
  if (sectionDiff !== 0) return sectionDiff
  return (a.order || 0) - (b.order || 0)
})

export function getAllSections() {
  return [...sectionsConfig].sort((a, b) => a.order - b.order)
}

export function getAllLessons() {
  return lessons
}

export function getLessonsBySection(sectionId) {
  return lessons.filter((l) => l.module === sectionId)
}

export function getLessonBySlug(slug) {
  return lessons.find((l) => l.slug === slug) || null
}

export function getLessonNavigation(slug) {
  const index = lessons.findIndex((l) => l.slug === slug)
  if (index === -1) return { current: null, previous: null, next: null }
  return {
    current: lessons[index],
    previous: index > 0 ? lessons[index - 1] : null,
    next: index < lessons.length - 1 ? lessons[index + 1] : null,
  }
}
