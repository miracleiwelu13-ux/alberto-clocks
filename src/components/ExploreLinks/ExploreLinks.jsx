import { Link } from 'react-router-dom'
import './ExploreLinks.css'

const links = [
  {
    icon: 'bi-cpu',
    title: 'Technology',
    text: 'The engineering behind every piece.',
    to: '/technology',
  },
  {
    icon: 'bi-geo-alt',
    title: 'Store Locator',
    text: 'Find a boutique near you.',
    to: '/store-locator',
  },
  {
    icon: 'bi-images',
    title: 'Gallery',
    text: 'See the collection up close.',
    to: '/gallery',
  },
  {
    icon: 'bi-envelope',
    title: 'Contact Us',
    text: 'Speak to our team.',
    to: '/contact',
  },
]

function ExploreLinks() {
  return (
    <section className="explore-links">
      <div className="explore-inner">
        <div className="explore-heading">
          <span className="explore-eyebrow">DISCOVER MORE</span>
          <h2 className="explore-title">Explore Alberto</h2>
        </div>

        <div className="explore-grid">
          {links.map((link) => (
            <Link to={link.to} key={link.title} className="explore-card">
              <i className={`bi ${link.icon} explore-icon`}></i>
              <h3 className="explore-card-title">{link.title}</h3>
              <p className="explore-card-text">{link.text}</p>
              <span className="explore-arrow">→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExploreLinks