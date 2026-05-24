import SectionWrapper, { SectionHeading } from '../components/SectionWrapper'
import { services } from '../data/services'

const gridStyles = `
  @media (max-width: 900px) { .services-grid { grid-template-columns: repeat(2, 1fr) !important; } }
  @media (max-width: 560px) { .services-grid { grid-template-columns: 1fr !important; } }
`

export default function Services() {
  return (
    <div style={{ background: '#111110' }}>
      <SectionWrapper id="services">
        <SectionHeading
          label="Skills & Services"
          title="What I Do"
          subtitle="End-to-end — I cover every layer of your product."
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.25rem',
        }} className="services-grid">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        <style>{gridStyles}</style>
      </SectionWrapper>
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

      <div>
        <h3 style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: '0.95rem',
          fontWeight: 600,
          color: '#F2EDE4',
          marginBottom: '0.4rem',
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
      </div>
    </div>
  )
}

