import HeroSlider from './components/HeroSlider'

const services = [
  {
    title: 'ŠLEPANJE',
    desc: 'Kamiona, tegljača, autobusa, kombija, viljuškara',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="36" height="36">
        <rect x="1" y="3" width="15" height="13" rx="1"/>
        <path d="M16 8h4l3 5v3h-7V8z"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
  },
  {
    title: 'KRAN USLUGE',
    desc: 'Dizalica do 8t i 21m visine',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="36" height="36">
        <path d="M4 22V8l8-6 8 6v14"/>
        <path d="M12 2v8M12 10l6-4"/>
        <line x1="12" y1="10" x2="12" y2="16"/>
        <circle cx="12" cy="17" r="1"/>
        <line x1="8" y1="22" x2="16" y2="22"/>
      </svg>
    ),
  },
  {
    title: 'BOAT TRANSPORT',
    desc: 'Vađenje i prevoz plovila',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="36" height="36">
        <path d="M2 20h20M3 20l2-8h14l2 8"/>
        <path d="M12 4v8M8 12l4-8 4 8"/>
      </svg>
    ),
  },
  {
    title: 'TRANSPORT TERETA',
    desc: 'Lakih, teških, specijalnih i vangabaritnih tereta',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="36" height="36">
        <rect x="2" y="7" width="20" height="14" rx="1"/>
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/>
        <line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
  },
  {
    title: 'U ZEMLJI I INOSTRANSTVU',
    desc: 'Pouzdano i sigurno',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="36" height="36">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
      </svg>
    ),
  },
]

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

function ViberIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
      <path d="M11.4 0C5.5.1 1.2 2.1.3 7.9c-.3 2-.3 3.9-.1 5.9.5 3.9 3.1 6.2 6.9 6.8.3.1.5.1.8.2v2.8c0 .3.1.5.3.6.2.1.5 0 .6-.2l2.1-2.5c.9.1 1.8.1 2.7 0 5.7-.6 9.4-3.7 9.4-9.8.1-6.1-4.2-11.5-11.6-11.7zm4.1 15.5c-.2.5-.5.9-.9 1.2-.3.2-.6.4-1 .4-.3 0-.5-.1-.8-.3-1-.5-1.9-1.2-2.7-2-.8-.8-1.4-1.7-1.9-2.7-.3-.5-.4-1-.3-1.6.1-.4.3-.8.6-1.1.3-.3.7-.4 1.1-.3.2.1.3.2.4.3l1.4 2c.1.2.1.4 0 .6l-.5.7c-.1.2-.1.3 0 .5.4.7 1 1.3 1.7 1.7.1.1.3.1.5 0l.7-.5c.2-.1.4-.1.6 0l2 1.4c.1.1.2.2.3.4 0 .1.1.3-.2.3z"/>
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.83 1.56V6.78a4.85 4.85 0 01-1.06-.09z"/>
    </svg>
  )
}

export default function Home() {
  return (
    <div className="page-outer">
      <div className="page-card">

        {/* Hero */}
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="main-title">ŠLEP SLUŽBA I KRAN</h1>
            <p className="main-location">PODGORICA / CRNA GORA</p>

            <div className="service-tags">
              <span className="tag">ŠLEPANJE</span>
              <span className="tag">TRANSPORT</span>
              <span className="tag">KRAN USLUGE</span>
            </div>

            <a href="tel:069122999" className="phone-number">069-122-999</a>

            <a href="tel:069122999" className="cta-btn">POZOVITE 24/7</a>

            <p className="working-hours">Radno vrijeme: Pon–Ned 24h</p>

            <div className="social-row">
              <a href="https://wa.me/38269122999" className="social-link whatsapp" aria-label="WhatsApp"><WhatsAppIcon /></a>
              <a href="viber://chat?number=%2B38269122999" className="social-link viber" aria-label="Viber"><ViberIcon /></a>
              <a href="https://instagram.com/slepsluzba_i_kran_podgorica" className="social-link instagram" aria-label="Instagram"><InstagramIcon /></a>
              <a href="https://tiktok.com/@slepsluzbapodgorica_cg" className="social-link tiktok" aria-label="TikTok"><TikTokIcon /></a>
            </div>
          </div>
        </section>

        {/* Image slider */}
        <HeroSlider />

        {/* Usluge */}
        <section className="services-section">
          <h2 className="section-heading">USLUGE</h2>
          <div className="services-grid">
            {services.map((s, i) => (
              <div key={i} className="service-card">
                <div className="service-icon">{s.icon}</div>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bottom-cta">
          <p className="bottom-cta-label">Trebate pomoć odmah?</p>
          <a href="tel:069122999" className="bottom-phone">069-122-999</a>
          <a href="tel:069122999" className="cta-btn">POZOVITE 24/7</a>
        </section>

        <footer className="site-footer">
          <p>© 2025 Šlep Služba i Kran Podgorica · Sva prava zadržana</p>
        </footer>

      </div>
    </div>
  )
}
