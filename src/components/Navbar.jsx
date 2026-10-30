import { Link, NavLink } from 'react-router'
import styles from './Navbar.module.css'

function Navbar({ brand, links }) {
  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main">
        <Link to="/" className={styles.brand}>
          {brand}
        </Link>
        <ul className={styles.links}>
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end
                className={({ isActive }) =>
                  isActive ? `${styles.link} ${styles.active}` : styles.link
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
