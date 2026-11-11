import { useCallback, useEffect, useMemo, useState } from 'react'
import { ThemeContext } from './ThemeContext.js'

function ThemeProvider({ children }) {
  // The initial theme has already been set by the script in index.html
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme ?? 'dark',
  )

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // e.g. private mode: the choice is just not remembered
    }
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }, [])

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme])

  return <ThemeContext value={value}>{children}</ThemeContext>
}

export default ThemeProvider
