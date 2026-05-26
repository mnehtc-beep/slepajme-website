'use client'

import { useEffect, useRef } from 'react'

export default function ScrollAnimator() {
  const observed = useRef(false)

  useEffect(() => {
    if (observed.current) return
    observed.current = true

    const els = document.querySelectorAll<HTMLElement>('.scroll-animate')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in-view')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return null
}
