import { useState, useEffect, useCallback } from 'react'

export default function ScrollProgress({ containerRef }) {
  const [progress, setProgress] = useState(0)
  const handleScroll = useCallback(() => {
    if (!containerRef?.current) return
    const el = containerRef.current
    const scrollHeight = el.scrollHeight - el.clientHeight
    if (scrollHeight > 0) setProgress(Math.min((el.scrollTop / scrollHeight) * 100, 100))
  }, [containerRef])

  useEffect(() => {
    const el = containerRef?.current
    if (!el) return
    el.addEventListener('scroll', handleScroll, { passive: true })
    return () => el.removeEventListener('scroll', handleScroll)
  }, [containerRef, handleScroll])

  return (
    <div className="fixed left-0 z-50" style={{ top: '64px', width: '100%', height: '3px', backgroundColor: 'transparent' }}>
      <div style={{ height: '100%', width: `${progress}%`, background: 'linear-gradient(90deg, #10B981, #22D3EE)', transition: 'width 0.1s ease-out', borderRadius: '0 2px 2px 0' }} />
    </div>
  )
}
