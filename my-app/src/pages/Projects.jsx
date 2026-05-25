import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

export default function ProjectsPage() {
  return (
    <div style={{ background: '#0C0C0A', paddingTop: '68px', minHeight: '100vh' }}>

      {/* Page hero */}
      <div style={{
        borderBottom: '1px solid #252520',
        padding: '5rem 1.5rem 4rem',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '1.2rem',
            color: '#C9A96E',
            marginBottom: '1.25rem',
          }}>
            Portfolio
          </p>
          <h1 style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(2.75rem, 6vw, 5rem)',
            fontWeight: 800,
            color: '#F2EDE4',
            lineHeight: 1.0,
            letterSpacing: '-0.04em',
            marginBottom: '1.5rem',
          }}>
            My Work
          </h1>
          {/* <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '1rem',
            color: '#7A7670',
            maxWidth: '400px',
            lineHeight: 1.75,
          }}>
            A few projects I've shipped — each one solving a real problem for a real client.
          </p> */}
        </div>
      </div>

      {/* Project rows */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
        {projects.map((project, i) => (
          <ProjectRow key={project.id} project={project} index={i} />
        ))}
      </div>

      {/* CTA strip */}
      <div style={{ borderTop: '1px solid #252520', marginTop: '2rem' }}>
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '4rem 1.5rem',
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
            Contact Me →
          </Link>
        </div>
      </div>

      <style>{`
        .project-row {
          display: grid;
          grid-template-columns: 72px 1fr auto;
          gap: 2.5rem;
          align-items: start;
          padding: 3.75rem 0;
          border-bottom: 1px solid #252520;
          cursor: default;
          border-left: 2px solid transparent;
          padding-left: 1.5rem;
          margin-left: -1.5rem;
          padding-right: 1.5rem;
          margin-right: -1.5rem;
          transition: border-left-color 0.25s ease, background 0.25s ease;
        }
        .project-row:hover {
          background: #0F0F0D;
          border-left-color: #C9A96E;
        }
        .project-row:first-child {
          border-top: 1px solid #252520;
        }
        .project-row-num {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.9rem;
          font-weight: 600;
          color: #7A7670;
          padding-top: 0.3rem;
          letter-spacing: 0.04em;
        }
        .project-row-link {
          font-family: 'Inter', sans-serif;
          font-size: 0.85rem;
          font-weight: 500;
          color: #7A7670;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.5rem 1rem;
          border: 1px solid #252520;
          border-radius: 4px;
          white-space: nowrap;
          margin-top: 0.2rem;
          transition: color 0.2s ease, border-color 0.2s ease;
        }
        .project-row-link:hover {
          color: #C9A96E;
          border-color: #C9A96E;
        }
        .project-row-link.disabled {
          opacity: 0.3;
          pointer-events: none;
        }
        @media (max-width: 640px) {
          .project-row {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }
          .project-row-num { display: none; }
        }
      `}</style>
    </div>
  )
}

function ProjectRow({ project, index }) {
  const num = String(index + 1).padStart(2, '0')
  const hasLink = project.live !== '#'

  return (
    <motion.div
      className="project-row"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Index */}
      <div className="project-row-num">{num}</div>

      {/* Content */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
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

        <h2 style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: 'clamp(1.4rem, 3vw, 2rem)',
          fontWeight: 700,
          color: '#F2EDE4',
          lineHeight: 1.1,
          letterSpacing: '-0.03em',
        }}>
          {project.name}
        </h2>

        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '0.9rem',
          color: '#7A7670',
          lineHeight: 1.75,
          maxWidth: '560px',
        }}>
          {project.description}
        </p>

        {/* Tech stack pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.25rem' }}>
          {project.techStack.map(t => (
            <span key={t} style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.78rem',
              color: '#A09890',
              background: '#1A1916',
              border: '1px solid #2E2D28',
              borderRadius: '3px',
              padding: '0.25rem 0.6rem',
            }}>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Link */}
      <div>
        <a
          href={hasLink ? project.live : undefined}
          target={hasLink ? '_blank' : undefined}
          rel="noopener noreferrer"
          className={`project-row-link${!hasLink ? ' disabled' : ''}`}
        >
          Visit Site ↗
        </a>
      </div>
    </motion.div>
  )
}
