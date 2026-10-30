import { education } from '../data/education.js'
import Section from './Section.jsx'
import styles from './Education.module.css'

function Education() {
  return (
    <Section id="education" title="Education">
      <ul className={styles.list}>
        {education.map((item) => (
          <li key={item.id} className={styles.item}>
            <span className={styles.period}>{item.period}</span>
            <h3 className={styles.degree}>{item.degree}</h3>
            <p className={styles.school}>{item.school}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default Education
