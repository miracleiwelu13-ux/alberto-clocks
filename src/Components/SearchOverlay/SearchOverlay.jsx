import { useEffect, useState } from 'react'
import watches from '../../data/watches.json'
import './SearchOverlay.css'

function SearchOverlay({ isOpen, onClose }) {
  const [query, setQuery] = useState('')

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [isOpen, onClose])

  // Reset query when overlay closes
  useEffect(() => {
    if (!isOpen) setQuery('')
  }, [isOpen])

  if (!isOpen) return null

  const q = query.trim().toLowerCase()
  const results = q
    ? watches.filter(
        (w) =>
          w.name.toLowerCase().includes(q) ||
          w.brand.toLowerCase().includes(q) ||
          w.category.toLowerCase().includes(q)
      )
    : []

  return (
    <div className="search-overlay" onClick={onClose}>
      <div className="search-panel" onClick={(e) => e.stopPropagation()}>
        <div className="search-bar">
          <i className="bi bi-search"></i>
          <input
            type="text"
            placeholder="Search watches, brands, categories..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
          <button className="search-close" onClick={onClose} aria-label="Close search">
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        {/* Results */}
        {q && (
          <div className="search-results">
            {results.length === 0 ? (
              <p className="no-results">No watches found for "{query}".</p>
            ) : (
              results.map((watch) => (
                <div key={watch.id} className="search-result">
                  <img src={watch.image} alt={watch.name} />
                  <div className="result-info">
                    <span className="result-category">{watch.category}</span>
                    <h4>{watch.name}</h4>
                    <p className="result-brand">{watch.brand}</p>
                  </div>
                  <span className="result-price">${watch.price.toLocaleString()}</span>
                </div>
              ))
            )}
          </div>
        )}

        {/* Hint when nothing typed */}
        {!q && (
          <p className="search-hint">
            Start typing to search our collection.
          </p>
        )}
      </div>
    </div>
  )
}

export default SearchOverlay