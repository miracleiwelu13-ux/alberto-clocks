import { useInViewVideo } from '../../hooks/useInViewVideo'
import './ServicesStrip.css'

const services = [
  {
    icon: 'bi-tools',
    title: 'Repair',
    text: 'Expert servicing for every movement.',
  },
  {
    icon: 'bi-clipboard-check',
    title: 'Appraisal',
    text: 'Trusted valuations for insurance and resale.',
  },
  {
    icon: 'bi-bag',
    title: 'Retail',
    text: 'A curated selection of luxury and modern pieces.',
  },
]

function ServicesStrip() {
  const videoRef = useInViewVideo()

  return (
    <section className="services-strip">
      <video
        ref={videoRef}
        className="services-video"
        src="/videos/repair-01.mp4"
        poster="/images/posters/repair-01.jpg"
        muted
        loop
        playsInline
      />

      <div className="services-overlay" />

      <div className="services-inner">
        <div className="services-heading">
          <span className="services-eyebrow">FULL SERVICE</span>
          <h2 className="services-title">Beyond the sale.</h2>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.title} className="service-card">
              <i className={`bi ${service.icon} service-icon`}></i>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-text">{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesStrip