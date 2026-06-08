import { Hammer, Sparkles, PencilRuler, Eye } from "lucide-react";
import { motion } from "motion/react";
import { workshopSteps } from "../data/automata";

export default function BehindTheWorkshop() {
  return (
    <section id="workshop-section" className="py-20 md:py-32 bg-cream relative overflow-hidden">
      <div className="absolute inset-0 linen-bg opacity-30 mix-blend-multiply pointer-events-none" />

      {/* Atmospheric lighting highlights */}
      <div className="absolute top-1/2 left-10 w-72 h-72 rounded-full bg-soft-pink/15 filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-soft-sage/10 filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Simple Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24" id="workshop-process-heading">
          <span className="font-mono text-[11px] font-semibold text-soft-ocean uppercase tracking-widest mb-3 block">
            Inside the Studio
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal font-normal tracking-tight">
            The unhurried <span className="italic">road to motion</span>.
          </h2>
          <p className="font-sans text-mocha/80 text-sm sm:text-base leading-relaxed font-light mt-4">
            We do not rush the grain. Fine woodcraft is a dialogue between natural tension and manual patience. Every mechanical linkage passes through these four rigorous milestones of assembly.
          </p>
        </div>

        {/* Process Timeline Blocks Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12" id="workshop-steps-grid">
          {workshopSteps.map((step, index) => {
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="group relative bg-sand/30 hover:bg-sand/60 border border-linen/50 p-8 rounded-3xl transition-soft flex flex-col justify-between"
                id={`process-card-${step.number}`}
              >
                {/* Large Background Numeric Identifier */}
                <div className="absolute top-6 right-8 font-serif text-[72px] sm:text-[96px] font-bold text-linen/40 leading-none select-none group-hover:text-soft-pink/45 transition-soft pointer-events-none">
                  {step.number}
                </div>

                <div className="relative z-10 space-y-6">
                  {/* Badge */}
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-clay" />
                    <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-wood">
                      {step.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-medium text-charcoal">
                    {step.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-mocha/85 leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>

                {/* Technical Focus Metric or detail */}
                <div className="relative z-10 mt-8 pt-5 border-t border-linen/40 flex items-start gap-2.5">
                  <div className="p-1 px-1.5 rounded bg-cream border border-linen text-mocha italic font-medium font-serif text-[10px] tracking-wide shrink-0">
                    Artisan Note
                  </div>
                  <p className="font-sans text-[11px] leading-relaxed text-wood/80 italic">
                    "{step.focusAccent}"
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quality certification banner (Tactile wooden workshop guarantee) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-16 md:mt-24 p-8 sm:p-10 rounded-3xl bg-soft-pink/35 border border-soft-blush/25 flex flex-col md:flex-row items-center gap-8 justify-between text-left"
          id="workshop-guarantee"
        >
          <div className="space-y-2">
            <h4 className="font-serif text-lg sm:text-xl font-normal text-charcoal flex items-center gap-2.5">
              <PencilRuler className="w-5 h-5 text-clay shrink-0" />
              The Lifetime Squeak-Free Warranty
            </h4>
            <p className="font-sans text-xs sm:text-sm text-mocha/80 leading-relaxed font-light max-w-2xl">
              Since natural wood responds to air moisture and temperature changes, every mechanical automaton is built with micro-adjustable brass pin bushings. If a gear or wing joint ever develops friction, a tiny drops of beeswax oil (included) restores absolute sensory silence. 
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-soft-sage animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-wider text-charcoal/90 font-bold border border-charcoal/20 px-3.5 py-2 rounded-full bg-white">
              Cams cut manually No CNC
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
