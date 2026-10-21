'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-24 flex items-center justify-between">
        
        {/* Left: Official Logo from public folder (Only logo image, no extra text around) */}
        <a href="/" className="flex items-center py-1">
          <Image
            src="/logo-C6brZTHT.png"
            alt="Shree Krishna Digital Solutions"
            width={260}
            height={80}
            priority
            className="h-16 sm:h-20 w-auto object-contain"
          />
        </a>

        {/* Center: Desktop Nav Links (No dropdowns, includes FAQ button) */}
        <nav className="hidden lg:flex items-center gap-7 text-[15px] font-medium text-slate-700">
          <a href="#about" className="hover:text-orange-500 transition-colors py-2">
            Company
          </a>

          <a href="#services" className="hover:text-orange-500 transition-colors py-2">
            Services
          </a>

          <a href="#why-choose-us" className="hover:text-orange-500 transition-colors py-2">
            Why Us
          </a>

          <a href="#industries" className="hover:text-orange-500 transition-colors py-2">
            Industries
          </a>

          <a href="#faq" className="hover:text-orange-500 transition-colors py-2 font-semibold text-slate-800">
            FAQ
          </a>

          <a href="#contact" className="hover:text-orange-500 transition-colors py-2">
            Contact Us
          </a>
        </nav>

        {/* Right: Rounded Pill Button "Get Quote" */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            id="nav-get-quote"
            className="inline-flex items-center gap-2.5 pl-5 pr-3 py-1.5 rounded-full border border-slate-700 hover:border-orange-500 text-slate-900 font-semibold text-sm hover:text-orange-600 transition-all group shadow-2xs"
          >
            <span>Get Quote</span>
            <Image
              src="/logo1.png"
              alt="SKDM Logo"
              width={36}
              height={36}
              className="w-8 h-8 object-contain group-hover:scale-115 group-hover:rotate-6 transition-transform duration-300"
            />
          </a>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3">
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-800 font-medium border-b border-slate-100">
            Company
          </a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-800 font-medium border-b border-slate-100">
            Services
          </a>
          <a href="#why-choose-us" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-800 font-medium border-b border-slate-100">
            Why Us
          </a>
          <a href="#industries" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-800 font-medium border-b border-slate-100">
            Industries
          </a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-800 font-semibold border-b border-slate-100">
            FAQ
          </a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-800 font-medium">
            Contact Us
          </a>
        </div>
      )}
    </header>
  );
}
