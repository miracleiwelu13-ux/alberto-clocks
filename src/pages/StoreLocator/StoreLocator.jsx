import './StoreLocator.css'

const stores = [
  {
    name: 'Alberto Heritage',
    address: '123 Heritage Avenue, Victoria Island, Lagos',
    phone: '+234 800 000 0001',
    hours: 'Mon–Sat · 10:00 – 19:00',
    featured: true,
  },
  {
    name: 'Alberto Ikoyi',
    address: '45 Kingsway Road, Ikoyi, Lagos',
    phone: '+234 800 000 0002',
    hours: 'Mon–Sat · 10:00 – 19:00',
  },
  {
    name: 'Alberto Abuja',
    address: '12 Aminu Kano Crescent, Wuse II, Abuja',
    phone: '+234 800 000 0003',
    hours: 'Mon–Sat · 10:00 – 19:00',
  },
  {
    name: 'Alberto Port Harcourt',
    address: '8 Aba Road, Port Harcourt',
    phone: '+234 800 000 0004',
    hours: 'Mon–Sat · 10:00 – 19:00',
  },
]

function StoreLocator() {
  return (
    <div className="locator-page">
      <div className="locator-inner">
        {/* Heading */}
        <div className="locator-heading">
          <span className="locator-eyebrow">FIND US</span>
          <h1 className="locator-title">Store Locator</h1>
          <p className="locator-intro">
            Visit an Alberto boutique for consultations, repairs, and appraisals.
          </p>
        </div>

        {/* Map embed */}
        <div className="locator-map">
          <iframe
            title="Alberto store location"
            src="https://www.google.com/maps?q=Victoria+Island+Lagos&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        {/* Stores grid */}
        <div className="locator-stores">
          {stores.map((store) => (
            <div
              key={store.name}
              className={`store-card ${store.featured ? 'featured' : ''}`}
            >
              {store.featured && (
                <span className="store-tag">Flagship</span>
              )}
              <h3 className="store-name">{store.name}</h3>

              <div className="store-line">
                <i className="bi bi-geo-alt"></i>
                <span>{store.address}</span>
              </div>
              <div className="store-line">
                <i className="bi bi-telephone"></i>
                <span>{store.phone}</span>
              </div>
              <div className="store-line">
                <i className="bi bi-clock"></i>
                <span>{store.hours}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default StoreLocator