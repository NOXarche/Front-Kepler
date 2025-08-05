import React from 'react'

const courses = [
  { title: "AI Foundation", description: "Start your journey with core AI concepts and real projects.", icon: "🤖" },
  { title: "Deep Learning Mastery", description: "Build, train, and deploy neural networks.", icon: "🧠" },
  { title: "Python for Programmers", description: "Fast-track your Python skills for ML, AI, and backend dev.", icon: "🐍" },
  { title: "Machine Learning Pro", description: "Hands-on ML with real datasets and competitions.", icon: "📊" },
  { title: "JavaScript Essentials", description: "Master JS basics and frameworks for web dev.", icon: "🕸️" },
  { title: "Data Structures & Algorithms", description: "Crack coding interviews with top-tier DSA prep.", icon: "🗂️" }
]

// Always 2 rows of 3 columns. Use CSS grid for responsiveness.
const PopularCourses = () => (
  <section className="popular-courses">
    <div className="container">
      <h2 className="section-title">Popular Courses</h2>
      <div className="courses-grid reveal">
        {courses.map((course, idx) => (
          <div className="course-card reveal" key={idx}>
            <span className="course-icon">{course.icon}</span>
            <h3 className="course-title">{course.title}</h3>
            <p className="course-desc">{course.description}</p>
            <button className="enroll-btn">Enroll Now</button>
            <div className="card-glow"></div>
          </div>
        ))}
      </div>
    </div>
  </section>
)
export default PopularCourses
