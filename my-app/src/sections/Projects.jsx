import { motion } from 'framer-motion'
import SectionWrapper, { SectionHeading } from '../components/SectionWrapper'
import { projects } from '../data/projects'

export default function Projects() {
  const [featured, ...rest] = projects

  return (
    <SectionWrapper id="projects">
      <SectionHeading
        label="Our Work"
        title="Products We've Shipped"
        subtitle="Real systems. Measurable outcomes. Built for production."
      />

      {/* Featured project — full width */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        style={{ marginBottom: '1px' }}
      >
        <ProjectCard project={featured} index={0} featured />
      </motion.div>

      {/* Remaining — 2-column grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '1px',
        background: '#252520',
      }} className="projects-grid">
        {rest.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
          >
            <ProjectCard project={project} index={i + 1} />
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </SectionWrapper>
  )
}

function ProjectCard({ project, index, featured }) {
  const num = String(index + 1).padStart(2, '0')

  const cardStyle = {
    background: '#151512',
    border: featured ? '1px solid #252520' : 'none',
    borderRadius: featured ? '10px' : 0,
    padding: featured ? '2.5rem' : '2rem',
    display: 'flex',
    flexDirection: featured ? 'row' : 'column',
    gap: featured ? '4rem' : '1.25rem',
    alignItems: featured ? 'flex-start' : 'stretch',
    transition: 'border-color 0.25s ease',
    marginBottom: featured ? '1px' : 0,
    cursor: 'default',
  }

  return (
    <div
      style={cardStyle}
      className={featured ? 'card-hover' : ''}
    >
      {/* Large number */}
      <div style={{
        fontFamily: 'Space Grotesk, sans-serif',
        fontSize: featured ? '4rem' : '2.75rem',
        fontWeight: 700,
        color: '#252520',
        lineHeight: 1,
        flexShrink: 0,
        userSelect: 'none',
        letterSpacing: '-0.04em',
      }}>
        {num}
      </div>

      {/* Content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {/* Industry label */}
        <span style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '0.7rem',
          fontWeight: 500,
          color: '#C9A96E',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
        }}>
          {project.industry}
        </span>

        {/* Project name */}
        <h3 style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: featured ? '1.75rem' : '1.25rem',
          fontWeight: 700,
          color: '#F2EDE4',
          lineHeight: 1.15,
          letterSpacing: '-0.02em',
        }}>
          {project.name}
        </h3>

        {/* Outcome description */}
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '0.9rem',
          color: '#7A7670',
          lineHeight: 1.7,
          maxWidth: featured ? '520px' : 'none',
        }}>
          {project.description}
        </p>

        {/* Case study link */}
        <a
          href={project.live}
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.85rem',
            fontWeight: 500,
            color: '#C9A96E',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem',
            marginTop: '0.5rem',
            transition: 'gap 0.2s ease',
          }}
          onMouseEnter={e => e.currentTarget.style.gap = '0.6rem'}
          onMouseLeave={e => e.currentTarget.style.gap = '0.35rem'}
        >
          View Case Study →
        </a>
      </div>
    </div>
  )
}
