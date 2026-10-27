import type { StaticImageData } from "next/image";

/**
 * Content layer: services, projects, packages, process and benefits.
 * Images live in /public/images/opt and are optimised WebP derivatives.
 * All photography is original illustrative imagery — see `imageNote`.
 */

const img = (name: string) => `/images/opt/${name}-wide.webp`;

export const imageDisclaimer =
  "Visuals on this site are illustrative design concepts used to communicate style and quality. They are not photographs of completed Building and Great Design projects unless stated otherwise.";

/* ---------------------------------- Services --------------------------------- */

export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: IconName;
  image: string;
  imageAlt: string;
  intro: string;
  includes: string[];
  goodFor: string[];
};

export const services: Service[] = [
  {
    slug: "architectural-design",
    title: "Architectural Design",
    short:
      "Creative building plans, floor plans and modern architectural concepts tailored to your requirements.",
    icon: "blueprint",
    image: img("project-concept"),
    imageAlt: "Concept visualisation of a contemporary villa with timber fins",
    intro:
      "Good buildings begin with clear drawings. We translate the way you want to live or work into a practical layout and a considered architectural concept — one that suits your plot, your climate and your budget.",
    includes: [
      "Brief and site discussion to understand your needs",
      "Concept design and architectural style direction",
      "Floor plans, elevations and layout options",
      "3D visualisation of the proposed design",
      "Drawing revisions as the design develops",
    ],
    goodFor: [
      "Clients building a new home",
      "Investors planning for resale or rental",
      "Businesses planning a commercial space",
    ],
  },
  {
    slug: "building-construction",
    title: "Building Construction",
    short:
      "Professional construction solutions for residential and commercial projects.",
    icon: "crane",
    image: img("hero-duplex"),
    imageAlt: "Completed modern duplex exterior at dusk",
    intro:
      "We build what has been agreed — with the right materials, careful workmanship and understandable progress updates. From foundation to finishing, the work is planned so you always know what stage your project has reached.",
    includes: [
      "Construction planning and site preparation guidance",
      "Structural works, blockwork and roofing",
      "Plumbing, electrical and installation coordination",
      "Finishing: tiling, painting, joinery and fittings",
      "Progress checks and handover walk-through",
    ],
    goodFor: [
      "Residential builds and extensions",
      "Commercial and mixed-use buildings",
      "Developers building to a defined specification",
    ],
  },
  {
    slug: "modern-house-design",
    title: "Modern House Design",
    short:
      "Beautiful contemporary house designs, duplexes, bungalows and custom homes.",
    icon: "house",
    image: img("project-bungalow"),
    imageAlt: "Contemporary bungalow with veranda and landscaped garden",
    intro:
      "Whether you need a compact bungalow or a family duplex, we design homes that feel generous, breathe naturally in the Nigerian climate and use your budget where it shows most.",
    includes: [
      "Duplex, bungalow and custom home concepts",
      "Space planning for family living and privacy",
      "Facade design with modern, durable materials",
      "Natural light, ventilation and shading strategy",
      "Room schedule and area summary for costing",
    ],
    goodFor: [
      "First-time home builders",
      "Families upgrading or extending",
      "Diaspora clients building back home",
    ],
  },
  {
    slug: "interior-and-exterior-design",
    title: "Interior and Exterior Design",
    short:
      "Stylish interiors, functional spaces, attractive facades and elegant finishing concepts.",
    icon: "sofa",
    image: img("project-interior"),
    imageAlt: "Warm modern living room with navy accents and gold trim",
    intro:
      "Finishing is what people remember. We bring interiors and exteriors together so the house looks composed from the street and comfortable inside — with materials and colours that hold up over time.",
    includes: [
      "Interior layout and furniture arrangement",
      "Colour palettes and material selection",
      "Facade, cladding and entrance treatments",
      "Lighting and finishing specifications",
      "Exterior paving and landscape direction",
    ],
    goodFor: [
      "Homeowners at finishing stage",
      "Clients furnishing a new property",
      "Landlords preparing a property to let",
    ],
  },
  {
    slug: "renovation-and-remodeling",
    title: "Renovation and Remodeling",
    short:
      "Transform old buildings into attractive, comfortable and functional spaces.",
    icon: "refresh",
    image: img("project-renovation"),
    imageAlt: "Freshly renovated kitchen with oak units and pendant lights",
    intro:
      "Sometimes the strongest value is in the building you already own. We assess what can be improved, what must be replaced, and how to modernise without losing what works.",
    includes: [
      "Condition review and scope of works",
      "Layout improvements and space re-planning",
      "Kitchen, bathroom and wardrobe upgrades",
      "Facade refresh and repainting",
      "Phased options to spread cost over time",
    ],
    goodFor: [
      "Older homes that need modernising",
      "Properties being prepared for sale or letting",
      "Commercial spaces needing a refresh",
    ],
  },
  {
    slug: "building-consultancy",
    title: "Building Consultancy",
    short:
      "Guidance on project planning, material selection, design decisions and construction budgeting.",
    icon: "compass",
    image: img("about-team"),
    imageAlt: "Architects reviewing building plans together",
    intro:
      "If you are building for the first time, the number of decisions can be overwhelming. We help you understand the sequence, compare your options and avoid costly mistakes before work starts.",
    includes: [
      "Project planning and stage guidance",
      "Budget structuring and cost expectations",
      "Material comparison and selection advice",
      "Review of drawings or contractor quotations",
      "Clear communication of scope and timelines",
    ],
    goodFor: [
      "First-time builders",
      "Owners managing a contractor",
      "Clients comparing quotations",
    ],
  },
];

