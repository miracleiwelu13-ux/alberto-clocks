import { Link } from 'react-router-dom'
import './DiscountSection.css'

function DiscountSection() {
  return (
    <section className="discount-section">
      <div className="discount-inner">
        {/* Watermark SALE + overlay text */}
        <div className="discount-header">
          <span className="discount-watermark">SALE</span>
          <span className="discount-label">THE BIG FALL SALE</span>
        </div>

        {/* Offer text */}
        <p className="discount-kicker">Three words: this. won't. last.</p>
        <h2 className="discount-headline">Up to 30% Off</h2>
        <p className="discount-sub">Select styles. While quantities last.</p>

        {/* CTA */}
        <Link to="/products?filter=discounted" className="discount-cta">
           Shop All
        </Link>
      </div>
    </section>
  )
}

export default DiscountSection