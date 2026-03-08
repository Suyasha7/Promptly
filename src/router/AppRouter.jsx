import { HashRouter, Routes, Route } from 'react-router-dom'
import Layout from '../components/Layout'
import LandingPage from '../pages/LandingPage'
import ModulesPage from '../pages/ModulesPage'
import LessonPage from '../pages/LessonPage'
import PlaygroundPage from '../pages/PlaygroundPage'
import ChallengePage from '../pages/ChallengePage'
import DashboardPage from '../pages/DashboardPage'
import DocsPage from '../pages/DocsPage'
import LoginPage from '../pages/LoginPage'
import SignupPage from '../pages/SignupPage'
import NotFoundPage from '../pages/NotFoundPage'

export default function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/modules" element={<ModulesPage />} />
          <Route path="/topic/:slug" element={<LessonPage />} />
          <Route path="/playground" element={<PlaygroundPage />} />
          <Route path="/challenges" element={<ChallengePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/docs" element={<DocsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
