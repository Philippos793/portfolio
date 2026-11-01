import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'

// Η αρχική φορτώνει αμέσως, οι υπόλοιπες σελίδες μόνο όταν τις ανοίξει κάποιος
const Projects = lazy(() => import('./components/Projects.jsx'))
const ProjectDetail = lazy(() => import('./pages/ProjectDetail.jsx'))
const Skills = lazy(() => import('./components/Skills.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))

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
      <ScrollToTop />
      <Navbar brand={NAME} links={NAV_LINKS} />
      <main>
        <Suspense fallback={<p className="page-loading">Loading…</p>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer name={NAME} />
    </>
  )
}

export default App
