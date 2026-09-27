import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-grid">
          {/* Brand column */}
          <div className="footer-brand">
            <h3 className="footer-logo">ALBERTO CLOCKS</h3>
            <p className="footer-tagline">
              Luxury timepieces, expert repair, and trusted appraisal since 1987.
            </p>
          </div>

          {/* Shop links */}
          <div className="footer-col">
            <h4>Shop</h4>
            <Link to="/products">Products</Link>
            <Link to="/technology">Technology</Link>
            <Link to="/gallery">Gallery</Link>
          </div>

          {/* Company links */}
          <div className="footer-col">
            <h4>Company</h4>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/support">Support</Link>
            <Link to="/sitemap">Sitemap</Link>
          </div>

          {/* Contact info */}
          <div className="footer-col">
            <h4>Contact</h4>
            <p><i className="bi bi-envelope"></i> info@albertoclocks.com</p>
            <p><i className="bi bi-telephone"></i> +234 800 000 0000</p>
            <p><i className="bi bi-geo-alt"></i> 123 Heritage Avenue, Lagos</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p>© {year} Alberto Watch Company. All rights reserved.</p>
          <div className="footer-social">
            <a href="#" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
            <a href="#" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
            <a href="#" aria-label="Twitter"><i className="bi bi-twitter-x"></i></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer