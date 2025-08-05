import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <img 
            src="https://firebasestorage.googleapis.com/v0/b/mochi-4436f.firebasestorage.app/o/kepler%20logo.jpg?alt=media&token=7df41f3c-26f2-4596-850c-d81538dc86df" 
            alt="Kepler Logo" 
            className="logo-img"
          />
          <span className="logo-text">Kepler</span>
        </div>
        <div className="nav-buttons">
          <a href="/auth.html" className="btn-nav">Login</a>
          <a href="/auth.html" className="btn-nav">Sign Up</a>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
