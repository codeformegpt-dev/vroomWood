import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutTheMaker from "./components/AboutTheMaker";
import TheCraft from "./components/TheCraft";
import FeaturedCreations from "./components/FeaturedCreations";
import BehindTheWorkshop from "./components/BehindTheWorkshop";
import FAQSection from "./components/FAQSection";
import FooterCTA from "./components/FooterCTA";

export default function App() {
  return (
    <div id="workshop-root" className="min-h-screen bg-cream selection:bg-soft-blush selection:text-charcoal relative">
      {/* Decorative Warm Accent Header Strip */}
      <div className="h-1.5 w-full bg-gradient-to-r from-clay via-soft-blush to-soft-sage" id="brand-header-strip" />

      {/* Main Artisan Header Navigation */}
      <Navbar />

      {/* Section 1: Hero section */}
      <HeroSection />

      {/* Section 2: About the maker */}
      <AboutTheMaker />

      {/* Section 3: The craft / how it works with Interactive Simulator */}
      <TheCraft />

      {/* Section 4: Featured creations with unhurried details drawer */}
      <FeaturedCreations />

      {/* Section 5: Behind the workshop process map */}
      <BehindTheWorkshop />

      {/* Section 6: Interactive FAQs */}
      <FAQSection />

      {/* Section 7: Final thank you and Etsy CTA */}
      <FooterCTA />
    </div>
  );
}
