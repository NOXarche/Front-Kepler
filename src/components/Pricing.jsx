import React from 'react'

const Pricing = () => {
  const plans = [
    {
      tier: "FREE",
      price: "₹0",
      description: "POTD access and basic features",
      features: ["Daily Problems", "Basic Resources", "Community Access"],
      popular: false
    },
    {
      tier: "PRO",
      price: "₹999",
      description: "1 Premium Course included",
      features: ["Everything in Free", "1 Premium Course", "Priority Support", "Advanced IDE"],
      popular: true
    },
    {
      tier: "BUNDLE",
      price: "₹2,799",
      description: "3 Premium Courses included",
      features: ["Everything in Pro", "3 Premium Courses", "1-on-1 Mentoring", "Exclusive Workshops"],
      popular: false
    }
  ]

  return (
    <section className="pricing">
      <div className="container">
        <h2 className="section-title">Choose Your Path</h2>
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`} data-tilt>
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              <div className="pricing-header">
                <h3 className="pricing-tier">{plan.tier}</h3>
                <div className="pricing-price">{plan.price}</div>
                <p className="pricing-description">{plan.description}</p>
              </div>
              <ul className="pricing-features">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <button className="pricing-button">
                Choose Plan
                <div className="button-glow"></div>
              </button>
              <div className="card-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
