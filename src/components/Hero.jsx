import { Link } from 'react-router'
import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons.jsx'
import styles from './Hero.module.css'

const SOCIALS = [
  { href: 'https://github.com/Philippos793', label: 'GitHub', Icon: GitHubIcon },
  { href: 'https://www.linkedin.com/in/philippos-tsikouras', label: 'LinkedIn', Icon: LinkedInIcon },
]

function Hero({ name, role, intro = 'Welcome to my portfolio.', photo }) {
  // "Philippos Tsikouras" → "Philippos" + "Tsikouras" (the last name gets a gradient)
  const splitAt = name.lastIndexOf(' ')
  const firstName = name.slice(0, splitAt)
  const lastName = name.slice(splitAt + 1)
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .join('')

  return (
    <section id="top" className={styles.hero}>
      <div className={styles.text}>
        <p className={styles.greeting}>Hi, I&apos;m</p>
        <h1 className={styles.name}>
          {firstName} <span className={styles.highlight}>{lastName}</span>
        </h1>
        <p className={styles.role}>{role}</p>
        <p className={styles.intro}>{intro}</p>

        <div className={styles.actions}>
          <Link to="/projects" className={styles.primary}>
            See my work
          </Link>
          <Link to="/contact" className={styles.secondary}>
            Get in touch
          </Link>
          {/* Plain <a>, not <Link>: the PDF is a static file, not an app route */}
          <a href="/Philippos_Tsikouras_CV.pdf" download className={styles.secondary}>
            Download CV
          </a>
        </div>

        <ul className={styles.socials}>
          {SOCIALS.map(({ href, label, Icon }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noreferrer" aria-label={label}>
                <Icon className={styles.icon} />
              </a>
            </li>
          ))}
          <li>
            <Link to="/contact" aria-label="Send me a message">
              <MailIcon className={styles.icon} />
            </Link>
          </li>
        </ul>
      </div>

      <div className={styles.visual}>
        {/* Show the initials until a photo is provided */}
        {photo ? (
          <img src={photo} alt={name} className={styles.photo} />
        ) : (
          <span className={styles.photo} aria-hidden="true">
            {initials}
          </span>
        )}
      </div>
    </section>
  )
}

export default Hero
