export type Product = {
  slug: string;
  code: string;
  name: string;
  segment: string;
  tagline: string;
  description: string;
  image: string;
  accent: string;
  highlights: string[];
  applications: string[];
};

export type Industry = {
  slug: string;
  number: string;
  name: string;
  line: string;
  description: string;
  priorities: string[];
  product: string;
};

export const products: Product[] = [
  {
    slug: "nexus-passenger",
    code: "NX",
    name: "NEXUS",
    segment: "Passenger elevators",
    tagline: "Everyday movement, made exceptional.",
    description: "A flexible passenger-elevator concept for residential, workplace and mixed-use buildings, shaped around calm journeys and clear architectural integration.",
    image: "/images/product-cabin.png",
    accent: "#ff5a1f",
    highlights: ["Quiet ride concept", "Flexible cabin language", "Connected-ready controls", "Efficient spatial planning"],
    applications: ["Residential", "Workplace", "Hospitality"]
  },
  {
    slug: "apex-high-rise",
    code: "AX",
    name: "APEX",
    segment: "High-rise mobility",
    tagline: "Built for the vertical city.",
    description: "A high-rise mobility platform concept that brings traffic strategy, intelligent dispatch and destination experience into one coherent system.",
    image: "/images/global-hero.png",
    accent: "#ff763f",
    highlights: ["Destination-led planning", "High-capacity configurations", "Digital system visibility", "Express-zone strategies"],
    applications: ["High-rise", "Mixed-use", "Urban landmark"]
  },
  {
    slug: "aria-home",
    code: "AR",
    name: "ARIA",
    segment: "Home elevators",
    tagline: "A private lift, designed as furniture.",
    description: "A compact home-elevator concept with a residential material palette, gentle arrival and a footprint considered for contemporary homes.",
    image: "/images/lobby-elevator.png",
    accent: "#efb56f",
    highlights: ["Residential material palette", "Compact planning concept", "Gentle interface design", "Interior-led detailing"],
    applications: ["Villas", "Duplex homes", "Private residences"]
  },
  {
    slug: "cargo-x",
    code: "CX",
    name: "CARGO X",
    segment: "Freight elevators",
    tagline: "Strength where operations demand it.",
    description: "A robust freight-elevator concept for logistics, industry and back-of-house movement, with durability and service access central to the design.",
    image: "/images/service-engineer.png",
    accent: "#e84a17",
    highlights: ["Operational durability", "Serviceable component layout", "Flexible door planning", "Clear industrial interface"],
    applications: ["Logistics", "Manufacturing", "Back of house"]
  }
];

export const industries: Industry[] = [
  { slug: "residential", number: "01", name: "Residential", line: "Make every return feel effortless.", description: "Mobility planned around daily patterns, quiet arrivals, resident access and an interior language that belongs to the building.", priorities: ["Quiet movement", "Resident access", "Durable finishes"], product: "NEXUS / ARIA" },
  { slug: "commercial", number: "02", name: "Commercial", line: "Keep the working day in motion.", description: "Passenger-flow thinking for offices and mixed-use destinations, from morning peaks to visitor wayfinding and tenant experience.", priorities: ["Peak traffic", "Destination clarity", "Portfolio visibility"], product: "NEXUS / APEX" },
  { slug: "hospitality", number: "03", name: "Hospitality", line: "Arrival is part of the stay.", description: "Guest and service journeys designed together, balancing atmosphere, back-of-house efficiency and the details people remember.", priorities: ["Guest experience", "Service separation", "Interior identity"], product: "NEXUS" },
  { slug: "healthcare", number: "04", name: "Healthcare", line: "Clarity when every second matters.", description: "Movement concepts for patients, staff, visitors and supplies, with intuitive zoning and operational resilience at the center.", priorities: ["Clear zoning", "Operational continuity", "Accessible journeys"], product: "NEXUS / CARGO X" },
  { slug: "infrastructure", number: "05", name: "Infrastructure", line: "Move crowds without creating friction.", description: "Durable, legible mobility for transport hubs and public environments where passenger volume and uptime shape every decision.", priorities: ["Crowd movement", "Robust finishes", "Service access"], product: "APEX / CARGO X" },
  { slug: "retail", number: "06", name: "Retail", line: "Connect every level of the experience.", description: "Vertical movement that supports intuitive circulation, visibility and a coherent customer journey across complex retail spaces.", priorities: ["Intuitive circulation", "Visual connection", "Mixed traffic"], product: "NEXUS" }
];

export const conceptProjects = [
  { city: "Singapore", name: "Harbour Arc", type: "Mixed-use tower · Concept study", image: "/images/global-hero.png", tone: "blue" },
  { city: "Dubai", name: "Latitude House", type: "Hospitality · Concept study", image: "/images/product-cabin.png", tone: "bronze" },
  { city: "Bengaluru", name: "Mosaic One", type: "Workplace · Concept study", image: "/images/lobby-elevator.png", tone: "warm" },
  { city: "Copenhagen", name: "North Quay", type: "Residential · Concept study", image: "/images/service-engineer.png", tone: "graphite" }
];

export const navGroups = [
  {
    label: "Solutions",
    href: "/products",
    items: products.map(product => ({ label: product.name, note: product.segment, href: `/products/${product.slug}` }))
  },
  {
    label: "Industries",
    href: "/industries",
    items: industries.map(industry => ({ label: industry.name, note: industry.line, href: `/industries/${industry.slug}` }))
  },
  {
    label: "Services",
    href: "/service",
    items: [
      { label: "Service", note: "Care across the lifecycle", href: "/service" },
      { label: "Modernization", note: "A smarter second chapter", href: "/modernization" },
      { label: "Technology", note: "Connected movement", href: "/technology" }
    ]
  }
];
