"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

export function SocialProof() {
  const testimonials = [
    {
      quote: "We reduced the amount of manual vendor data collection our team performs every month and gained auditable visibility into our Scope 3 emissions.",
      role: "Finance Controller",
      company: "Manufacturing Enterprise"
    },
    {
      quote: "TEMT has completely eliminated our reliance on messy spreadsheets. Our carbon accounting is now as rigorous as our financial accounting.",
      role: "VP of Sustainability",
      company: "Global Logistics Corp"
    },
    {
      quote: "The automated sync with our existing ERP systems means we have real-time emissions data ready for our BRSR reporting without weeks of manual consolidation.",
      role: "Chief Financial Officer",
      company: "Retail Conglomerate"
    }
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-12 md:py-24 bg-surface-background">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Two-track layout for credibility */}
        <div className="mb-24 text-center">
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-6">
            Methodology validated in collaboration with
          </p>
          <div className="flex justify-center items-center opacity-70 grayscale">
            <div className="flex items-center gap-3 text-2xl font-bold text-brand-navy font-serif">
              <div className="w-8 h-8 border-4 border-brand-navy rounded-sm flex items-center justify-center text-xs">IIM</div>
              IIM Bangalore
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative min-h-[300px]">
          <p className="text-sm font-semibold text-brand-indigo uppercase tracking-widest mb-12">
            Testimonials
          </p>
          <Quote size={48} className="text-brand-indigo/20 mb-8 mx-auto" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center min-h-[300px] md:min-h-[250px]"
            >
              <h3 className="text-2xl md:text-4xl font-semibold text-brand-navy leading-relaxed mb-12 min-h-[160px] flex items-center justify-center">
                "{testimonials[currentIndex].quote}"
              </h3>
              <div className="flex items-center gap-4 text-left">
                <div className="w-12 h-12 rounded-full bg-slate-200" />
                <div>
                  <div className="font-semibold text-brand-navy">{testimonials[currentIndex].role}</div>
                  <div className="text-slate-500 text-sm">{testimonials[currentIndex].company}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? "bg-brand-indigo w-6" : "bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