/* ---------------------------------- Projects -------------------------------- */

export type Category =
  | "Residential"
  | "Commercial"
  | "Architectural Design"
  | "Interior Design"
  | "Renovation";

export const categories: ("All Projects" | Category)[] = [
  "All Projects",
  "Residential",
  "Commercial",
  "Architectural Design",
  "Interior Design",
  "Renovation",
];

export type Project = {
  slug: string;
  name: string;
  category: Category;
  location: string;
  summary: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
  highlights: { title: string; text: string }[];
  /** All imagery is illustrative — keep this true until real photos are supplied. */
  illustrative: boolean;
};

export const projects: Project[] = [
  {
    slug: "contemporary-family-duplex",
    name: "Contemporary Family Duplex",
    category: "Residential",
    location: "Yola, Adamawa State",
    summary:
      "A four-bedroom duplex concept balancing a stone-clad entrance with generous family living space.",
    description:
      "A duplex concept developed around family life: a shaded entrance, a bright double-height living area, and bedrooms placed for privacy. The palette mixes warm textured stone with clean render so the house reads as modern without feeling cold, and the layout keeps service areas tucked away from the spaces guests see.",
    image: img("project-duplex"),
    imageAlt: "Concept of a contemporary duplex with stone cladding and balcony",
    tags: ["4 bedrooms", "Duplex", "Stone cladding"],
    highlights: [
      { title: "Shaded entrance", text: "A deep porch protects the doorway from sun and rain while framing the approach." },
      { title: "Cross ventilation", text: "Windows are positioned on opposite walls so the house cools naturally through the day." },
      { title: "Flexible ground floor", text: "A room beside the living area can serve as a study, guest room or home office." },
    ],
    illustrative: true,
  },
  {
    slug: "modern-three-bedroom-bungalow",
    name: "Modern Three-Bedroom Bungalow",
    category: "Residential",
    location: "Adamawa State",
    summary:
      "An affordable bungalow concept with a deep veranda, efficient plan and durable finishes.",
    description:
      "Designed for a client building on a moderate budget, this bungalow keeps the plan compact and efficient: every square metre has a purpose. The deep veranda shades the front rooms, while a simple hipped roof and locally available finishes keep construction cost predictable.",
    image: img("project-bungalow"),
    imageAlt: "Concept of a modern bungalow with a wide veranda",
    tags: ["3 bedrooms", "Bungalow", "Budget-conscious"],
    highlights: [
      { title: "Efficient footprint", text: "A compact plan reduces wall length and roofing cost without shrinking the living spaces." },
      { title: "Deep veranda", text: "Shading the front elevation keeps the interior noticeably cooler in the hot season." },
      { title: "Locally sourced finishes", text: "Specified materials are chosen for local availability and easy maintenance." },
    ],
    illustrative: true,
  },
  {
    slug: "commercial-office-building",
    name: "Commercial Office Building",
    category: "Commercial",
    location: "Adamawa State",
    summary:
      "A mid-rise commercial concept with a glazed facade, shaded colonnade and lettable floors.",
    description:
      "A commercial concept for rental income: flexible floor plates, a clearly signalled entrance and effective shading on the glazed elevations. The ground-floor colonnade gives tenants sheltered frontage, while the upper floors are planned so partitions can be arranged to suit different tenants.",
    image: img("project-commercial"),
    imageAlt: "Concept of a mid-rise commercial building with glazed facade",
    tags: ["Office", "Mid-rise", "Rental"],
    highlights: [
      { title: "Flexible floor plates", text: "Open floor areas allow single or multiple tenants per level." },
      { title: "Solar shading", text: "Deep mullions and horizontal bands reduce heat gain on the glass facade." },
      { title: "Clear identity", text: "The entrance colonnade and signage band make the building easy to find and enter." },
    ],
    illustrative: true,
  },
  {
    slug: "cantilever-villa-study",
    name: "Cantilever Villa Study",
    category: "Architectural Design",
    location: "Concept study",
    summary:
      "An architectural concept exploring a cantilevered upper volume, timber screens and pool terrace.",
    description:
      "A design study rather than a completed building: an exercise in massing, where the upper floor projects over a shaded terrace and the pool below doubles the visual depth of the facade. Timber screens filter the western sun while giving the volumes warmth at dusk.",
    image: img("project-concept"),
    imageAlt: "3D architectural concept of a villa with cantilevered upper floor",
    tags: ["Concept", "3D visualisation", "Villa"],
    highlights: [
      { title: "Cantilevered massing", text: "The overhang creates a naturally shaded terrace and gives the facade a strong silhouette." },
      { title: "Timber screening", text: "Vertical fins filter low evening sun while keeping inward views open." },
      { title: "Indoor–outdoor flow", text: "Sliding glazing connects the living area directly to the pool terrace." },
    ],
    illustrative: true,
  },
  {
    slug: "courtyard-villa",
    name: "Courtyard Villa",
    category: "Residential",
    location: "Concept study",
    summary:
      "A private villa concept arranged around a courtyard, pool terrace and shaded outdoor living.",
    description:
      "Arranged around a private courtyard, this villa keeps bedrooms away from the street and gives the family a sheltered outdoor room. Deep roof overhangs and a timber brise-soleil make the terrace usable for more of the day.",
    image: img("project-villa"),
    imageAlt: "Concept of a white cubic villa with courtyard pool",
    tags: ["Villa", "Courtyard", "Outdoor living"],
    highlights: [
      { title: "Inward-facing plan", text: "Rooms open to the courtyard rather than the street, improving privacy." },
      { title: "Shaded terrace", text: "The brise-soleil keeps midday sun off the glazing and outdoor seating." },
      { title: "Simple palette", text: "White render and warm timber keep maintenance straightforward." },
    ],
    illustrative: true,
  },
  {
    slug: "living-space-interior",
    name: "Warm Modern Living Space",
    category: "Interior Design",
    location: "Concept study",
    summary:
      "A double-height living room concept in navy, walnut and brushed gold with layered lighting.",
    description:
      "An interior concept for a double-height living space. A walnut feature wall and deep navy accent give the room warmth and depth, while a sculptural pendant, concealed cove lighting and sheer curtains create layers of light from morning to evening.",
    image: img("project-interior"),
    imageAlt: "Concept of a double-height living room in navy and walnut",
    tags: ["Living room", "Lighting", "Material palette"],
    highlights: [
      { title: "Layered lighting", text: "Pendant, cove and floor lighting are combined so the room can shift mood after dark." },
      { title: "Warm materials", text: "Walnut panelling balances the cool navy wall and polished floor." },
      { title: "Double-height volume", text: "The full-height window brings daylight deep into the plan." },
    ],
    illustrative: true,
  },
  {
    slug: "kitchen-renovation",
    name: "Kitchen and Dining Renovation",
    category: "Renovation",
    location: "Adamawa State",
    summary:
      "A renovation concept turning an enclosed kitchen into an open, bright cooking and dining space.",
    description:
      "An existing kitchen was reworked into an open cooking, dining and family space. Removing a non-structural partition opened the room to the garden view, and new cabinetry, lighting and floor finishes modernise the space without altering the building's structure.",
    image: img("project-renovation"),
    imageAlt: "Concept of a renovated kitchen with white and oak cabinetry",
    tags: ["Kitchen", "Open plan", "Remodel"],
    highlights: [
      { title: "Opened-up plan", text: "A wider opening connects the kitchen to dining and living areas." },
      { title: "Practical storage", text: "Tall units and a working island add storage without crowding the room." },
      { title: "Durable surfaces", text: "Quartz worktops and porcelain floors handle daily family use." },
    ],
    illustrative: true,
  },
  {
    slug: "facade-finishing-study",
    name: "Facade and Finishing Study",
    category: "Commercial",
    location: "Concept study",
    summary:
      "A materials study combining stone cladding, privacy screens and integrated exterior lighting.",
    description:
      "A finishing study focused on how a building meets the street: how stone, render and metal screens should be proportioned, and how lighting can be integrated so the entrance reads clearly at night without glare.",
    image: img("project-exterior"),
    imageAlt: "Concept of a stone and render facade with aluminium screen",
    tags: ["Facade", "Materials", "Lighting"],
    highlights: [
      { title: "Material contrast", text: "Textured stone beside smooth render gives depth to a simple volume." },
      { title: "Screened privacy", text: "Perforated aluminium screens shade windows and block side views." },
      { title: "Integrated lighting", text: "Wall lights are recessed into the detailing rather than surface-mounted." },
    ],
    illustrative: true,
  },
];

