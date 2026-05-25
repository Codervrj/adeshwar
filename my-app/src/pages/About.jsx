import SectionWrapper, { SectionHeading } from '../components/SectionWrapper'
import { Link } from 'react-router-dom'

const skills = [
  { category: 'Frontend', items: ['React', 'Next.js', 'Redux'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'FastAPI', 'Spring Boot'] },
  { category: 'Database', items: ['MongoDB', 'PostgreSQL', 'MySQL', 'SupaBase'] },
  { category: 'AI / APIs', items: ['Claude API', 'OpenAI', 'LangChain', "Autogen", "MCP"] },
  { category: 'Tools', items: ['Docker', 'Git', 'Postman'] },
]

const facts = [
  'Based in India',
  'Available for remote work worldwide',
  '3+ production products shipped',
  'Full stack: Web, Backend, AI',
  'Responds within 24 hours',
]

const pageHeroStyles = `
  @media (max-width: 1100px) {
    .skills-grid { grid-template-columns: repeat(3, 1fr) !important; }
  }
  @media (max-width: 768px) {
    .about-bio-grid { grid-template-columns: 1fr !important; }
    .skills-grid { grid-template-columns: repeat(2, 1fr) !important; }
  }
  @media (max-width: 480px) {
    .skills-grid { grid-template-columns: 1fr !important; }
  }
`

export default function About() {
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
            About Me
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
            I'm Varun Jain<span style={{ color: '#C9A96E' }}>.</span>
          </h1>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '1.05rem',
            color: '#7A7670',
            maxWidth: '500px',
            lineHeight: 1.7,
          }}>
            Full Stack Developer & AI Builder.
          </p>
        </div>
      </div>

      {/* Bio + facts */}
      <SectionWrapper>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 0.6fr',
          gap: '4rem',
          alignItems: 'start',
        }} className="about-bio-grid">
          {/* Bio */}
          <div>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '1rem',
              color: '#A09890',
              lineHeight: 1.85,
              marginBottom: '1.5rem',
            }}>
              I build production-ready products that clients trust with their
              business. Over the past few years, I've shipped web apps, mobile
              applications, and AI-powered tools for founders and growing teams,
              across industries from healthcare and logistics to e-commerce
              and SaaS.
            </p>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '1rem',
              color: '#A09890',
              lineHeight: 1.85,
            }}>
              What makes working with me different: you deal with one person,
              start to finish. No account managers, no handoffs, no
              miscommunication. You get fast turnarounds, clean maintainable
              code, and a developer who stays accountable long after launch.
              Most of my clients keep coming back.
            </p>
          </div>

          {/* Quick facts */}
          <div style={{
            background: '#151512',
            border: '1px solid #252520',
            borderRadius: '10px',
            padding: '1.75rem',
          }}>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.75rem',
              fontWeight: 500,
              color: '#F2EDE4',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '1.25rem',
            }}>
              Quick Facts
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {facts.map((fact, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <span style={{ color: '#C9A96E', fontSize: '0.8rem', flexShrink: 0, marginTop: '0.1rem' }}>→</span>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: '#7A7670', lineHeight: 1.5 }}>
                    {fact}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Skills */}
      <div style={{ background: '#111110', borderTop: '1px solid #252520', borderBottom: '1px solid #252520' }}>
        <SectionWrapper>
          <SectionHeading
            label="Tech Stack"
            title="What I Work With"
          />
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '1px',
            background: '#252520',
            border: '1px solid #252520',
            borderRadius: '10px',
            overflow: 'hidden',
          }} className="skills-grid">
            {skills.map((group) => (
              <div key={group.category} style={{
                background: '#151512',
                padding: '1.5rem',
              }}>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.7rem',
                  fontWeight: 500,
                  color: '#C9A96E',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '1rem',
                }}>
                  {group.category}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {group.items.map((item) => (
                    <span key={item} style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.875rem',
                      color: '#7A7670',
                    }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </div>

      {/* CTA strip */}
      <SectionWrapper>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.5rem',
          background: '#151512',
          border: '1px solid #252520',
          borderRadius: '10px',
          padding: '2.5rem',
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
              Want to work with me?
            </h3>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', color: '#7A7670' }}>
              Let's talk about your project.
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
            Get In Touch →
          </Link>
        </div>
      </SectionWrapper>

      <style>{pageHeroStyles}</style>
    </div>
  )
}
