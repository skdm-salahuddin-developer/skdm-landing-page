'use client';

import React from 'react';
import Image from 'next/image';
import { Award, CheckCircle2, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative w-full py-16 sm:py-24 bg-white overflow-hidden">
      
      {/* Decorative background grid and soft radial blur */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-amber-50/70 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-50/50 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Decorative wireframe grid & circular element on top-right (as seen in reference design) */}
      <div className="absolute top-4 right-8 lg:right-16 pointer-events-none hidden md:block opacity-40">
        <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Isometric grid lines */}
          <path d="M70 10L130 45L70 80L10 45Z" stroke="#94A3B8" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M70 30L130 65L70 100L10 65Z" stroke="#CBD5E1" strokeWidth="1" />
          <path d="M70 50L130 85L70 120L10 85Z" stroke="#CBD5E1" strokeWidth="1" />
          <path d="M10 45V85L70 120V80Z" stroke="#94A3B8" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M130 45V85L70 120V80Z" stroke="#CBD5E1" strokeWidth="1" />
          {/* Peach/amber circle accent */}
          <circle cx="105" cy="35" r="28" fill="#FDBA74" fillOpacity="0.45" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* ========================================================= */}
          {/* LEFT: 3-Image Rounded Collage with Creative Geometry     */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 relative w-full">
            
            {/* Dotted circular ring accent on bottom-left (as seen in live design) */}
            <div className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full border-2 border-dashed border-amber-400/80 pointer-events-none -z-10" />

            <div className="grid grid-cols-12 gap-4 sm:gap-5 items-stretch">
              
              {/* Photo 1: Big Left Column Image */}
              <div className="col-span-6 sm:col-span-6 relative min-h-[320px] sm:min-h-[420px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-slate-100 group">
                <Image
                  src="/about-team-1.jpg"
                  alt="Shree Krishna Digital Marketing Agency Team in Mumbai"
                  fill
                  sizes="(max-width: 768px) 50vw, 30vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Photos 2 & 3: Right Stacked Images */}
              <div className="col-span-6 sm:col-span-6 flex flex-col gap-4 sm:gap-5">
                
                {/* Photo 2 (Top Vertical Portrait) */}
                <div className="relative h-[180px] sm:h-[230px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-slate-100 group">
                  <Image
                    src="/about-team-2.jpg"
                    alt="Digital strategist analyzing campaigns at Shree Krishna Digital"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Photo 3 (Bottom Horizontal Image) */}
                <div className="relative h-[125px] sm:h-[175px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-slate-100 group">
                  <Image
                    src="/about-team-3.jpg"
                    alt="Creative designers crafting web solutions in Mumbai"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

              </div>

            </div>

            {/* Quick Experience Badge Overlay */}
            <div className="absolute -bottom-4 right-4 sm:right-6 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-slate-200/90 shadow-xl flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900 leading-tight">Founded 2018</p>
                <p className="text-[11px] font-medium text-slate-500">Andheri, Mumbai</p>
              </div>
            </div>

          </div>

          {/* ========================================================= */}
          {/* RIGHT: About Copy & Action                                */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            
            {/* Simple Subtitle / Eyebrow Text (Real-World Style, No Capsule, No Slug in UI) */}
            <span className="text-orange-500 font-bold text-xs sm:text-sm uppercase tracking-wider mb-2">
              Digital Marketing Agency in Andheri
            </span>

            {/* Heading with Hand-Drawn Orange Wave Accent */}
            <div className="mb-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
                About Us
              </h2>
              {/* Hand-drawn smooth curved orange line directly underneath */}
              <svg className="w-32 h-3.5 text-orange-500 mt-1" viewBox="0 0 140 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10C24 4 48 4 70 8C92 12 116 12 138 6" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
              </svg>
            </div>

            {/* Descriptive Body Copy */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-5">
              Founded in 2018 in Andheri, Mumbai, <strong className="font-semibold text-slate-900">Shree Krishna Digital Solutions Pvt. Ltd.</strong> is dedicated to helping businesses grow through innovative, data-driven strategies. As an award-winning agency, we specialize in high-impact digital marketing, brand identity, performance advertising, and custom web development.
            </p>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-8">
              Our goal is to create impactful campaigns that deliver measurable results and give businesses a true competitive edge in the evolving digital landscape.
            </p>

            {/* Key Agency Strengths */}
            <div className="grid grid-cols-2 gap-3.5 w-full mb-8">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                <span>ROI-Focused Campaigns</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                <span>Local & Global Reach</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                <span>Dedicated Tech Team</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                <span>Transparent Analytics</span>
              </div>
            </div>

            {/* "Know More" Pill Button with Logo1 */}
            <a
              href="#contact"
              id="about-know-more-btn"
              className="inline-flex items-center gap-3 pl-6 pr-4 py-2.5 rounded-full border border-slate-700 hover:border-orange-500 text-slate-900 font-semibold text-sm sm:text-base hover:text-orange-600 transition-all duration-200 group shadow-2xs"
            >
              <span>Know More</span>
              <Image
                src="/logo1.png"
                alt="SKDM Logo"
                width={44}
                height={44}
                className="w-9 h-9 sm:w-10 sm:h-10 object-contain group-hover:scale-115 group-hover:rotate-6 transition-transform duration-300"
              />
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}
