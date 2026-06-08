import { Anchor } from "lucide-react";
import { motion } from "motion/react";

export default function Navbar() {
  const scroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      id="main-nav"
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 z-50 w-full border-b border-linen/60 bg-cream/80 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group flex items-center gap-3 cursor-pointer text-left focus:outline-none"
          id="nav-brand-logo"
        >
          <div className="w-10 h-10 rounded-full bg-sand flex items-center justify-center border border-linen/80 group-hover:bg-soft-pink transition-soft">
            <Anchor className="w-5 h-5 text-wood group-hover:rotate-12 transition-soft" />
          </div>
          <div>
            <span className="block font-serif text-lg font-medium tracking-tight text-charcoal">
              Wooden Sea Automata
            </span>
            <span className="block font-mono text-[10px] uppercase tracking-widest text-wood/80 -mt-0.5">
              David's Workshop
            </span>
          </div>
        </button>

        {/* Navigation Items */}
        <nav className="hidden md:flex items-center gap-8 font-sans text-sm font-medium text-mocha/80" id="desktop-nav">
          <button
            onClick={() => scroll("maker-section")}
            className="hover:text-charcoal cursor-pointer transition-soft focus:outline-none"
            id="nav-link-maker"
          >
            The Maker
          </button>
          <button
            onClick={() => scroll("craft-section")}
            className="hover:text-charcoal cursor-pointer transition-soft focus:outline-none"
            id="nav-link-craft"
          >
            The Mechanism
          </button>
          <button
            onClick={() => scroll("creations-section")}
            className="hover:text-charcoal cursor-pointer transition-soft focus:outline-none"
            id="nav-link-creations"
          >
            Featured Pieces
          </button>
          <button
            onClick={() => scroll("workshop-section")}
            className="hover:text-charcoal cursor-pointer transition-soft focus:outline-none"
            id="nav-link-workshop"
          >
            Our Process
          </button>
          <button
            onClick={() => scroll("faq-section")}
            className="hover:text-charcoal cursor-pointer transition-soft focus:outline-none"
            id="nav-link-faq"
          >
            FAQ
          </button>
        </nav>

        {/* Etsy Call-to-Action */}
        <div id="nav-cta-container">
          <a
            href="https://www.etsy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-charcoal text-cream font-sans text-xs font-semibold uppercase tracking-wider hover:bg-wood hover:scale-[1.02] shadow-sm active:scale-95 transition-soft"
            id="nav-etsy-button"
          >
            Shop on Etsy
          </a>
        </div>
      </div>
    </motion.header>
  );
}
