"use client";

import * as React from "react";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { GlassOverlay } from "@/components/ui/GlassOverlay";
import { ArrowRight, AlertCircle, TrendingUp, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface-background pt-20 pb-24 md:pt-32 md:pb-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left: Copy */}
          <div className="flex flex-col items-start max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block font-semibold text-brand-indigo tracking-wider text-sm uppercase mb-4">
                Transport Emissions Management Tool
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-[68px] font-semibold tracking-tight text-brand-navy leading-[1.1] mb-6">
                Stop estimating emissions. <br className="hidden md:block" /> Start accounting for them.
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-xl">
                TEMT unifies road, rail, air, and ocean emissions data into one auditable system — built for the finance teams who have to answer for the numbers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button size="lg" variant="primary" className="gap-2">
                  Request a Demo <ArrowRight size={18} />
                </Button>
                <Button size="lg" variant="secondary">
                  See How It Works
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Right: Dashboard Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Main Dashboard Card */}
            <div className="rounded-2xl border border-border-subtle bg-white shadow-xl shadow-brand-navy/5 overflow-hidden">
              <div className="bg-slate-50 border-b border-border-subtle p-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5 cursor-pointer">
                    <div className="w-3 h-3 rounded-full bg-slate-300 transition-colors duration-200 hover:bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-slate-300 transition-colors duration-200 hover:bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-slate-300 transition-colors duration-200 hover:bg-green-500" />
                  </div>
                  <span className="ml-4 text-sm font-medium text-slate-500">Q3 Emissions Ledger</span>
                </div>
                <div className="flex gap-2">
                  <Badge variant="success">Sync Active</Badge>
                </div>
              </div>
              
              <div className="p-6">
                {/* Top Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  <Card className="shadow-none">
                    <CardHeader className="p-4 pb-2">
                      <CardTitle className="text-sm text-slate-500 font-medium">Road & Rail</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="text-2xl font-bold text-brand-navy">12,450t</div>
                    </CardContent>
                  </Card>
                  <Card className="shadow-none">
                    <CardHeader className="p-4 pb-2">
                      <CardTitle className="text-sm text-slate-500 font-medium">Air & Ocean</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="text-2xl font-bold text-brand-navy">8,320t</div>
                    </CardContent>
                  </Card>
                  <Card className="shadow-none">
                    <CardHeader className="p-4 pb-2">
                      <CardTitle className="text-sm text-slate-500 font-medium">Reconciled</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="text-2xl font-bold text-status-success flex items-center gap-2">
                        98.7% <TrendingUp size={16} />
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Transaction Table */}
                <div className="border border-border-subtle rounded-lg overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-slate-50 text-slate-500 border-b border-border-subtle font-medium">
                      <tr>
                        <th className="px-4 py-3 font-medium">Shipment ID</th>
                        <th className="px-4 py-3 font-medium">Mode</th>
                        <th className="px-4 py-3 font-medium text-right">CO₂e (t)</th>
                        <th className="px-4 py-3 font-medium text-right">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border-subtle bg-white">
                      <tr>
                        <td className="px-4 py-3 font-medium text-brand-navy">SHP-20481</td>
                        <td className="px-4 py-3 text-slate-600">Ocean Freight</td>
                        <td className="px-4 py-3 text-right font-medium">18.4</td>
                        <td className="px-4 py-3 text-right"><Badge variant="success">Reconciled</Badge></td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-brand-navy">SHP-20482</td>
                        <td className="px-4 py-3 text-slate-600">Road (FTL)</td>
                        <td className="px-4 py-3 text-right font-medium">7.2</td>
                        <td className="px-4 py-3 text-right"><Badge variant="warning">Pending</Badge></td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-brand-navy">SHP-20483</td>
                        <td className="px-4 py-3 text-slate-600">Air Freight</td>
                        <td className="px-4 py-3 text-right font-medium">12.8</td>
                        <td className="px-4 py-3 text-right"><Badge variant="success">Reconciled</Badge></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Floating Intelligence Panel */}
            <GlassOverlay className="absolute -bottom-8 -right-8 w-72 p-5 border border-slate-200/50 shadow-xl hidden md:block">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-brand-indigoLight flex items-center justify-center text-brand-indigo">
                  <AlertCircle size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-navy text-sm">24 items need attention</h4>
                  <p className="text-xs text-slate-500">System intelligence</p>
                </div>
              </div>
              <ul className="space-y-3 mb-4">
                <li className="text-sm text-slate-600 flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-status-error mt-1.5 shrink-0" />
                  <span>14 vendor data discrepancies</span>
                </li>
                <li className="text-sm text-slate-600 flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-status-warning mt-1.5 shrink-0" />
                  <span>6 emission reports awaiting sign-off</span>
                </li>
                <li className="text-sm text-slate-600 flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-indigo mt-1.5 shrink-0" />
                  <span>4 high-carbon anomalies</span>
                </li>
              </ul>
              <Button variant="ghost" size="sm" className="w-full justify-between text-brand-indigo hover:text-brand-indigo px-0 hover:bg-transparent group">
                Review Exceptions
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Button>
            </GlassOverlay>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
