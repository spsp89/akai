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
    slug: "passenger-elevators",
    code: "PA",
    name: "Passenger",
    segment: "06–20 passenger auto-door elevators",
    tagline: "Everyday movement, engineered to feel effortless.",
    description: "Automatic passenger elevators for apartment towers, offices, hotels and retail buildings, with a broad range of cabin, entrance, indicator and door configurations.",
    image: "/images/product-cabin.png",
    accent: "#e5484d",
    highlights: ["94-beam light-curtain door protection", "Automatic rescue device", "Emergency lighting and intercom", "Duplex, triplex and quadruplex control"],
    applications: ["Apartments", "Offices", "Hotels + retail"]
  },
  {
    slug: "hospital-elevators",
    code: "HL",
    name: "Hospital",
    segment: "10–26 passenger / stretcher elevators",
    tagline: "Clear access for care-critical journeys.",
    description: "Hospital elevators planned for stretchers, wheelchairs, attendants and medical movement, with wide openings and durable cabin options for Indian healthcare projects.",
    image: "/images/lobby-elevator.png",
    accent: "#d83f45",
    highlights: ["Stretcher and wheelchair access", "Minimum cabin size from 3 × 7 ft", "13–40 person range described in the profile", "Automatic-door configurations available"],
    applications: ["Hospitals", "Clinics", "Healthcare campuses"]
  },
  {
    slug: "goods-car-lifts",
    code: "GL",
    name: "Goods + Car",
    segment: "500–5000 kg load range",
    tagline: "Built for the loads that keep operations moving.",
    description: "Freight and car-lift configurations for factories, warehouses, parking and back-of-house operations, with robust doors and durable interior finish options.",
    image: "/images/service-engineer.png",
    accent: "#c9373e",
    highlights: ["500–5000 kg stated load range", "Four-part centre-opening door option", "Imperforate goods-door option", "Chequered-plate flooring options"],
    applications: ["Factories", "Warehouses", "Car parking"]
  },
  {
    slug: "home-mrl-elevators",
    code: "HR",
    name: "Home + MRL",
    segment: "Compact residential lift systems",
    tagline: "Vertical comfort, designed around the home.",
    description: "Home and machine-room-less elevator layouts for villas, bungalows and duplex homes, developed around compact planning, premium finishes and practical everyday access.",
    image: "/images/lobby-elevator.png",
    accent: "#b82f35",
    highlights: ["Compact MRL planning", "Residential cabin finishes", "Flexible cabin and entrance sizing", "Home-elevator layout support"],
    applications: ["Villas", "Bungalows", "Duplex homes"]
  }
];

export const industries: Industry[] = [
  { slug: "residential", number: "01", name: "Apartments + Homes", line: "Premium movement for everyday Indian living.", description: "Passenger and home-elevator systems for apartment towers, villas, bungalows and duplex homes, with finishes and planning matched to the project.", priorities: ["Daily passenger movement", "Cabin finish selection", "Compact shaft planning"], product: "Passenger / Home + MRL" },
  { slug: "commercial", number: "02", name: "Offices + Retail", line: "Reliable movement through the working day.", description: "Passenger elevator systems for offices, hotels, retail and mixed-use projects, with automatic doors, multi-car control options and clear position indication.", priorities: ["Peak passenger flow", "Automatic-door safety", "Clear signalization"], product: "Passenger" },
  { slug: "healthcare", number: "03", name: "Hospitals + Clinics", line: "Access planned around people and care.", description: "Hospital lift solutions for stretchers, wheelchairs, medical teams and service movement, with generous openings and durable cabin configurations.", priorities: ["Stretcher access", "Wheelchair movement", "Durable cabin design"], product: "Hospital" },
  { slug: "industrial", number: "04", name: "Factories + Warehouses", line: "Capacity for demanding operations.", description: "Goods and car lifts for factories, warehouses, storage and parking applications, with a stated load range from 500 to 5000 kg.", priorities: ["Load capacity", "Robust entrances", "Serviceable equipment"], product: "Goods + Car" }
];

export const equipmentPortfolio = [
  { code: "01", name: "PM traction systems", type: "Efficient, compact drive technology", image: "/images/service-engineer.png", detail: "A joint-lapped PM motor core is described as improving motor efficiency and compactness while reducing energy and resource use." },
  { code: "02", name: "Geared + gearless machines", type: "Drive units for varied speed and capacity", image: "/images/global-hero.png", detail: "The range includes geared, gearless, vertical traction and mono traction machine configurations." },
  { code: "03", name: "Cabins + ceilings", type: "Material and lighting configurations", image: "/images/product-cabin.png", detail: "Cabin examples include stainless-steel finishes, mirrors, handrails, flooring choices and centralized indirect LED lighting." },
  { code: "04", name: "Indicators + controls", type: "Hall, car and landing interfaces", image: "/images/lobby-elevator.png", detail: "Segment LED, dot LED and LCD indicators are available alongside multiple hall-button configurations." },
  { code: "05", name: "Complete elevator system", type: "Engineered component architecture", image: "/images/service-engineer.png", detail: "A coordinated system of traction machine, controller, governor, ropes, car frame, doors, rails, buffers and landing equipment." }
];

export const navGroups = [
  {
    label: "Solutions",
    href: "/products",
    items: products.map(product => ({ label: product.name, note: product.segment, href: `/products/${product.slug}` }))
  },
  {
    label: "Applications",
    href: "/industries",
    items: industries.map(industry => ({ label: industry.name, note: industry.line, href: `/industries/${industry.slug}` }))
  }
];
