import React, { useEffect, useState } from 'react'

// The code typing animation: define each snippet type.
const codeSnippets = [
  { type: 'code', text: "def greet(name):" },
  { type: 'code', text: "    print(f\"Hello, {name} 👋\")" },
  { type: 'blank', text: "" },
  { type: 'code', text: "greet(\"Kepler learner\")" },
  { type: 'output', text: "Hello, Kepler learner 👋" }
]

const highlightLine = (line) => {
  // Syntax highlights 'def', 'print', and "strings".
  if (!line) return ""
  return line
    .replace(
      /(def )/g,
      `<span class="code-keyword">$1</span>`
    )
    .replace(
      /(print)(?=\()/g,
      `<span class="code-func">$1</span>`
    )
    .replace(
      /("[^"]*"|'[^']*')/g,
      `<span class="code-string">$1</span>`
    )
}

const Hero = () => {
  const [typedLines, setTypedLines] = useState([])
  
  useEffect(() => {
    let timeouts = []
    let output = []
    let lineIdx = 0, charIdx = 0

    function typeNext() {
      if (lineIdx >= codeSnippets.length) return

      const entry = codeSnippets[lineIdx]
      if (entry.type === 'blank') {
        output.push("")
        setTypedLines([...output])
        lineIdx++; charIdx = 0
        timeouts.push(setTimeout(typeNext, 170))
        return
      }
      if (entry.type === 'output') {
        output.push(entry.text)
        setTypedLines([...output])
        lineIdx++; charIdx = 0
        return
      }
      // Type code lines character by character
      if (!output[lineIdx]) output[lineIdx] = ""
      output[lineIdx] += entry.text[charIdx] || ""
      setTypedLines([...output])
      if (charIdx < entry.text.length - 1) {
        charIdx++
        timeouts.push(setTimeout(typeNext, 38))
      } else {
        lineIdx++; charIdx = 0
        timeouts.push(setTimeout(typeNext, 230))
      }
    }
    setTypedLines([""])
    timeouts.push(setTimeout(typeNext, 500))
    return () => timeouts.forEach(clearTimeout)
  }, [])

  return (
    <section className="hero">
      {/* Live code-typing IDE animation */}
      <div className="ide-animation reveal">
        <div className="ide-header">
          <span className="ide-dot red" />
          <span className="ide-dot yellow" />
          <span className="ide-dot green" />
          <span className="ide-filename" style={{marginLeft:12}}>main.py</span>
        </div>
        <div>
          {typedLines.map((line, idx) =>
            codeSnippets[idx]?.type === 'output'
              ? <span key={idx} className="code-output">{line}</span>
              : <div
                  key={idx}
                  className="code-line"
                  dangerouslySetInnerHTML={{__html: highlightLine(line)}}
                />
          )}
        </div>
      </div>
      {/* Main Hero Section Content */}
      <div className="hero-content reveal">
        <h1 className="hero-title">Master the Future of Technology</h1>
        <p className="hero-subtitle">AI • Machine Learning • Coding Languages</p>
        <button className="cta-button">
          <span>Start Your Journey</span>
          <div className="button-glow"></div>
        </button>
      </div>
    </section>
  )
}

export default Hero
