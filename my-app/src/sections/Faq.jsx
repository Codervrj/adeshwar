import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SectionWrapper, { SectionHeading } from '../components/SectionWrapper'

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "A landing page or marketing site: 3–7 days. A web app MVP: 4–8 weeks. A full-featured SaaS or mobile app: 2–3 months. Every timeline is confirmed in writing before any work begins — no vague estimates.",
  },
  {
    q: "How do you communicate during a project?",
    a: "You'll have access to the shared repository from day one. I send progress updates every 1–2 days and we schedule check-in calls at key milestones. You're never left wondering what's happening.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes — I work with clients in the US, UK, Europe, and across Asia. I structure communication around your timezone and use async-first tools so nothing gets blocked by time differences.",
  },
  {
    q: "What's included after the project is delivered?",
    a: "Every project includes a 14-day support window post-launch — bugs, small adjustments, and deployment issues are handled at no extra cost. For ongoing work, monthly maintenance retainers are available.",
  },
  {
    q: "How are revisions handled?",
    a: "Projects are scoped in detail before work starts, which keeps mid-project changes rare. If scope shifts, I flag it before proceeding — no surprise invoices. Design work includes 3 full revision rounds.",
  },
  {
    q: "How do we get started?",
    a: "Fill out the contact form or email me directly. I respond within 24 hours, schedule a short discovery call, and send you a detailed proposal within 48 hours of that call.",
  },
]

export default function Faq() {
  const [open, setOpen] = useState(null)

  return (
    <div style={{ background: '#111110' }}>
      <SectionWrapper id="faq">
        <SectionHeading
          label="FAQ"
          title="Common Questions"
          subtitle="Answers to what most clients ask before we start."
        />

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1px',
          background: '#252520',
          border: '1px solid #252520',
          borderRadius: '10px',
          overflow: 'hidden',
        }}>
          {faqs.map((faq, i) => (
            <FaqItem
              key={i}
              faq={faq}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
              isLast={i === faqs.length - 1}
            />
          ))}
        </div>
      </SectionWrapper>
    </div>
  )
}

function FaqItem({ faq, isOpen, onToggle }) {
  return (
    <div
      onClick={onToggle}
      style={{
        background: isOpen ? '#1A1916' : '#151512',
        padding: '1.5rem 1.75rem',
        cursor: 'pointer',
        transition: 'background 0.2s ease',
        borderLeft: isOpen ? '2px solid #C9A96E' : '2px solid transparent',
      }}
      onMouseEnter={e => { if (!isOpen) e.currentTarget.style.background = '#181815' }}
      onMouseLeave={e => { if (!isOpen) e.currentTarget.style.background = '#151512' }}
    >
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '2rem',
      }}>
        <h3 style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: '0.975rem',
          fontWeight: 600,
          color: isOpen ? '#F2EDE4' : '#A09890',
          lineHeight: 1.4,
          transition: 'color 0.2s',
          margin: 0,
        }}>
          {faq.q}
        </h3>
        <span style={{
          color: '#C9A96E',
          fontSize: '1.25rem',
          fontWeight: 300,
          lineHeight: 1,
          flexShrink: 0,
          width: '20px',
          textAlign: 'center',
          transition: 'transform 0.2s',
          transform: isOpen ? 'rotate(45deg)' : 'none',
        }}>
          +
        </span>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.9rem',
              color: '#7A7670',
              lineHeight: 1.75,
              marginTop: '0.9rem',
            }}>
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
