import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import LearningPath from './components/LearningPath'
import WhyKepler from './components/WhyKepler'
import PopularCourses from './components/PopularCourses'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

// Scroll reveal animation for .reveal elements
function useScrollReveal() {
  useEffect(() => {
    const revealElems = document.querySelectorAll('.reveal')
    function reveal() {
      for (const el of revealElems) {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight - 90) el.classList.add('visible')
        else el.classList.remove('visible')
      }
    }
    reveal()
    window.addEventListener('scroll', reveal)
    return () => window.removeEventListener('scroll', reveal)
  }, [])
}

function App() {
  useScrollReveal()
  return (
    <div className="App">
      {/* --- THEMED, ANIMATED TECH BACKGROUND SVGs --- */}
      <div className="tech-bg">
        {/* Example SVGs representing AI/coding/data/robotics (add more if desired): */}
        {/* Circuit - top left */}
        <svg className="tech-elem circuit" width="80" height="80" viewBox="0 0 60 60" fill="none">
          <rect x="10" y="10" width="40" height="40" rx="7" fill="#00ffff" fillOpacity="0.23"/>
          <rect x="28" y="28" width="4" height="4" rx="1" fill="#fff" fillOpacity="0.7"/>
          <g stroke="#00ffff" strokeWidth="2" opacity="0.36">
            <line x1="30" y1="0" x2="30" y2="12"/>
            <line x1="0" y1="30" x2="12" y2="30"/>
            <line x1="48" y1="30" x2="60" y2="30"/>
            <line x1="30" y1="48" x2="30" y2="60"/>
          </g>
        </svg>
        {/* Code symbol - top right */}
        <svg className="tech-elem code" width="60" height="60" viewBox="0 0 60 60" fill="none">
          <text x="17" y="37" fontSize="28" fill="#fff" fillOpacity="0.23">{`</>`}</text>
        </svg>
        {/* Robot Head - bottom left */}
        <svg className="tech-elem robot" width="68" height="68" viewBox="0 0 60 60" fill="none">
          <rect x="12" y="20" rx="10" width="36" height="24" fill="#8a2be2" fillOpacity="0.17"/>
          <circle cx="22" cy="32" r="4" fill="#00ffff" />
          <circle cx="38" cy="32" r="4" fill="#00ffff" />
          <rect x="27" y="44" width="6" height="3" rx="1" fill="#fff" fillOpacity="0.5"/>
          <rect x="28" y="7" width="4" height="13" rx="2" fill="#00ffff" fillOpacity="0.23"/>
        </svg>
        {/* Graph/Data Science - bottom right */}
        <svg className="tech-elem graph" width="64" height="64" viewBox="0 0 64 64" fill="none">
          <polyline points="8,56 24,36 40,44 56,20" fill="none" stroke="#fff" strokeWidth="2" opacity="0.26"/>
          <circle cx="8" cy="56" r="2.8" fill="#00ffff"/>
          <circle cx="24" cy="36" r="2.8" fill="#00ffff"/>
          <circle cx="40" cy="44" r="2.8" fill="#8a2be2"/>
          <circle cx="56" cy="20" r="2.8" fill="#8a2be2"/>
        </svg>
        {/* Neural Network - center-ish */}
        <svg className="tech-elem neuralnet" width="88" height="88" fill="none">
          <circle cx="44" cy="44" r="39" stroke="#00ffff" strokeWidth="1" opacity="0.13"/>
          <circle cx="22" cy="44" r="5" fill="#00ffff" opacity="0.18"/>
          <circle cx="58" cy="44" r="5" fill="#fff" opacity="0.18"/>
          <circle cx="44" cy="22" r="5" fill="#8a2be2" opacity="0.15"/>
          <circle cx="44" cy="68" r="5" fill="#ff00ff" opacity="0.15"/>
          <line x1="22" y1="44" x2="44" y2="22" stroke="#00ffff" strokeWidth="1"/>
          <line x1="22" y1="44" x2="44" y2="68" stroke="#8a2be2" strokeWidth="1"/>
          <line x1="58" y1="44" x2="44" y2="22" stroke="#fe4a49" strokeWidth="1"/>
        </svg>
      </div>
      {/* --- Main content sections with scroll-reveal --- */}
      <Navbar />
      <Hero />
      <div className="reveal"><Features /></div>
      <div className="reveal"><LearningPath /></div>
      <div className="reveal"><WhyKepler /></div>
      <PopularCourses />
      <div className="reveal"><Pricing /></div>
      <Footer />
    </div>
  )
}

export default App
