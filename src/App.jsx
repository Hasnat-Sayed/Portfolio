import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useReveal } from './hooks.js'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Education from './components/Education.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import ProjectDetail from './components/ProjectDetail.jsx'
import Footer from './components/Footer.jsx'

function Home() {
  useReveal()
  return <><Hero /><About /><Skills /><Education /><Experience /><Projects /><Contact /></>
}

function ScrollManager() {
  const { key, state } = useLocation()
  useEffect(() => {
    const id = state && state.scroll
    if (id) setTimeout(() => document.getElementById(id)?.scrollIntoView(), 40)
    else window.scrollTo(0, 0)
  }, [key])
  return null
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
