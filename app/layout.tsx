import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

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
  title: "Richardson's Anguilla Experience | Swim Lessons, Childcare & Youth Coaching",
  description:
    "Safe, skilled, and trusted children's services in Anguilla. Swim lessons, youth football coaching, and professional childcare for local families and visiting guests.",
  keywords: [
    "Anguilla swim lessons",
    "Anguilla childcare",
    "Anguilla babysitting",
    "youth football Anguilla",
    "children's services Anguilla",
    "swim instructor Anguilla",
  ],
  openGraph: {
    title: "Richardson's Anguilla Experience",
    description:
      "Swim lessons, childcare, and youth coaching delivered with care, safety, and experience in Anguilla.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
