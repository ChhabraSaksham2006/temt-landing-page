"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { AlertCircle, Clock, FileWarning, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export function ExceptionManagement() {
  return (
    <section className="py-12 md:py-24 bg-surface-background border-t border-border-subtle">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-semibold tracking-tight text-brand-navy mb-6"
          >
            Don't search for data gaps. Let the system find them.
          </motion.h2>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* High Priority */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl border border-status-errorBg p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col h-full border-t-4 border-t-status-error relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-status-errorBg text-status-error text-[10px] font-bold px-2 py-1 rounded-bl-lg uppercase tracking-wide">High Priority</div>
            
            <div className="w-10 h-10 rounded-full bg-status-errorBg text-status-error flex items-center justify-center mb-4">
              <AlertCircle size={20} />
            </div>
            
            <h3 className="font-semibold text-brand-navy text-lg mb-2">42.8t CO₂e calculation mismatch</h3>
            
            <div className="space-y-2 mb-6 flex-1">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Reason:</span>
                <span className="font-medium text-brand-navy">Distance mismatch vs Telematics</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Owner:</span>
                <span className="font-medium text-brand-navy">Logistics Operations</span>
              </div>
            </div>

            <Button variant="outline" className="w-full text-status-error border-status-error/30 hover:bg-status-errorBg/50 justify-between group">
              Review Exception <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

          {/* Medium Priority */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl border border-status-warningBg p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col h-full border-t-4 border-t-status-warning relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-status-warningBg text-status-warning text-[10px] font-bold px-2 py-1 rounded-bl-lg uppercase tracking-wide">Medium Priority</div>
            
            <div className="w-10 h-10 rounded-full bg-status-warningBg text-status-warning flex items-center justify-center mb-4">
              <Clock size={20} />
            </div>
            
            <h3 className="font-semibold text-brand-navy text-lg mb-2">Emissions report awaiting sign-off</h3>
            
            <div className="space-y-2 mb-6 flex-1">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Status:</span>
                <span className="font-medium text-brand-navy">Pending for 6 days</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Vendor:</span>
                <span className="font-medium text-brand-navy">GlobalTech Logistics</span>
              </div>
            </div>

            <Button variant="outline" className="w-full justify-between group text-brand-navy border-border-subtle hover:bg-slate-50">
              Review Approval <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

          {/* Low Priority */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl border border-border-subtle p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col h-full border-t-4 border-t-slate-300 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-slate-100 text-slate-500 text-[10px] font-bold px-2 py-1 rounded-bl-lg uppercase tracking-wide">Low Priority</div>
            
            <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center mb-4">
              <FileWarning size={20} />
            </div>
            
            <h3 className="font-semibold text-brand-navy text-lg mb-2">Outdated emission factor</h3>
            
            <div className="space-y-2 mb-6 flex-1">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Category:</span>
                <span className="font-medium text-brand-navy">UK DEFRA (Air)</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Impact:</span>
                <Badge variant="default" className="text-[10px]">Negligible</Badge>
              </div>
            </div>

            <Button variant="outline" className="w-full justify-between group text-brand-navy border-border-subtle hover:bg-slate-50">
              Review Factor <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
