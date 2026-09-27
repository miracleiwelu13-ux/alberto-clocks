import { useEffect, useState } from 'react'
import { useFavourites } from '../../context/FavouritesContext'
import { useCart } from '../../context/CartContext'
import './ProductModal.css'

function ProductModal({ watch, onClose }) {
  const [quantity, setQuantity] = useState(1)
  const { isFavourite, toggleFavourite } = useFavourites()
  const { addToCart } = useCart()

  // Reset quantity when a new watch opens
  useEffect(() => {
    setQuantity(1)
  }, [watch])

  // Close on Escape
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  // Lock scroll while open
  useEffect(() => {
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = original
    }
  }, [])

  if (!watch) return null

  const fav = isFavourite(watch.id)
  const discountedPrice = watch.discount
    ? Math.round(watch.price * (1 - watch.discount / 100))
    : null

  const handleAddToCart = () => {
    // Add the watch `quantity` times
    for (let i = 0; i < quantity; i++) {
      addToCart(watch)
    }
    onClose()
  }

  return (
    <div className="product-modal-overlay" onClick={onClose}>
      <div className="product-modal" onClick={(e) => e.stopPropagation()}>
        <button className="product-modal-close" onClick={onClose} aria-label="Close">
          <i className="bi bi-x-lg"></i>
        </button>

        <div className="product-modal-grid">
          {/* Image */}
          <div className="product-modal-image">
            <img src={watch.image} alt={watch.name} />
            {watch.discount > 0 && (
              <span className="product-modal-badge">−{watch.discount}%</span>
            )}
          </div>

          {/* Details */}
          <div className="product-modal-info">
            <span className="product-modal-brand">{watch.brand}</span>
            <h2 className="product-modal-name">{watch.name}</h2>

            {/* Price */}
            <div className="product-modal-prices">
              {discountedPrice ? (
                <>
                  <span className="product-modal-price-old">
                    ${watch.price.toLocaleString()}
                  </span>
                  <span className="product-modal-price-new">
                    ${discountedPrice.toLocaleString()}
                  </span>
                </>
              ) : (
                <span className="product-modal-price">
                  ${watch.price.toLocaleString()}
                </span>
              )}
            </div>

            <p className="product-modal-description">{watch.description}</p>

            {/* Specs */}
            <div className="product-modal-specs">
              <div className="spec-row">
                <span className="spec-label">Category</span>
                <span className="spec-value">{watch.category}</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Gender</span>
                <span className="spec-value">{watch.gender}</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Condition</span>
                <span className="spec-value">{watch.condition}</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Reference</span>
                <span className="spec-value">#{String(watch.id).padStart(4, '0')}</span>
              </div>
            </div>

            {/* Quantity */}
            <div className="product-modal-qty">
              <span className="qty-label">Quantity</span>
              <div className="qty-controls">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  aria-label="Decrease"
                >
                  <i className="bi bi-dash"></i>
                </button>
                <span>{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  aria-label="Increase"
                >
                  <i className="bi bi-plus"></i>
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="product-modal-actions">
              <button className="modal-add-cart" onClick={handleAddToCart}>
                <i className="bi bi-bag-plus"></i> Add to Cart
              </button>
              <button
                className={`modal-fav-btn ${fav ? 'active' : ''}`}
                onClick={() => toggleFavourite(watch)}
                aria-label={fav ? 'Remove from favourites' : 'Add to favourites'}
              >
                <i className={`bi ${fav ? 'bi-heart-fill' : 'bi-heart'}`}></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductModal