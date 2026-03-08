import { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'

const pagesWithSidebar = ['/topic/', '/docs', '/modules']

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()
  const showSidebar = pagesWithSidebar.some((p) => location.pathname.startsWith(p))

  return (
    <div className="flex flex-col" style={{ minHeight: '100vh' }}>
      <Header />
      <div className="flex flex-1">
        {showSidebar && <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />}
        <main className="flex-1 overflow-y-auto" style={{ minHeight: 'calc(100vh - 64px)' }}>
          <Outlet context={{ setSidebarOpen }} />
        </main>
      </div>
      <Footer />
    </div>
  )
}
