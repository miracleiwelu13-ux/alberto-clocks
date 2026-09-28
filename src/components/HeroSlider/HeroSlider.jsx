import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './HeroSlider.css'

const slides = [
  {
    video: '/videos/hero-luxury.mp4',
    poster: '/images/posters/hero-luxury.jpg',
    eyebrow: 'EST. 1987 · LAGOS',
    headline: 'Time, perfected.',
    sub: 'A private collection of exceptional timepieces — crafted for those who measure luxury in moments, not minutes.',
  },
  {
    video: '/videos/hero-vintage.mp4',
    poster: '/images/posters/hero-vintage.jpg',
    eyebrow: 'HERITAGE',
    headline: 'Stories in every second.',
    sub: 'Restored vintage, ready for a new chapter. Every piece carries the weight of its history.',
  },
  {
    video: '/videos/hero-gears.mp4',
    poster: '/images/posters/hero-gears.jpg',
    eyebrow: 'CRAFTED BY HAND',
    headline: 'Inside every movement.',
    sub: 'Precision engineering assembled, inspected, and finished by hand in our atelier.',
  },
]

const SLIDE_DURATION = 7000  // 7 seconds per slide
const VIDEO_LOOP_AT  = 5     // reset video to 0 after 5 seconds

function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const timeoutRef = useRef(null)

  // Auto-advance every SLIDE_DURATION ms (unless paused)
  useEffect(() => {
    if (paused) return

    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, SLIDE_DURATION)

    return () => clearTimeout(timeoutRef.current)
  }, [current, paused])

  // Reset each video's currentTime to keep it looping the first 5 seconds
  const handleTimeUpdate = (e) => {
    if (e.currentTarget.currentTime >= VIDEO_LOOP_AT) {
      e.currentTarget.currentTime = 0
    }
  }

  return (
    <section
      className="hero-slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`hero-slide ${i === current ? 'active' : ''}`}
        >
          <video
            className="hero-video"
            src={slide.video}
            poster={slide.poster}
            autoPlay
            muted
            loop
            playsInline
            onTimeUpdate={handleTimeUpdate}
          />
          <div className="hero-overlay" />

          <div className="hero-content">
            <div className="hero-eyebrow">{slide.eyebrow}</div>
            <h1 className="hero-headline">{slide.headline}</h1>
            <p className="hero-sub">{slide.sub}</p>
            <Link to="/products" className="hero-cta">
              Discover the Collection <span>→</span>
            </Link>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="hero-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero-dot ${i === current ? 'active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroSlider