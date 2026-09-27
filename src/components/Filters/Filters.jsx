import './Filters.css'

export const categories = [
  { value: 'luxury', label: 'Luxury' },
  { value: 'vintage', label: 'Vintage' },
  { value: 'smart', label: 'Smart Watches' },
]

export const genders = [
  { value: 'men', label: 'Men' },
  { value: 'women', label: 'Women' },
  { value: 'unisex', label: 'Unisex' },
]

export const conditions = [
  { value: 'new', label: 'New' },
  { value: 'previously-owned', label: 'Previously Owned' },
]

export const priceRanges = [
  { value: 'under-500', label: 'Under $500' },
  { value: '500-2000', label: '$500 – $2,000' },
  { value: '2000-5000', label: '$2,000 – $5,000' },
  { value: '5000-plus', label: '$5,000+' },
]

export const brands = [
  'Rolex', 'Omega', 'TAG Heuer', 'Breitling', 'Cartier', 'IWC',
  'Longines', 'Seiko', 'Bulova', 'Citizen', 'Tissot',
  'Apple', 'Samsung', 'Garmin', 'Fitbit', 'Google', 'Huawei',
]

function Filters({ filters, onChange, onClear }) {
  const toggleValue = (group, value) => {
    const current = filters[group]
    const next = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value]
    onChange(group, next)
  }

  return (
    <aside className="filters">
      {/* Category */}
      <div className="filter-group">
        <h3 className="filter-group-title">Category</h3>
        {categories.map((c) => (
          <label key={c.value} className="filter-option">
            <input
              type="checkbox"
              checked={filters.category.includes(c.value)}
              onChange={() => toggleValue('category', c.value)}
            />
            <span>{c.label}</span>
          </label>
        ))}
      </div>

      {/* Gender */}
      <div className="filter-group">
        <h3 className="filter-group-title">Gender</h3>
        {genders.map((g) => (
          <label key={g.value} className="filter-option">
            <input
              type="checkbox"
              checked={filters.gender.includes(g.value)}
              onChange={() => toggleValue('gender', g.value)}
            />
            <span>{g.label}</span>
          </label>
        ))}
      </div>

      {/* Condition */}
      <div className="filter-group">
        <h3 className="filter-group-title">Condition</h3>
        {conditions.map((c) => (
          <label key={c.value} className="filter-option">
            <input
              type="checkbox"
              checked={filters.condition.includes(c.value)}
              onChange={() => toggleValue('condition', c.value)}
            />
            <span>{c.label}</span>
          </label>
        ))}
      </div>

      {/* Price */}
      <div className="filter-group">
        <h3 className="filter-group-title">Price</h3>
        {priceRanges.map((p) => (
          <label key={p.value} className="filter-option">
            <input
              type="checkbox"
              checked={filters.priceRange.includes(p.value)}
              onChange={() => toggleValue('priceRange', p.value)}
            />
            <span>{p.label}</span>
          </label>
        ))}
      </div>

      {/* Brand */}
      <div className="filter-group">
        <h3 className="filter-group-title">Brand</h3>
        {brands.map((brand) => (
          <label key={brand} className="filter-option">
            <input
              type="checkbox"
              checked={filters.brand.includes(brand)}
              onChange={() => toggleValue('brand', brand)}
            />
            <span>{brand}</span>
          </label>
        ))}
      </div>

      {/* Offers */}
      <div className="filter-group">
        <h3 className="filter-group-title">Offers</h3>
        <label className="filter-option">
          <input
            type="checkbox"
            checked={filters.onSaleOnly}
            onChange={(e) => onChange('onSaleOnly', e.target.checked)}
          />
          <span>On sale only</span>
        </label>
      </div>

      {/* Clear all */}
      <button className="filter-clear" onClick={onClear}>
        Clear all
      </button>
    </aside>
  )
}

export default Filters