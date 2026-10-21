'use client';

import React from 'react';
import Image from 'next/image';
import { 
  RoiGrowthLabelIcon, 
  CertifiedBadgeLabelIcon, 
  LiveDashboardLabelIcon, 
  FastRocketLabelIcon,
  ClientRetentionLabelIcon,
  PaidLeadsLabelIcon
} from './FlatIcons';

interface ValuePillar {
  icon: React.ElementType;
  title: string;
  description: string;
}

const valuePillars: ValuePillar[] = [
  {
    icon: RoiGrowthLabelIcon,
    title: 'Data-Driven ROI, Zero Guesswork',
    description:
      'We build high-converting paid ad funnels and SEO architectures engineered to lower cost-per-lead and deliver verifiable bottom-line revenue.',
  },
  {
    icon: CertifiedBadgeLabelIcon,
    title: 'Certified Google & Meta Specialists',
    description:
      'Your campaigns are directly managed by verified digital marketing architects and senior developers in Andheri, Mumbai—never outsourced.',
  },
  {
    icon: LiveDashboardLabelIcon,
    title: '100% Transparent Live Reporting',
    description:
      'No vanity metrics or confusing reports. Get real-time access to verified phone calls, qualified leads, and keyword rankings with weekly KPI reviews.',
  },
  {
    icon: FastRocketLabelIcon,
    title: 'Rapid 48-Hour Execution & Agility',
    description:
      'From campaign audit to launch, we move at enterprise speed with nimble turnarounds, responsive communication, and continuous A/B testing.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative w-full py-16 sm:py-24 bg-white border-t border-slate-100 overflow-hidden">
      
      {/* Daylight ambient background blurs */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-blue-50/70 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-50/60 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="text-orange-500 font-bold text-xs sm:text-sm uppercase tracking-wider block mb-2">
            Why Choose Shree Krishna Digital • Photo Shoot & Video Shoot Agency in Andheri
          </span>
          <div className="mt-2 mb-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              <span className="relative inline-block">
                Built For Real Growth,
                {/* Hand-drawn smooth curved orange underline accent */}
                <svg
                  className="absolute -bottom-1.5 left-0 w-full h-3 text-orange-500"
                  viewBox="0 0 140 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 10C24 4 48 4 70 8C92 12 116 12 138 6"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{' '}
              <span className="text-slate-900">Not Just Vanity Clicks</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            We bridge the gap between creative storytelling and hard numbers, giving ambitious Mumbai businesses a decisive competitive advantage online.
          </p>
        </div>

        {/* 2-Column Balanced Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: Clean Image with Minor 3-4px Radius & Hover   */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 relative w-full group">
            
            {/* Subtle ambient dotted circle merging into background */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full border border-dashed border-amber-300/60 pointer-events-none -z-10" />

            {/* Main Image Container (Minor 3-4px radius, merged with background) */}
            <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[500px] rounded-[4px] overflow-hidden border border-slate-200/80 shadow-md group-hover:shadow-2xl transition-all duration-700">
              <Image
                src="/why-choose-us.jpg"
                alt="Why Choose Shree Krishna Digital Marketing Agency Mumbai"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 group-hover:-translate-y-1 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
            </div>

            {/* Floating Metric Badge 1 (Top-Right: Translucent Glass Merged with Image) */}
            <div className="absolute top-4 right-4 sm:right-6 bg-slate-950/60 backdrop-blur-md px-4 py-2.5 rounded-[4px] border border-white/20 shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:border-orange-400/60 transition-all duration-300 flex items-center gap-3 cursor-default">
              <div className="w-8 h-8 rounded-[3px] bg-white/10 flex items-center justify-center shrink-0">
                <ClientRetentionLabelIcon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-white leading-tight">98.4% Client Retention</p>
                <p className="text-[11px] font-medium text-slate-300">Verified Long-Term Trust</p>
              </div>
            </div>

            {/* Floating Metric Badge 2 (Bottom-Left: Translucent Glass Merged with Image) */}
            <div className="absolute bottom-4 left-4 sm:left-6 bg-slate-950/60 backdrop-blur-md px-4 py-2.5 rounded-[4px] border border-white/20 shadow-xl hover:shadow-2xl hover:translate-y-1 hover:border-orange-400/60 transition-all duration-300 flex items-center gap-3 cursor-default">
              <div className="w-8 h-8 rounded-[3px] bg-white/10 flex items-center justify-center shrink-0">
                <PaidLeadsLabelIcon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-white leading-tight">10 Lakh+ Paid Leads</p>
                <p className="text-[11px] font-medium text-slate-300">Across 15+ Core Verticals</p>
              </div>
            </div>

          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: Merged With Background + Parallax Focus     */}
          {/* (NO rounded card borders, seamless blend, focus on hover)  */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 flex flex-col gap-3 sm:gap-4">
            
            {valuePillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="relative flex items-start gap-4 p-3.5 sm:p-4 rounded-[4px] border-l-2 border-transparent hover:border-orange-500 hover:bg-slate-50/80 hover:translate-x-2.5 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-300 ease-out group cursor-default"
                >
                  {/* Real Multi-Color Label Icon Badge */}
                  <div className="w-12 h-12 rounded-[4px] p-1 bg-white shadow-2xs border border-slate-100 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-2 group-hover:shadow-xs transition-transform duration-300 mt-0.5">
                    <Icon className="w-full h-full" />
                  </div>

                  {/* Text Content */}
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors duration-200">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1 font-normal group-hover:text-slate-700 transition-colors">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* CTA Action Button */}
            <div className="pt-4 pl-3.5 sm:pl-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 pl-6 pr-4 py-2.5 rounded-full border border-slate-700 hover:border-orange-500 text-slate-900 font-semibold text-sm sm:text-base hover:text-orange-600 hover:shadow-sm transition-all duration-200 group shadow-2xs"
              >
                <span>Get Free Growth Audit</span>
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

      </div>

    </section>
  );
}
