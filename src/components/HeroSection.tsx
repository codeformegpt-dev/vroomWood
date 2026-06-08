import { ArrowUpRight, Compass, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { IMAGES } from "../data/automata";

export default function HeroSection() {
  const scrollToCraft = () => {
    const element = document.getElementById("craft-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero-section" className="relative overflow-hidden pt-6 pb-20 md:py-32">
      {/* Background fabric-like warmth */}
      <div className="absolute inset-0 linen-bg opacity-40 mix-blend-multiply pointer-events-none" />
      
      {/* Subtle organic shapes for coastal warmth - Pastel blush & Seafoam highlights */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 rounded-full bg-soft-blush/20 filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-96 h-96 rounded-full bg-soft-sage/15 filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content Block */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left" id="hero-text-container">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-soft-pink/70 border border-soft-blush/30 w-fit mb-6"
              id="hero-badge"
            >
              <Compass className="w-3.5 h-3.5 text-clay" />
              <span className="font-mono text-[10px] uppercase tracking-wider text-mocha font-medium">
                Ocean-Inspired Kinetic Art
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal font-normal tracking-tight leading-[1.08] mb-6"
              id="hero-title"
            >
              Bringing the <span className="italic text-wood">fluid grace</span> of the deep into wood.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="font-sans text-base sm:text-lg text-mocha/85 leading-relaxed font-light mb-10 max-w-lg"
              id="hero-subheading"
            >
              Every kinetic sculpture is patiently hand-carved, balanced, and tuned inside our small domestic workshop. Discover peaceful, organic manta ray motion, powered gently by modern USB-C.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center"
              id="hero-buttons-container"
            >
              <a
                href="https://www.etsy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-8 py-4 rounded-full bg-charcoal text-cream font-sans text-sm font-semibold tracking-wider hover:bg-wood hover:scale-[1.01] active:scale-95 transition-soft shadow-lg shadow-charcoal/5 cursor-pointer"
                id="hero-buy-etsy-button"
              >
                Shop on Etsy
                <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <button
                onClick={scrollToCraft}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-wood/30 text-mocha font-sans text-sm font-semibold tracking-wider hover:bg-sand/60 hover:text-charcoal cursor-pointer active:scale-95 transition-soft"
                id="hero-explore-craft-button"
              >
                Explore the Craft
              </button>
            </motion.div>

            {/* Micro-detail indicator - A little colorful accent: pink flower pot allusion */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1.5 }}
              className="mt-12 flex items-center gap-3.5 border-t border-linen/50 pt-8"
              id="hero-artisan-stat"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-soft-blush animate-pulse" />
              <p className="font-mono text-xs text-wood/90 leading-relaxed">
                Current Batch: <span className="font-semibold text-charcoal">Release 04</span> is now live on Etsy — <span className="italic">Only 3 of 5 remaining.</span>
              </p>
            </motion.div>
          </div>

          {/* Large Hero Image of Manta Ray Automaton */}
          <div className="lg:col-span-7 relative flex justify-center" id="hero-image-container">
            {/* Linen fabric-inspired frame background */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full aspect-[16/11] rounded-3xl overflow-hidden shadow-2xl shadow-charcoal/5 border-4 border-white/80"
            >
              <img
                src={IMAGES.mantaHero}
                alt="Handcrafted wood manta ray kinetic automaton on David's light oak workbench"
                className="w-full h-full object-cover select-none scale-[1.01] hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              
              {/* Subtle glassmorphism badge overlaid on image */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-cream/95 backdrop-blur-md border border-white/60 shadow-md flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-sm font-medium text-charcoal">The Gilded Manta Ray No. 4</h3>
                  <p className="font-sans text-[11px] text-mocha/80">Premium Walnut & Quartersawn Ash</p>
                </div>
                <div className="flex items-center gap-1 bg-soft-pink px-2.5 py-1 rounded-full">
                  <Sparkles className="w-3 h-3 text-clay" />
                  <span className="font-mono text-[9px] uppercase tracking-wider text-clay font-bold">Signature Series</span>
                </div>
              </div>
            </motion.div>

            {/* Tiny artisan detail card overlay - Small accent detail: sage plant badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -top-6 right-10 hidden md:flex items-center gap-3 bg-white px-5 py-4 rounded-2xl shadow-lg border border-linen/30"
              id="hero-floating-badge"
            >
              <div className="w-9 h-9 rounded-full bg-soft-sage/30 flex items-center justify-center text-mocha font-serif text-xs font-semibold">
                S
              </div>
              <div>
                <p className="text-[11px] font-mono text-wood uppercase tracking-wider font-semibold">Tuned To</p>
                <p className="text-xs font-serif text-charcoal font-medium">Silent Wave Glide</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
