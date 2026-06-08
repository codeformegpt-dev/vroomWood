import { useState } from "react";
import { ArrowUpRight, CheckCircle, Info, ChevronRight, XIcon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { featuredAutomata } from "../data/automata";
import { AutomataItem } from "../types";

export default function FeaturedCreations() {
  const [selectedItem, setSelectedItem] = useState<AutomataItem | null>(null);

  return (
    <section id="creations-section" className="py-20 md:py-32 bg-sand/20 relative">
      <div className="absolute inset-0 linen-bg opacity-30 mix-blend-multiply pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header containing signature description */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24" id="creations-heading">
          <span className="font-mono text-[11px] font-semibold text-clay uppercase tracking-widest mb-3 block">
            Craft Catalog
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal font-normal tracking-tight">
            The Autumn <span className="italic">Batch Release</span>
          </h2>
          <p className="font-sans text-mocha/80 text-sm sm:text-base leading-relaxed font-light mt-4">
            We list our kinetic art pieces in small, numbered releases. Each piece here is currently showcased on our Etsy workspace. Read their individual stories to find the motion that speaks to your space.
          </p>
        </div>

        {/* Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10" id="creations-grid">
          {featuredAutomata.map((item, index) => {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-linen/60 shadow-md hover:shadow-xl transition-soft"
                id={`product-card-${item.id}`}
              >
                {/* Product Image Frame */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-sand">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 select-none group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle hover overlay flag */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm xs:px-3 px-2 py-1.5 rounded-full border border-linen/30 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-soft-sage" />
                    <span className="font-mono text-[9px] uppercase tracking-wider text-mocha font-semibold">
                      {item.priceEstimate} Est.
                    </span>
                  </div>

                  {item.scientificName && (
                    <div className="absolute bottom-4 left-4 bg-charcoal/40 backdrop-blur-sm px-2.5 py-1 rounded-lg">
                      <p className="font-serif text-[10px] text-cream italic tracking-wide">
                        {item.scientificName}
                      </p>
                    </div>
                  )}
                </div>

                {/* Card description details */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-medium text-charcoal group-hover:text-wood transition-soft">
                      {item.name}
                    </h3>
                    
                    {/* Materials preview */}
                    <div className="flex flex-wrap gap-1.5 mt-2.5 mb-4">
                      {item.materials.slice(0, 3).map((mat) => (
                        <span key={mat} className="font-mono text-[9px] text-mocha/70 bg-sand px-2 py-0.5 rounded-md border border-linen/30">
                          {mat}
                        </span>
                      ))}
                    </div>

                    <p className="font-sans text-xs sm:text-sm text-mocha/80 leading-relaxed font-light line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  {/* Dual buttons matching design expectations */}
                  <div className="mt-8 pt-5 border-t border-linen/50 flex gap-3 items-center justify-between">
                    <button
                      onClick={() => setSelectedItem(item)}
                      className="inline-flex items-center gap-1 text-xs font-serif font-medium text-wood hover:text-charcoal cursor-pointer focus:outline-none transition-soft"
                      id={`btn-story-${item.id}`}
                    >
                      Read Story
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={item.etsyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 bg-charcoal text-white hover:bg-wood font-sans text-xs px-4 py-2.5 rounded-full uppercase tracking-wider font-semibold transition-soft"
                      id={`btn-etsy-link-${item.id}`}
                    >
                      Shop Piece
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Extended detail panel overlay via AnimatePresence */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-charcoal/50 backdrop-blur-sm z-50 flex justify-end"
              onClick={() => setSelectedItem(null)}
              id="product-drawer-overlay"
            >
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 30, stiffness: 200 }}
                className="w-full max-w-xl bg-cream h-full shadow-2xl relative flex flex-col justify-between overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
                id="product-drawer"
              >
                {/* Header detail */}
                <div>
                  {/* Aspect image panel inside drawer */}
                  <div className="relative aspect-[16/10] w-full bg-sand">
                    <img
                      src={selectedItem.image}
                      alt={selectedItem.name}
                      className="w-full h-full object-cover select-none"
                      referrerPolicy="no-referrer"
                    />
                    <button
                      onClick={() => setSelectedItem(null)}
                      className="absolute top-4 left-4 p-2.5 rounded-full bg-white/95 text-charcoal border border-linen/40 hover:bg-linen transition-soft cursor-pointer shadow-md"
                      id="close-drawer-button"
                    >
                      <XIcon className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Body textual story */}
                  <div className="p-8 sm:p-10 space-y-8">
                    <div>
                      <span className="font-mono text-[9px] uppercase tracking-widest text-clay font-bold block mb-1">
                        {selectedItem.scientificName || "HANDMADE SEA AUTOMATA"}
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl text-charcoal font-normal">
                        {selectedItem.name}
                      </h3>
                      <p className="font-sans text-xs font-medium text-wood mt-1">
                        Heirloom Kinetic Sculpture &bull; Signed and Numbered
                      </p>
                    </div>

                    <div className="space-y-4 font-sans text-mocha/90 text-sm sm:text-base leading-relaxed font-light">
                      <p>{selectedItem.detailedDescription}</p>
                    </div>

                    {/* Spec List */}
                    <div className="space-y-4 bg-sand/50 p-6 rounded-2xl border border-linen/60">
                      <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-charcoal/80 flex items-center gap-2">
                        <Info className="w-4 h-4 text-wood" />
                        Composition Specifications
                      </h4>
                      <dl className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 text-xs font-sans">
                        <div>
                          <dt className="text-wood font-mono uppercase text-[9px] tracking-wider">Grown In Timber</dt>
                          <dd className="text-charcoal font-serif font-medium mt-0.5">{selectedItem.materials.join(", ")}</dd>
                        </div>
                        <div>
                          <dt className="text-wood font-mono uppercase text-[9px] tracking-wider">Envelope Dimensions</dt>
                          <dd className="text-charcoal mt-0.5 font-medium">{selectedItem.dimensions}</dd>
                        </div>
                        <div className="sm:col-span-2">
                          <dt className="text-wood font-mono uppercase text-[9px] tracking-wider">Power & Induction Mechanism</dt>
                          <dd className="text-charcoal mt-0.5 leading-relaxed font-light">{selectedItem.powerSource}</dd>
                        </div>
                        <div className="sm:col-span-2">
                          <dt className="text-wood font-mono uppercase text-[9px] tracking-wider">Dynamic Wing Profile</dt>
                          <dd className="text-charcoal mt-0.5 leading-relaxed font-light">{selectedItem.movementDescription}</dd>
                        </div>
                      </dl>
                    </div>

                    {/* Signed Certification details with delicate soft pink touch */}
                    <div className="space-y-2 border-l-2 border-soft-blush pl-4">
                      {selectedItem.extraDetails.map((detail, index_d) => (
                        <p key={index_d} className="font-sans text-xs text-mocha/80 italic leading-relaxed flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-soft-sage shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Final bottom action drawer */}
                <div className="p-8 border-t border-linen/60 bg-sand/40 flex items-center justify-between gap-6 sm:px-10">
                  <div>
                    <span className="block font-mono text-[9px] uppercase tracking-widest text-wood">Estimated Workshop Cost</span>
                    <span className="font-serif text-2xl font-bold text-charcoal">{selectedItem.priceEstimate} USD</span>
                  </div>
                  <a
                    href={selectedItem.etsyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-charcoal text-white hover:bg-wood font-sans text-xs uppercase tracking-widest font-bold transition-soft shadow-md cursor-pointer"
                    id="drawer-etsy-link"
                  >
                    Direct Etsy Portal
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
