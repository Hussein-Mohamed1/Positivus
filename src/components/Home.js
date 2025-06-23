import CTASection from "./CTASection";
import Footer from "./Footer";
import Header from "./Header";
import HeroSection from "./HeroSection";
import LogoSection from "./LogoSection";
import ServicesSection from "./ServicesSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <LogoSection />
        <ServicesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
