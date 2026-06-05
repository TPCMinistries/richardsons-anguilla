import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { SITE, FAQS } from "@/lib/constants";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CalendlyButton from "@/components/CalendlyButton";
import MotionProvider from "@/components/MotionProvider";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default:
      "Richardson's Anguilla Experience | Swim Lessons, Childcare & Youth Coaching",
    template: "%s | Richardson's Anguilla Experience",
  },
  description:
    "Safe, certified, and trusted children's services in Anguilla. Private swim lessons, professional childcare, and youth coaching for visiting families and luxury resorts — led by StarGuard Elite certified instructor Deanna Richardson.",
  applicationName: SITE.name,
  authors: [{ name: "Deanna Richardson" }],
  keywords: [
    "Anguilla swim lessons",
    "Anguilla childcare",
    "Anguilla babysitting",
    "swim instructor Anguilla",
    "youth football Anguilla",
    "children's services Anguilla",
    "resort childcare Anguilla",
    "villa babysitter Anguilla",
    "water safety Anguilla",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Richardson's Anguilla Experience",
    description:
      "Private swim lessons, professional childcare, and youth coaching in Anguilla — delivered with care, certification, and luxury-resort trust.",
    url: SITE.url,
    siteName: SITE.name,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Richardson's Anguilla Experience — children's services in Anguilla",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Richardson's Anguilla Experience",
    description:
      "Swim lessons, childcare, and youth coaching delivered with care, safety, and experience in Anguilla.",
    images: ["/images/hero-bg.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#0F2B46",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "ChildCare"],
      "@id": `${SITE.url}/#business`,
      name: SITE.name,
      description:
        "Private swim lessons, professional childcare, youth coaching, and water-safety programs in Anguilla for visiting families and luxury resorts.",
      url: SITE.url,
      telephone: SITE.phoneDisplay,
      image: `${SITE.url}/images/hero-bg.jpg`,
      areaServed: { "@type": "Place", name: "Anguilla, British West Indies" },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Anguilla",
        addressCountry: "AI",
      },
      founder: { "@type": "Person", name: "Deanna Richardson" },
      priceRange: "$$",
      sameAs: [`https://wa.me/${SITE.whatsapp}`],
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE.url}/#faq`,
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <MotionProvider>
          <Header />
          {children}
          <Footer />
          <CalendlyButton />
        </MotionProvider>
      </body>
    </html>
  );
}
