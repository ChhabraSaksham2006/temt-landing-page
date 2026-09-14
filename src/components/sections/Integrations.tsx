"use client";

import * as React from "react";
import { motion } from "framer-motion";

export function Integrations() {
  const categories = [
    {
      name: "ERP & Finance",
      tools: ["SAP", "Oracle", "Microsoft Dynamics"]
    },
    {
      name: "Telematics & IoT",
      tools: ["Samsara", "Geotab", "Trimble", "Motive"]
    },
    {
      name: "Logistics & TMS",
      tools: ["BlueYonder", "Manhattan", "Oracle TMS", "Descartes"]
    },
    {
      name: "Data Ingestion",
      tools: ["REST API", "GraphQL", "CSV/Excel Parsing", "SFTP"]
    }
  ];

  return (
    <section className="py-12 md:py-24 bg-surface-background border-t border-border-subtle">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-4xl md:text-5xl font-semibold tracking-tight text-brand-navy mb-6"
          >
            Fits into your existing data stack.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 mb-8"
          >
            Your carbon accounting platform shouldn&apos;t require you to manually collect data. TEMT connects directly to where your operational data already lives.
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-xl border border-border-subtle p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="font-semibold text-brand-navy mb-4 border-b border-border-subtle pb-2">{category.name}</h3>
              <ul className="space-y-3">
                {category.tools.map((tool, j) => (
                  <li key={j} className="text-slate-600 font-medium flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-indigo" />
                    {tool}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
