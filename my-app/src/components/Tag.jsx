export default function Tag({ children, color = 'gold' }) {
  const colors = {
    gold:  { background: 'rgba(201,169,110,0.1)', color: '#C9A96E', border: 'rgba(201,169,110,0.2)' },
    stone: { background: 'rgba(122,118,112,0.1)', color: '#7A7670', border: 'rgba(122,118,112,0.2)' },
    cream: { background: 'rgba(242,237,228,0.06)', color: '#A09890', border: 'rgba(242,237,228,0.1)' },
  }

  const c = colors[color] || colors.gold

  return (
    <span style={{
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: '0.7rem',
      fontWeight: 500,
      color: c.color,
      background: c.background,
      border: `1px solid ${c.border}`,
      padding: '0.2rem 0.6rem',
      borderRadius: '4px',
      letterSpacing: '0.02em',
      display: 'inline-block',
    }}>
      {children}
    </span>
  )
}
