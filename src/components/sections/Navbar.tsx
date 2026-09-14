"use client";

import * as React from "react";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const links = [
    { name: "Product", href: "#product" },
    { name: "Analytics", href: "#analytics" },
    { name: "Integrations", href: "#integrations" },
    { name: "Compliance", href: "#compliance" },
    { name: "Resources", href: "#resources" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-subtle bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-2">
          {/* Logo Placeholder */}
          <div className="h-8 w-8 rounded-lg bg-brand-indigo flex items-center justify-center">
            <span className="text-white font-bold text-lg leading-none">T</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-brand-navy">
            TEMT
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-brand-indigo transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="sm">Login</Button>
          <Button variant="primary" size="sm">Book a Demo</Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t border-border-subtle bg-white p-4">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium text-slate-600 hover:text-brand-navy"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-border-subtle">
              <Button variant="ghost" className="w-full justify-center">Login</Button>
              <Button variant="primary" className="w-full justify-center">Book a Demo</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
