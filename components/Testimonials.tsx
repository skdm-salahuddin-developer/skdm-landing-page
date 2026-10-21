'use client';

import React from 'react';
import { ChevronLeft, ChevronRight, Quote, User } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: 'Loved the creativity and professionalism. Highly recommend!',
    name: 'Sandeep Kapoor',
    role: 'Elite Designs',
  },
  {
    id: 2,
    quote: 'A pleasure to work with! They made the entire process smooth and easy.',
    name: 'Meenal Thakur',
    role: 'Visionary Marketing',
  },
  {
    id: 3,
    quote: 'Superb results! They understood our requirements perfectly.',
    name: 'Kunal Desai',
    role: 'Modern Developers',
  },
];

export default function Testimonials() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      
      {/* Top Dark Background Split */}
      <div className="bg-[#0e0c18] pt-16 sm:pt-20 pb-32 sm:pb-40 px-4 sm:px-6 lg:px-8 relative">
        
        {/* Top-left decorative brush/ribbon accent (as seen in screenshot) */}
        <div className="absolute top-6 left-6 pointer-events-none opacity-80">
          <svg width="80" height="32" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 25C15 5 25 5 35 25C45 40 55 40 65 25C75 10 85 10 95 25" stroke="#F59E0B" strokeWidth="5" strokeLinecap="round" />
            <path d="M10 28C20 8 30 8 40 28C50 43 60 43 70 28" stroke="#EA580C" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
          </svg>
        </div>

        {/* Top-right subtle starburst accent */}
        <div className="absolute top-8 right-8 pointer-events-none opacity-30 text-slate-400">
          <svg width="44" height="44" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
          </svg>
        </div>

        {/* Section Heading */}
        <div className="max-w-5xl mx-auto text-center z-10 relative">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            <span className="relative inline-block">
              What our
              {/* Curved orange wave underline accent */}
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
            clients, Say
          </h2>
        </div>

      </div>

      {/* Cards Overlap Section (Shifted up with negative margin into dark split) */}
      <div className="-mt-20 sm:-mt-24 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-7xl mx-auto relative">
          
          {/* Left Arrow Button */}
          <button 
            aria-label="Previous testimonial"
            className="hidden xl:flex absolute -left-5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-orange-500 hover:bg-orange-600 text-white items-center justify-center shadow-lg transition-transform hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow Button */}
          <button 
            aria-label="Next testimonial"
            className="hidden xl:flex absolute -right-5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-orange-500 hover:bg-orange-600 text-white items-center justify-center shadow-lg transition-transform hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* 3 Testimonial Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-7 sm:p-9 shadow-xl shadow-slate-200/80 border border-slate-100 flex flex-col justify-between min-h-[260px] sm:min-h-[290px] hover:-translate-y-1.5 transition-transform duration-300"
              >
                <div>
                  {/* Big Quote Icon */}
                  <Quote className="w-10 h-10 text-slate-400 rotate-180 fill-slate-300 stroke-none mb-4" />
                  
                  {/* Quote Text */}
                  <p className="text-base sm:text-lg font-medium text-slate-700 leading-relaxed">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-6 mt-6 border-t border-slate-100">
                  <div className="w-11 h-11 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 shrink-0">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-tight">
                      {item.name}
                    </h3>
                    <p className="text-xs font-medium text-slate-500 mt-0.5">
                      {item.role}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <span className="w-2 h-2 rounded-full bg-slate-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
            <span className="w-2 h-2 rounded-full bg-slate-300" />
            <span className="w-2 h-2 rounded-full bg-slate-300" />
          </div>

        </div>
      </div>

    </section>
  );
}
