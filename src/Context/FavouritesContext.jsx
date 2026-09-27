import { createContext, useContext, useEffect, useState } from 'react'

const FavouritesContext = createContext()

export function FavouritesProvider({ children }) {
  const [favourites, setFavourites] = useState(() => {
    const saved = localStorage.getItem('alberto-favourites')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('alberto-favourites', JSON.stringify(favourites))
  }, [favourites])

  const addFavourite = (watch) => {
    setFavourites((prev) =>
      prev.find((w) => w.id === watch.id) ? prev : [...prev, watch]
    )
  }

  const removeFavourite = (id) => {
    setFavourites((prev) => prev.filter((w) => w.id !== id))
  }

  const isFavourite = (id) => favourites.some((w) => w.id === id)

  const toggleFavourite = (watch) => {
    isFavourite(watch.id) ? removeFavourite(watch.id) : addFavourite(watch)
  }

  return (
    <FavouritesContext.Provider
      value={{ favourites, addFavourite, removeFavourite, isFavourite, toggleFavourite }}
    >
      {children}
    </FavouritesContext.Provider>
  )
}

export function useFavourites() {
  return useContext(FavouritesContext)
}