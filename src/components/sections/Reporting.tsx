"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Download, Calendar, Share2, Filter } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Reporting() {
  return (
    <section id="analytics" className="py-12 md:py-24 bg-white overflow-hidden" aria-labelledby="analytics-heading">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            id="analytics-heading"
            className="text-4xl md:text-5xl font-semibold tracking-tight text-brand-navy mb-6"
          >
            Reporting that&apos;s ready when management needs it.
          </motion.h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto rounded-xl border border-border-subtle bg-surface-background shadow-xl overflow-hidden"
        >
          {/* Top Bar */}
          <div className="bg-white border-b border-border-subtle p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-3 overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
              <span className="font-semibold text-brand-navy whitespace-nowrap">Scope 3 Emissions</span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-500 whitespace-nowrap hover:text-brand-navy cursor-pointer">Scope 1 & 2</span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-500 whitespace-nowrap hover:text-brand-navy cursor-pointer">BRSR Report</span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <Button variant="outline" size="sm" className="gap-2"><Share2 size={14} /> Share</Button>
              <Button variant="outline" size="sm" className="gap-2"><Calendar size={14} /> Schedule</Button>
              <Button variant="primary" size="sm" className="gap-2"><Download size={14} /> Export</Button>
            </div>
          </div>

          {/* Filter Bar */}
          <div className="bg-slate-50 border-b border-border-subtle p-3 px-6 flex items-center gap-6 overflow-x-auto hide-scrollbar text-sm font-medium text-slate-600">
            <div className="flex items-center gap-2"><Filter size={14} className="text-slate-400" /> Filters:</div>
            <div className="flex items-center gap-1 cursor-pointer">Entity <span className="text-brand-indigo font-bold bg-brand-indigoLight px-2 py-0.5 rounded">All</span></div>
            <div className="flex items-center gap-1 cursor-pointer">Region <span className="text-brand-indigo font-bold bg-brand-indigoLight px-2 py-0.5 rounded">APAC</span></div>
            <div className="flex items-center gap-1 cursor-pointer">Period <span className="text-brand-indigo font-bold bg-brand-indigoLight px-2 py-0.5 rounded">Q3 2026</span></div>
            <div className="flex items-center gap-1 cursor-pointer">Metric <span className="text-brand-indigo font-bold bg-brand-indigoLight px-2 py-0.5 rounded">tCO₂e</span></div>
          </div>

          {/* Report Body */}
          <div className="p-4 md:p-8 bg-white min-h-[400px] overflow-x-auto" role="region" aria-label="Scope 3 emissions report preview" tabIndex={0}>
            <table className="min-w-[620px] w-full text-left text-sm">
              <thead>
                <tr className="border-b-2 border-brand-navy">
                  <th className="py-3 font-semibold text-brand-navy uppercase tracking-wider">Transport Mode</th>
                  <th className="py-3 font-semibold text-brand-navy uppercase tracking-wider text-right">Actual (t)</th>
                  <th className="py-3 font-semibold text-brand-navy uppercase tracking-wider text-right">Target (t)</th>
                  <th className="py-3 font-semibold text-brand-navy uppercase tracking-wider text-right">Variance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-subtle">
                <tr className="bg-slate-50 font-medium">
                  <td className="py-3 pl-2">Total Surface Transport</td>
                  <td className="py-3 text-right">12,485</td>
                  <td className="py-3 text-right">12,000</td>
                  <td className="py-3 text-right text-status-error">+4.0%</td>
                </tr>
                <tr>
                  <td className="py-3 pl-6 text-slate-600">Road (FTL/LTL)</td>
                  <td className="py-3 text-right">9,452</td>
                  <td className="py-3 text-right">9,000</td>
                  <td className="py-3 text-right text-status-error">+5.0%</td>
                </tr>
                <tr>
                  <td className="py-3 pl-6 text-slate-600">Rail</td>
                  <td className="py-3 text-right">3,033</td>
                  <td className="py-3 text-right">3,000</td>
                  <td className="py-3 text-right text-status-error">+1.1%</td>
                </tr>
                <tr className="bg-slate-50 font-medium border-t-2 border-slate-200">
                  <td className="py-3 pl-2">Total Air & Ocean</td>
                  <td className="py-3 text-right">8,320</td>
                  <td className="py-3 text-right">8,500</td>
                  <td className="py-3 text-right text-status-success">-2.1%</td>
                </tr>
                <tr className="font-bold text-brand-navy bg-brand-indigoLight/30 border-t-2 border-brand-navy">
                  <td className="py-3 pl-2">Total Scope 3 Transport Emissions</td>
                  <td className="py-3 text-right">20,805</td>
                  <td className="py-3 text-right">20,500</td>
                  <td className="py-3 text-right text-status-warning">+1.4%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
