import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import ForPartners from "@/components/ForPartners";
import CtaBanner from "@/components/CtaBanner";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustedBy />
      <About />
      <Services />
      <Testimonials />
      <ForPartners />
      <CtaBanner />
      <Contact />
    </main>
  );
}
