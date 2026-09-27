import { useState } from 'react'
import { Link } from 'react-router-dom'
import CardModal from '../CardModal/CardModal'
import Menu from '../Menu/Menu'
import SearchOverlay from '../SearchOverlay/SearchOverlay'
import { useVisitorCount } from '../../hooks/useVisitorCount'
import { useFavourites } from '../../context/FavouritesContext'
import { useCart } from '../../context/CartContext'
import './Header.css'

function Header() {
    const [cardOpen, setCardOpen] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [searchOpen, setSearchOpen] = useState(false)
    const visitorCount = useVisitorCount()
    const { favourites } = useFavourites()
    const { cartCount } = useCart()
  return (
    <header className="site-header">
      {/* Top announcement bar */}
      <div className="announcement-bar">
        <div className="announcement-track">
          <span>✦ Free returns for 30 days</span>
          <span>✦ 10% off all items</span>
          <span>✦ We collect from your home</span>
          <span>✦ Complimentary gift wrapping</span>
          {/* Duplicated for seamless loop */}
          <span>✦ Free returns for 30 days</span>
          <span>✦ 10% off all items</span>
          <span>✦ We collect from your home</span>
          <span>✦ Complimentary gift wrapping</span>
        </div>
      </div>

      {/* Main header row */}
      <div className="main-header">
        {/* LEFT cluster */}
        <div className="header-left">
          <button
            className="icon-btn menu-btn"
            aria-label="Open menu"
             onClick={() => setMenuOpen(true)}
          >
            <i className="bi bi-list"></i>
          </button>
          <button
            className="icon-btn search-btn"
            aria-label="Search"
            onClick={() => setSearchOpen(true)}
          >
          <i className="bi bi-search"></i>
        </button>
        </div>

        {/* CENTER — logo */}
        <div className="header-center">
          <Link to="/" className="logo">
            ALBERTO CLOCKS
          </Link>
        </div>

        {/* RIGHT cluster */}
        <div className="header-right">
          <Link to="/favourites" className="icon-btn" aria-label="Favourites">
            <span className="icon-wrapper">
              <i className="bi bi-heart"></i>
              {favourites.length > 0 && (
            <span className="icon-badge">{favourites.length}</span>
             )}
            </span>
          </Link>
          <Link to="/cart" className="icon-btn" aria-label="Cart">
            <span className="icon-wrapper">
              <i className="bi bi-bag"></i>
              {cartCount > 0 && (
            <span className="icon-badge">{cartCount}</span>
            )}
            </span>
          </Link>
          <button
            className="icon-btn d-none d-md-inline-flex"
            aria-label="Loyalty card"
            onClick={() => setCardOpen(true)}
            >
            <i className="bi bi-gem"></i>
          </button>
          <span className="visitor-counter d-none d-md-inline-flex">
            <i className="bi bi-eye"></i> {visitorCount.toLocaleString()}
          </span>
        </div>
      </div>
      <CardModal isOpen={cardOpen} onClose={() => setCardOpen(false)} />
      <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  )
}

export default Header