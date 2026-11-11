import { useEffect } from 'react'

const SITE_TITLE = 'Philippos Tsikouras | Full-Stack Developer'

// useDocumentTitle('Projects') → "Projects | Philippos Tsikouras"
// useDocumentTitle()           → the default site title
export function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | Philippos Tsikouras` : SITE_TITLE
  }, [title])
}
