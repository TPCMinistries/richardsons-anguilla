// Richardson's Anguilla Experience — Site Data

export const SITE = {
  name: "Richardson's Anguilla Experience",
  tagline: "Anguilla's Most Trusted Name in Children's Care",
  subtitle:
    "Private swim lessons, professional childcare, youth sports, school programs, and vacation packages — trusted by luxury resorts and families across the island.",
  url: "https://raeperience.com",
  // Real WhatsApp — primary booking channel. (Replace `calendly` once a real link exists.)
  whatsapp: "12645810337",
  phoneDisplay: "+1 (264) 581-0337",
  calendly: "https://calendly.com/richardsons-anguilla",
  email: "info@raeperience.com",
  location: "Anguilla, British West Indies",
};

/** Build a WhatsApp click-to-chat link with an optional pre-filled message. */
export function waLink(message?: string) {
  const base = `https://wa.me/${SITE.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Primary booking action used across CTAs. */
export const BOOK_URL = waLink(
  "Hi Deanna! I found your website and I'd love to book children's services in Anguilla. Here's what I'm looking for:",
);

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
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
    image: "/images/swim-action.png",
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
  {
    title: "School Programs & Training",
    slug: "school-programs",
    price: "Inquire",
    tagline: "Empowering the Next Generation",
    description:
      "Beyond private clients, Deanna brings her expertise directly into Anguilla's schools. From water safety education to youth fitness and student mentorship, she facilitates programs that build life skills, confidence, and community resilience — the same professionalism and care she brings to every family she serves.",
    features: [
      "Water safety education for school groups",
      "Youth fitness & athletics programs",
      "Student mentorship & leadership facilitation",
      "Available for all schools across Anguilla",
    ],
    image: "/images/sports.jpg",
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
  {
    quote:
      "I've worked alongside Deanna since 2018, when she began teaching as an assistant coach through the Anguilla Red Cross. She earned her Water Safety Instructor certification in 2019 with near-perfect scores and has volunteered hundreds of hours teaching children to swim — often at her own expense. Her dedication, professionalism, and teaching skill are exceptional.",
    author: "Frank Cannon",
    role: "Water Safety Instructor Educator, Anguilla Red Cross",
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
    label: "WSI Certified Instructor",
    detail: "Anguilla Red Cross certified 2019 · teaching since 2018",
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
  logo?: string;
}

export const PARTNERS: Partner[] = [
  {
    name: "Anguilla Aqua Stars",
    type: "Youth Swim Program",
    logo: "/images/anguilla-aqua-stars.jpg",
  },
  {
    name: "Learn to Swim Anguilla",
    type: "Community Partner",
  },
  {
    name: "Lyme Seeds",
    type: "Youth Football",
    logo: "/images/lyme-seeds.jpg",
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
  "School Programs & Training",
  "Vacation Package",
  "Multiple Services",
  "Hospitality Partnership Inquiry",
  "Other / Question",
];

export interface FAQ {
  question: string;
  answer: string;
}

export const FAQS: FAQ[] = [
  {
    question: "How far in advance should I book?",
    answer:
      "For peak season (December–April) and holidays, two to four weeks ahead is ideal — those dates fill quickly. For other times, a week's notice usually secures your preferred times. When in doubt, message Deanna directly; she'll always try to make it work.",
  },
  {
    question: "Where do the sessions take place?",
    answer:
      "Wherever your family is staying. Deanna comes to your resort pool, private villa, or a calm beach, and also runs sessions through Learn to Swim Anguilla. Service covers the entire island, so there's no need to arrange transport for the kids.",
  },
  {
    question: "What ages and skill levels do you work with?",
    answer:
      "Swim lessons start at age 2 — from first splashes to confident open-water strokes — and youth sports run roughly ages 5–16. Childcare is available for infants through teens. Every plan is tailored to your child's age, comfort, and goals.",
  },
  {
    question: "Are you certified and insured?",
    answer:
      "Yes. Deanna is a StarGuard Elite certified lifeguard, a Red Cross–certified Water Safety Instructor (2019), and holds current CPR & First Aid certification. She is background-verified and has been teaching children to swim since 2018.",
  },
  {
    question: "How do I pay, and what does it cost?",
    answer:
      "Swim lessons and youth coaching start at $75 per session, childcare from $50 per hour, and multi-day vacation packages from $250. Final pricing depends on group size, duration, and location — message Deanna for a quick, no-obligation quote.",
  },
  {
    question: "What if our plans change or the weather turns?",
    answer:
      "Life and weather happen. Sessions can be rescheduled with reasonable notice, and Deanna will always prioritize your children's safety — moving a beach session to a pool or another time whenever conditions call for it.",
  },
];
