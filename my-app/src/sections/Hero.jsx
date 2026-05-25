import { Link } from 'react-router-dom'
import { services } from '../data/services'

export default function Hero() {
  const ticker = [
    ...services.map(s => s.name),
  ]
  const items = [...ticker, ...ticker]

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      background: '#0C0C0A',
      overflow: 'hidden',
    }}>
      {/* Architectural grid background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(242,237,228,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(242,237,228,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
        zIndex: 0,
      }} />

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '8rem 1.5rem 5rem',
        width: '100%',
      }}>
        {/* Eyebrow */}
        <p
          className="hero-fade-1"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '1rem',
            fontWeight: 400,
            color: '#7A7670',
            letterSpacing: '0.04em',
            marginBottom: '2rem',
          }}
        >
          Full Stack Developer & AI Builder
        </p>

        {/* Main headline */}
        <h1
          className="hero-fade-2"
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(3rem, 7.5vw, 6.5rem)',
            fontWeight: 800,
            lineHeight: 1.02,
            letterSpacing: '-0.04em',
            color: '#F2EDE4',
            marginBottom: '2rem',
            maxWidth: '900px',
          }}
        >
          I Build Digital<br />
          Products <span style={{ color: '#C9A96E' }}>That</span><br />
          Work.
        </h1>

        {/* Sub-headline */}
        <p
          className="hero-fade-3"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(1rem, 1.8vw, 1.125rem)',
            color: '#7A7670',
            lineHeight: 1.75,
            maxWidth: '420px',
            marginBottom: '3rem',
          }}
        >
          CRM, Web apps, and AI tools
          for startups and growing businesses.
        </p>

        {/* CTAs */}
        <div
          className="hero-fade-4"
          style={{
            display: 'flex',
            gap: '2rem',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Link
            to="/contact"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              fontSize: '0.9rem',
              color: '#0C0C0A',
              background: '#C9A96E',
              padding: '0.85rem 2rem',
              borderRadius: '5px',
              textDecoration: 'none',
              transition: 'background 0.2s',
              display: 'inline-block',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#E8D5B0'}
            onMouseLeave={e => e.currentTarget.style.background = '#C9A96E'}
          >
            Contact Me
          </Link>
          <a
            href="#projects"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: '0.9rem',
              color: '#7A7670',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = '#F2EDE4'}
            onMouseLeave={e => e.currentTarget.style.color = '#7A7670'}
          >
            View My Work →
          </a>
        </div>
      </div>

      {/* Divider + Marquee ticker */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        borderTop: '1px solid #252520',
        borderBottom: '1px solid #252520',
        overflow: 'hidden',
        padding: '0.9rem 0',
        maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
      }}>
        <div className="ticker-track">
          {items.map((item, i) => (
            <span key={i} style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.9rem',
              fontWeight: 700,
              letterSpacing: '0.04em',
              color: '#7A7670',
              whiteSpace: 'nowrap',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '1.75rem',
              paddingRight: '1.75rem',
            }}>
              {item}
              <span style={{ color: '#C9A96E', fontSize: '0.4rem', opacity: 0.7 }}>◆</span>
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes hero-fade-up {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-fade-1 { animation: hero-fade-up 0.6s ease forwards; opacity: 0; }
        .hero-fade-2 { animation: hero-fade-up 0.6s 0.1s ease forwards; opacity: 0; }
        .hero-fade-3 { animation: hero-fade-up 0.6s 0.2s ease forwards; opacity: 0; }
        .hero-fade-4 { animation: hero-fade-up 0.6s 0.3s ease forwards; opacity: 0; }

        @keyframes ticker-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .ticker-track {
          display: inline-flex;
          animation: ticker-scroll 22s linear infinite;
          white-space: nowrap;
        }
        .ticker-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
