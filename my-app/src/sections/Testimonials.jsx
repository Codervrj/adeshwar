import SectionWrapper, { SectionHeading } from '../components/SectionWrapper'

{/* Replace with real testimonials when available */}
const placeholders = [
  {
    quote: "The team delivered our SaaS MVP in 6 weeks — clean code, great communication, and zero hand-holding needed. Will hire again.",
    name: "Alex M.",
    role: "Founder, B2B SaaS Startup",
  },
  {
    quote: "Finally a dev team that understands product, not just code. They pushed back on bad ideas and shipped a better solution.",
    name: "Priya S.",
    role: "CTO, HealthTech Company",
  },
  {
    quote: "Integrated our entire WhatsApp workflow and Razorpay payments in under two weeks. Exactly what we needed.",
    name: "Rahul K.",
    role: "Operations Lead, D2C Brand",
  },
]

export default function Testimonials() {
  return (
    <SectionWrapper id="testimonials">
      <SectionHeading
        label="Testimonials"
        title="What Clients Say"
      />

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1px',
        background: '#252520',
        border: '1px solid #252520',
        borderRadius: '10px',
        overflow: 'hidden',
      }} className="testimonials-grid">
        {placeholders.map((t, i) => (
          <div
            key={i}
            style={{
              background: '#151512',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.925rem',
              color: '#A09890',
              lineHeight: 1.75,
              fontStyle: 'italic',
              flex: 1,
            }}>
              "{t.quote}"
            </p>

            <hr style={{ border: 'none', borderTop: '1px solid #252520', margin: 0 }} />

            <div>
              <div style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 600,
                fontSize: '0.875rem',
                color: '#F2EDE4',
                marginBottom: '0.2rem',
              }}>
                {t.name}
              </div>
              <div style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.775rem',
                color: '#7A7670',
              }}>
                {t.role}
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) { .testimonials-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </SectionWrapper>
  )
}
