import SectionWrapper from '../components/SectionWrapper'
import { Link } from 'react-router-dom'
import { services } from '../data/services'

const gridStyles = `
  @media (max-width: 900px) { .services-page-grid { grid-template-columns: repeat(2, 1fr) !important; } }
  @media (max-width: 560px) { .services-page-grid { grid-template-columns: 1fr !important; } }
`

export default function ServicesPage() {
  return (
    <div style={{ background: '#0C0C0A', paddingTop: '68px' }}>
      {/* Page hero */}
      <div style={{
        background: '#111110',
        borderBottom: '1px solid #252520',
        padding: '5rem 1.5rem 4rem',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.8rem',
            color: '#C9A96E',
            marginBottom: '1.25rem',
            letterSpacing: '0.04em',
          }}>
            Skills & Services
          </p>
          <h1 style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 800,
            color: '#F2EDE4',
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            marginBottom: '1.25rem',
          }}>
            What I Do
          </h1>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '1.05rem',
            color: '#7A7670',
            maxWidth: '480px',
            lineHeight: 1.7,
          }}>
            I cover every layer — from frontend to backend to AI.
          </p>
        </div>
      </div>

      {/* Services grid */}
      <SectionWrapper>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.25rem',
        }} className="services-page-grid">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </SectionWrapper>

      {/* CTA strip */}
      <div style={{ background: '#111110', borderTop: '1px solid #252520' }}>
        <SectionWrapper>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}>
            <div>
              <h3 style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '1.5rem',
                fontWeight: 700,
                color: '#F2EDE4',
                letterSpacing: '-0.02em',
                marginBottom: '0.4rem',
              }}>
                Have a project in mind?
              </h3>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', color: '#7A7670' }}>
                I'd love to hear what you're building.
              </p>
            </div>
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
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#E8D5B0'}
              onMouseLeave={e => e.currentTarget.style.background = '#C9A96E'}
            >
              Let's Talk →
            </Link>
          </div>
        </SectionWrapper>
      </div>

      <style>{gridStyles}</style>
    </div>
  )
}

function ServiceCard({ service }) {
  return (
    <div
      style={{
        background: '#151512',
        border: '1px solid #252520',
        borderRadius: '8px',
        padding: '1.75rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        cursor: 'default',
        transition: 'background 0.2s ease',
      }}
      onMouseEnter={e => e.currentTarget.style.background = '#1A1916'}
      onMouseLeave={e => e.currentTarget.style.background = '#151512'}
    >
      {/* Icon box */}
      <div style={{
        width: '40px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(201,169,110,0.08)',
        border: '1px solid rgba(201,169,110,0.15)',
        borderRadius: '8px',
        flexShrink: 0,
      }}>
        <service.icon />
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <h3 style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: '1.5rem',
          fontWeight: 600,
          color: '#F2EDE4',
          lineHeight: 1.3,
        }}>
          {service.name}
        </h3>
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '0.825rem',
          color: '#7A7670',
          lineHeight: 1.6,
        }}>
          {service.description}
        </p>

        {/* Use case bullets */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', marginTop: '0.5rem' }}>
          {service.useCases.map((uc, i) => (
            <div key={i} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
              <span style={{ color: '#C9A96E', fontSize: '0.7rem', flexShrink: 0, marginTop: '0.2rem' }}>→</span>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.775rem', color: '#3A3830', lineHeight: 1.5 }}>
                {uc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
