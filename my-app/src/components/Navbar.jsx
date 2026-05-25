import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { label: 'Work', to: '/projects' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [location])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'background 0.3s ease, border-color 0.3s ease',
        background: scrolled ? 'rgba(12,12,10,0.96)' : 'transparent',
        borderBottom: scrolled ? '1px solid #252520' : '1px solid transparent',
      }}
    >
      <nav style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1.5rem',
        height: '68px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <span style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontWeight: 700,
            fontSize: '1.7rem',
            color: '#F2EDE4',
            letterSpacing: '-0.02em',
          }}>
            Varun Jain<span style={{ color: '#C9A96E' }}>.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="nav-desktop">
          {links.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.875rem',
                fontWeight: 400,
                color: location.pathname === to ? '#F2EDE4' : '#7A7670',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = '#F2EDE4'}
              onMouseLeave={e => e.target.style.color = location.pathname === to ? '#F2EDE4' : '#7A7670'}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/contact"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.875rem',
              fontWeight: 600,
              color: '#0C0C0A',
              textDecoration: 'none',
              background: '#C9A96E',
              padding: '0.5rem 1.25rem',
              borderRadius: '5px',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.target.style.background = '#E8D5B0'}
            onMouseLeave={e => e.target.style.background = '#C9A96E'}
          >
            Contact Me
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.25rem',
            flexDirection: 'column',
            gap: '5px',
          }}
          className="nav-hamburger"
        >
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: 'block',
              width: '22px',
              height: '2px',
              background: '#F2EDE4',
              borderRadius: '2px',
              transition: 'transform 0.3s, opacity 0.3s',
              transform: open
                ? i === 0 ? 'translateY(7px) rotate(45deg)'
                : i === 2 ? 'translateY(-7px) rotate(-45deg)'
                : 'scaleX(0)'
                : 'none',
              opacity: open && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div style={{
        display: open ? 'flex' : 'none',
        flexDirection: 'column',
        background: 'rgba(12,12,10,0.98)',
        borderTop: '1px solid #252520',
        padding: '1.5rem',
        gap: '1rem',
      }} className="nav-drawer">
        {links.map(({ label, to }) => (
          <Link
            key={to}
            to={to}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '1.1rem',
              fontWeight: 400,
              color: location.pathname === to ? '#F2EDE4' : '#7A7670',
              textDecoration: 'none',
              padding: '0.5rem 0',
              borderBottom: '1px solid #252520',
            }}
          >
            {label}
          </Link>
        ))}
        <Link
          to="/contact"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '1rem',
            fontWeight: 600,
            color: '#0C0C0A',
            textDecoration: 'none',
            background: '#C9A96E',
            padding: '0.75rem 1.5rem',
            borderRadius: '5px',
            textAlign: 'center',
            marginTop: '0.5rem',
          }}
        >
          Get In Touch
        </Link>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </header>
  )
}
