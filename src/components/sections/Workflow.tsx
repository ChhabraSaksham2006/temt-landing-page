"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Link, Database, CheckSquare, Eye, Shield, BarChart2, Zap } from "lucide-react";

export function Workflow() {
  const steps = [
    { name: "Connect", desc: "Telematics + TMS", icon: Link },
    { name: "Capture", desc: "Centralize data", icon: Database },
    { name: "Calculate", desc: "Apply factors", icon: CheckSquare },
    { name: "Review", desc: "Surface anomalies", icon: Eye },
    { name: "Approve", desc: "Manage controls", icon: Shield },
    { name: "Report", desc: "Generate BRSR", icon: BarChart2 },
    { name: "Decide", desc: "Actionable visibility", icon: Zap },
  ];

  return (
    <section className="hidden md:block py-12 md:py-24 bg-brand-navy overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6"
          >
            From shipment to insight — all in one workflow.
          </motion.h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Desktop line connector */}
          <div className="hidden md:block absolute top-7 left-0 w-full h-0.5 bg-slate-800 z-0" />
          
          <div className="flex flex-col md:flex-row justify-between relative z-10 gap-8 md:gap-0">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center group"
              >
                <div className="w-14 h-14 rounded-full bg-slate-800 border-4 border-brand-navy flex items-center justify-center text-slate-400 group-hover:bg-brand-indigo group-hover:text-white transition-colors mb-6 relative z-10">
                  <step.icon size={24} />
                </div>
                <div className="text-center w-32">
                  <h4 className="font-semibold text-white mb-2">{step.name}</h4>
                  <p className="text-xs text-slate-400 leading-tight">{step.desc}</p>
                </div>
                
                {/* Mobile connector */}
                {i !== steps.length - 1 && (
                  <div className="md:hidden w-0.5 h-8 bg-slate-800 my-2" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
