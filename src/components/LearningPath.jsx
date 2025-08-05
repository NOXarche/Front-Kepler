import React from 'react'

const steps = [
  { title: "Lay the Foundation", description: "Master coding basics and programming fundamentals", icon: "🔨" },
  { title: "Master the Craft", description: "Advanced DSA, system design, and project building", icon: "⚙️" },
  { title: "Showcase & Apply", description: "Build portfolio, optimize resume, GitHub profile", icon: "🚀" },
  { title: "Land Internships", description: "Interview preparation and job placement support", icon: "💼" }
]
const LearningPath = () => (
  <section className="learning-path">
    <div className="container">
      <h2 className="section-title">Your Learning Path</h2>
      <div className="learning-path-steps">
        {steps.map((step, idx) => (
          <div className="learning-step" key={idx}>
            <span className="learning-step-icon">{step.icon}</span>
            <h3 className="learning-step-title">{step.title}</h3>
            <p className="learning-step-desc">{step.description}</p>
            {idx !== steps.length - 1 && (
              <div className="learning-path-arrow">→</div>
            )}
            <div className="card-glow"></div>
          </div>
        ))}
      </div>
    </div>
  </section>
)
export default LearningPath
