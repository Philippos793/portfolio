import { Link } from 'react-router'
import Section from '../components/Section.jsx'
import styles from './NotFound.module.css'

function NotFound() {
  return (
    <Section title="Page not found">
      <p className={styles.code}>404</p>
      <p>The page you are looking for doesn&apos;t exist or has been moved.</p>
      <Link to="/" className={styles.home}>
        ← Back to home
      </Link>
    </Section>
  )
}

export default NotFound
