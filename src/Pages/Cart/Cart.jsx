import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import './Cart.css'

function Cart() {
  const { cart, removeFromCart, updateQuantity, cartCount } = useCart()

  const subtotal = cart.reduce((sum, w) => sum + w.price * w.quantity, 0)

  return (
    <div className="cart-page">
      <h1 className="cart-title">Your Cart</h1>

      {cart.length === 0 ? (
        <div className="cart-empty">
          <i className="bi bi-bag"></i>
          <p>Your cart is empty.</p>
          <Link to="/products" className="cart-cta">Browse the collection</Link>
        </div>
      ) : (
        <div className="cart-layout">
          {/* Items list */}
          <div className="cart-items">
            {cart.map((watch) => (
              <div key={watch.id} className="cart-item">
                <img src={watch.image} alt={watch.name} />

                <div className="cart-item-info">
                  <span className="cart-category">{watch.category}</span>
                  <h3>{watch.name}</h3>
                  <p className="cart-brand">{watch.brand}</p>
                  <p className="cart-unit-price">${watch.price.toLocaleString()} each</p>
                </div>

                <div className="cart-quantity">
                  <button
                    onClick={() => updateQuantity(watch.id, watch.quantity - 1)}
                    aria-label="Decrease quantity"
                  >
                    <i className="bi bi-dash"></i>
                  </button>
                  <span>{watch.quantity}</span>
                  <button
                    onClick={() => updateQuantity(watch.id, watch.quantity + 1)}
                    aria-label="Increase quantity"
                  >
                    <i className="bi bi-plus"></i>
                  </button>
                </div>

                <div className="cart-item-total">
                  ${(watch.price * watch.quantity).toLocaleString()}
                </div>

                <button
                  className="cart-remove"
                  onClick={() => removeFromCart(watch.id)}
                  aria-label="Remove item"
                >
                  <i className="bi bi-x-lg"></i>
                </button>
              </div>
            ))}
          </div>

          {/* Summary */}
          <aside className="cart-summary">
            <h2>Order Summary</h2>
            <div className="summary-row">
              <span>Items</span>
              <span>{cartCount}</span>
            </div>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${subtotal.toLocaleString()}</span>
            </div>
            <div className="summary-row summary-total">
              <span>Total</span>
              <span>${subtotal.toLocaleString()}</span>
            </div>
            <button className="cart-checkout">Proceed to Checkout</button>
            <p className="cart-note">Demo only — no real payment.</p>
          </aside>
        </div>
      )}
    </div>
  )
}

export default Cart