import { skillGroups, languages, learning } from '../data/skills.js'
import Section from './Section.jsx'
import TechIcon from './TechIcon.jsx'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'
import styles from './Skills.module.css'

function Skills() {
  useDocumentTitle('Skills')

  return (
    <Section id="skills" title="Skills">
      <div className={styles.grid}>
        {skillGroups.map((group) => (
          <div key={group.title} className={styles.group}>
            <h3 className={styles.groupTitle}>{group.title}</h3>
            <ul className={styles.list}>
              {group.skills.map((skill) => (
                <li key={skill.name} className={styles.skill}>
                  <TechIcon icon={skill.icon} color={skill.color} className={styles.icon} />
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className={styles.languages}>
        Languages:{' '}
        {languages.map((lang) => `${lang.name} (${lang.level})`).join(' · ')}
      </p>

      {learning.length > 0 && (
        <p className={styles.learning}>
          Currently learning: <strong>{learning.join(', ')}</strong>
        </p>
      )}
    </Section>
  )
}

export default Skills
