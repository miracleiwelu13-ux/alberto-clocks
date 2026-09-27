import { NavLink } from 'react-router-dom'
import './Menu.css'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/products', label: 'Products' },
  { to: '/technology', label: 'Technology' },
  { to: '/store-locator', label: 'Store Locator' },
  { to: '/support', label: 'Support' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact Us' },
  { to: '/sitemap', label: 'Sitemap' },
]

function Menu({ isOpen, onClose }) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`menu-overlay ${isOpen ? 'open' : ''}`}
        onClick={onClose}
      />

      {/* Drawer */}
      <aside className={`menu-drawer ${isOpen ? 'open' : ''}`}>
        <div className="menu-header">
          <span className="menu-brand">ALBERTO</span>
          <button className="menu-close" onClick={onClose} aria-label="Close menu">
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        <nav className="menu-nav">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `menu-link ${isActive ? 'active' : ''}`
              }
              onClick={onClose}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="menu-footer">
          <NavLink to="/favourites" className="menu-shortcut" onClick={onClose}>
            <i className="bi bi-heart"></i> Favourites
          </NavLink>
          <NavLink to="/cart" className="menu-shortcut" onClick={onClose}>
            <i className="bi bi-bag"></i> Cart
          </NavLink>
          <NavLink to="/signin" className="menu-shortcut" onClick={onClose}>
            <i className="bi bi-person"></i> Sign In
          </NavLink>
        </div>
      </aside>
    </>
  )
}

export default Menu