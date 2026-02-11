// Richardson's Anguilla Experience — Site Data

export const SITE = {
  name: "Richardson's Anguilla Experience",
  tagline: "Anguilla's Most Trusted Name in Children's Care",
  subtitle:
    "Private swim lessons, professional childcare, youth sports, and vacation packages — trusted by luxury resorts and families across the island.",
  // Replace with Deanna's real WhatsApp number (country code, no + or spaces)
  whatsapp: "12645555555",
  whatsappPartner: "12645555555",
  email: "info@richardsonsanguilla.com",
  location: "Anguilla, British West Indies",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "For Partners", href: "#partners" },
  { label: "Contact", href: "#contact" },
] as const;

export interface Service {
  title: string;
  slug: string;
  price: string;
  priceNote?: string;
  tagline: string;
  description: string;
  features: string[];
  image: string;
}

export const SERVICES: Service[] = [
  {
    title: "Private Swim Lessons",
    slug: "swimming",
    price: "From $75",
    priceNote: "per session",
    tagline: "Water Safety Meets Caribbean Fun",
    description:
      "Your child will learn to swim in some of the most beautiful water on earth — guided by a StarGuard Elite certified instructor who has literally saved lives. From first splashes to confident open-water strokes, every lesson is built around safety, technique, and genuine joy.",
    features: [
      "Private & semi-private sessions available",
      "Ages 2 and up — beginners to advanced",
      "StarGuard Elite & lifeguard certified",
      "Beach, resort pool, or your private villa",
    ],
    image: "/images/swimming.jpg",
  },
  {
    title: "Professional Childcare",
    slug: "childcare",
    price: "From $50",
    priceNote: "per hour",
    tagline: "Your Vacation, Their Adventure",
    description:
      "Enjoy Anguilla knowing your children are with someone trusted by the island's finest resorts. Whether you need a few hours for dinner at Veya, full-day care while you explore, or evening babysitting at your villa — Deanna provides attentive, enriching, and completely trustworthy care.",
    features: [
      "CPR & First Aid certified",
      "Hotel, villa, yacht, or beach",
      "Engaging activities — not just screen time",
      "Trusted by returning families year after year",
    ],
    image: "/images/childcare.jpg",
  },
  {
    title: "Youth Sports & Fitness",
    slug: "sports",
    price: "From $75",
    priceNote: "per session",
    tagline: "Building Athletes, Building Character",
    description:
      "More than drills — this is mentorship through sport. Deanna's coaching develops footwork, agility, and game sense while instilling discipline, teamwork, and the confidence that comes from earning every improvement. Perfect for vacation kids who want to stay active.",
    features: [
      "Football, fitness & general athletics",
      "Ages 5–16, all skill levels",
      "Individual & small group training",
      "Flexible scheduling for visiting families",
    ],
    image: "/images/sports.jpg",
  },
  {
    title: "Water Safety Programs",
    slug: "water-safety",
    price: "Inquire",
    tagline: "Every Child Deserves to Be Safe in Water",
    description:
      "In partnership with Learn to Swim Anguilla, Deanna leads group water safety programs that serve the entire island. From resort-hosted clinics to community swim days, these programs ensure every child — visitor or local — has the skills to be safe around water.",
    features: [
      "Learn to Swim Anguilla partnership",
      "Group programs & seasonal camps",
      "Resort-hosted clinics available",
      "Community-focused, island-wide impact",
    ],
    image: "/images/water-safety.jpg",
  },
  {
    title: "Vacation Packages",
    slug: "packages",
    price: "From $250",
    priceNote: "per package",
    tagline: "Multi-Day Experiences for Visiting Families",
    description:
      "The smartest families book Deanna before they land. Our curated vacation packages combine swim lessons, childcare, and activities into seamless multi-day experiences — so your children have the trip of a lifetime while you actually get to relax.",
    features: [
      "Half-Day Experience — swim lesson + supervised beach play",
      "Full-Day Adventure — morning swim, afternoon activities, lunch supervision",
      "Weekly Family Package — daily sessions, flexible mix of services",
      "Custom packages available for extended stays",
    ],
    image: "/images/packages.jpg",
  },
];

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Deanna's quick thinking and lifeguard training saved a child at the beach. That's not a testimonial — it's a fact. Her instincts, her calm under pressure, her skill — she is the person you want watching your children near the water.",
    author: "Learn to Swim Anguilla",
    role: "Community Partner",
  },
  {
    quote:
      "We've come back to Anguilla three years in a row, and Deanna is the reason we can actually relax. Our kids run to her the moment they see her. She's not just a babysitter — she's family to us now.",
    author: "Sarah Chambers",
    role: "Returning Villa Guest",
  },
  {
    quote:
      "The progress our young swimmers made under Deanna's guidance was remarkable. She combines real technical skill with a warmth that makes children feel safe enough to try things they were afraid of. That's a rare gift.",
    author: "Anguilla Aquastars",
    role: "Youth Swim Program",
  },
];

export const CREDENTIALS = [
  {
    label: "CPR & First Aid Certified",
    detail: "Current certification, renewed annually",
  },
  {
    label: "StarGuard Elite Lifeguard",
    detail: "Highest standard in aquatic safety",
  },
  {
    label: "Certified Swim Instructor",
    detail: "Trained for all ages and abilities",
  },
  {
    label: "Youth Coaching Certified",
    detail: "Sport-specific training credentials",
  },
  {
    label: "Background Verified",
    detail: "Full background check on file",
  },
];

export const TRUST_STATS = [
  { value: "500+", label: "Children Taught" },
  { value: "8+", label: "Years Experience" },
  { value: "1", label: "Life Saved" },
  { value: "100%", label: "Safety Record" },
];

export interface Partner {
  name: string;
  type: string;
}

export const PARTNERS: Partner[] = [
  {
    name: "Zemi Beach House",
    type: "Hilton LXR Resort",
  },
  {
    name: "Learn to Swim Anguilla",
    type: "Community Partner",
  },
];

export const PARTNER_BENEFITS = [
  {
    title: "Guest Swim Programs",
    description:
      "Poolside and beachside swim lessons for resort guests of all ages. Scheduled sessions or on-demand availability.",
  },
  {
    title: "Kids Club & Activities",
    description:
      "Structured children's programming that gives parents freedom while keeping kids engaged, active, and supervised.",
  },
  {
    title: "In-Villa Childcare",
    description:
      "Professional childcare for villa rental companies to offer their guests. Evening, half-day, and full-day options.",
  },
  {
    title: "Water Safety Clinics",
    description:
      "Branded water safety events that add value to your property's family programming and demonstrate guest commitment.",
  },
];

export const CONTACT_SERVICES = [
  "Private Swim Lessons",
  "Professional Childcare",
  "Youth Sports & Fitness",
  "Water Safety Programs",
  "Vacation Package",
  "Multiple Services",
  "Hospitality Partnership Inquiry",
  "Other / Question",
];
