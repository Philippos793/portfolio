import { Link } from 'react-router'
import styles from './ProjectCard.module.css'

function ProjectCard({ id, title, context, description, tech, repo, images }) {
  const cover = images?.[0]
  const detailsUrl = `/projects/${id}`

  return (
    <article className={styles.card}>
      {cover && (
        <Link to={detailsUrl} tabIndex={-1} aria-hidden="true">
          <img src={cover.src} alt="" className={styles.cover} loading="lazy" />
        </Link>
      )}
      <p className={styles.context}>{context}</p>
      <h3 className={styles.title}>
        <Link to={detailsUrl}>{title}</Link>
      </h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.tech}>
        {tech.map((t) => (
          <li key={t} className={styles.tag}>
            {t}
          </li>
        ))}
      </ul>
      <div className={styles.links}>
        <Link to={detailsUrl} className={styles.link}>
          Details →
        </Link>
        {repo && (
          <a href={repo} target="_blank" rel="noreferrer" className={styles.link}>
            View code →
          </a>
        )}
      </div>
    </article>
  )
}

export default ProjectCard
