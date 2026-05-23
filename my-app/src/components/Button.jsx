export default function Button({ children, variant = 'primary', href, onClick, style = {} }) {
  const base = {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 600,
    fontSize: '0.9rem',
    padding: '0.75rem 1.75rem',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    transition: 'background 0.2s ease, color 0.2s ease',
    letterSpacing: '0.01em',
  }

  const variants = {
    primary: {
      background: '#C9A96E',
      color: '#0C0C0A',
    },
    secondary: {
      background: 'transparent',
      color: '#7A7670',
      padding: '0.75rem 0',
      border: 'none',
    },
    outline: {
      background: 'transparent',
      color: '#F2EDE4',
      border: '1px solid #252520',
    },
  }

  const merged = { ...base, ...variants[variant], ...style }

  const handleHover = (e, enter) => {
    if (variant === 'primary') {
      e.currentTarget.style.background = enter ? '#E8D5B0' : '#C9A96E'
    } else if (variant === 'secondary') {
      e.currentTarget.style.color = enter ? '#F2EDE4' : '#7A7670'
    } else if (variant === 'outline') {
      e.currentTarget.style.borderColor = enter ? '#C9A96E' : '#252520'
    }
  }

  if (href) {
    return (
      <a
        href={href}
        style={merged}
        onMouseEnter={e => handleHover(e, true)}
        onMouseLeave={e => handleHover(e, false)}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      onClick={onClick}
      style={merged}
      onMouseEnter={e => handleHover(e, true)}
      onMouseLeave={e => handleHover(e, false)}
    >
      {children}
    </button>
  )
}
