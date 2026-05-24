import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

const filters = ['All', 'Web App', 'Mobile', 'AI', 'Dashboard']

const categoryMap = {
  'Web App': ['Restaurant Tech', 'HealthTech', 'E-Commerce'],
  'Mobile': ['Restaurant Tech', 'HealthTech'],
  'AI': ['AI Automation'],
  'Dashboard': ['Logistics', 'E-Commerce'],
}

const gridStyles = `
  @media (max-width: 640px) {
    .projects-page-grid { grid-template-columns: 1fr !important; }
  }
`

export default function ProjectsPage() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? projects
    : projects.filter(p => categoryMap[active]?.includes(p.industry))

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
            Portfolio
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
            My Work
          </h1>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '1.05rem',
            color: '#7A7670',
            maxWidth: '480px',
            lineHeight: 1.7,
          }}>
            Projects I've built from idea to production.
          </p>
        </div>
      </div>

      <SectionWrapper>
        {/* Filter bar */}
        <div style={{
          display: 'flex',
          gap: '0.5rem',
          flexWrap: 'wrap',
          marginBottom: '3rem',
        }}>
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.825rem',
                fontWeight: active === f ? 600 : 400,
                color: active === f ? '#0C0C0A' : '#7A7670',
                background: active === f ? '#C9A96E' : 'transparent',
                border: `1px solid ${active === f ? '#C9A96E' : '#252520'}`,
                borderRadius: '4px',
                padding: '0.5rem 1.1rem',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={e => {
                if (active !== f) {
                  e.currentTarget.style.borderColor = '#C9A96E'
                  e.currentTarget.style.color = '#F2EDE4'
                }
              }}
              onMouseLeave={e => {
                if (active !== f) {
                  e.currentTarget.style.borderColor = '#252520'
                  e.currentTarget.style.color = '#7A7670'
                }
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Project cards */}
        {filtered.length > 0 ? (
          <>
            {/* Featured first card */}
            <motion.div
              key={filtered[0].id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              style={{ marginBottom: '1.25rem' }}
            >
              <ProjectCard project={filtered[0]} index={0} featured />
            </motion.div>

            {/* Remaining in grid */}
            {filtered.length > 1 && (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1.25rem',
              }} className="projects-page-grid">
                {filtered.slice(1).map((project, i) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                  >
                    <ProjectCard project={project} index={i + 1} />
                  </motion.div>
                ))}
              </div>
            )}
          </>
        ) : (
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', color: '#3A3830', padding: '2rem 0' }}>
            No projects in this category yet.
          </p>
        )}
      </SectionWrapper>

      {/* CTA */}
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
                Ready to build something?
              </h3>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', color: '#7A7670' }}>
                Let's create your next product.
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
              Hire Me →
            </Link>
          </div>
        </SectionWrapper>
      </div>

      <style>{gridStyles}</style>
    </div>
  )
}

function ProjectCard({ project, index, featured }) {
  const num = String(index + 1).padStart(2, '0')

  return (
    <div
      style={{
        height: '100%',
        background: '#151512',
        border: '1px solid #252520',
        borderRadius: '8px',
        padding: featured ? '2.5rem' : '2rem',
        display: 'flex',
        flexDirection: featured ? 'row' : 'column',
        gap: featured ? '4rem' : '1.25rem',
        alignItems: featured ? 'flex-start' : 'stretch',
        transition: 'border-color 0.25s ease',
        cursor: 'default',
      }}
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

        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '0.9rem',
          color: '#7A7670',
          lineHeight: 1.7,
          maxWidth: featured ? '520px' : 'none',
        }}>
          {project.description}
        </p>

        <a
          href={project.live}
          onClick={project.live === '#' ? e => e.preventDefault() : undefined}
          target={project.live !== '#' ? '_blank' : undefined}
          rel="noopener noreferrer"
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
            cursor: project.live === '#' ? 'default' : 'pointer',
          }}
          onMouseEnter={e => { if (project.live !== '#') e.currentTarget.style.gap = '0.6rem' }}
          onMouseLeave={e => e.currentTarget.style.gap = '0.35rem'}
        >
          View Project →
        </a>
      </div>
    </div>
  )
}
