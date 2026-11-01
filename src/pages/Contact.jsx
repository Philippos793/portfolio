import { useRef } from 'react'
import { contacts } from '../data/contact.js'
import Section from '../components/Section.jsx'
import ContactForm from '../components/ContactForm.jsx'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'
import styles from './Contact.module.css'

function Contact() {
  useDocumentTitle('Contact')
  const nameInputRef = useRef(null)
  const available = contacts.filter((contact) => contact.value)

  function goToForm(e) {
    e.preventDefault()
    const input = nameInputRef.current
    input.scrollIntoView({ behavior: 'smooth', block: 'center' })
    // preventScroll: αλλιώς το focus θα «πηδούσε» αμέσως και θα χαλούσε το ομαλό scroll
    input.focus({ preventScroll: true })
  }

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
                {...(contact.href === '#contact-form' && { onClick: goToForm })}
              >
                <span className={styles.label}>{contact.label}</span>
                <span className={styles.value}>{contact.value}</span>
              </a>
            </li>
          )
        })}
      </ul>

      <h3 className={styles.formTitle}>Or send me a message</h3>
      <ContactForm nameInputRef={nameInputRef} />
    </Section>
  )
}

export default Contact
