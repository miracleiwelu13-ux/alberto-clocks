import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import watches from '../../data/watches.json'
import ProductCard from '../../components/ProductCard/ProductCard'
import Filters from '../../components/Filters/Filters'
import ProductModal from '../../components/ProductModal/ProductModal'
import './Products.css'

const emptyFilters = {
  category: [],
  gender: [],
  condition: [],
  priceRange: [],
  brand: [],
  onSaleOnly: false,
}

function Products() {
  const [searchParams] = useSearchParams()
  const [sort, setSort] = useState('newest')
  const [showFiltersMobile, setShowFiltersMobile] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [filters, setFilters] = useState(emptyFilters)
  const [selectedWatch, setSelectedWatch] = useState(null)

  // Read URL param on mount
  useEffect(() => {
    if (searchParams.get('filter') === 'discounted') {
      setFilters({ ...emptyFilters, onSaleOnly: true })
    }
  }, [searchParams])

  const handleFilterChange = (group, value) => {
    setFilters((prev) => ({ ...prev, [group]: value }))
  }

  const clearFilters = () => setFilters(emptyFilters)

  // --- Filtering ---
  const filtered = watches.filter((watch) => {
    const categoryOk =
      filters.category.length === 0 ||
      filters.category.includes(watch.category)
    const genderOk =
      filters.gender.length === 0 ||
      filters.gender.includes(watch.gender)
    const conditionOk =
      filters.condition.length === 0 ||
      filters.condition.includes(watch.condition)
    const priceOk =
      filters.priceRange.length === 0 ||
      filters.priceRange.includes(watch.priceRange)
    const brandOk =
      filters.brand.length === 0 ||
      filters.brand.includes(watch.brand)
    const saleOk = !filters.onSaleOnly || watch.discount > 0

    return categoryOk && genderOk && conditionOk && priceOk && brandOk && saleOk
  })

  // --- Sorting ---
  const sorted = [...filtered].sort((a, b) => {
    switch (sort) {
      case 'price-asc':
        return a.price - b.price
      case 'price-desc':
        return b.price - a.price
      case 'name':
        return a.name.localeCompare(b.name)
      case 'newest':
      default:
        return b.id - a.id
    }
  })

  return (
    <div className="products-page">
      <div className="products-inner">
        <div className="products-header">
          <div className="products-header-left">
            <span className="products-eyebrow">THE COLLECTION</span>
            <h1 className="products-title">All Watches</h1>
            <p className="products-count">
              Showing {sorted.length} {sorted.length === 1 ? 'watch' : 'watches'}
            </p>
          </div>

          <div className="products-header-right">
            <button
              className="sidebar-toggle"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <i className={`bi ${sidebarOpen ? 'bi-layout-sidebar-inset' : 'bi-layout-sidebar'}`}></i>
              {sidebarOpen ? 'Hide Filters' : 'Show Filters'}
            </button>

            <button
              className="filters-toggle"
              onClick={() => setShowFiltersMobile(true)}
            >
              <i className="bi bi-funnel"></i> Filters
            </button>

            <div className="products-sort">
              <label htmlFor="sort">Sort:</label>
              <select
                id="sort"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="newest">Newest</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name">Name: A–Z</option>
              </select>
            </div>
          </div>
        </div>

        <div className={`products-layout ${sidebarOpen ? '' : 'no-sidebar'}`}>
          {sidebarOpen && (
            <div className="products-sidebar">
              <Filters
                filters={filters}
                onChange={handleFilterChange}
                onClear={clearFilters}
              />
            </div>
          )}

          <div className="products-grid-wrap">
            {sorted.length === 0 ? (
              <div className="products-empty">
                <i className="bi bi-search"></i>
                <h3>No watches match your filters.</h3>
                <p>Try adjusting or clearing your selections.</p>
                <button onClick={clearFilters} className="products-empty-btn">
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="products-grid">
                {sorted.map((watch) => (
                  <ProductCard
                    key={watch.id}
                    watch={watch}
                    onOpen={setSelectedWatch}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {showFiltersMobile && (
        <div
          className="filters-drawer-overlay"
          onClick={() => setShowFiltersMobile(false)}
        >
          <div
            className="filters-drawer"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="filters-drawer-header">
              <span>Filters</span>
              <button
                onClick={() => setShowFiltersMobile(false)}
                aria-label="Close filters"
              >
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
            <div className="filters-drawer-body">
              <Filters
                filters={filters}
                onChange={handleFilterChange}
                onClear={clearFilters}
              />
            </div>
          </div>
        </div>
      )}
      {selectedWatch && (
        <ProductModal
          watch={selectedWatch}
          onClose={() => setSelectedWatch(null)}
        />
     )}
    </div>
)}

export default Products