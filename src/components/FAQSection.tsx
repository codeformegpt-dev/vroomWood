import { useState } from "react";
import { ChevronDown, HelpCircle, Filter } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { faqs } from "../data/automata";

type CategoryFilter = "all" | "craft" | "power" | "shipping";

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>("what-is-automaton");
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const filteredFAQs = faqs.filter((faq) => {
    if (activeCategory === "all") return true;
    return faq.category === activeCategory;
  });

  return (
    <section id="faq-section" className="py-20 md:py-32 bg-sand/20 relative">
      <div className="absolute inset-0 linen-bg opacity-30 mix-blend-multiply pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16" id="faq-heading">
          <span className="font-mono text-[11px] font-semibold text-soft-ocean uppercase tracking-widest mb-3 block">
            Questions & Answers
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-normal tracking-tight">
            Curiosities <span className="italic">unfolded</span>.
          </h2>
          <p className="font-sans text-mocha/80 text-sm leading-relaxed font-light mt-3">
            Everything you need to know about adopting a handcrafted creature into your home sanctuary.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2.5 justify-center mb-10" id="faq-filters">
          {[
            { tag: "all", label: "Show All" },
            { tag: "craft", label: "The Craft" },
            { tag: "power", label: "Power & Tuning" },
            { tag: "shipping", label: "Orders & Shipping" },
          ].map((cat) => (
            <button
              key={cat.tag}
              onClick={() => {
                setActiveCategory(cat.tag as CategoryFilter);
                setOpenId(null); // Close active for elegant re-layouts
              }}
              className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider uppercase cursor-pointer transition-soft border ${activeCategory === cat.tag ? "bg-charcoal text-cream border-charcoal font-bold shadow-sm" : "bg-white/60 text-mocha hover:text-charcoal border-linen/60"}`}
              id={`filter-faq-${cat.tag}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4" id="faq-accordion">
          {filteredFAQs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-linen/50 overflow-hidden shadow-sm hover:border-linen transition-soft"
                id={`faq-item-${faq.id}`}
              >
                {/* Accordion header item */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-5 sm:px-8 sm:py-6 flex items-center justify-between text-left cursor-pointer focus:outline-none focus:bg-sand/15"
                  id={`faq-toggle-${faq.id}`}
                >
                  <div className="flex items-center gap-4 pr-4">
                    <HelpCircle className="w-4 h-4 text-soft-sage shrink-0" />
                    <span className="font-serif text-base sm:text-lg text-charcoal font-medium">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-wood transition-transform duration-500 shrink-0 ${isOpen ? "rotate-185" : "rotate-0"}`}
                  />
                </button>

                {/* Animated content box using simple conditional expansion */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden bg-sand/30 border-t border-linen/30"
                    >
                      <div className="px-6 py-5 sm:px-8 sm:py-6 font-sans text-mocha/85 text-xs sm:text-sm leading-relaxed font-light">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Humorous / Welcoming Note */}
        <div className="mt-12 text-center text-xs font-sans text-wood/80 italic leading-relaxed" id="faq-bottom-note">
          Have an alternative curiosity or custom timber request? 
          <a
            href="https://www.etsy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline ml-1 text-charcoal font-semibold hover:text-wood font-serif inline-flex items-center gap-0.5"
          >
            Ask David on Etsy
          </a>
        </div>

      </div>
    </section>
  );
}
