import styles from './ProjectCard.module.css'

function ProjectCard({ title, context, description, tech, repo, images }) {
  const cover = images?.[0]

  return (
    <article className={styles.card}>
      {cover && (
        <img src={cover.src} alt={cover.alt} className={styles.cover} loading="lazy" />
      )}
      <p className={styles.context}>{context}</p>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.tech}>
        {tech.map((t) => (
          <li key={t} className={styles.tag}>
            {t}
          </li>
        ))}
      </ul>
      {repo && (
        <a href={repo} target="_blank" rel="noreferrer" className={styles.link}>
          View code →
        </a>
      )}
    </article>
  )
}

export default ProjectCard
