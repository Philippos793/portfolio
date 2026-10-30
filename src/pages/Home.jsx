import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Education from '../components/Education.jsx'

function Home() {
  return (
    <>
      <Hero
        name="Philippos Tsikouras"
        role="Full-Stack Developer"
        intro="I build web applications with React and Java / Spring."
      />
      <About />
      <Education />
    </>
  )
}

export default Home
