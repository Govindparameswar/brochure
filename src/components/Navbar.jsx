import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar({ forceScrolled = false }) {
  const [scrolled, setScrolled] = useState(forceScrolled)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (forceScrolled) return
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [forceScrolled])

  const closeMenu = () => {
    setMenuOpen(false)
    document.body.style.overflow = ''
  }

  const toggleMenu = () => {
    setMenuOpen(o => {
      document.body.style.overflow = !o ? 'hidden' : ''
      return !o
    })
  }

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}${menuOpen ? ' menu-open' : ''}`} id="navbar" aria-label="Main navigation">
      <Link to="/" className="nav__logo">Merry Land <span>Ayurvedic Centre</span></Link>
      <ul className={`nav__links${menuOpen ? ' open' : ''}`} id="nav-links">
        {location.pathname === '/book' && <li><Link to="/" onClick={closeMenu}>Home</Link></li>}
        <li><a href="/#panchakarma" onClick={closeMenu}>Panchakarma</a></li>
        <li><a href="/#programmes" onClick={closeMenu}>Programmes</a></li>
        <li><a href="/#pricing" onClick={closeMenu}>Summary &amp; Pricing</a></li>
        <li>
          <Link to="/book" className="no-underline" onClick={closeMenu}>
            <span className="btn btn--primary" style={{ padding:'0.55rem 1.4rem', fontSize:'0.78rem' }}>Book Now</span>
          </Link>
        </li>
      </ul>
      <div className={`nav__hamburger${menuOpen ? ' active' : ''}`} id="hamburger"
        aria-label="Toggle menu" role="button" tabIndex={0}
        onClick={toggleMenu}
        onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && toggleMenu()}>
        <span /><span /><span />
      </div>
    </nav>
  )
}
