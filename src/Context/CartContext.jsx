import { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('alberto-cart')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('alberto-cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (watch) => {
    setCart((prev) => {
      const existing = prev.find((w) => w.id === watch.id)
      if (existing) {
        return prev.map((w) =>
          w.id === watch.id ? { ...w, quantity: w.quantity + 1 } : w
        )
      }
      return [...prev, { ...watch, quantity: 1 }]
    })
  }

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((w) => w.id !== id))
  }

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) return removeFromCart(id)
    setCart((prev) =>
      prev.map((w) => (w.id === id ? { ...w, quantity } : w))
    )
  }

  const cartCount = cart.reduce((sum, w) => sum + w.quantity, 0)

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, cartCount }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}