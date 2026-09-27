import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Support.css'

const helpCards = [
  {
    icon: 'bi-tools',
    title: 'Book a Repair',
    text: 'Schedule servicing for any watch, any brand.',
    to: '/contact',
  },
  {
    icon: 'bi-shield-check',
    title: 'Warranty',
    text: "Coverage information and what's included.",
    to: '/contact',
  },
  {
    icon: 'bi-box-seam',
    title: 'Track an Order',
    text: 'Updates on your recent purchase.',
    to: '/contact',
  },
  {
    icon: 'bi-headset',
    title: 'Speak to Us',
    text: 'Call, email, or visit a boutique.',
    to: '/contact',
  },
]

const faqs = [
  {
    q: 'Do you repair watches you didn\u2019t sell?',
    a: 'Yes. We service all major brands, whether purchased with us or elsewhere.',
  },
  {
    q: 'How long does a repair take?',
    a: 'Most repairs take 5\u201310 business days. Complex restorations may take longer.',
  },
  {
    q: 'Do you offer appraisals?',
    a: 'Yes. Appraisals for insurance, resale, or personal record. Walk-ins welcome.',
  },
  {
    q: "What's covered under warranty?",
    a: 'Manufacturer warranty covers defects. Our in-house service guarantee covers our own work.',
  },
  {
    q: 'Can I book an appointment?',
    a: 'Yes. Use the Contact page or call your nearest boutique.',
  },
]

function Support() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <div className="support-page">
      {/* 1. Intro */}
      <section className="support-intro">
        <div className="support-inner">
          <span className="support-eyebrow">HELP CENTRE</span>
          <h1 className="support-headline">We're here to help.</h1>
          <p className="support-lead">
            Repairs, warranty, orders — find answers below, or reach out to our team.
          </p>
        </div>
      </section>

      {/* 2. Help cards */}
      <section className="support-cards-section">
        <div className="support-inner">
          <div className="support-cards">
            {helpCards.map((card) => (
              <Link key={card.title} to={card.to} className="support-card">
                <i className={`bi ${card.icon} support-card-icon`}></i>
                <h3 className="support-card-title">{card.title}</h3>
                <p className="support-card-text">{card.text}</p>
                <span className="support-card-arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FAQ accordion */}
      <section className="support-faq">
        <div className="support-inner">
          <div className="faq-heading">
            <span className="faq-eyebrow">FAQ</span>
            <h2 className="faq-title">Frequently asked questions.</h2>
          </div>

          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`faq-item ${openIndex === i ? 'open' : ''}`}
              >
                <button
                  className="faq-question"
                  onClick={() => toggle(i)}
                  aria-expanded={openIndex === i}
                >
                  <span>{faq.q}</span>
                  <i className="bi bi-plus-lg faq-icon"></i>
                </button>
                <div className="faq-answer-wrap">
                  <p className="faq-answer">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Contact CTA */}
      <section className="support-cta">
        <div className="support-inner support-cta-inner">
          <h2>Still need help?</h2>
          <p>Our team is one message away.</p>
          <Link to="/contact" className="support-cta-btn">
            Contact Us <span>→</span>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Support