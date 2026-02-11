// Richardson's Anguilla Experience — Site Data

export const SITE = {
  name: "Richardson's Anguilla Experience",
  tagline: "Safe. Skilled. Trusted Care for Children in Anguilla",
  subtitle:
    "Swim lessons, childcare, and youth coaching delivered with care, safety, and experience — for local families and visiting guests.",
  // Replace with real WhatsApp number (include country code, no + or spaces)
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
  tagline: string;
  description: string;
  image: string;
}

export const SERVICES: Service[] = [
  {
    title: "Swimming Lessons",
    slug: "swimming",
    price: "From $15",
    tagline: "Dive into Safety and Fun",
    description:
      "Private and group swim lessons for children of all ages and skill levels. From water confidence basics to stroke technique, our certified instructors ensure every child learns to swim safely while having a blast in Anguilla's beautiful waters.",
    image: "/images/swimming.jpg",
  },
  {
    title: "Youth Football",
    slug: "football",
    price: "$25",
    tagline: "Specialized Training for Young Players",
    description:
      "Structured football coaching that builds skills, teamwork, and confidence. Our youth programs focus on fundamentals, fitness, and fun — helping young athletes reach their potential on and off the field.",
    image: "/images/football.jpg",
  },
  {
    title: "Childcare",
    slug: "childcare",
    price: "$30/hr",
    tagline: "Trustworthy Island Babysitting",
    description:
      "Reliable, experienced childcare for families visiting Anguilla or local parents who need a trusted hand. CPR-certified, background-checked, and passionate about creating a safe, engaging environment for your little ones.",
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
      "Deanna's quick thinking and lifeguarding skills saved a child at the beach. Her training and instincts are exactly what you want in someone watching over your kids in the water. We trust her completely.",
    author: "Learn to Swim Anguilla",
    role: "Community Partner",
  },
  {
    quote:
      "We've relied on Deanna for childcare multiple times during our visits to Anguilla. She's warm, reliable, and our kids absolutely adore her. We wouldn't trust anyone else on the island.",
    author: "Sarah Chambers",
    role: "Visiting Family",
  },
  {
    quote:
      "Deanna brings professionalism and genuine care to every swim session. The progress our young swimmers have made under her guidance is remarkable. She's an invaluable part of our aquatics program.",
    author: "Anguilla Aquastars",
    role: "Swim Program",
  },
];

export const CREDENTIALS = [
  "CPR & First Aid Certified",
  "StarGuard Elite Lifeguard",
  "Certified Swim Instructor",
  "Youth Coaching Certified",
  "Background Checked",
];
