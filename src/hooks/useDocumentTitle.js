import { useEffect } from 'react'

const SITE_TITLE = 'Philippos Tsikouras | Full-Stack Developer'

// useDocumentTitle('Projects') → "Projects | Philippos Tsikouras"
// useDocumentTitle()           → ο βασικός τίτλος του site
export function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | Philippos Tsikouras` : SITE_TITLE
  }, [title])
}
