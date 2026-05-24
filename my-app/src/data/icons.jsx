const p = {
  width: 20, height: 20,
  fill: 'none',
  stroke: '#C9A96E',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  viewBox: '0 0 24 24',
}

export const Globe = () => (
  <svg {...p}>
    <circle cx="12" cy="12" r="10"/>
    <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
  </svg>
)

export const Smartphone = () => (
  <svg {...p}>
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
    <path d="M12 18h.01"/>
  </svg>
)

export const Bot = () => (
  <svg {...p}>
    <rect x="3" y="11" width="18" height="10" rx="2"/>
    <circle cx="12" cy="5" r="2"/>
    <path d="M12 7v4M8 15v.01M16 15v.01"/>
  </svg>
)

export const CodeBrackets = () => (
  <svg {...p}>
    <polyline points="16 18 22 12 16 6"/>
    <polyline points="8 6 2 12 8 18"/>
  </svg>
)

export const LayoutDashboard = () => (
  <svg {...p}>
    <rect x="3" y="3" width="7" height="9" rx="1"/>
    <rect x="14" y="3" width="7" height="5" rx="1"/>
    <rect x="14" y="12" width="7" height="9" rx="1"/>
    <rect x="3" y="16" width="7" height="5" rx="1"/>
  </svg>
)

export const MessageSquare = () => (
  <svg {...p}>
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
  </svg>
)

export const Plug = () => (
  <svg {...p}>
    <path d="M12 22v-5M9 8V2M15 8V2"/>
    <rect x="6" y="8" width="12" height="7" rx="2"/>
  </svg>
)

export const Shield = () => (
  <svg {...p}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
)

export const Puzzle = () => (
  <svg {...p}>
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/>
    <line x1="7" y1="7" x2="7.01" y2="7"/>
  </svg>
)

export const Users = () => (
  <svg {...p}>
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
  </svg>
)

export const Monitor = () => (
  <svg {...p}>
    <rect x="2" y="3" width="20" height="14" rx="2"/>
    <path d="M8 21h8M12 17v4"/>
  </svg>
)

export const Network = () => (
  <svg {...p}>
    <rect x="9" y="2" width="6" height="6" rx="1"/>
    <rect x="2" y="16" width="6" height="6" rx="1"/>
    <rect x="16" y="16" width="6" height="6" rx="1"/>
    <path d="M12 8v4M12 12l-4.5 4M12 12l4.5 4"/>
  </svg>
)

export const Feather = () => (
  <svg {...p}>
    <path d="M20.24 12.24a6 6 0 00-8.49-8.49L5 10.5V19h8.5z"/>
    <path d="M16 8L2 22M17.5 15H9"/>
  </svg>
)

export const ShoppingBag = () => (
  <svg {...p}>
    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
    <line x1="3" y1="6" x2="21" y2="6"/>
    <path d="M16 10a4 4 0 01-8 0"/>
  </svg>
)

export const PenTool = () => (
  <svg {...p}>
    <path d="M12 19l7-7 3 3-7 7-3-3z"/>
    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
    <path d="M2 2l7.586 7.586"/>
    <circle cx="11" cy="11" r="2"/>
  </svg>
)
