import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Experience from '../components/Experience.jsx'
import Education from '../components/Education.jsx'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'

function Home() {
  useDocumentTitle()

  return (
    <>
      <Hero
        name="Philippos Tsikouras"
        role="Full-Stack Developer"
        intro="I build web applications with React and Java / Spring."
      />
      <About />
      <Experience />
      <Education />
    </>
  )
}

export default Home
