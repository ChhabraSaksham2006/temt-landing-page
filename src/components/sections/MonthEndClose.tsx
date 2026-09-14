"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { Check, Circle, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function MonthEndClose() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const targetPercentage = 87;
  const [percentage, setPercentage] = React.useState(0);

  React.useEffect(() => {
    if (isInView) {
      const duration = 1500; // ms
      const steps = 60;
      const stepTime = duration / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const nextValue = Math.min(Math.round((currentStep / steps) * targetPercentage), targetPercentage);
        setPercentage(nextValue);
        
        if (currentStep >= steps) clearInterval(timer);
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView]);

  const tasks = [
    { name: "Vendor data reconciliation", status: "complete", owner: "Logistics Ops" },
    { name: "Telematics sync", status: "complete", owner: "IT Systems" },
    { name: "Air freight data validation", status: "complete", owner: "Supply Chain" },
    { name: "Emission factor mapping", status: "complete", owner: "ESG Team" },
    { name: "Anomaly investigation", status: "pending", owner: "Accounting" },
    { name: "BRSR format alignment", status: "pending", owner: "Controller" },
    { name: "Final audit approval", status: "pending", owner: "CFO" },
  ];

  return (
    <section className="py-12 md:py-24 bg-surface-background border-t border-border-subtle" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text */}
          <div className="max-w-xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="text-4xl md:text-5xl font-semibold tracking-tight text-brand-navy mb-6"
            >
              Report faster. Know exactly what's left.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-600 mb-8"
            >
              Quarterly emissions reporting shouldn't be a black box. Track data collection progress across all vendors, identify bottlenecks instantly, and ensure every requirement is met on time.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6"
            >
              <div>
                <div className="text-3xl font-bold text-brand-navy">7</div>
                <div className="text-sm font-medium text-slate-500">Tasks remaining</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-navy">3</div>
                <div className="text-sm font-medium text-slate-500">Owners involved</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-status-error flex items-center gap-2">
                  2 <AlertCircle size={20} className="mt-1" />
                </div>
                <div className="text-sm font-medium text-slate-500">High-priority</div>
              </div>
            </motion.div>
          </div>

          {/* Right Product Preview */}
          <motion.div 
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl border border-border-subtle shadow-xl overflow-hidden"
          >
            <div className="p-6 border-b border-border-subtle bg-slate-50">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-brand-navy">Q3 Reporting Progress</h3>
                <Badge variant="warning">In Progress</Badge>
              </div>
              
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-bold text-brand-navy">{percentage}% Complete</span>
                <span className="text-xs font-medium text-slate-500">Target: Oct 15</span>
              </div>
              <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-brand-indigo"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${targetPercentage}%` } : {}}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
              </div>
            </div>

            <div className="p-6">
              <ul className="space-y-4">
                {tasks.map((task, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + (i * 0.05) }}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      {task.status === "complete" ? (
                        <div className="w-5 h-5 rounded-full bg-status-success text-white flex items-center justify-center">
                          <Check size={12} strokeWidth={3} />
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded-full border-2 border-slate-300 text-transparent flex items-center justify-center">
                          <Circle size={12} />
                        </div>
                      )}
                      <span className={`text-sm font-medium ${task.status === 'complete' ? 'text-slate-500 line-through' : 'text-brand-navy'}`}>
                        {task.name}
                      </span>
                    </div>
                    <span className="text-xs font-medium text-slate-400 bg-slate-50 px-2 py-1 rounded">
                      {task.owner}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
