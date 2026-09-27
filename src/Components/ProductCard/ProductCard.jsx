import { useFavourites } from '../../context/FavouritesContext'
import { useCart } from '../../context/CartContext'
import './ProductCard.css'

function ProductCard({ watch, onOpen }) {
  const { isFavourite, toggleFavourite } = useFavourites()
  const { addToCart } = useCart()

  const fav = isFavourite(watch.id)
  const discountedPrice = watch.discount
    ? Math.round(watch.price * (1 - watch.discount / 100))
    : null

  return (
    <article className="product-card" onClick={() => onOpen(watch)}>
      {/* Discount badge */}
      {watch.discount > 0 && (
        <span className="product-badge">−{watch.discount}%</span>
      )}

      {/* Image */}
      <div className="product-image-wrap">
        <img
          src={watch.image}
          alt={watch.name}
          className="product-image"
          loading="lazy"
        />

        {/* Hover quick actions */}
        <div className="product-quick-actions">
          <button
            className={`quick-btn ${fav ? 'active' : ''}`}
            onClick={(e) => {
              e.stopPropagation()
              toggleFavourite(watch)
            }}
            aria-label={fav ? 'Remove from favourites' : 'Add to favourites'}
          >
            <i className={`bi ${fav ? 'bi-heart-fill' : 'bi-heart'}`}></i>
          </button>

          <button
            className="quick-btn"
            onClick={(e) => {
              e.stopPropagation()
              addToCart(watch)
            }}
            aria-label="Add to cart"
          >
            <i className="bi bi-bag-plus"></i>
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="product-info">
        <span className="product-brand">{watch.brand}</span>
        <h3 className="product-name">{watch.name}</h3>

        <div className="product-prices">
          {discountedPrice ? (
            <>
              <span className="product-price-old">
                ${watch.price.toLocaleString()}
              </span>
              <span className="product-price-new">
                ${discountedPrice.toLocaleString()}
              </span>
            </>
          ) : (
            <span className="product-price">
              ${watch.price.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </article>
  )
}

export default ProductCard