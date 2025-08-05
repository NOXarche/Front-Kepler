import React from 'react'

const Footer = () => (
  <footer className="footer">
    <div className="container footer-flex">
      <div>
        <h3>About Kepler</h3>
        <p>
          Kepler is committed to delivering accessible, high-quality AI, ML, and coding education,<br />
          with a focus on innovation, creativity, and hands-on learning.
        </p>
      </div>
      <div>
        <h3>Contact</h3>
        <p>
          Email: <a href="mailto:kepler.xxiib.cygnus@gmail.com">kepler.xxiib.cygnus@gmail.com</a><br />
          Phone: <a href="tel:+911234567890">+91 12345 67890</a>
        </p>
      </div>
      <div>
        <h3>Follow Us</h3>
        <div className="social-links">
          <a href="#" aria-label="LinkedIn" className="social-icon">in</a>
          <a href="#" aria-label="Facebook" className="social-icon">f</a>
          <a href="#" aria-label="Instagram" className="social-icon">📸</a>
          <a href="#" aria-label="WhatsApp" className="social-icon">💬</a>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      &copy; {new Date().getFullYear()} Kepler. Shaping the future of education.<br/>
      Inspired by AlgoZenith. All rights reserved.
    </div>
  </footer>
)
export default Footer
