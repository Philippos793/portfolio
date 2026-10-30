import styles from './Footer.module.css'

const SOCIAL_LINKS = [
  { href: 'https://github.com/Philippos793', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/philippos-tsikouras', label: 'LinkedIn' },
]

// Υπολογίζεται μία φορά, όταν φορτώνει το module, όχι σε κάθε render
const YEAR = new Date().getFullYear()

function Footer({ name }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copy}>
          © {YEAR} {name}
        </p>
        <ul className={styles.links}>
          {SOCIAL_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
