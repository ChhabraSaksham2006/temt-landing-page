import * as React from "react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-border-subtle py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded bg-brand-indigo flex items-center justify-center text-white font-bold text-lg leading-none">T</div>
              <span className="font-semibold text-brand-navy">TEMT</span>
            </div>
            <p className="text-sm text-slate-500">
              The transport emissions management tool for enterprises.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-brand-navy mb-4">Product</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><a href="#" className="hover:text-brand-indigo">Overview</a></li>
              <li><a href="#" className="hover:text-brand-indigo">Features</a></li>
              <li><a href="#" className="hover:text-brand-indigo">Data Sync</a></li>
              <li><a href="#" className="hover:text-brand-indigo">Analytics</a></li>
              <li><a href="#" className="hover:text-brand-indigo">BRSR Reporting</a></li>
              <li><a href="#" className="hover:text-brand-indigo">Integrations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-brand-navy mb-4">Solutions</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><a href="#" className="hover:text-brand-indigo">Finance Teams</a></li>
              <li><a href="#" className="hover:text-brand-indigo">Logistics Operations</a></li>
              <li><a href="#" className="hover:text-brand-indigo">ESG Controllers</a></li>
              <li><a href="#" className="hover:text-brand-indigo">Scope 3 Transport</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-brand-navy mb-4">Resources</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><a href="#" className="hover:text-brand-indigo">Documentation</a></li>
              <li><a href="#" className="hover:text-brand-indigo">Case Studies</a></li>
              <li><a href="#" className="hover:text-brand-indigo">Methodology</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-brand-navy mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><a href="#" className="hover:text-brand-indigo">About</a></li>
              <li><a href="#" className="hover:text-brand-indigo">Contact</a></li>
              <li><a href="#" className="hover:text-brand-indigo">Careers</a></li>
              <li><a href="#" className="hover:text-brand-indigo">Privacy</a></li>
              <li><a href="#" className="hover:text-brand-indigo">Terms</a></li>
              <li><a href="#" className="hover:text-brand-indigo">Security & Data Handling</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border-subtle pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <div>© 2026 TEMT. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-brand-indigo">Security</a>
            <a href="#" className="hover:text-brand-indigo">Privacy</a>
            <a href="#" className="hover:text-brand-indigo">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
