import { Link, NavLink } from 'react-router'
import ThemeToggle from './ThemeToggle.jsx'
import styles from './Navbar.module.css'

function Navbar({ brand, links }) {
  const initials = brand
    .split(' ')
    .map((part) => part[0])
    .join('')

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main">
        {/* Name and monogram are stacked on top of each other and swap on hover */}
        <Link to="/" className={styles.brand} aria-label={`${brand} — home`}>
          <span className={styles.brandName}>{brand}</span>
          <span className={styles.monogram} aria-hidden="true">
            {initials}
          </span>
        </Link>
        <ul className={styles.links}>
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  isActive ? `${styles.link} ${styles.active}` : styles.link
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
