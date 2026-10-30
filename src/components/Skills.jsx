import { skillGroups, learning } from '../data/skills.js'
import Section from './Section.jsx'
import styles from './Skills.module.css'

function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className={styles.grid}>
        {skillGroups.map((group) => (
          <div key={group.title} className={styles.group}>
            <h3 className={styles.groupTitle}>{group.title}</h3>
            <ul className={styles.list}>
              {group.skills.map((skill) => (
                <li key={skill} className={styles.skill}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {learning.length > 0 && (
        <p className={styles.learning}>
          Currently learning: <strong>{learning.join(', ')}</strong>
        </p>
      )}
    </Section>
  )
}

export default Skills
