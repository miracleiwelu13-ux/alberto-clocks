import { Link } from 'react-router-dom'
import './DealBanner.css'

function DealBanner() {
  return (
    <section className="deal-banner">
      <div className="deal-inner">
        <div className="deal-text">
          <span className="deal-label">Limited offer</span>
          <h2 className="deal-headline">30% off · Today only</h2>
          <p className="deal-sub">Selected vintage and smart timepieces. Ends at midnight.</p>
        </div>

        <Link to="/products?filter=discounted" className="deal-cta">
          Shop the offer <span>→</span>
        </Link>
      </div>
    </section>
  )
}

export default DealBanner