export const projectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);

/* --------------------------------- Pricing ---------------------------------- */

export type Package = {
  name: string;
  audience: string;
  featured: boolean;
  features: string[];
  cta: string;
  serviceInterest: string;
};

export const packages: Package[] = [
  {
    name: "Basic Package",
    audience: "For clients looking for affordable design solutions.",
    featured: false,
    features: [
      "Initial project consultation",
      "Basic design discussion",
      "Project requirement assessment",
      "Budget guidance",
    ],
    cta: "Request a Quote",
    serviceInterest: "Basic Package — consultation and design discussion",
  },
  {
    name: "Standard Package",
    audience: "For clients who need more detailed design and planning.",
    featured: true,
    features: [
      "Detailed design consultation",
      "Building layout planning",
      "Design recommendations",
      "Project budgeting guidance",
      "Material selection advice",
    ],
    cta: "Get a Custom Quote",
    serviceInterest: "Standard Package — detailed design and planning",
  },
  {
    name: "Premium Package",
    audience: "For clients planning a comprehensive building project.",
    featured: false,
    features: [
      "Comprehensive project consultation",
      "Architectural design coordination",
      "Construction planning guidance",
      "Interior and exterior design consultation",
      "Project-specific recommendations",
    ],
    cta: "Discuss Your Project",
    serviceInterest: "Premium Package — comprehensive project support",
  },
];

