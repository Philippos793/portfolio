import { useCallback, useState } from 'react'
import { Link, useParams } from 'react-router'
import { projects } from '../data/projects.js'
import Section from '../components/Section.jsx'
import Lightbox from '../components/Lightbox.jsx'
import NotFound from './NotFound.jsx'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'
import styles from './ProjectDetail.module.css'

function ProjectDetail() {
  const { id } = useParams()
  const [activeImage, setActiveImage] = useState(null)
  const closeLightbox = useCallback(() => setActiveImage(null), [])

  const project = projects.find((p) => p.id === id)
  // Hooks must be called before any early return
  useDocumentTitle(project?.title ?? 'Page not found')

  if (!project) {
    return <NotFound />
  }

  return (
    <Section>
      <Link to="/projects" className={styles.back}>
        ← All projects
      </Link>

      <p className={styles.context}>{project.context}</p>
      <h1 className={styles.title}>{project.title}</h1>
      <p className={styles.description}>{project.description}</p>

      <ul className={styles.tech}>
        {project.tech.map((t) => (
          <li key={t} className={styles.tag}>
            {t}
          </li>
        ))}
      </ul>

      {project.repo && (
        <a href={project.repo} target="_blank" rel="noreferrer" className={styles.repo}>
          View code on GitHub →
        </a>
      )}

      {project.features?.length > 0 && (
        <>
          <h2 className={styles.heading}>Features</h2>
          <ul className={styles.features}>
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </>
      )}

      {project.images?.length > 0 && (
        <>
          <h2 className={styles.heading}>Screenshots</h2>
          <div className={styles.gallery}>
            {project.images.map((image) => (
              <figure key={image.src} className={styles.figure}>
                <button
                  type="button"
                  className={styles.thumb}
                  onClick={() => setActiveImage(image)}
                  aria-label={`Enlarge: ${image.alt}`}
                >
                  <img src={image.src} alt={image.alt} loading="lazy" />
                </button>
                <figcaption>{image.alt}</figcaption>
              </figure>
            ))}
          </div>
        </>
      )}

      {activeImage && <Lightbox image={activeImage} onClose={closeLightbox} />}
    </Section>
  )
}

export default ProjectDetail
