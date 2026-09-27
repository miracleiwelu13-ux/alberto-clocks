import { Link } from 'react-router-dom'
import watches from '../../data/watches.json'
import './VintageSection.css'

function VintageSection() {
  const vintageWatches = watches.filter((w) => w.category === 'vintage').slice(0, 3)

  return (
    <section className="vintage-section">
      <div className="vintage-inner">
        {/* LEFT — image */}
        <div className="vintage-image-wrap">
          <img
            src="/images/vintage-still.jpg"
            alt="Vintage watch"
            className="vintage-image"
          />
        </div>

        {/* RIGHT — text + mini watches */}
        <div className="vintage-right">
          <span className="vintage-eyebrow">HERITAGE</span>
          <h2 className="vintage-headline">Vintage</h2>
          <p className="vintage-sub">
            Restored classics with stories older than the people wearing them.
          </p>
          <Link to="/products?category=vintage" className="vintage-link">
            Explore Vintage <span>→</span>
          </Link>

          <div className="vintage-mini-watches">
            {vintageWatches.map((watch) => (
              <Link
                to={`/products?watch=${watch.id}`}
                key={watch.id}
                className="vintage-mini-card"
              >
                <div className="vintage-mini-image">
                  <img src={watch.image} alt={watch.name} />
                </div>
                <h3>{watch.name}</h3>
                <p className="vintage-mini-price">${watch.price.toLocaleString()}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default VintageSection