import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'

function App() {
  return (
    <div className="App">
      {/* Animated Background */}
      <div className="stars-container">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>
      
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      
      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Kepler. Shaping the future of education.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
