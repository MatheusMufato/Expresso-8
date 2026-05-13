import { useState, useEffect, useRef } from 'react'

const LINKS = [
  { href: '#cardapio',     label: 'Cardápio'   },
  { href: '#ambiente',     label: 'Ambiente'   },
  { href: '#eventos',      label: 'Eventos'    },
  { href: '#depoimentos',  label: 'Avaliações' },
]

export default function Nav() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const rafRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    // Lenis smooth scroll para a âncora
    const target = document.querySelector(href)
    if (target && window.__lenis) {
      window.__lenis.scrollTo(target, { duration: 1.4 })
    }
  }

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <a href="#" className="nav__logo" onClick={(e) => handleLinkClick(e, '#')}>
        Expresso da 8
        <small>Cafeteria Temática · Plataforma 9¾</small>
      </a>

      <ul className={`nav__links ${menuOpen ? 'nav__links--open' : ''}`}>
        {LINKS.map(({ href, label }) => (
          <li key={href}>
            <a href={href} onClick={(e) => handleLinkClick(e, href)}>
              {label}
            </a>
          </li>
        ))}
        <li>
          <a href="#reserva" className="nav__cta" onClick={(e) => handleLinkClick(e, '#reserva')}>
            Embarcar
          </a>
        </li>
      </ul>

      <button
        className="nav__burger"
        aria-label="Abrir menu"
        onClick={() => setMenuOpen((v) => !v)}
      >
        {menuOpen ? '✕' : '☰'}
      </button>
    </nav>
  )
}
