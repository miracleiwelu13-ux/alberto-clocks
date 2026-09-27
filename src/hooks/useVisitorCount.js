import { useEffect, useState } from 'react'

export function useVisitorCount() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // Read existing count (default 0)
    const stored = Number(localStorage.getItem('alberto-visits') || 0)

    // Increment
    const updated = stored + 1

    // Save back
    localStorage.setItem('alberto-visits', updated)

    // Update state → rerender with new number
    setCount(updated)
  }, [])

  return count
}