// Richardson's Anguilla Experience — Site Data

export const SITE = {
  name: "Richardson's Anguilla Experience",
  tagline: "Where Every Child Is Safe in the Water",
  subtitle:
    "Certified swim instruction, professional childcare, and youth football coaching on the island families trust most.",
  // Replace with Deanna's real WhatsApp number (country code, no + or spaces)
  whatsapp: "12645555555",
  email: "info@richardsonsanguilla.com",
  location: "Anguilla, British West Indies",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
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
    title: "Swimming Lessons",
    slug: "swimming",
    price: "From $15",
    priceNote: "per session",
    tagline: "Water Safety Meets Caribbean Fun",
    description:
      "Your child will learn to swim in some of the most beautiful water on earth — guided by a StarGuard Elite certified instructor who has literally saved lives. From first splashes to confident strokes, every lesson is built around safety, technique, and genuine joy.",
    features: [
      "Private & group sessions available",
      "Ages 2 and up — beginners to advanced",
      "StarGuard Elite & lifeguard certified",
      "Beach, pool, or your villa",
    ],
    image: "/images/swimming.jpg",
  },
  {
    title: "Youth Football Coaching",
    slug: "football",
    price: "$25",
    priceNote: "per session",
    tagline: "Building Athletes, Building Character",
    description:
      "More than drills — this is mentorship through sport. Deanna's football coaching develops footwork, agility, and game sense while instilling discipline, teamwork, and the confidence that comes from earning every improvement.",
    features: [
      "Individual & small group training",
      "Ages 5–16, all skill levels",
      "Fundamentals, fitness & game strategy",
      "Flexible scheduling for visitors",
    ],
    image: "/images/football.jpg",
  },
  {
    title: "Professional Childcare",
    slug: "childcare",
    price: "$30",
    priceNote: "per hour",
    tagline: "Your Vacation, Their Adventure",
    description:
      "Enjoy Anguilla knowing your children are with someone who treats them like her own. Whether you need a few hours for dinner or full-day care while you explore the island, Deanna provides attentive, enriching, and completely trustworthy care.",
    features: [
      "CPR & First Aid certified",
      "Hotel, villa, or beach pickup",
      "Engaging activities — not just screen time",
      "Trusted by returning families year after year",
    ],
    image: "/images/childcare.jpg",
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
    role: "Returning Guest Family",
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
