import { useState, useEffect, useRef } from 'react'
import SectionWrapper, { SectionHeading } from '../components/SectionWrapper'

// Replace with real testimonials when available
const testimonials = [
  {
    quote: "Varun demonstrated exceptional professionalism and technical expertise while working with us. His ability to understand requirements, execute clean solutions, and delivered consistently and reliably.",
    name: "Devender Yadav",
    role: "Managing Director, Growth Sphere Industries",
  },
  {
    quote: "Varun showed great skill in building responsive and user-friendly interfaces. His attention to detail, problem-solving mindset, and ability to quickly adapt to new requirements made a real difference in our projects.",
    name: "Faizur Rahman",
    role: "Founder, Nexon Logistics",
  },
  {
    quote: "Varun did an excellent job creating my portfolio website. He perfectly translated my ideas into a clean, modern, and user-friendly design. The flow of the website is smooth — I'm really happy with the outcome.",
    name: "Atharva Gadekar",
    role: "UI/UX Designer",
  },
  {
    quote: "Working with Varun on SareeCanvas was seamless. He understood our vision and delivered a beautiful, functional store that our customers love to shop on.",
    name: "Minakshi",
    role: "CEO, SareeCanvas",
  },
  {
    quote: "We are extremely satisfied with the website Varun created for us. He understood our requirements clearly and delivered a clean, professional, and easy-to-navigate website. Highly recommend his work.",
    name: "Mihir Mehta",
    role: "Freelancer",
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [startX, setStartX] = useState(null)
  const timerRef = useRef(null)

  const resetTimer = () => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setCurrent(c => (c + 1) % testimonials.length)
    }, 5000)
  }

  useEffect(() => {
    resetTimer()
    return () => clearInterval(timerRef.current)
  }, [])

  const go = (idx) => {
    setCurrent((idx + testimonials.length) % testimonials.length)
    resetTimer()
  }
  const prev = () => go(current - 1)
  const next = () => go(current + 1)

  const onTouchStart = e => setStartX(e.touches[0].clientX)
  const onTouchEnd = e => {
    if (startX === null) return
    const diff = startX - e.changedTouches[0].clientX
    if (diff > 48) next()
    else if (diff < -48) prev()
    setStartX(null)
  }

  const t = testimonials[current]

  return (
    <SectionWrapper id="testimonials">
      <SectionHeading
        label="Testimonials"
        title="What Clients Say"
      />

      <div
        style={{ position: 'relative', userSelect: 'none' }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Card */}
        <div style={{
          background: '#151512',
          border: '1px solid #252520',
          borderRadius: '10px',
          padding: 'clamp(1.75rem, 4vw, 3rem)',
          minHeight: '220px',
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Large decorative quote mark */}
          <span style={{
            position: 'absolute',
            top: '1.5rem',
            right: '2rem',
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '6rem',
            fontWeight: 800,
            color: '#1E1D1A',
            lineHeight: 1,
            userSelect: 'none',
            pointerEvents: 'none',
          }}>
            "
          </span>

          {/* Quote */}
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
            color: '#A09890',
            lineHeight: 1.8,
            fontStyle: 'italic',
            maxWidth: '780px',
            position: 'relative',
            zIndex: 1,
          }}>
            "{t.quote}"
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            {/* Author */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              {/* Initials avatar */}
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'rgba(201,169,110,0.12)',
                border: '1px solid rgba(201,169,110,0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 700,
                fontSize: '0.85rem',
                color: '#C9A96E',
                flexShrink: 0,
              }}>
                {t.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </div>
              <div>
                <div style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  color: '#F2EDE4',
                  marginBottom: '0.15rem',
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

            {/* Counter */}
            <span style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.75rem',
              color: '#3A3830',
            }}>
              {String(current + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Controls */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: '1.5rem',
        }}>
          {/* Dots */}
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                style={{
                  width: i === current ? '28px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  background: i === current ? '#C9A96E' : '#252520',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'width 0.3s ease, background 0.3s ease',
                }}
              />
            ))}
          </div>

          {/* Arrows */}
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button
              onClick={prev}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '6px',
                border: '1px solid #252520',
                background: 'transparent',
                color: '#7A7670',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.1rem',
                transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#C9A96E'; e.currentTarget.style.color = '#C9A96E' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#252520'; e.currentTarget.style.color = '#7A7670' }}
            >
              ←
            </button>
            <button
              onClick={next}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '6px',
                border: '1px solid #252520',
                background: 'transparent',
                color: '#7A7670',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.1rem',
                transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#C9A96E'; e.currentTarget.style.color = '#C9A96E' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#252520'; e.currentTarget.style.color = '#7A7670' }}
            >
              →
            </button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
