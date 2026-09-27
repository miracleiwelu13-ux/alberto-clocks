import { Link } from 'react-router-dom'
import './MidCraftSection.css'

function MidCraftSection() {
  const handleTimeUpdate = (e) => {
    if (e.currentTarget.currentTime >= 5) {
      e.currentTarget.currentTime = 0
    }
  }

  return (
    <section className="mid-craft">
      <video
        className="mid-craft-video"
        src="/videos/mid-craft.mp4"
        autoPlay
        muted
        loop
        playsInline
        onTimeUpdate={handleTimeUpdate}
      />

      <div className="mid-craft-overlay" />

      <div className="mid-craft-inner">
        <div className="mid-craft-panel">
          <span className="mid-craft-eyebrow">THE ALBERTO STANDARD</span>
          <h2 className="mid-craft-headline">Built to outlast trends.</h2>
          <p className="mid-craft-body">
            Every Alberto timepiece is assembled, inspected, and finished by hand.
            From the movement to the clasp, nothing is rushed.
          </p>
          <Link to="/technology" className="mid-craft-cta">
            Our craft <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default MidCraftSection