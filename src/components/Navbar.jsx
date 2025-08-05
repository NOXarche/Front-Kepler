import React, { useEffect, useState } from 'react'

const Navbar = () => {
  // Theme state: 'dark' or 'light'
  const [theme, setTheme] = useState(() =>
    localStorage.getItem("theme") || "dark"
  )

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  // Add scroll background if needed
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark")

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
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label="Toggle light/dark mode"
            title={theme === "dark" ? "Light Mode" : "Dark Mode"}
          >
            {theme === "dark"
              ? <span role="img" aria-label="Light">🌞</span>
              : <span role="img" aria-label="Dark">🌙</span>
            }
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
