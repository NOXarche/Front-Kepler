import React from 'react'

const Features = () => {
  const features = [
    {
      title: "Problem of the Day",
      description: "Daily coding challenges to sharpen your skills",
      icon: "🧩"
    },
    {
      title: "Integrated IDE",
      description: "Code directly in your browser with our advanced editor",
      icon: "💻"
    },
    {
      title: "Resource Library",
      description: "Curated materials for AI, ML, and programming",
      icon: "📚"
    },
    {
      title: "Group Chat",
      description: "Collaborate and learn with fellow students",
      icon: "💬"
    },
    {
      title: "Live Meetings",
      description: "Interactive sessions with industry experts",
      icon: "🎥"
    }
  ]

  return (
    <section className="features">
      <div className="container">
        <h2 className="section-title">Revolutionary Learning Experience</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card" data-tilt>
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <div className="card-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
