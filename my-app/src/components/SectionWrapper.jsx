import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function SectionWrapper({ children, id, style = {}, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        padding: '5rem 1.5rem',
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%',
        ...style,
      }}
      className={className}
    >
      {children}
    </motion.section>
  )
}

export function SectionHeading({ label, title, subtitle }) {
  return (
    <div style={{ marginBottom: '3rem' }}>
      {label && (
        <span style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '1rem',
          fontWeight: 500,
          color: '#C9A96E',
          display: 'block',
          marginBottom: '0.75rem',
          letterSpacing: '0.04em',
        }}>
          {label}
        </span>
      )}
      <h2 style={{
        fontFamily: 'Space Grotesk, sans-serif',
        fontSize: 'clamp(2rem, 5vw, 3.75rem)',
        fontWeight: 800,
        color: '#F2EDE4',
        lineHeight: 1.1,
        letterSpacing: '-0.03em',
        marginBottom: subtitle ? '1rem' : 0,
      }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '1.05rem',
          color: '#7A7670',
          maxWidth: '520px',
          lineHeight: 1.7,
        }}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
