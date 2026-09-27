import './CardModal.css'
import { Link } from 'react-router-dom'

function CardModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="card-modal-overlay" onClick={onClose}>
      <div className="card-modal" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button className="card-modal-close" onClick={onClose} aria-label="Close">
          <i className="bi bi-x-lg"></i>
        </button>

        {/* Header */}
        <h2 className="card-modal-title">Alberto Privilege</h2>

        {/* The physical card visual */}
        <div className="privilege-card">
          <div className="privilege-card-top">
            <span className="privilege-brand">ALBERTO</span>
            <i className="bi bi-gem privilege-gem"></i>
          </div>
          <div className="privilege-card-middle">
            <span className="privilege-label">PRIVILEGE</span>
          </div>
          <div className="privilege-card-bottom">
            <span className="privilege-number">•••• •••• •••• 4821</span>
            <span className="privilege-since">MEMBER SINCE 2026</span>
          </div>
        </div>

        {/* Welcome + points */}
        <div className="card-welcome">
          <p className="welcome-text">Welcome back, Guest</p>
          <p className="points-text">
            <i className="bi bi-star-fill"></i> Points: <strong>0</strong>
          </p>
        </div>

        {/* Benefits */}
        <div className="card-benefits">
          <h3>Your Benefits</h3>
          <ul>
            <li><i className="bi bi-check2"></i> 10% off all repairs</li>
            <li><i className="bi bi-check2"></i> Early access to new arrivals</li>
            <li><i className="bi bi-check2"></i> Free gift wrapping</li>
            <li><i className="bi bi-check2"></i> Complimentary watch cleaning</li>
          </ul>
        </div>

        {/* Actions */}
      <div className="card-actions">
        <Link to="/signup" className="btn-join" onClick={onClose}>Join Now</Link>
        <Link to="/signin" className="btn-signin" onClick={onClose}>Sign In</Link>
      </div>
      </div>
    </div>
  )
}

export default CardModal