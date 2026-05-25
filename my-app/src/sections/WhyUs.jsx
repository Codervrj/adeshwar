import { motion } from 'framer-motion'
import SectionWrapper, { SectionHeading } from '../components/SectionWrapper'

const stats = [
  { number: '3×', label: 'Faster delivery' },
  { number: '5+', label: 'Services offered' },
  { number: '3', label: 'Shipped products' },
  { number: '100%', label: 'Client ownership' },
]

const claims = [
  'AI tools built into my workflow — not bolted on',
  'Full stack: web, backend, and AI — no external dependencies',
  'Daily updates — you see every step',
  "I don't disappear after launch — retainers available",
  'Strong engineering foundations with real product experience',
  'Hackathon-tested — I ship under pressure without cutting corners',
]

export default function WhyUs() {
  return (
    <div style={{ background: '#111110' }}>
      <SectionWrapper id="why-us">
        <SectionHeading
          label="Why Me"
          title="Why Work With Me"
        />

        {/* Giant stat numbers */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1px',
          background: '#252520',
          border: '1px solid #252520',
          borderRadius: '10px',
          overflow: 'hidden',
          marginBottom: '4rem',
        }} className="stats-grid">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              style={{
                background: '#151512',
                padding: '2rem 1.5rem',
                textAlign: 'center',
              }}
            >
              <div style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: 'clamp(2rem, 4vw, 3.25rem)',
                fontWeight: 700,
                color: '#C9A96E',
                lineHeight: 1,
                marginBottom: '0.5rem',
                letterSpacing: '-0.03em',
              }}>
                {stat.number}
              </div>
              <div style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.8rem',
                color: '#7A7670',
              }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 2-column layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'start',
        }} className="why-body">
          {/* Left: headline + paragraph */}
          <div>
            <h3 style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: 'clamp(1.4rem, 3vw, 2rem)',
              fontWeight: 700,
              color: '#F2EDE4',
              lineHeight: 1.25,
              letterSpacing: '-0.02em',
              marginBottom: '1rem',
            }}>
              I don't overpromise.<br />
              I just ship.
            </h3>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.95rem',
              color: '#7A7670',
              lineHeight: 1.75,
            }}>
              From MVP to production, I've built the products,
              met the deadlines, and supported clients long after
              launch. Every project gets full attention.
            </p>
          </div>

          {/* Right: bullet list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {claims.map((claim, i) => (
              <div key={i} style={{
                display: 'flex',
                gap: '0.75rem',
                alignItems: 'flex-start',
              }}>
                <span style={{
                  color: '#C9A96E',
                  fontSize: '0.8rem',
                  marginTop: '0.15rem',
                  flexShrink: 0,
                }}>
                  →
                </span>
                <span style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.875rem',
                  color: '#7A7670',
                  lineHeight: 1.65,
                }}>
                  {claim}
                </span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <style>{`
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .why-body { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </div>
  )
}
