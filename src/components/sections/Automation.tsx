"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { FileSpreadsheet, Mail, Database, Building2, AlertTriangle, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";

export function Automation() {
  return (
    <section className="py-12 md:py-24 bg-surface-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-semibold tracking-tight text-brand-navy mb-6"
          >
            Let your team focus on compliance. Not carbon administration.
          </motion.h2>
        </div>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">
          
          {/* Before */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <div className="mb-4 text-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-slate-400">Before</span>
            </div>
            <Card className="bg-slate-50 border-dashed border-2 border-slate-200 p-8 flex flex-col gap-4">
              <div className="flex items-center gap-3 p-3 bg-white rounded border border-slate-200 text-slate-500 opacity-80">
                <FileSpreadsheet size={20} /> Excel consolidation
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded border border-slate-200 text-slate-500 opacity-80">
                <Mail size={20} /> Emailing vendors for data
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded border border-slate-200 text-slate-500 opacity-80">
                <Database size={20} /> Fragmented telematics
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded border border-slate-200 text-slate-500 opacity-80">
                <Building2 size={20} /> Outdated emission factors
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded border border-status-error/30 text-status-error opacity-90 font-medium">
                <AlertTriangle size={20} /> Manual Calculation & Reporting
              </div>
            </Card>
          </motion.div>

          {/* Arrow */}
          <div className="hidden md:flex shrink-0 items-center justify-center w-12 h-12 rounded-full bg-white border border-border-subtle shadow-sm z-10 text-slate-400">
            <ArrowRight size={24} />
          </div>

          {/* After */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <div className="mb-4 text-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-brand-indigo">After</span>
            </div>
            <Card className="bg-brand-navy p-8 text-white border-none shadow-xl shadow-brand-indigo/10 flex flex-col gap-4">
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold tracking-widest">ONE PLATFORM</h3>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/10 rounded font-medium border border-white/5">
                Automated data ingestion
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/10 rounded font-medium border border-white/5">
                Dynamic emission factors
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/10 rounded font-medium border border-white/5">
                Anomaly detection
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/10 rounded font-medium border border-white/5">
                Centralized ESG reporting
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/10 rounded font-medium border border-white/5 text-brand-indigoLight">
                Complete audit trail
              </div>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
