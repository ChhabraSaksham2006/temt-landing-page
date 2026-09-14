"use client";

import * as React from "react";

export function TrustBar() {
  return (
    <section className="py-10 border-b border-border-subtle bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-widest mb-6">
          Trusted by finance teams managing emissions for 1,000+ enterprise fleets
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">
          {/* Placeholder Logos */}
          <div className="flex items-center gap-2 text-xl font-bold font-serif">
            <div className="w-6 h-6 bg-slate-800 rounded-sm" /> AcmeCorp
          </div>
          <div className="flex items-center gap-2 text-xl font-bold font-serif">
            <div className="w-6 h-6 bg-slate-800 rounded-full" /> GlobalLogistics
          </div>
          <div className="flex items-center gap-2 text-xl font-bold font-serif">
            <div className="w-0 h-0 border-l-[12px] border-l-transparent border-b-[20px] border-b-slate-800 border-r-[12px] border-r-transparent" /> Horizon
          </div>
          <div className="flex items-center gap-2 text-xl font-bold font-serif">
            <div className="w-6 h-6 bg-slate-800 rotate-45" /> NexusFreight
          </div>
        </div>
      </div>
    </section>
  );
}
