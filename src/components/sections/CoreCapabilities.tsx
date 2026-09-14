"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { 
  BookOpen, 
  CreditCard, 
  Wallet, 
  ArrowLeftRight, 
  BarChart3, 
  ShieldCheck 
} from "lucide-react";

const capabilities = [
  {
    title: "Multimodal Emission Calculations",
    description: "Road, rail, air, ocean — one methodology, one dataset. No more reconciling four different vendor formats.",
    icon: BookOpen,
  },
  {
    title: "Vendor Data Sync",
    description: "Automate the collection of raw transport data directly from logistics providers and telematics.",
    icon: CreditCard,
  },
  {
    title: "Audit-Ready Ledger",
    description: "Maintain a complete audit trail of every emission factor and calculation for SEBI BRSR compliance.",
    icon: Wallet,
  },
  {
    title: "Real-Time Analytics",
    description: "Live dashboards instead of end-of-quarter data pulls. Know your number before the auditor asks.",
    icon: ArrowLeftRight,
  },
  {
    title: "Enterprise Reporting",
    description: "Export-ready formats aligned to BRSR / GHG Protocol. Reports your CFO can sign off on, not just share.",
    icon: BarChart3,
  },
  {
    title: "Compliance & Controls",
    description: "Enforce strict data governance, approval workflows, and role-based access for your emissions data.",
    icon: ShieldCheck,
  },
];

export function CoreCapabilities() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

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
            Everything your finance team needs to manage emissions.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            Replace disconnected spreadsheets with a single source of truth for your transport carbon accounting.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {capabilities.map((cap, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full border-border-subtle bg-white hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-brand-indigoLight text-brand-indigo flex items-center justify-center mb-4">
                    <cap.icon size={24} />
                  </div>
                  <CardTitle>{cap.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {cap.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
