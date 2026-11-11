import { useEffect } from 'react'
import styles from './Lightbox.module.css'

function Lightbox({ image, onClose }) {
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    // prevent the page behind from scrolling while it is open
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
      onClick={onClose}
    >
      <button
        type="button"
        className={styles.close}
        onClick={onClose}
        aria-label="Close"
        autoFocus
      >
        ✕
      </button>
      <figure className={styles.figure} onClick={(event) => event.stopPropagation()}>
        <img src={image.src} alt={image.alt} />
        <figcaption>{image.alt}</figcaption>
      </figure>
    </div>
  )
}

export default Lightbox
