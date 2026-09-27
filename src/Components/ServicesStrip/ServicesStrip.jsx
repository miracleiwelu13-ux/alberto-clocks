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
  const handleTimeUpdate = (e) => {
    if (e.currentTarget.currentTime >= 5) {
      e.currentTarget.currentTime = 0
    }
  }

  return (
    <section className="services-strip">
      <video
        className="services-video"
        src="/videos/repair-01.mp4"
        autoPlay
        muted
        loop
        playsInline
        onTimeUpdate={handleTimeUpdate}
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