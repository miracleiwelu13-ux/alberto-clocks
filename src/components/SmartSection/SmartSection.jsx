import { Link } from 'react-router-dom'
import watches from '../../data/watches.json'
import { useInViewVideo } from '../../hooks/useInViewVideo'
import './SmartSection.css'

function SmartSection() {
  const videoRef = useInViewVideo()

  const smartWatches = watches.filter((w) => w.category === 'smart').slice(0, 3)

  return (
    <section className="smart-section">
      <div className="smart-inner">
        <div className="smart-left">
          <span className="smart-eyebrow">MODERN</span>
          <h2 className="smart-headline">Smart Watches</h2>
          <p className="smart-sub">
            Connected technology, dressed in Alberto's signature finish.
          </p>
          <Link to="/products?category=smart" className="smart-link">
            Explore Smart <span>→</span>
          </Link>

          <div className="smart-mini-watches">
            {smartWatches.map((watch) => (
              <Link
                to={`/products?watch=${watch.id}`}
                key={watch.id}
                className="smart-mini-card"
              >
                <div className="smart-mini-image">
                  <img src={watch.image} alt={watch.name} />
                </div>
                <h3>{watch.name}</h3>
                <p className="smart-mini-price">${watch.price.toLocaleString()}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="smart-video-wrap">
          <video
            ref={videoRef}
            className="smart-video"
            src="/videos/smart-01.mp4"
            poster="/images/posters/smart-01.jpg"
            muted
            loop
            playsInline
          />
        </div>
      </div>
    </section>
  )
}

export default SmartSection