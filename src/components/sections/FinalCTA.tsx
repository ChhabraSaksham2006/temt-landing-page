"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-32 bg-brand-navy text-white text-center relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-indigo/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Bring your carbon accounting under one roof.
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            One platform for transport emissions tracking, compliance, reporting, and financial-grade visibility.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-brand-indigo text-white hover:bg-brand-indigo/90 border-0 gap-2">
              Request a Demo <ArrowRight size={18} />
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
              See How It Works
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
