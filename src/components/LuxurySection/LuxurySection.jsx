import { Link } from 'react-router-dom'
import watches from '../../data/watches.json'
import './LuxurySection.css'

function LuxurySection() {
  const handleTimeUpdate = (e) => {
    if (e.currentTarget.currentTime >= 5) {
      e.currentTarget.currentTime = 0
    }
  }

  const luxuryWatches = watches.filter((w) => w.category === 'luxury').slice(0, 3)

  return (
    <section className="luxury-section">
      <div className="luxury-inner">
        {/* LEFT — text + mini watches */}
        <div className="luxury-left">
          <span className="luxury-eyebrow">THE COLLECTION</span>
          <h2 className="luxury-headline">Luxury</h2>
          <p className="luxury-sub">
            Precision, heritage, and quiet confidence — for those who know the difference.
          </p>
          <Link to="/products?category=luxury" className="luxury-link">
            Explore Luxury <span>→</span>
          </Link>

          {/* Mini watch row */}
          <div className="luxury-mini-watches">
            {luxuryWatches.map((watch) => (
              <Link
                to={`/products?watch=${watch.id}`}
                key={watch.id}
                className="luxury-mini-card"
              >
                <div className="luxury-mini-image">
                  <img src={watch.image} alt={watch.name} />
                </div>
                <h3>{watch.name}</h3>
                <p className="luxury-mini-price">${watch.price.toLocaleString()}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* RIGHT — video */}
        <div className="luxury-video-wrap">
          <video
            className="luxury-video"
            src="/videos/luxury-01.mp4"
            autoPlay
            muted
            loop
            playsInline
            onTimeUpdate={handleTimeUpdate}
          />
        </div>
      </div>
    </section>
  )
}

export default LuxurySection