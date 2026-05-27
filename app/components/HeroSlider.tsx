'use client'

import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

const slides = [
  {
    bg: 'url("/Slika1.jpg") center/cover no-repeat',
    img: '/Slika1.jpg',
    title: 'Šlep Služba',
    sub: 'Brza i pouzdana pomoć na putu — dostupni 24/7',
  },
  {
    bg: 'url("/Slika3.jpg") center/cover no-repeat',
    img: '/Slika3.jpg',
    title: 'Brza pomoć 24/7',
    sub: 'Dostupni u svakom trenutku — danju i noću',
  },
  {
    bg: 'url("/Slika2.jpg") center/cover no-repeat',
    img: '/Slika2.jpg',
    title: 'Kran i Transport',
    sub: 'Dizalica do 8t · Boat transport · Vangabaritni tereti',
  },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [fading, setFading] = useState(false)
  const [lightbox, setLightbox] = useState(false)

  const goTo = useCallback((index: number) => {
    setFading(true)
    setTimeout(() => {
      setCurrent(index)
      setFading(false)
    }, 320)
  }, [])

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo])
  const prev = () => goTo((current - 1 + slides.length) % slides.length)

  useEffect(() => {
    const t = setInterval(next, 5000)
    return () => clearInterval(t)
  }, [next])

  useEffect(() => {
    if (!lightbox) return
    const close = (e: KeyboardEvent) => { if (e.key === 'Escape') setLightbox(false) }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [lightbox])

  const slide = slides[current]

  return (
    <>
      <div className="hero">
        <div
          className="hero-slide"
          style={{ background: slide.bg, opacity: fading ? 0 : 1 }}
        >
          <div className="hero-overlay" />
          <h1 className="hero-title">{slide.title}</h1>
          <p className="hero-sub">{slide.sub}</p>
          <a href="tel:069122999" className="hero-cta" onClick={e => e.stopPropagation()}>
            Pozovite odmah
          </a>
          <button
            className="hero-zoom"
            onClick={() => setLightbox(true)}
            aria-label="Otvori sliku"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
              <polyline points="15 3 21 3 21 9"/>
              <polyline points="9 21 3 21 3 15"/>
              <line x1="21" y1="3" x2="14" y2="10"/>
              <line x1="3" y1="21" x2="10" y2="14"/>
            </svg>
          </button>
        </div>

        <button className="hero-arrow hero-arrow-left" onClick={prev}>
          <ChevronLeft size={22} />
        </button>
        <button className="hero-arrow hero-arrow-right" onClick={next}>
          <ChevronRight size={22} />
        </button>

        <div className="hero-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`hero-dot${i === current ? ' active' : ''}`}
            />
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(false)}>
          <button className="lightbox-close" onClick={() => setLightbox(false)} aria-label="Zatvori">
            <X size={24} />
          </button>
          <img
            src={slide.img}
            alt={slide.title}
            className="lightbox-img"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}
