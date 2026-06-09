"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CalendlyButton from "@/components/CalendlyButton";

/** Renders the marketing chrome everywhere except the /admin dashboard. */
export default function SiteChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin")) return <>{children}</>;

  return (
    <>
      <Header />
      {children}
      <Footer />
      <CalendlyButton />
    </>
  );
}
