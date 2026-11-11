import { education } from '../data/education.js'
import styles from './Education.module.css'

function Education() {
  return (
    <ul className={styles.list}>
      {education.map((item) => (
        <li key={item.id} className={styles.item}>
          <span className={styles.period}>{item.period}</span>
          <h3 className={styles.degree}>{item.degree}</h3>
          <p className={styles.school}>{item.school}</p>
          {item.thesis && (
            <p className={styles.thesis}>
              <strong>Thesis:</strong> {item.thesis}
            </p>
          )}
        </li>
      ))}
    </ul>
  )
}

export default Education
