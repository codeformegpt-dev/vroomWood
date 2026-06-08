import { Anchor, ArrowUpRight, Award, Footprints, Heart, Compass } from "lucide-react";
import { motion } from "motion/react";

export default function FooterCTA() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer-section" className="relative bg-cream pt-20 pb-12 border-t border-linen/60 overflow-hidden">
      <div className="absolute inset-0 linen-bg opacity-30 mix-blend-multiply pointer-events-none" />

      {/* Decorative seafoam glowing orb */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-soft-sage/10 filter blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        
        {/* Coastal anchor element */}
        <div className="flex justify-center mb-6" id="footer-artwork">
          <div className="w-12 h-12 rounded-full bg-sand flex items-center justify-center border border-linen text-wood">
            <Anchor className="w-5 h-5" />
          </div>
        </div>

        {/* Closing Warm Message */}
        <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal font-normal tracking-tight max-w-2xl mx-auto leading-tight" id="footer-title">
          Bring the unhurried ripples of the <span className="italic text-wood font-normal">coastal tides</span> home.
        </h3>
        
        <p className="font-sans text-mocha/80 text-sm sm:text-base leading-relaxed font-light mt-6 max-w-xl mx-auto" id="footer-message">
          Our batch releases are rare, but each sculpture lives on for generations. Whether you are finding a centerpiece for your favorite reading desk or selecting a mindful gift for an ocean lover, we thank you for valuing slow, manual craftsmanship.
        </p>

        {/* Large Etsy Call to Action inside a snug, linen background card */}
        <div className="mt-12 max-w-lg mx-auto p-8 rounded-3xl bg-sand/40 border border-linen/50" id="footer-action-panel">
          <span className="font-mono text-[10px] uppercase tracking-widest text-clay font-bold block mb-1">
            Now Welcoming Commissions
          </span>
          <p className="font-sans text-xs text-mocha/80 leading-relaxed mb-6">
            Visit our Etsy marketplace to claim an existing piece from David's signature manta batch, or message him directly to secure a customized wood grain species.
          </p>

          <a
            href="https://www.etsy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full inline-flex items-center justify-center px-8 py-4 rounded-full bg-charcoal text-cream font-sans text-sm font-semibold tracking-wider hover:bg-wood hover:scale-[1.01] transition-soft shadow-lg cursor-pointer active:scale-95"
            id="footer-big-etsy-btn"
          >
            Visit Our Etsy Workshop
            <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Secondary Trust indicators: Small icons denoting manual and eco values */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-mocha/70 text-[11px] font-mono uppercase tracking-wider border-b border-linen/40 pb-12" id="footer-trust">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-clay" />
            <span>Individually Signed & Serialized</span>
          </div>
          <div className="hidden sm:block text-linen">&bull;</div>
          <div className="flex items-center gap-2">
            <Footprints className="w-4 h-4 text-soft-sage animate-pulse" />
            <span>Bespoke Domestic Lumber</span>
          </div>
          <div className="hidden sm:block text-linen">&bull;</div>
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-soft-ocean" />
            <span>Global Coastal Shipping</span>
          </div>
        </div>

        {/* Small copyright footline */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-mocha/60 gap-4" id="footer-copyright-line">
          <div>
            &copy; {currentYear} Wooden Sea Automata Workshop. All rights reserved globally.
          </div>
          <div className="flex items-center gap-1.5 justify-center">
            Made with patience & 
            <Heart className="w-3 h-3 text-clay fill-clay" />
            by David's workshop. Dedicated to the Manta.
          </div>
        </div>

      </div>
    </footer>
  );
}
