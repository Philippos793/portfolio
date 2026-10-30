import Section from './Section.jsx'
import styles from './About.module.css'

function About() {
  return (
    <Section id="about" title="About me">
      <div className={styles.content}>
        <p>
          I&apos;m a full-stack developer who enjoys turning ideas into complete,
          working applications — from the database all the way to the interface.
          My main stack is <strong>React</strong> and <strong>JavaScript</strong> on
          the front end, <strong>Java</strong> with <strong>Spring Boot</strong> on
          the back end, and relational databases such as{' '}
          <strong>PostgreSQL</strong> and <strong>MySQL</strong>.
        </p>
        <p>
          I care about clean, readable code that is easy to maintain, and about
          interfaces that feel intuitive to the people using them. Good UI/UX and
          solid architecture matter to me just as much as making things work.
        </p>
        <p className={styles.cta}>
          I&apos;m currently <strong>open to junior developer roles</strong> —
          full-stack ideally, but also back-end or front-end positions.
        </p>
      </div>
    </Section>
  )
}

export default About
