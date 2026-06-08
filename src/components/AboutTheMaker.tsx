import { Heart, Hammer, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { IMAGES } from "../data/automata";

export default function AboutTheMaker() {
  return (
    <section id="maker-section" className="py-20 md:py-32 bg-sand/30 relative">
      {/* Decorative vertical separator with fabric loop feel */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-12 bg-linen" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:items-center">
          
          {/* David's Work Environment Image and Vignette */}
          <div className="lg:col-span-6 relative order-last lg:order-first" id="maker-image-block">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-3xl overflow-hidden border border-linen/70 shadow-xl bg-white p-3"
            >
              <div className="relative aspect-[16/11] rounded-2xl overflow-hidden bg-sand">
                <img
                  src={IMAGES.benchImg}
                  alt="Chisels, wood dust and blueprints on David's warm seaside studio workbench"
                  className="w-full h-full object-cover select-none hover:scale-[1.03] transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/10 to-transparent pointer-events-none" />
              </div>

              {/* Hand-signed label simulation */}
              <div className="mt-4 flex items-center justify-between px-3 pb-1">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-soft-sage" />
                  <span className="font-mono text-[10px] tracking-wider uppercase text-mocha">
                    Bainbridge Island Workshop
                  </span>
                </div>
                <div className="flex items-center gap-1.5 font-sans text-xs italic text-wood">
                  <MapPin className="w-3.5 h-3.5 text-clay" />
                  Where wood meets saltwater
                </div>
              </div>
            </motion.div>

            {/* Subtle decorative wood slice backdrop element */}
            <div className="absolute -bottom-10 -right-10 w-44 h-44 rounded-full border border-linen/40 pointer-events-none" />
          </div>

          {/* Letter / Story Writing Block */}
          <div className="lg:col-span-6 flex flex-col justify-center" id="maker-story-block">
            <span className="font-mono text-[11px] font-semibold text-clay uppercase tracking-widest mb-3 block">
              Meet the Artisan
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-normal tracking-tight leading-tight mb-8">
              "We carve <span className="italic font-normal">patience</span> into every gear."
            </h2>

            {/* Letter mock container with soft margins */}
            <div className="space-y-6 font-sans text-mocha/90 text-sm sm:text-base leading-relaxed font-light">
              <p>
                Hello. I’m David. Ever since I can recall, I’ve been fascinated by two things that seem poles apart: the static, solid warmth of natural timber, and the untamable, fluid grace of marine wildlife—primarily the manta ray.
              </p>
              <p>
                I spent years working as a restoration carpenter, learning how spruce, mahogany, and black walnut behave under pressure. But in the quiet evenings of late autumn, I began experimenting with homemade cams and wood hinges. I wanted to see if I could make wood breathe—to take a rigid piece of forest and coax it into generating a wave so soft, it could calm a busy room.
              </p>
              <p>
                What started as a quiet personal curiosity in my kitchen has slowly grown into a dedicated workshop practice. Originally, I only shared these pieces with neighbor friends and local coastal markets here in the Pacific Northwest. 
              </p>
              <p>
                Each creation demands weeks of drawing, sanding, and fine-tuning. Today, through the unhurried nature of Etsy, I am happy to send these small, moving pieces of wonder to homes miles away from my bench. Every piece carries with it a bit of Bainbridge Island fog, the smell of bees-wax, and a slower rhythm of living.
              </p>
            </div>

            {/* Personal Signoff */}
            <div className="mt-10 flex items-center gap-4" id="maker-signature-container">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-linen flex items-center justify-center font-serif text-lg font-bold text-wood italic border border-white">
                D
              </div>
              <div>
                <span className="block font-serif text-lg font-semibold text-charcoal italic leading-none">
                  David Mitchell
                </span>
                <span className="block font-mono text-[10px] uppercase tracking-wider text-wood/80 mt-1">
                  Woodcarver & Kinetic Designer
                </span>
              </div>
            </div>

            {/* Mini decorative accent: dry press flower/leaf icon */}
            <div className="mt-8 flex items-center gap-2 text-xs font-mono text-soft-sage" id="maker-accent">
              <Heart className="w-3.5 h-3.5 fill-soft-sage text-soft-sage" />
              <span>Patiently crafted by one pair of hands.</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
