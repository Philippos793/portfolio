import { contacts } from '../data/contact.js'
import Section from '../components/Section.jsx'
import styles from './Contact.module.css'

function Contact() {
  const available = contacts.filter((contact) => contact.value)

  return (
    <Section id="contact" title="Contact">
      <p className={styles.intro}>
        Interested in working together or have a question? Feel free to reach out.
      </p>
      <ul className={styles.list}>
        {available.map((contact) => {
          const isExternal = contact.href.startsWith('https://')

          return (
            <li key={contact.id}>
              <a
                href={contact.href}
                className={styles.card}
                {...(isExternal && { target: '_blank', rel: 'noreferrer' })}
              >
                <span className={styles.label}>{contact.label}</span>
                <span className={styles.value}>{contact.value}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}

export default Contact
