import { useInViewVideo } from '../../hooks/useInViewVideo'
import './Technology.css'

const techCards = [
  {
    icon: 'bi-gear',
    title: 'Automatic Movements',
    text: 'Powered by motion. No battery. Hundreds of tiny parts working in harmony to keep time.',
  },
  {
    icon: 'bi-sun',
    title: 'Solar & Eco-Drive',
    text: 'Light-powered technology that keeps running for months without exposure to the sun.',
  },
  {
    icon: 'bi-gem',
    title: 'Sapphire Crystal',
    text: 'Diamond-hard glass that resists scratches and stays clear for decades.',
  },
  {
    icon: 'bi-activity',
    title: 'Smart Sensors',
    text: 'Heart rate, GPS, and health tracking in modern connected watches.',
  },
]

const standards = [
  'Authenticated in-house',
  'Expert appraisals',
  'Servicing available',
  'Warranty on all brands',
]

function Technology() {
  const videoRef = useInViewVideo()

  return (
    <div className="tech-page">
      <section className="tech-intro">
        <div className="tech-inner">
          <span className="tech-eyebrow">KNOW YOUR WATCH</span>
          <h1 className="tech-headline">The technology behind the timepiece.</h1>
          <p className="tech-lead">
            From mechanical movements to solar-powered accuracy — here's what
            separates a good watch from a great one.
          </p>
        </div>
      </section>

      <section className="tech-cards-section">
        <div className="tech-inner">
          <div className="tech-cards">
            {techCards.map((card) => (
              <div key={card.title} className="tech-card">
                <i className={`bi ${card.icon} tech-card-icon`}></i>
                <h3 className="tech-card-title">{card.title}</h3>
                <p className="tech-card-text">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="tech-split">
        <div className="tech-inner tech-split-grid">
          <div className="tech-split-text">
            <span className="tech-split-eyebrow">THE MOVEMENT</span>
            <h2 className="tech-split-headline">Choosing the right movement.</h2>
            <p className="tech-split-body">
              Whether you want the romance of a mechanical watch, the accuracy
              of quartz, or the convenience of a smart watch — we'll help you
              pick what fits your life. Every piece we sell is authenticated,
              inspected, and backed by our service guarantee.
            </p>
          </div>

          <div className="tech-split-video-wrap">
            <video
              ref={videoRef}
              className="tech-split-video"
              src="/videos/technology-movement.mp4"
              poster="/images/posters/technology-movement.jpg"
              muted
              loop
              playsInline
            />
          </div>
        </div>
      </section>

      <section className="tech-standards">
        <div className="tech-inner">
          <div className="standards-grid">
            {standards.map((item) => (
              <div key={item} className="standard-item">
                <i className="bi bi-check2-circle"></i>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Technology