import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Background from '../components/Background.jsx'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'

function Home() {
  useDocumentTitle()

  return (
    <>
      <Hero
        name="Philippos Tsikouras"
        role="Full-Stack Developer"
        intro="I build modern, responsive and user-friendly websites with a focus on performance and great user experience."
      />
      <About />
      <Background />
    </>
  )
}

export default Home
