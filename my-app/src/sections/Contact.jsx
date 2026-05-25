import { useState } from 'react'
import SectionWrapper, { SectionHeading } from '../components/SectionWrapper'
import { services } from '../data/services'

const FORMSPREE_URL = 'https://formspree.io/f/mykvdoel'

const inputStyle = {
  width: '100%',
  background: '#111110',
  border: '1px solid #252520',
  borderRadius: '6px',
  padding: '0.75rem 1rem',
  fontFamily: 'Inter, sans-serif',
  fontSize: '0.9rem',
  color: '#F2EDE4',
  outline: 'none',
  transition: 'border-color 0.2s',
  boxSizing: 'border-box',
}

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', company: '', service: '', message: '',
  })
  const [status, setStatus] = useState('idle')

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleFocus  = e => { e.target.style.borderColor = '#C9A96E' }
  const handleBlur   = e => { e.target.style.borderColor = '#252520' }

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'success' : 'error')
      if (res.ok) setForm({ name: '', email: '', company: '', service: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <div style={{ background: '#111110' }}>
      <SectionWrapper id="contact">
        <SectionHeading
          label="Contact Me"
          title="Let's Work Together"
          subtitle="Tell me what you're building. I'll respond within 24 hours."
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '3rem',
          alignItems: 'start',
        }}>
          {/* Contact form */}
          <div style={{
            background: '#151512',
            border: '1px solid #252520',
            borderRadius: '10px',
            padding: '2rem',
          }}>
            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem', color: '#C9A96E' }}>✓</div>
                <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.25rem', color: '#F2EDE4', marginBottom: '0.5rem' }}>
                  Message Sent
                </h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', color: '#7A7670' }}>
                  We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', color: '#7A7670', display: 'block', marginBottom: '0.4rem' }}>
                      Name <span style={{ color: '#C9A96E' }}>*</span>
                    </label>
                    <input
                      name="name" value={form.name} onChange={handleChange}
                      onFocus={handleFocus} onBlur={handleBlur}
                      required placeholder="Your name" style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', color: '#7A7670', display: 'block', marginBottom: '0.4rem' }}>
                      Email <span style={{ color: '#C9A96E' }}>*</span>
                    </label>
                    <input
                      name="email" type="email" value={form.email} onChange={handleChange}
                      onFocus={handleFocus} onBlur={handleBlur}
                      required placeholder="you@company.com" style={inputStyle}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', color: '#7A7670', display: 'block', marginBottom: '0.4rem' }}>
                    Company <span style={{ color: '#3A3830' }}>(optional)</span>
                  </label>
                  <input
                    name="company" value={form.company} onChange={handleChange}
                    onFocus={handleFocus} onBlur={handleBlur}
                    placeholder="Company or startup name" style={inputStyle}
                  />
                </div>

                <div>
                  <label style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', color: '#7A7670', display: 'block', marginBottom: '0.4rem' }}>
                    Service Needed <span style={{ color: '#C9A96E' }}>*</span>
                  </label>
                  <select
                    name="service" value={form.service} onChange={handleChange}
                    onFocus={handleFocus} onBlur={handleBlur} required
                    style={{
                      ...inputStyle,
                      cursor: 'pointer',
                      appearance: 'none',
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%237A7670' stroke-width='2' viewBox='0 0 24 24'%3E%3Cpath d='M6 9l6 6 6-6' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 1rem center',
                      paddingRight: '2.5rem',
                    }}
                  >
                    <option value="" disabled style={{ background: '#151512' }}>Select a service…</option>
                    {services.map(s => (
                      <option key={s.id} value={s.name} style={{ background: '#151512' }}>{s.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', color: '#7A7670', display: 'block', marginBottom: '0.4rem' }}>
                    Message <span style={{ color: '#C9A96E' }}>*</span>
                  </label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange}
                    onFocus={handleFocus} onBlur={handleBlur} required rows={5}
                    placeholder="Tell us about your project, timeline, and budget…"
                    style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6 }}
                  />
                </div>

                {status === 'error' && (
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', color: '#EF4444' }}>
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    color: '#0C0C0A',
                    background: status === 'loading' ? '#E8D5B0' : '#C9A96E',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '0.85rem',
                    cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                    transition: 'background 0.2s',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                  }}
                  onMouseEnter={e => { if (status !== 'loading') e.currentTarget.style.background = '#E8D5B0' }}
                  onMouseLeave={e => { if (status !== 'loading') e.currentTarget.style.background = '#C9A96E' }}
                >
                  {status === 'loading' ? 'Sending…' : 'Send Message'}
                  {status !== 'loading' && (
                    <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact details panel */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <h3 style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '1.15rem',
                fontWeight: 700,
                color: '#F2EDE4',
                marginBottom: '0.5rem',
                letterSpacing: '-0.02em',
              }}>
                Prefer to reach out directly?
              </h3>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.9rem',
                color: '#7A7670',
                lineHeight: 1.7,
              }}>
                Whether you have a fully scoped project or just an idea — we're happy to talk.
              </p>
            </div>

            <ContactItem
              icon={
                <svg width="18" height="18" fill="none" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <path d="M22 6l-10 7L2 6"/>
                </svg>
              }
              label="Email"
              value="contact@varunjain.one"
              href="mailto:contact@varunjain.one"
            />

            <ContactItem
              icon={
                <svg width="18" height="18" fill="#C9A96E" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              }
              label="LinkedIn"
              value="linkedin.com/in/varun-jain-dev"
              href="https://linkedin.com/in/varun-jain-dev"
            />

            <ContactItem
              icon={
                <svg width="18" height="18" fill="none" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              }
              label="Location"
              value="Remote worldwide"
            />

            <div style={{
              background: 'rgba(201,169,110,0.06)',
              border: '1px solid rgba(201,169,110,0.15)',
              borderRadius: '8px',
              padding: '1rem 1.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
            }}>
              <span style={{ color: '#C9A96E', fontSize: '1rem' }}>⚡</span>
              <div>
                <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.875rem', fontWeight: 600, color: '#F2EDE4' }}>
                  Fast Response
                </div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', color: '#7A7670' }}>
                  I respond to every inquiry within 24 hours
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}

function ContactItem({ icon, label, value, href }) {
  const content = (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
      <div style={{
        width: '38px',
        height: '38px',
        background: 'rgba(201,169,110,0.08)',
        border: '1px solid rgba(201,169,110,0.15)',
        borderRadius: '7px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}>
        {icon}
      </div>
      <div>
        <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: '#3A3830', marginBottom: '0.15rem' }}>
          {label}
        </div>
        <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: href ? '#C9A96E' : '#A09890', fontWeight: 400 }}>
          {value}
        </div>
      </div>
    </div>
  )

  if (href) {
    return (
      <a href={href} target={href.startsWith('mailto') ? '_self' : '_blank'} rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
        {content}
      </a>
    )
  }
  return content
}
