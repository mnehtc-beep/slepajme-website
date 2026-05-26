'use client'

import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    bg: 'url("/Slika1.jpg") center/cover no-repeat',
    title: 'Šlep Služba',
    sub: 'Brza i pouzdana pomoć na putu — dostupni 24/7',
    cta: 'Pozovite 069-122-999',
  },
  {
    bg: 'url("/Slika3.jpg") center/cover no-repeat',
    title: 'Brza pomoć 24/7',
    sub: 'Dostupni u svakom trenutku — danju i noću',
    cta: 'Pozovite odmah',
  },
  {
    bg: 'url("/Slika2.jpg") center/cover no-repeat',
    title: 'Kran i Transport',
    sub: 'Dizalica do 8t · Boat transport · Vangabaritni tereti',
    cta: 'Pogledaj usluge',
  },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [fading, setFading] = useState(false)

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

  const slide = slides[current]

  return (
    <div className="hero">
      <div
        className="hero-slide"
        style={{ background: slide.bg, opacity: fading ? 0 : 1 }}
      >
        <div className="hero-overlay" />
        <h1 className="hero-title">{slide.title}</h1>
        <p className="hero-sub">{slide.sub}</p>
        <a href="tel:069122999" className="hero-cta">Pozovite odmah</a>
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
  )
}
