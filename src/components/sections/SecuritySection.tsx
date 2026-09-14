"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, Users, Activity, FileKey, Shield } from "lucide-react";

export function SecuritySection() {
  const features = [
    { icon: Users, text: "Role-based access" },
    { icon: ShieldCheck, text: "Approval controls" },
    { icon: Activity, text: "Audit trails" },
    { icon: Lock, text: "Encryption at rest" },
    { icon: FileKey, text: "Access management" },
    { icon: Shield, text: "Data governance" },
  ];

  return (
    <section className="py-12 md:py-24 bg-brand-navy text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-16 rounded-2xl bg-brand-indigoLight/10 flex items-center justify-center mx-auto mb-6"
          >
            <ShieldCheck size={32} className="text-brand-indigoLight" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-semibold tracking-tight mb-6"
          >
            Your emissions data deserves enterprise-grade protection.
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center justify-center p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <f.icon size={24} className="text-brand-indigoLight mb-3" />
              <span className="font-medium">{f.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
