import { useEffect, useRef } from 'react'

export function useInViewVideo() {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    console.log('useInViewVideo: video =', video)
    if (!video) return

    // Loop first 5 seconds
    const handleTimeUpdate = () => {
      if (video.currentTime >= 5) {
        video.currentTime = 0
      }
    }
    video.addEventListener('timeupdate', handleTimeUpdate)

    // Observe a PARENT element rather than the video itself,
    // so it works even before the video has loaded.
    const target = video.parentElement || video

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {})
          } else {
            video.pause()
          }
        })
      },
      { threshold: 0.1, rootMargin: '200px' }
    )

    observer.observe(target)

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate)
      observer.disconnect()
    }
  }, [])

  return videoRef
}