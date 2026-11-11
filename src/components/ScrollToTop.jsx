import { useEffect } from 'react'
import { useLocation } from 'react-router'

// Scroll to the top on every page change.
// Renders nothing, it only exists for the effect.
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

export default ScrollToTop
