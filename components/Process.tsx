'use client';

import React from 'react';
import Image from 'next/image';
import { 
  GoogleSeoLabelIcon, 
  MetaBusinessLabelIcon, 
  WebDevCodeLabelIcon, 
  SocialMediaLabelIcon 
} from './FlatIcons';

interface ServicePillar {
  icon: React.ElementType;
  title: string;
  tag: string;
  description: string;
}

const leftServices: ServicePillar[] = [
  {
    icon: GoogleSeoLabelIcon,
    title: 'SEO & Organic Growth',
    tag: 'Google 3-Pack Authority',
    description:
      'Data-driven search engine optimization, Google Local 3-Pack rankings, and high-intent keyword strategies that drive consistent organic traffic and qualified inbound calls.',
  },
  {
    icon: MetaBusinessLabelIcon,
    title: 'Meta Business & Paid Ads',
    tag: 'High ROAS Funnels',
    description:
      'Precision-targeted Google Ads & Meta advertising funnels engineered to capture high-intent buyers with optimal cost-per-lead and verified return on ad spend.',
  },
];

const rightServices: ServicePillar[] = [
  {
    icon: WebDevCodeLabelIcon,
    title: 'Website & App Development',
    tag: 'Fast & Mobile-Responsive',
    description:
      'Custom, lightning-fast mobile-responsive websites and scalable apps engineered with modern architectures for maximum speed, security, and conversion rate efficiency.',
  },
  {
    icon: SocialMediaLabelIcon,
    title: 'Social Media Marketing',
    tag: 'Brand Reach & Engagement',
    description:
      'Strategic content creation, community engagement, high-impact reels, and multi-channel campaigns across Instagram and LinkedIn that build lasting brand authority.',
  },
];

export default function Process() {
  return (
    <section id="services-overview" className="relative w-full py-16 sm:py-24 bg-white border-t border-slate-100 overflow-hidden">
      
      {/* Daylight ambient background blurs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-orange-50/60 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-50/60 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14 sm:mb-20">
          
          {/* Simple Eyebrow Text (Real-World Style, No Capsule, No Slug in UI) */}
          <span className="text-orange-500 font-bold text-xs sm:text-sm uppercase tracking-wider mb-2">
            WhatsApp Marketing & Email Marketing in Andheri
          </span>

          <div className="mb-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              <span className="relative inline-block">
                Our Core Services
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
              <span className="text-slate-900">& Solutions</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl">
            From organic search authority and high-converting Meta ads to custom web development and viral social campaigns, we drive measurable growth for your business.
          </p>
        </div>

        {/* 3-Column Layout: Left Services - Center Seamless Animated 3D Visual - Right Services */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: SEO & Meta Business (Interactive Focus Cards)*/}
          {/* ========================================================= */}
          <div className="lg:col-span-4 flex flex-col gap-6 sm:gap-8 order-2 lg:order-1">
            {leftServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div 
                  key={idx}
                  className="flex flex-col items-center lg:items-end text-center lg:text-right p-5 rounded-2xl transition-all duration-300 ease-out group cursor-default hover:bg-slate-50/80 hover:-translate-x-2 hover:-translate-y-1 hover:shadow-md border border-transparent hover:border-slate-200/60"
                >
                  {/* Real Multi-Color Label Icon Badge */}
                  <div className="w-14 h-14 p-1.5 rounded-2xl bg-white shadow-xs border border-slate-100 group-hover:scale-115 group-hover:-rotate-3 group-hover:shadow-md transition-all duration-300 mb-3 flex items-center justify-center">
                    <Icon className="w-full h-full" />
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight group-hover:text-orange-600 transition-colors duration-200">
                    {service.title}
                  </h3>

                  {/* Sub-tag Badge */}
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-50 text-orange-600 border border-orange-200/60 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-200 mt-1.5 mb-1">
                    {service.tag}
                  </span>

                  {/* Service Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm mt-1 font-normal group-hover:text-slate-700 transition-colors">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* ========================================================= */}
          {/* CENTER COLUMN: Floating Levitation 3D Visual              */}
          {/* (NO frame, NO border, smooth float animation & shadow)    */}
          {/* ========================================================= */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center order-1 lg:order-2 my-6 lg:my-0">
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] aspect-square flex items-center justify-center animate-float-slow hover:scale-105 transition-transform duration-500 cursor-pointer">
              <Image
                src="/process-development.jpg"
                alt="Shree Krishna Digital Marketing Services"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-contain object-center mix-blend-multiply drop-shadow-sm"
              />
            </div>
            {/* Dynamic floating contact shadow under the character */}
            <div className="w-48 sm:w-60 h-4 bg-slate-900/10 rounded-full blur-md mx-auto -mt-2 animate-pulse-subtle pointer-events-none" />
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: Development & Social Media                  */}
          {/* ========================================================= */}
          <div className="lg:col-span-4 flex flex-col gap-6 sm:gap-8 order-3">
            {rightServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div 
                  key={idx}
                  className="flex flex-col items-center lg:items-start text-center lg:text-left p-5 rounded-2xl transition-all duration-300 ease-out group cursor-default hover:bg-slate-50/80 hover:translate-x-2 hover:-translate-y-1 hover:shadow-md border border-transparent hover:border-slate-200/60"
                >
                  {/* Real Multi-Color Label Icon Badge */}
                  <div className="w-14 h-14 p-1.5 rounded-2xl bg-white shadow-xs border border-slate-100 group-hover:scale-115 group-hover:rotate-3 group-hover:shadow-md transition-all duration-300 mb-3 flex items-center justify-center">
                    <Icon className="w-full h-full" />
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight group-hover:text-orange-600 transition-colors duration-200">
                    {service.title}
                  </h3>

                  {/* Sub-tag Badge */}
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-50 text-orange-600 border border-orange-200/60 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-200 mt-1.5 mb-1">
                    {service.tag}
                  </span>

                  {/* Service Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm mt-1 font-normal group-hover:text-slate-700 transition-colors">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>

    </section>
  );
}
