import React from 'react'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Master the Future of Technology</h1>
          <p className="hero-subtitle">AI • Machine Learning • Coding Languages</p>
          <button className="cta-button">
            <span>Start Your Journey</span>
            <div className="button-glow"></div>
          </button>
        </div>
      </div>
      <div className="geometric-pattern">
        <div className="floating-element floating-1"></div>
        <div className="floating-element floating-2"></div>
        <div className="floating-element floating-3"></div>
      </div>
    </section>
  )
}

export default Hero
