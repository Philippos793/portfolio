import { useCallback, useEffect, useMemo, useState } from 'react'
import { ThemeContext } from './ThemeContext.js'

function ThemeProvider({ children }) {
  // Το αρχικό θέμα το έχει ήδη αποφασίσει το script στο index.html
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme ?? 'light',
  )

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // π.χ. private mode: απλά δεν θυμόμαστε την επιλογή
    }
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }, [])

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme])

  return <ThemeContext value={value}>{children}</ThemeContext>
}

export default ThemeProvider
