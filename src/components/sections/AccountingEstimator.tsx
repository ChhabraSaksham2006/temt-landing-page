"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, BarChart } from "lucide-react";

export function AccountingEstimator() {
  const [volume, setVolume] = React.useState(2); // 0 to 4
  const [complexity, setComplexity] = React.useState(2); // 0 to 4

  const volumes = ["10K", "50K", "100K", "500K", "1M+"];
  const complexities = ["Road Only", "Road + Rail", "Multimodal", "Global Supply Chain", "Highly Complex"];
  const volumeTags = ["Low-volume", "Standard-volume", "High-volume", "Enterprise-scale", "Massive-scale"];
  const complexityTags = ["Simple Focus", "Dual-mode", "Multimodal Focus", "Global Focus", "Highly Complex"];
  const reconTags = ["Minimal reconciliation", "Standard reconciliation", "Significant reconciliation", "Heavy reconciliation", "Massive reconciliation"];
  const syncMatch = [99, 98, 95, 92, 88][complexity];

  return (
    <section className="py-12 md:py-24 bg-brand-navy text-white overflow-hidden relative">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-brand-indigo blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-brand-indigo blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Interactive Controls */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-semibold tracking-tight mb-6"
            >
              See what your finance team could automate.
            </motion.h2>
            <p className="text-slate-400 text-lg mb-12">
              Select your current logistics scale to see how TEMT can transform your carbon accounting.
            </p>

            <div className="space-y-12">
              {/* Slider 1 */}
              <div>
                <div className="flex justify-between items-end mb-4">
                  <label className="text-sm font-semibold tracking-wide uppercase text-slate-300">
                    Monthly Shipments
                  </label>
                  <span className="text-2xl font-bold text-brand-indigoLight">{volumes[volume]}</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="4" 
                  step="1" 
                  value={volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-brand-indigo"
                  style={{
                    background: `linear-gradient(to right, #4f46e5 ${(volume / 4) * 100}%, #334155 ${(volume / 4) * 100}%)`
                  }}
                />
                <div className="flex justify-between text-xs text-slate-500 mt-2 font-medium">
                  <span>10K</span>
                  <span>1M+</span>
                </div>
              </div>

              {/* Slider 2 */}
              <div>
                <div className="flex justify-between items-end mb-4">
                  <label className="text-sm font-semibold tracking-wide uppercase text-slate-300">
                    Data Complexity
                  </label>
                  <span className="text-2xl font-bold text-brand-indigoLight">{complexities[complexity]}</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="4" 
                  step="1" 
                  value={complexity}
                  onChange={(e) => setComplexity(Number(e.target.value))}
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-brand-indigo"
                  style={{
                    background: `linear-gradient(to right, #4f46e5 ${(complexity / 4) * 100}%, #334155 ${(complexity / 4) * 100}%)`
                  }}
                />
                <div className="flex justify-between text-xs text-slate-500 mt-2 font-medium">
                  <span>Simple</span>
                  <span>Complex</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Results Panel */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white text-brand-navy rounded-2xl p-8 shadow-2xl relative"
          >
            <div className="mb-8 pb-8 border-b border-border-subtle">
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-4">Your Operation</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-100 rounded-full text-sm font-medium text-slate-700 transition-colors">
                  {volumeTags[volume]}
                </span>
                <span className="px-3 py-1 bg-slate-100 rounded-full text-sm font-medium text-slate-700 transition-colors">
                  {complexityTags[complexity]}
                </span>
                <span className="px-3 py-1 bg-brand-indigoLight text-brand-indigo rounded-full text-sm font-medium transition-colors">
                  {reconTags[Math.max(volume, complexity)]}
                </span>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <BarChart className="text-brand-indigo" size={24} />
                Platform Capabilities Activated
              </h3>
              
              <ul className="space-y-4">
                <AnimatePresence mode="popLayout">
                  <motion.li 
                    key="recon"
                    layout
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="text-status-success mt-0.5" size={20} />
                    <div>
                      <div className="font-semibold text-brand-navy text-lg">Automated data sync</div>
                      <div className="text-sm text-slate-500">Matches up to {syncMatch}% of {volumes[volume]} monthly shipments across {complexities[complexity]}.</div>
                    </div>
                  </motion.li>

                  <motion.li 
                    key="exc"
                    layout
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="text-status-success mt-0.5" size={20} />
                    <div>
                      <div className="font-semibold text-brand-navy text-lg">Anomaly detection</div>
                      <div className="text-sm text-slate-500">Intelligent routing for calculation mismatches in distance or fuel data.</div>
                    </div>
                  </motion.li>

                  <motion.li 
                    key="rep"
                    layout
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="text-status-success mt-0.5" size={20} />
                    <div>
                      <div className="font-semibold text-brand-navy text-lg">BRSR-ready reporting</div>
                      <div className="text-sm text-slate-500">Real-time visibility without Excel consolidation for compliance.</div>
                    </div>
                  </motion.li>
                  
                  {complexity >= 2 && (
                    <motion.li 
                      key="multi"
                      layout
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ opacity: { duration: 0.2 }, height: { duration: 0.3 } }}
                      className="flex items-start gap-3 overflow-hidden"
                    >
                      <CheckCircle2 className="text-status-success mt-0.5 shrink-0" size={20} />
                      <div>
                        <div className="font-semibold text-brand-navy text-lg">Multimodal Normalization</div>
                        <div className="text-sm text-slate-500">Normalizes disparate data formats from Road, Rail, Air, and Ocean carriers.</div>
                      </div>
                    </motion.li>
                  )}

                  {volume >= 2 && (
                    <motion.li 
                      key="scale"
                      layout
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ opacity: { duration: 0.2 }, height: { duration: 0.3 } }}
                      className="flex items-start gap-3 overflow-hidden"
                    >
                      <CheckCircle2 className="text-status-success mt-0.5 shrink-0" size={20} />
                      <div>
                        <div className="font-semibold text-brand-navy text-lg">High-volume Architecture</div>
                        <div className="text-sm text-slate-500">Dedicated scaling to handle peak enterprise loads seamlessly.</div>
                      </div>
                    </motion.li>
                  )}
                  
                  {volume >= 3 && (
                    <motion.li 
                      key="autorecon"
                      layout
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ opacity: { duration: 0.2 }, height: { duration: 0.3 } }}
                      className="flex items-start gap-3 overflow-hidden"
                    >
                      <CheckCircle2 className="text-status-success mt-0.5 shrink-0" size={20} />
                      <div>
                        <div className="font-semibold text-brand-navy text-lg">Automated Reconciliation</div>
                        <div className="text-sm text-slate-500">Auto-reconciles large sets of vendor fuel data against calculated emissions.</div>
                      </div>
                    </motion.li>
                  )}
                  
                  {complexity >= 3 && (
                    <motion.li 
                      key="factors"
                      layout
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ opacity: { duration: 0.2 }, height: { duration: 0.3 } }}
                      className="flex items-start gap-3 overflow-hidden"
                    >
                      <CheckCircle2 className="text-status-success mt-0.5 shrink-0" size={20} />
                      <div>
                        <div className="font-semibold text-brand-navy text-lg">Custom Emission Factors</div>
                        <div className="text-sm text-slate-500">Support for specialized, region-specific or carrier-specific emission factors.</div>
                      </div>
                    </motion.li>
                  )}
                </AnimatePresence>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
