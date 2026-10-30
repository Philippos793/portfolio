import { Routes, Route } from 'react-router'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

const NAME = 'Philippos Tsikouras'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/skills', label: 'Skills' },
  { to: '/contact', label: 'Contact' },
]

function App() {
  return (
    <>
      <Navbar brand={NAME} links={NAV_LINKS} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer name={NAME} />
    </>
  )
}

export default App
