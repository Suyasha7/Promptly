import { getAllSections, getLessonsBySection, getAllLessons } from '../services/contentService'

export function flattenLessons() {
  return getAllLessons()
}

export function getPrevNext(slug) {
  const allLessons = flattenLessons()
  const index = allLessons.findIndex((l) => l.slug === slug)
  if (index === -1) return { previous: null, next: null }
  return {
    previous: index > 0 ? allLessons[index - 1] : null,
    next: index < allLessons.length - 1 ? allLessons[index + 1] : null,
  }
}

export function getSidebarNavigation() {
  const sections = getAllSections()
  return sections.map((section) => ({
    ...section,
    lessons: getLessonsBySection(section.id),
  }))
}
