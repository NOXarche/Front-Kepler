import React from 'react'
const whys = [
  { title: "Code-Centric Curriculum", description: "Practical learning over theory. Build real projects from day one.", icon: "💡" },
  { title: "Structured Progress Tracking", description: "Learn at your own pace with clear milestones and badges.", icon: "📈" },
  { title: "From Basics to Internships", description: "Complete journey from beginner to job-ready.", icon: "🎯" },
  { title: "Mentor Support + Live Doubts", description: "24/7 help from mentors and the community.", icon: "🧑‍💼" }
]
const WhyKepler = () => (
  <section className="why-kepler">
    <div className="container">
      <h2 className="section-title">Why Choose Kepler?</h2>
      <div className="whykepler-grid">
        {whys.map((reason, idx) => (
          <div className="whykepler-card" key={idx}>
            <div className="whykepler-icon">{reason.icon}</div>
            <h3 className="whykepler-title">{reason.title}</h3>
            <p className="whykepler-desc">{reason.description}</p>
            <div className="card-glow"></div>
          </div>
        ))}
      </div>
    </div>
  </section>
)
export default WhyKepler
