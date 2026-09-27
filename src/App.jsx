import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import Footer from './components/Footer/Footer'
import Ticker from './components/Ticker/Ticker'
import Home from './pages/Home/Home'
import Products from './pages/Products/Products'
import Technology from './pages/Technology/Technology'
import StoreLocator from './pages/StoreLocator/StoreLocator'
import Support from './pages/Support/Support'
import Gallery from './pages/Gallery/Gallery'
import AboutUs from './pages/AboutUs/AboutUs'
import ContactUs from './pages/ContactUs/ContactUs'
import Sitemap from './pages/Sitemap/Sitemap'
import { FavouritesProvider } from './context/FavouritesContext'
import { CartProvider } from './context/CartContext'
import SignIn from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'
import Favourites from './pages/Favourites/Favourites'
import Cart from './pages/Cart/Cart'
import './App.css'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <BrowserRouter>
     <FavouritesProvider>
        <CartProvider>
      <ScrollToTop />
      <Header />
      <Menu />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/store-locator" element={<StoreLocator />} />
          <Route path="/support" element={<Support />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      <Footer />
      <Ticker />
       </CartProvider>
      </FavouritesProvider>
    </BrowserRouter>
  )
}

export default App