/* --------------------------------- Process ---------------------------------- */

export const processSteps = [
  {
    step: "01",
    title: "Consultation",
    text: "Tell us about your building project, ideas and budget. We listen first, then explain what is realistically achievable.",
    icon: "chat" as IconName,
  },
  {
    step: "02",
    title: "Planning and Design",
    text: "We discuss your requirements and develop a suitable project plan, layout and design direction.",
    icon: "blueprint" as IconName,
  },
  {
    step: "03",
    title: "Quotation and Approval",
    text: "Review the proposed scope, costs and project details in writing before any work begins.",
    icon: "document" as IconName,
  },
  {
    step: "04",
    title: "Project Execution",
    text: "We proceed with the agreed project using appropriate quality checks and progress updates.",
    icon: "crane" as IconName,
  },
] as const;

/* -------------------------------- Benefits ---------------------------------- */

export type IconName =
  | "blueprint"
  | "crane"
  | "house"
  | "sofa"
  | "refresh"
  | "compass"
  | "wallet"
  | "sparkle"
  | "shield"
  | "heart"
  | "chat"
  | "person"
  | "document"
  | "phone"
  | "whatsapp"
  | "pin"
  | "clock"
  | "arrow"
  | "check"
  | "close"
  | "menu"
  | "quote"
  | "star";

export const benefits: { title: string; text: string; icon: IconName }[] = [
  {
    title: "Affordable Solutions",
    text: "Services tailored to your budget, with clear options rather than one fixed approach.",
    icon: "wallet",
  },
  {
    title: "Modern Designs",
    text: "Beautiful, functional and contemporary concepts that suit Nigerian living.",
    icon: "sparkle",
  },
  {
    title: "Quality Focus",
    text: "Attention to detail and professional standards at every stage of the work.",
    icon: "shield",
  },
  {
    title: "Customer Satisfaction",
    text: "Solutions designed around your requirements, not a standard template.",
    icon: "heart",
  },
  {
    title: "Transparent Communication",
    text: "Clear discussions about scope, cost and timelines before work begins.",
    icon: "chat",
  },
  {
    title: "Personalised Service",
    text: "Every project is approached according to its own site, brief and budget.",
    icon: "person",
  },
];

/* ------------------------------- Testimonials ------------------------------- */

/**
 * Genuine customer feedback only. Left empty on purpose — no invented reviews.
 * When a client gives written permission, add an entry here and the section
 * automatically switches from the invitation card to the feedback layout.
 */
export type Testimonial = {
  name: string;
  location?: string;
  quote: string;
  rating?: 1 | 2 | 3 | 4 | 5;
  image?: string;
};

export const testimonials: Testimonial[] = [];

export const serviceOptions = [
  "Architectural Design",
  "Building Construction",
  "Modern House Design",
  "Interior and Exterior Design",
  "Renovation and Remodeling",
  "Building Consultancy",
  "Not sure yet — I need advice",
];

export const budgetOptions = [
  "Still planning",
  "Under ₦5 million",
  "₦5 million – ₦15 million",
  "₦15 million – ₦40 million",
  "₦40 million and above",
  "Prefer to discuss",
];

export type { StaticImageData };
