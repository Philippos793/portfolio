import { Link } from 'react-router'
import styles from './Hero.module.css'

function Hero({ name, role, intro = 'Welcome to my portfolio.' }) {
  return (
    <section id="top" className={styles.hero}>
      <p className={styles.greeting}>Hi, I&apos;m</p>
      <h1 className={styles.name}>{name}</h1>
      <p className={styles.role}>{role}</p>
      <p className={styles.intro}>{intro}</p>
      <div className={styles.actions}>
        <Link to="/projects" className={styles.primary}>
          See my work
        </Link>
        <Link to="/contact" className={styles.secondary}>
          Get in touch
        </Link>
      </div>
    </section>
  )
}

export default Hero
