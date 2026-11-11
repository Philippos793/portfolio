import Section from './Section.jsx'
import styles from './About.module.css'

function About() {
  return (
    <Section id="about" title="About me">
      <div className={styles.content}>
        <p>
          I&apos;m a Computer Science and Engineering graduate from the University
          of Ioannina, Greece, with a strong interest in software development and
          building full-stack applications.
        </p>
        <p>
          My main tech stack includes <strong>React</strong> and{' '}
          <strong>JavaScript</strong> for frontend development,{' '}
          <strong>Java</strong> and <strong>Spring Boot</strong> for backend
          development, and relational databases such as <strong>PostgreSQL</strong>{' '}
          and <strong>MySQL</strong>.
        </p>
        <p>
          I enjoy writing clean, maintainable code and developing applications with
          a focus on functionality, performance, and user experience. Through my
          personal projects and developer internship, I&apos;ve gained practical
          experience and a strong motivation to keep learning and improving.
        </p>
        <p className={styles.cta}>
          I&apos;m currently looking for opportunities to grow professionally,
          contribute to a development team, and build meaningful software.
        </p>
      </div>
    </Section>
  )
}

export default About
