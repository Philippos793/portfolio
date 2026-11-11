import { experience } from '../data/experience.js'
import styles from './Experience.module.css'

function Experience() {
  return (
    <ul className={styles.list}>
      {experience.map((job) => (
        <li key={job.id} className={styles.item}>
          <span className={styles.period}>
            {job.period} · {job.location}
          </span>
          <h3 className={styles.role}>
            {job.role} <span className={styles.company}>@ {job.company}</span>
          </h3>
          <ul className={styles.highlights}>
            {job.highlights.map((text) => (
              <li key={text}>{text}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  )
}

export default Experience
