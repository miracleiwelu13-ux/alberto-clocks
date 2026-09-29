import { Link } from 'react-router-dom'
import { useFavourites } from '../../context/FavouritesContext'
import { getFinalPrice } from '../../utils/price'
import './Favourites.css'

function Favourites() {
  const { favourites, removeFavourite } = useFavourites()

  return (
    <div className="fav-page">
      <h1 className="fav-title">Your Favourites</h1>

      {favourites.length === 0 ? (
        <div className="fav-empty">
          <i className="bi bi-heart"></i>
          <p>You haven't saved any watches yet.</p>
          <Link to="/products" className="fav-cta">Browse the collection</Link>
        </div>
      ) : (
        <div className="fav-grid">
          {favourites.map((watch) => (
            <div key={watch.id} className="fav-card">
              <img src={watch.image} alt={watch.name} />
              <div className="fav-info">
                <span className="fav-category">{watch.category}</span>
                <h3>{watch.name}</h3>
                <p className="fav-brand">{watch.brand}</p>

                <div className="fav-prices">
                  {watch.discount > 0 ? (
                    <>
                      <span className="fav-price-old">
                        ${watch.price.toLocaleString()}
                      </span>
                      <span className="fav-price">
                        ${getFinalPrice(watch).toLocaleString()}
                      </span>
                    </>
                  ) : (
                    <span className="fav-price">
                      ${watch.price.toLocaleString()}
                    </span>
                  )}
                </div>
              </div>
              <button
                className="fav-remove"
                onClick={() => removeFavourite(watch.id)}
                aria-label="Remove from favourites"
              >
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Favourites