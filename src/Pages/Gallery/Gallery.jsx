import { useEffect, useState } from 'react'
import watches from '../../data/watches.json'
import './Gallery.css'

const pills = [
  { label: 'All', key: 'all', type: 'all' },
  { label: 'Luxury', key: 'luxury', type: 'category' },
  { label: 'Vintage', key: 'vintage', type: 'category' },
  { label: 'Smart', key: 'smart', type: 'category' },
  { label: 'Men', key: 'men', type: 'gender' },
  { label: 'Women', key: 'women', type: 'gender' },
  { label: 'Unisex', key: 'unisex', type: 'gender' },
]

function Gallery() {
  const [active, setActive] = useState([])
  const [lightboxIndex, setLightboxIndex] = useState(null)

  // --- Filtering logic ---
  const filtered = watches.filter((watch) => {
    if (active.length === 0) return true

    const activeCategories = active.filter((a) =>
      ['luxury', 'vintage', 'smart'].includes(a)
    )
    const activeGenders = active.filter((a) =>
      ['men', 'women', 'unisex'].includes(a)
    )

    const categoryMatch =
      activeCategories.length === 0 || activeCategories.includes(watch.category)
    const genderMatch =
      activeGenders.length === 0 || activeGenders.includes(watch.gender)

    return categoryMatch && genderMatch
  })

  // --- Pill toggle ---
  const togglePill = (key) => {
    if (key === 'all') {
      setActive([])
      return
    }
    setActive((prev) =>
      prev.includes(key) ? prev.filter((p) => p !== key) : [...prev, key]
    )
  }

  // --- Lightbox controls ---
  const openLightbox = (index) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)
  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % filtered.length)
  }
  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + filtered.length) % filtered.length)
  }

  // --- Keyboard controls for lightbox ---
  useEffect(() => {
    if (lightboxIndex === null) return

    const handleKey = (e) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'ArrowLeft') prevImage()
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightboxIndex, filtered.length])

  // Close lightbox if filter changes and index goes out of range
  useEffect(() => {
    if (lightboxIndex !== null && lightboxIndex >= filtered.length) {
      setLightboxIndex(null)
    }
  }, [filtered.length, lightboxIndex])

  return (
    <div className="gallery-page">
      <div className="gallery-inner">
        {/* Heading */}
        <div className="gallery-heading">
          <span className="gallery-eyebrow">SEE THE COLLECTION</span>
          <h1 className="gallery-title">Gallery</h1>
          <p className="gallery-intro">
            Every watch in our current collection, up close.
          </p>
        </div>

        {/* Filter pills */}
        <div className="gallery-pills">
          {pills.map((pill) => {
            const isActive =
              pill.key === 'all'
                ? active.length === 0
                : active.includes(pill.key)

            return (
              <button
                key={pill.key}
                className={`gallery-pill ${isActive ? 'active' : ''}`}
                onClick={() => togglePill(pill.key)}
              >
                {pill.label}
              </button>
            )
          })}
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <p className="gallery-empty">No watches match this combination.</p>
        ) : (
          <div className="gallery-grid">
            {filtered.map((watch, i) => (
              <button
                key={watch.id}
                className="gallery-item"
                onClick={() => openLightbox(i)}
                aria-label={`View ${watch.name}`}
              >
                <img src={watch.image} alt={watch.name} />
                <span className="gallery-item-caption">{watch.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && filtered[lightboxIndex] && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">
            <i className="bi bi-x-lg"></i>
          </button>

          <button
            className="lightbox-nav lightbox-prev"
            onClick={(e) => {
              e.stopPropagation()
              prevImage()
            }}
            aria-label="Previous"
          >
            <i className="bi bi-chevron-left"></i>
          </button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={filtered[lightboxIndex].image}
              alt={filtered[lightboxIndex].name}
            />
            <div className="lightbox-info">
              <h3>{filtered[lightboxIndex].name}</h3>
              <p>{filtered[lightboxIndex].brand}</p>
              <p className="lightbox-price">
                ${filtered[lightboxIndex].price.toLocaleString()}
              </p>
            </div>
          </div>

          <button
            className="lightbox-nav lightbox-next"
            onClick={(e) => {
              e.stopPropagation()
              nextImage()
            }}
            aria-label="Next"
          >
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      )}
    </div>
  )
}

export default Gallery