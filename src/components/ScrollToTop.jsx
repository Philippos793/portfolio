import { useEffect } from 'react'
import { useLocation } from 'react-router'

// Σε κάθε αλλαγή σελίδας γυρνάμε στην κορυφή.
// Δεν κάνει render τίποτα, υπάρχει μόνο για το effect.
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

export default ScrollToTop
