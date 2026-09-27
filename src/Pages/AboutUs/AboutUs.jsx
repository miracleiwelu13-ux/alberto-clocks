import { Link } from 'react-router-dom'
import './AboutUs.css'

function AboutUs() {
  return (
    <div className="about-page">
      {/* 1. Intro */}
      <section className="about-intro">
        <div className="about-inner">
          <span className="about-eyebrow">OUR STORY</span>
          <h1 className="about-headline">A house built on precision.</h1>
          <p className="about-lead">
            Alberto Clocks has been a quiet fixture of the Lagos watch trade since 1987 —
            a small workshop that grew into a full-service house for collectors,
            first-time buyers, and everyone who believes a watch should outlive its owner.
          </p>
        </div>
      </section>

      {/* 2. Story — image left, text right */}
      <section className="about-story">
        <div className="about-inner about-story-grid">
          <div className="about-story-image">
            <img src="/images/about-workshop.jpg" alt="Alberto workshop" />
          </div>
          <div className="about-story-text">
            <h2>From a single bench to a landmark.</h2>
            <p>
              What began as a one-man repair bench on Heritage Avenue is now a
              three-floor boutique, restoration studio, and appraisal service.
              Our technicians trained in Switzerland, Tokyo, and London — but our
              standard has never changed: every piece leaves our hands in better
              condition than it arrived.
            </p>
            <Link to="/contact" className="about-link">
              Visit the atelier <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Founder quote — image right, quote left */}
      <section className="about-quote-section">
        <div className="about-inner about-quote-grid">
          <div className="about-quote-text">
            <i className="bi bi-quote quote-mark"></i>
            <blockquote className="about-quote">
              A watch is not a purchase. It's an inheritance you get to wear.
            </blockquote>
            <p className="about-quote-author">— Alberto Rossi, Founder</p>
          </div>
          <div className="about-founder-image">
            <img src="/images/about-founder.jpg" alt="Alberto Rossi" />
          </div>
        </div>
      </section>

      {/* 4. Stats */}
      <section className="about-stats">
        <div className="about-inner">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-value">1987</span>
              <span className="stat-label">Established</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">12,000+</span>
              <span className="stat-label">Watches serviced</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">100%</span>
              <span className="stat-label">Authenticated in-house</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">40+</span>
              <span className="stat-label">Brands represented</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs