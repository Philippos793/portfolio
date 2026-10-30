import { projects } from '../data/projects.js'
import ProjectCard from './ProjectCard.jsx'
import Section from './Section.jsx'
import styles from './Projects.module.css'

function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </Section>
  )
}

export default Projects
