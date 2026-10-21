'use client';

import React from 'react';
import Image from 'next/image';
import { 
  MetaLogo, 
  PhonePeLogo, 
  RazorpayLogo, 
  GoogleLogo, 
  GoogleAdsLogo 
} from './PartnerLogos';

export default function Hero() {
  return (
    <div className="w-full flex flex-col relative">
      
      {/* ========================================================= */}
      {/* 1. Full-Width Cyber Network Hero Banner (Matching skdm.in) */}
      {/* ========================================================= */}
      <section id="best-digital-marketing-agency-mumbai" className="relative w-full min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] flex items-center overflow-hidden bg-slate-950">
        
        {/* Full-Bleed Background Image: Edge-to-Edge Cyber Network Visual */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/hero-digital-agency.jpg"
            alt="Best Digital Marketing Agency in Mumbai - Shree Krishna Digital"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
            quality={95}
          />
          {/* Lighter directional vignette for much higher background image visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/55 via-slate-950/25 via-50% to-transparent pointer-events-none" />
        </div>

        {/* Content Container (Directly merged with background, with subtle drop-shadow for high contrast) */}
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10">
          <div className="max-w-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
            
            {/* Simple Eyebrow Text (Real-World Style, No Capsule, No Slug in UI) */}
            <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-orange-400 mb-3">
              Best Digital Marketing Agency in Mumbai
            </p>

            {/* Main Headline (Reduced size, merged with background) */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-[1.2] mb-4">
              Accelerate Growth With{' '}
              <span className="text-[#38bdf8]">Top Digital Marketing</span>{' '}
              <span className="block mt-1">
                In <span className="text-[#f97316]">Andheri</span>
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-sm sm:text-base text-slate-200/90 leading-relaxed mb-7 font-normal max-w-xl">
              We are a leading digital marketing agency, dedicated to helping businesses thrive in the digital landscape. Our team of experts specializes in creating tailored strategies that drive results and elevate your brand&apos;s online presence.
            </p>

            {/* CTA Button: Pill with white border and orange circle icon */}
            <div>
              <a
                href="#contact"
                id="hero-get-quote-btn"
                className="inline-flex items-center gap-3 pl-6 pr-4 py-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white font-medium text-sm sm:text-base border border-white/80 transition-all duration-200 group shadow-lg backdrop-blur-xs"
              >
                <span>Get Quote</span>
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

      {/* ========================================================= */}
      {/* 2. Bottom "Our Trusted Partners" LIVE SCROLLING BELT       */}
      {/* ========================================================= */}
      <section className="w-full bg-white border-y border-slate-200 flex flex-col md:flex-row items-stretch relative z-20 shadow-xs overflow-hidden">
        
        {/* Left: Solid Orange Badge "Our Trusted Partners" */}
        <div className="bg-orange-500 text-white px-6 sm:px-8 py-3.5 sm:py-4 flex flex-col items-center md:items-start justify-center text-center md:text-left shrink-0 z-20 shadow-md">
          <span className="text-xs sm:text-sm font-extrabold tracking-wide uppercase leading-tight">
            Our Trusted
          </span>
          <span className="text-xs sm:text-sm font-extrabold tracking-wide uppercase leading-tight">
            Partners
          </span>
        </div>

        {/* Right: Infinite Live Marquee Belt */}
        <div className="flex-1 overflow-hidden relative flex items-center py-4 bg-white">
          <div className="absolute left-0 inset-y-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 inset-y-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Marquee Track */}
          <div className="animate-marquee-belt flex items-center gap-12 sm:gap-16 px-6">
            
            {/* Set 1 */}
            <div className="shrink-0 hover:opacity-80 transition-opacity">
              <MetaLogo className="h-6" />
            </div>
            <div className="shrink-0 hover:opacity-80 transition-opacity">
              <PhonePeLogo className="h-6" />
            </div>
            <div className="shrink-0 hover:opacity-80 transition-opacity">
              <RazorpayLogo className="h-6" />
            </div>
            <div className="shrink-0 hover:opacity-80 transition-opacity">
              <GoogleLogo className="h-6" />
            </div>
            <div className="shrink-0 hover:opacity-80 transition-opacity">
              <GoogleAdsLogo className="h-6" />
            </div>

            {/* Set 2 */}
            <div className="shrink-0 hover:opacity-80 transition-opacity">
              <MetaLogo className="h-6" />
            </div>
            <div className="shrink-0 hover:opacity-80 transition-opacity">
              <PhonePeLogo className="h-6" />
            </div>
            <div className="shrink-0 hover:opacity-80 transition-opacity">
              <RazorpayLogo className="h-6" />
            </div>
            <div className="shrink-0 hover:opacity-80 transition-opacity">
              <GoogleLogo className="h-6" />
            </div>
            <div className="shrink-0 hover:opacity-80 transition-opacity">
              <GoogleAdsLogo className="h-6" />
            </div>

            {/* Set 3 */}
            <div className="shrink-0 hover:opacity-80 transition-opacity">
              <MetaLogo className="h-6" />
            </div>
            <div className="shrink-0 hover:opacity-80 transition-opacity">
              <PhonePeLogo className="h-6" />
            </div>
            <div className="shrink-0 hover:opacity-80 transition-opacity">
              <RazorpayLogo className="h-6" />
            </div>
            <div className="shrink-0 hover:opacity-80 transition-opacity">
              <GoogleLogo className="h-6" />
            </div>
            <div className="shrink-0 hover:opacity-80 transition-opacity">
              <GoogleAdsLogo className="h-6" />
            </div>

          </div>
        </div>

      </section>

      {/* Floating WhatsApp Chat Widget (Fixed Bottom-Right) */}
      <div className="fixed bottom-6 right-6 z-50 pointer-events-auto">
        <a
          href="https://api.whatsapp.com/send/?phone=%2B917021390953&text=Hello%2C%20I%27m%20interested%20in%20your%20digital%20marketing%20services.%20Please%20share%20more%20details%20about%20how%20you%20can%20help%20grow%20my%20business%20online.&type=phone_number&app_absent=0"
          target="_blank"
          rel="noreferrer"
          aria-label="Chat with Shree Krishna Digital on WhatsApp"
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20bd5a] p-1 shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center border-2 border-white group"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center text-white">
            <svg className="w-8 h-8 fill-current drop-shadow-sm group-hover:scale-105 transition-transform" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
          </div>
        </a>
      </div>

    </div>
  );
}
