'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

interface IndustryItem {
  id: string;
  name: string;
  image: string;
  description: string;
  tag: string;
}

const industries: IndustryItem[] = [
  {
    id: 'healthcare',
    name: 'Healthcare',
    image: '/industry-healthcare.jpg',
    description: 'Accelerating patient appointments and clinic authority with specialized medical SEO and local growth campaigns.',
    tag: 'Clinics & Hospitals',
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    image: '/industry-real-estate.jpg',
    description: 'High-intent buyer lead generation, localized Google 3-Pack rankings, and 3D walkthrough marketing for premier developers.',
    tag: 'Luxury Towers & Commercial',
  },
  {
    id: 'education',
    name: 'Education',
    image: '/industry-education.jpg',
    description: 'Scaling student admissions and course enrollments through high-converting omnichannel lead funnels.',
    tag: 'Institutes & EdTech',
  },
  {
    id: 'lifestyle',
    name: 'Lifestyle & Fashion',
    image: '/industry-lifestyle.jpg',
    description: 'Elevating fashion labels and lifestyle collections with viral social creatives, influencer funnels, and e-commerce ROAS.',
    tag: 'Apparel & Luxury Retail',
  },
  {
    id: 'spa-salon',
    name: 'Spa & Salon',
    image: '/industry-spa-salon.jpg',
    description: 'Filling appointment calendars with localized Meta ad campaigns, Google Maps booking funnels, and aesthetic reels.',
    tag: 'Wellness & Aesthetics',
  },
  {
    id: 'resorts',
    name: 'Resorts & Villa',
    image: '/industry-resorts.jpg',
    description: 'Transforming hospitality experiences with cutting-edge digital solutions for luxury resorts and private villas.',
    tag: 'Luxury Escapes',
  },
  {
    id: 'hospitality',
    name: 'Hospitality & Catering',
    image: '/industry-catering.jpg',
    description: 'Driving high-ticket banquet bookings and brand prestige for gourmet catering, wedding venues, and fine dining.',
    tag: 'Banquets & Dining',
  },
];

export default function Industries() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  // Responsive itemsPerPage detection
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, industries.length - itemsPerPage);

  // Auto-slide right-to-left every 2.5 seconds (2500ms)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 2500);

    return () => clearInterval(interval);
  }, [isPaused, maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section id="industries" className="relative w-full py-16 sm:py-24 bg-white overflow-hidden border-t border-slate-100">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-blue-50/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          
          {/* Heading with Hand-Drawn Orange Wave Accent */}
          <div className="mb-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              <span className="relative inline-block">
                Industries,
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
              <span className="text-slate-900">We Serve</span>
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl">
            Tailored digital growth architectures designed for high-ticket service verticals across Mumbai and global markets.
          </p>

        </div>

        {/* Carousel Container with Left & Right Arrow Accents */}
        <div 
          className="relative w-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          
          {/* Left Arrow Button */}
          <button 
            onClick={handlePrev}
            aria-label="Previous industry"
            className="hidden sm:flex absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-orange-500 hover:bg-orange-600 active:scale-95 text-white items-center justify-center shadow-lg transition-all hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow Button */}
          <button 
            onClick={handleNext}
            aria-label="Next industry"
            className="hidden sm:flex absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-orange-500 hover:bg-orange-600 active:scale-95 text-white items-center justify-center shadow-lg transition-all hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Sliding Track Viewport */}
          <div className="overflow-hidden py-3">
            <div 
              className="flex transition-transform duration-700 ease-in-out gap-5 sm:gap-6"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
              }}
            >
              {industries.map((item) => (
                <div
                  key={item.id}
                  style={{
                    flex: `0 0 calc(${100 / itemsPerPage}% - ${(itemsPerPage - 1) * (itemsPerPage === 1 ? 0 : 24 / itemsPerPage)}px)`,
                  }}
                  className="group relative h-[380px] sm:h-[420px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-slate-200/90 hover:border-orange-500 hover:-translate-y-2 hover:shadow-[0_20px_45px_-12px_rgba(249,115,22,0.35)] transition-all duration-500 ease-out cursor-pointer"
                >
                  {/* Clean Background Image with Smooth Parallax Zoom */}
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-112 group-hover:rotate-1"
                  />

                  {/* Clean Daylight Gradient for Crisp Text Legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/35 to-transparent transition-opacity duration-300" />

                  {/* Ambient Golden-Orange Sheen on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Content Container (Pinned to Bottom with Smooth Upward Shift) */}
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 z-10 flex flex-col items-start text-left group-hover:-translate-y-1 transition-transform duration-300 ease-out">
                    
                    {/* Industry Title */}
                    <div className="flex items-center justify-between w-full mb-1.5">
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300">
                        {item.name}
                      </h3>
                      <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-white group-hover:bg-orange-500 group-hover:scale-115 group-hover:rotate-45 transition-all duration-300 shrink-0 shadow-sm">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>

                    {/* 2-Line Description with Clear Typography */}
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed line-clamp-2 font-normal mt-1 group-hover:text-white transition-colors duration-300">
                      {item.description}
                    </p>

                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator Progress Bar */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === idx
                    ? 'w-8 h-2.5 bg-orange-500 shadow-xs'
                    : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
