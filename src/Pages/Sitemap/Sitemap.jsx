import { Link } from 'react-router-dom'
import './Sitemap.css'

const sections = [
  {
    title: 'Shop',
    links: [
      { label: 'Products', to: '/products' },
      { label: 'Technology', to: '/technology' },
      { label: 'Gallery', to: '/gallery' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', to: '/about' },
      { label: 'Contact Us', to: '/contact' },
      { label: 'Support', to: '/support' },
    ],
  },
  {
    title: 'Other',
    links: [
      { label: 'Home', to: '/' },
      { label: 'Store Locator', to: '/store-locator' },
      { label: 'Sign In', to: '/signin' },
      { label: 'Sign Up', to: '/signup' },
      { label: 'Cart', to: '/cart' },
      { label: 'Favourites', to: '/favourites' },
    ],
  },
]

function Sitemap() {
  return (
    <div className="sitemap-page">
      <div className="sitemap-inner">
        <div className="sitemap-heading">
          <span className="sitemap-eyebrow">NAVIGATION</span>
          <h1 className="sitemap-title">Sitemap</h1>
          <p className="sitemap-intro">
            Every page on Alberto Clocks, in one place.
          </p>
        </div>

        <div className="sitemap-grid">
          {sections.map((section) => (
            <div key={section.title} className="sitemap-section">
              <h2 className="sitemap-section-title">{section.title}</h2>
              <ul className="sitemap-list">
                {section.links.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="sitemap-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sitemap