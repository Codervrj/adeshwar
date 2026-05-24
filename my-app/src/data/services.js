import {
  Monitor, Network, Feather, ShoppingBag, PenTool,
} from './icons.jsx'

export const services = [
  {
    id: 1,
    icon: Monitor,
    name: "Website Development",
    description: "Clean, fast business websites and landing pages that convert visitors into clients.",
    techStack: ["React", "Next.js", "Vercel", "Tailwind CSS"],
    useCases: ["Business websites", "Landing pages", "Portfolio sites"],
  },
  {
    id: 2,
    icon: Network,
    name: "AI Agentic Workflows",
    description: "Multi-agent AI systems that research, decide, and act autonomously on your behalf.",
    techStack: ["LangChain", "Claude API", "OpenAI", "Node.js"],
    useCases: ["Multi-agent pipelines", "Automated research bots", "LLM orchestration"],
  },
  {
    id: 3,
    icon: Feather,
    name: "Branding",
    description: "Visual identity systems that make your brand recognizable and consistent everywhere.",
    techStack: ["Figma", "Brand Strategy", "Design Systems"],
    useCases: ["Brand identity packages", "Color & typography systems", "Brand guidelines"],
  },
  {
    id: 4,
    icon: ShoppingBag,
    name: "E-Commerce Development",
    description: "Full-featured online stores with product management, cart, and payment integration.",
    techStack: ["React", "Node.js", "Razorpay", "Stripe"],
    useCases: ["Online stores", "Product catalogs", "Checkout & payment flows"],
  },
  {
    id: 5,
    icon: PenTool,
    name: "Logo Design",
    description: "Professional logos and brand marks that represent your business with clarity.",
    techStack: ["Figma", "Illustrator", "Vector Design"],
    useCases: ["Logo concepts", "Icon design", "Brand mark creation"],
  },
]
