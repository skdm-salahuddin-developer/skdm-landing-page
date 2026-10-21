'use client';

import React, { useState, useEffect, useCallback } from 'react';
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
  {
    id: 4,
    quote: 'Our ROI skyrocketed within 45 days. Their Meta & Google ads strategy is unparalleled.',
    name: 'Priya Sharma',
    role: 'Apex Health & Wellness',
  },
  {
    id: 5,
    quote: 'Best digital marketing agency in Mumbai. Fast turnaround and transparent reporting!',
    name: 'Rahul Verma',
    role: 'Omkar Logistics',
  },
  {
    id: 6,
    quote: 'The team helped us achieve record customer bookings through WhatsApp & social campaigns.',
    name: 'Ananya Patel',
    role: 'Glamour Spa & Salon',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);

  // Responsive visible cards count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Next Slide (Right to Left shift)
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  // Previous Slide (Left to Right shift)
  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Auto-slide every 2 seconds from Right to Left
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  return (
    <section className="relative w-full overflow-hidden bg-white">
      
      {/* Top Dark Background Split */}
      <div className="bg-[#0e0c18] pt-16 sm:pt-20 pb-32 sm:pb-40 px-4 sm:px-6 lg:px-8 relative">
        
        {/* Top-left decorative brush/ribbon accent */}
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

      {/* Cards Overlap Section with 2-Second Right-to-Left Auto Slider */}
      <div 
        className="-mt-20 sm:-mt-24 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 relative z-20"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="max-w-7xl mx-auto relative">
          
          {/* Left Arrow Button */}
          <button 
            type="button"
            onClick={prevSlide}
            aria-label="Previous testimonial"
            className="flex absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-orange-500 hover:bg-orange-600 text-white items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow Button */}
          <button 
            type="button"
            onClick={nextSlide}
            aria-label="Next testimonial"
            className="flex absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-orange-500 hover:bg-orange-600 text-white items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95 cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel Viewport Container */}
          <div className="overflow-hidden px-1 sm:px-2 py-4">
            <div 
              className="flex transition-transform duration-700 ease-out will-change-transform"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
              }}
            >
              {/* Double-listed items for seamless continuous looping */}
              {[...testimonials, ...testimonials].map((item, idx) => (
                <div
                  key={`${item.id}-${idx}`}
                  className="w-full sm:w-1/2 lg:w-1/3 shrink-0 px-3 sm:px-4"
                >
                  <div className="bg-white rounded-3xl p-7 sm:p-9 shadow-xl shadow-slate-200/80 border border-slate-100 flex flex-col justify-between h-full min-h-[270px] sm:min-h-[290px] hover:-translate-y-1.5 transition-transform duration-300">
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
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Pagination Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  currentIndex % testimonials.length === i
                    ? 'w-6 h-2.5 bg-orange-500'
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
