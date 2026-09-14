"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { 
  LayoutDashboard, 
  ListOrdered, 
  BookOpen, 
  ArrowLeftRight, 
  CreditCard, 
  Wallet, 
  BarChart3, 
  ShieldCheck, 
  Blocks, 
  Settings,
  ChevronRight,
  AlertCircle
} from "lucide-react";

export function ProductExperience() {
  const [activeTab, setActiveTab] = React.useState("Overview");

  const sidebarItems = [
    { name: "Overview", icon: LayoutDashboard },
    { name: "Shipments", icon: ListOrdered },
    { name: "Emissions Ledger", icon: BookOpen },
    { name: "Data Sync", icon: ArrowLeftRight },
    { name: "Road Transport", icon: CreditCard },
    { name: "Air & Ocean", icon: Wallet },
    { name: "BRSR Reports", icon: BarChart3 },
    { name: "Compliance", icon: ShieldCheck },
    { name: "Integrations", icon: Blocks },
    { name: "Settings", icon: Settings },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "Overview":
        return (
          <motion.div 
            key="overview"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="w-full"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
              <div className="bg-white rounded-xl border border-border-subtle p-5">
                <div className="text-slate-500 text-sm mb-2 font-medium">YTD Emissions</div>
                <div className="text-2xl font-semibold text-brand-navy">24,510 tCO₂e</div>
              </div>
              <div className="bg-white rounded-xl border border-border-subtle p-5">
                <div className="text-slate-500 text-sm mb-2 font-medium">Data Sync Progress</div>
                <div className="text-2xl font-semibold text-brand-navy">87.2%</div>
                <div className="w-full bg-slate-100 h-1.5 rounded-full mt-3 overflow-hidden">
                  <div className="bg-status-success h-full" style={{ width: '87.2%' }} />
                </div>
              </div>
              <div className="bg-white rounded-xl border border-border-subtle p-5">
                <div className="text-slate-500 text-sm mb-2 font-medium">Outstanding Approvals</div>
                <div className="text-2xl font-semibold text-brand-navy">12</div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-border-subtle p-6 flex-1 min-h-[300px]">
              <div className="text-slate-500 text-sm font-medium mb-4">Recent Sync Activity</div>
              <div className="space-y-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-slate-50 last:border-0">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-slate-100" />
                      <div>
                        <div className="w-32 h-3 bg-slate-200 rounded mb-1.5" />
                        <div className="w-20 h-2 bg-slate-100 rounded" />
                      </div>
                    </div>
                    <div className="w-16 h-3 bg-slate-200 rounded" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        );
      case "Shipments":
        return (
          <motion.div 
            key="shipments"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="w-full space-y-4"
          >
            <div className="flex gap-3 mb-4">
              <div className="h-9 w-64 bg-white rounded-lg border border-border-subtle shadow-sm" />
              <div className="h-9 w-24 bg-white rounded-lg border border-border-subtle shadow-sm" />
            </div>
            <div className="border border-border-subtle rounded-xl overflow-hidden bg-white shadow-sm">
              <div className="h-10 bg-slate-50 border-b border-border-subtle" />
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="h-14 border-b border-border-subtle last:border-0 flex items-center px-4 gap-4">
                  <div className="h-4 w-24 bg-slate-100 rounded" />
                  <div className="h-4 w-1/3 bg-slate-50 rounded" />
                  <div className="h-4 w-1/4 bg-slate-50 rounded ml-auto" />
                  <div className="h-6 w-16 bg-slate-100 rounded-full ml-4" />
                </div>
              ))}
            </div>
          </motion.div>
        );
      case "Emissions Ledger":
        return (
          <motion.div 
            key="ledger"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="w-full space-y-6"
          >
            <div className="h-48 w-full bg-slate-50 border border-border-subtle rounded-xl flex items-end p-4 gap-2 shadow-inner">
               {[40, 70, 45, 90, 65, 80, 50, 100].map((h, i) => (
                  <div key={i} className="w-full bg-brand-indigoLight/50 rounded-t-md hover:bg-brand-indigo transition-colors cursor-pointer" style={{ height: `${h}%` }} />
               ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
               {[1, 2].map(i => (
                 <div key={i} className="bg-white border border-border-subtle rounded-xl p-5 shadow-sm">
                    <div className="h-4 w-32 bg-slate-100 rounded mb-4" />
                    <div className="space-y-3">
                      <div className="h-3 w-full bg-slate-50 rounded" />
                      <div className="h-3 w-4/5 bg-slate-50 rounded" />
                    </div>
                 </div>
               ))}
            </div>
          </motion.div>
        );
      case "Data Sync":
        return (
          <motion.div 
            key="sync"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="w-full space-y-4"
          >
            {[
              { provider: "Samsara Telematics", pct: "98%" },
              { provider: "SAP ERP", pct: "100%" },
              { provider: "Ocean Carrier API", pct: "64%" }
            ].map((sync, i) => (
              <div key={i} className="bg-white border border-border-subtle rounded-xl p-5 shadow-sm flex items-center justify-between">
                <div className="w-1/3">
                  <div className="text-sm font-semibold text-brand-navy mb-1">{sync.provider}</div>
                  <div className="text-xs text-slate-400">Last synced: 2m ago</div>
                </div>
                <div className="flex-1 px-8">
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                     <div className={`h-full ${sync.pct === '100%' ? 'bg-status-success' : sync.pct === '98%' ? 'bg-brand-indigo' : 'bg-status-warning'}`} style={{ width: sync.pct }} />
                  </div>
                </div>
                <div className="w-16 text-right font-medium text-slate-600">{sync.pct}</div>
              </div>
            ))}
          </motion.div>
        );
      case "Road Transport":
      case "Air & Ocean":
        return (
          <motion.div 
            key="transport"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="w-full space-y-4"
          >
            <div className="grid grid-cols-3 gap-4 mb-2">
              <div className="bg-white rounded-xl border border-border-subtle p-4 shadow-sm"><div className="h-3 w-20 bg-slate-100 rounded mb-2"/><div className="h-6 w-24 bg-slate-200 rounded"/></div>
              <div className="bg-white rounded-xl border border-border-subtle p-4 shadow-sm"><div className="h-3 w-20 bg-slate-100 rounded mb-2"/><div className="h-6 w-24 bg-slate-200 rounded"/></div>
              <div className="bg-white rounded-xl border border-border-subtle p-4 shadow-sm"><div className="h-3 w-20 bg-slate-100 rounded mb-2"/><div className="h-6 w-24 bg-slate-200 rounded"/></div>
            </div>
            <div className="w-full h-64 bg-slate-100 border border-border-subtle rounded-xl relative overflow-hidden flex items-center justify-center shadow-inner">
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #94a3b8 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
              <div className="w-4 h-4 rounded-full bg-brand-indigo absolute top-1/4 left-1/3 shadow-lg shadow-brand-indigo/50"></div>
              <div className="w-4 h-4 rounded-full bg-status-warning absolute bottom-1/3 right-1/4 shadow-lg shadow-status-warning/50"></div>
              <svg className="absolute w-full h-full pointer-events-none" style={{ top: 0, left: 0 }}>
                <path d="M 33% 25% Q 50% 50% 75% 66%" stroke="rgba(79, 70, 229, 0.4)" strokeWidth="3" fill="transparent" strokeDasharray="6 6" />
              </svg>
            </div>
          </motion.div>
        );
      case "BRSR Reports":
        return (
          <motion.div 
            key="brsr"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="w-full grid grid-cols-2 gap-4"
          >
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="bg-white border border-border-subtle rounded-xl p-5 shadow-sm flex gap-4 items-start">
                <div className="w-10 h-12 bg-brand-indigoLight/20 rounded border border-brand-indigo/20 flex items-center justify-center shrink-0">
                  <BarChart3 size={16} className="text-brand-indigo" />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 w-3/4 bg-slate-200 rounded" />
                  <div className="h-3 w-1/2 bg-slate-100 rounded" />
                  <div className="pt-2">
                    <div className="h-6 w-20 bg-slate-50 rounded-full" />
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        );
      case "Compliance":
        return (
          <motion.div 
            key="compliance"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="w-full space-y-3"
          >
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="bg-white border border-border-subtle rounded-xl p-4 shadow-sm flex items-center gap-4">
                <ShieldCheck size={20} className={i % 3 === 0 ? "text-status-warning" : "text-status-success"} />
                <div className="flex-1">
                  <div className="h-4 w-1/2 bg-slate-200 rounded mb-1" />
                  <div className="h-3 w-1/4 bg-slate-100 rounded" />
                </div>
                <div className="h-8 w-24 bg-slate-50 rounded border border-border-subtle" />
              </div>
            ))}
          </motion.div>
        );
      case "Integrations":
        return (
          <motion.div 
            key="integrations"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="w-full grid grid-cols-3 gap-4"
          >
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="bg-white border border-border-subtle rounded-xl p-6 shadow-sm flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-slate-50 rounded-xl mb-4 border border-border-subtle flex items-center justify-center">
                  <Blocks size={20} className="text-slate-400" />
                </div>
                <div className="h-4 w-24 bg-slate-200 rounded mb-2" />
                <div className="h-3 w-20 bg-slate-100 rounded mb-4" />
                <div className="h-6 w-full bg-brand-indigoLight/30 rounded-full" />
              </div>
            ))}
          </motion.div>
        );
      case "Settings":
        return (
          <motion.div 
            key="settings"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="w-full bg-white border border-border-subtle rounded-xl shadow-sm p-8"
          >
            <div className="flex gap-12">
              <div className="w-1/4 space-y-4">
                <div className="h-4 w-full bg-slate-200 rounded" />
                <div className="h-4 w-3/4 bg-slate-100 rounded" />
                <div className="h-4 w-5/6 bg-slate-100 rounded" />
                <div className="h-4 w-2/3 bg-slate-100 rounded" />
              </div>
              <div className="flex-1 space-y-6">
                <div>
                  <div className="h-4 w-32 bg-slate-200 rounded mb-2" />
                  <div className="h-10 w-full bg-slate-50 border border-border-subtle rounded-lg" />
                </div>
                <div>
                  <div className="h-4 w-40 bg-slate-200 rounded mb-2" />
                  <div className="h-10 w-full bg-slate-50 border border-border-subtle rounded-lg" />
                </div>
                <div>
                  <div className="h-4 w-24 bg-slate-200 rounded mb-2" />
                  <div className="h-24 w-full bg-slate-50 border border-border-subtle rounded-lg" />
                </div>
                <div className="flex justify-end pt-4">
                  <div className="h-10 w-32 bg-brand-indigo rounded-lg" />
                </div>
              </div>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-12 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-semibold tracking-tight text-brand-navy mb-6"
          >
            Built for how finance teams actually work.
          </motion.h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative max-w-6xl mx-auto rounded-xl border border-border-subtle bg-surface-background shadow-2xl overflow-hidden flex flex-col md:flex-row h-[700px]"
        >
          {/* Sidebar */}
          <div className="w-64 bg-white border-r border-border-subtle p-4 hidden lg:flex flex-col">
            <div className="flex items-center gap-2 mb-8 px-2">
              <div className="w-6 h-6 rounded bg-brand-indigo flex items-center justify-center text-white font-bold text-xs">T</div>
              <span className="font-semibold text-brand-navy text-sm">TEMT Platform</span>
            </div>
            <nav className="flex-1 space-y-1">
              {sidebarItems.map((item, i) => (
                <div 
                  key={i}
                  onClick={() => setActiveTab(item.name)}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium cursor-pointer transition-colors ${
                    activeTab === item.name ? 'bg-slate-100 text-brand-indigo' : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <item.icon size={18} className={activeTab === item.name ? 'text-brand-indigo' : 'text-slate-400'} />
                  {item.name}
                </div>
              ))}
            </nav>
          </div>

          {/* Mobile Tab Selector */}
          <div className="lg:hidden flex overflow-x-auto border-b border-border-subtle bg-white px-4 py-3 gap-2 hide-scrollbar shrink-0">
            {sidebarItems.map((item, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(item.name)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeTab === item.name ? 'bg-brand-indigo text-white shadow-sm' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <item.icon size={16} className={activeTab === item.name ? 'text-white' : 'text-slate-400'} />
                {item.name}
              </button>
            ))}
          </div>

          {/* Main Content Area */}
          <div className="flex-1 p-4 md:p-8 overflow-y-auto bg-surface-background">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-semibold text-brand-navy transition-all duration-300">{activeTab}</h3>
              <div className="flex gap-2">
                <Badge variant="default" className="px-3 py-1 text-sm bg-white border border-border-subtle">Q3 2026</Badge>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {renderContent()}
            </AnimatePresence>
          </div>

          {/* Right Panel: Attention Needed */}
          <div className="w-80 bg-white border-l border-border-subtle p-6 hidden md:block">
            <h4 className="font-semibold text-brand-navy mb-6 flex items-center justify-between">
              Your attention is needed
              <Badge variant="error" className="h-5 w-5 rounded-full p-0 flex items-center justify-center bg-status-error text-white">4</Badge>
            </h4>

            <div className="space-y-4">
              <div className="p-4 rounded-xl border border-status-errorBg bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer border-l-4 border-l-status-error">
                <div className="flex items-start gap-2">
                  <AlertCircle size={16} className="text-status-error mt-0.5 shrink-0" />
                  <div>
                    <h5 className="font-medium text-brand-navy text-sm mb-1">42.8t CO₂e calculation mismatch</h5>
                    <p className="text-xs text-slate-500 mb-3">Reason: Distance mismatch</p>
                    <div className="flex items-center text-xs font-semibold text-brand-indigo group">
                      Review <ChevronRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-border-subtle bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer border-l-4 border-l-status-warning">
                <h5 className="font-medium text-brand-navy text-sm mb-1">Emissions report awaiting sign-off</h5>
                <p className="text-xs text-slate-500 mb-3">Pending for 6 days</p>
                <div className="flex items-center text-xs font-semibold text-brand-indigo group">
                  Review <ChevronRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
