import { useEffect, useState } from 'react'
import './Ticker.css'

function Ticker() {
  const [dateTime, setDateTime] = useState('')
  const [location, setLocation] = useState('Location unavailable')

  // Live date & time — updates every second
  useEffect(() => {
    const update = () => {
      const now = new Date()

      const date = now.toLocaleDateString('en-GB', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })

      const time = now.toLocaleTimeString('en-GB')

      setDateTime(`${date} • ${time}`)
    }

    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  // HTML5 geolocation
  useEffect(() => {
    if (!('geolocation' in navigator)) {
      setLocation('Geolocation not supported')
      return
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude.toFixed(3)
        const lon = pos.coords.longitude.toFixed(3)
        setLocation(`${lat}°, ${lon}°`)
      },
      (err) => {
        console.log('Geolocation error:', err)
        setLocation(err.message || 'Location unavailable')
      },
      { timeout: 8000 }
    )
  }, [])

  const text = `ALBERTO CLOCKS  ✦  ${dateTime}  ✦  ${location}  ✦  `

  return (
    <div className="ticker">
      <div className="ticker-track">
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </div>
  )
}

export default Ticker