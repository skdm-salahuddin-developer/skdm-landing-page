'use client';

import React from 'react';
import Image from 'next/image';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe2
} from 'lucide-react';

export default function Footer() {
  const countriesCol1 = [
    { name: 'India', flag: '🇮🇳' },
    { name: 'Australia', flag: '🇦🇺' },
    { name: 'Canada', flag: '🇨🇦' },
    { name: 'Malaysia', flag: '🇲🇾' },
    { name: 'Nepal', flag: '🇳🇵' },
  ];

  const countriesCol2 = [
    { name: 'Dubai (UAE)', flag: '🇦🇪' },
    { name: 'USA', flag: '🇺🇸' },
    { name: 'United Kingdom', flag: '🇬🇧' },
    { name: 'Maldives', flag: '🇲🇻' },
  ];

  const legalLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Why Choose Us', href: '#why-choose-us' },
    { label: 'Industries', href: '#industries' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms & Conditions', href: '#' },
    { label: 'Contact Us', href: '#contact' },
  ];

  return (
    <footer className="w-full bg-[#080E1A] text-slate-300 relative overflow-hidden border-t border-slate-800">
      
      {/* Subtle top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* ========================================================= */}
      {/* Main Footer Body                                           */}
      {/* ========================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Column 1: Agency Brand & About (5 cols) */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="mb-5">
              <div className="inline-block bg-white px-4 py-2.5 rounded-2xl shadow-md border border-slate-700">
                <Image
                  src="/logo-C6brZTHT.png"
                  alt="Shree Krishna Digital Marketing Solutions"
                  width={320}
                  height={96}
                  className="h-20 sm:h-24 w-auto object-contain"
                />
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed font-normal">
              Founded in 2018 in Andheri, Mumbai, Shree Krishna Digital Marketing Solutions Pvt. Ltd. is dedicated to helping businesses grow through innovative, data-driven strategies. As an award-winning agency, we specialize in digital marketing, logo design, and website development.
            </p>
          </div>

          {/* Column 2: Global Presence / Countries (4 cols) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-6">
              <Globe2 className="w-5 h-5 text-orange-400" />
              <h4 className="text-lg font-bold text-white tracking-wide">
                Countries
              </h4>
            </div>

            <div className="grid grid-cols-2 gap-x-6 gap-y-3.5 text-sm">
              {/* Column A */}
              <div className="space-y-3">
                {countriesCol1.map((c, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-slate-300 hover:text-orange-400 transition-colors cursor-default">
                    <span className="text-orange-500 font-bold text-xs tracking-tighter">»</span>
                    <span>{c.name}</span>
                  </div>
                ))}
              </div>

              {/* Column B */}
              <div className="space-y-3">
                {countriesCol2.map((c, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-slate-300 hover:text-orange-400 transition-colors cursor-default">
                    <span className="text-orange-500 font-bold text-xs tracking-tighter">»</span>
                    <span>{c.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 3: Get In Touch (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-lg font-bold text-white tracking-wide mb-6">
              Get In Touch
            </h4>

            <div className="space-y-4 text-sm">
              
              {/* Phone */}
              <a 
                href="tel:+917021390953"
                className="flex items-start gap-3.5 text-slate-300 hover:text-orange-400 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-orange-500/10 text-orange-400 flex items-center justify-center shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-all">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="font-semibold pt-1">
                  +91 70213 90953
                </div>
              </a>

              {/* Email */}
              <a 
                href="mailto:shreekrishnadigital09@gmail.com"
                className="flex items-start gap-3.5 text-slate-300 hover:text-blue-400 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 group-hover:bg-blue-500 group-hover:text-white transition-all">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="pt-1 break-all">
                  shreekrishnadigital09@gmail.com
                </div>
              </a>

              {/* Address */}
              <div className="flex items-start gap-3.5 text-slate-300">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-xs leading-relaxed text-slate-400">
                  102 B Mohid heights, suresh nagar, rto road, opposite madha signal, near Kokilaben hospital, andheri west- 400053
                </div>
              </div>

            </div>

            {/* Social Icons with Brand Accents */}
            <div className="mt-7 flex items-center gap-3">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/shree.krishnadigitalsolutions/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg border border-slate-700 bg-slate-900/60 hover:border-orange-500 hover:bg-orange-500/20 text-slate-300 hover:text-white flex items-center justify-center transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/shree-krishna-digital-marketing/?originalSubdomain=in"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg border border-slate-700 bg-slate-900/60 hover:border-blue-500 hover:bg-blue-500/20 text-slate-300 hover:text-white flex items-center justify-center transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.37 9.74V9.92H5.09v8.58h2.74z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/shreekrishna_digitalsolutions/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg border border-slate-700 bg-slate-900/60 hover:border-pink-500 hover:bg-pink-500/20 text-slate-300 hover:text-white flex items-center justify-center transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://api.whatsapp.com/send/?phone=%2B917021390953&text=Hello%2C%20I%27m%20interested%20in%20your%20digital%20marketing%20services.%20Please%20share%20more%20details%20about%20how%20you%20can%20help%20grow%20my%20business%20online.&type=phone_number&app_absent=0"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-lg border border-slate-700 bg-slate-900/60 hover:border-emerald-500 hover:bg-emerald-500/20 text-slate-300 hover:text-white flex items-center justify-center transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>

            </div>

          </div>

        </div>
      </div>

      {/* ========================================================= */}
      {/* 3. Bottom Legal Links & Copyright                         */}
      {/* ========================================================= */}
      <div className="border-t border-slate-800/80 bg-[#050A14] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-6">
          
          {/* Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-400">
            {legalLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="hover:text-orange-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Copyright text */}
          <div className="text-center text-xs text-slate-500 font-normal">
            Reserved By © Shree Krishna Digital Solutions Pvt Ltd. All Rights Reserved.
          </div>

        </div>
      </div>

    </footer>
  );
}
