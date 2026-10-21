'use client';

import React from 'react';
import Image from 'next/image';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ArrowUpRight 
} from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="w-full py-16 lg:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Simple & Decent Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="text-orange-500 font-bold text-xs sm:text-sm uppercase tracking-wider">
            Contact Us • Digital Marketing Agency in Andheri West Mumbai
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
            Get In Touch With Our Team
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Have a project in mind or want to grow your digital presence? Reach out to our team in Andheri West, Mumbai.
          </p>
        </div>

        {/* Balanced 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Clean Contact Details with Interactive Hover Effects */}
          <div className="flex flex-col gap-5">
            
            {/* Phone & WhatsApp Card */}
            <a 
              href="tel:+917021390953"
              className="flex items-start gap-4 p-5 rounded-2xl border border-slate-200 hover:border-orange-400/80 hover:bg-orange-50/40 hover:-translate-y-1 hover:translate-x-1.5 hover:shadow-lg transition-all duration-300 ease-out group shadow-xs cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 group-hover:scale-115 group-hover:rotate-3 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-2xs">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider group-hover:text-orange-600 transition-colors">
                  Phone / WhatsApp
                </div>
                <div className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-orange-600 group-hover:translate-x-0.5 transition-all mt-0.5">
                  +91 70213 90953
                </div>
                <div className="text-xs text-slate-500 flex items-center gap-1.5 mt-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>Mon - Sat: 10:00 AM - 7:30 PM</span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-orange-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 shrink-0 mt-1" />
            </a>

            {/* Email Card */}
            <a 
              href="mailto:shreekrishnadigital09@gmail.com"
              className="flex items-start gap-4 p-5 rounded-2xl border border-slate-200 hover:border-blue-400/80 hover:bg-blue-50/40 hover:-translate-y-1 hover:translate-x-1.5 hover:shadow-lg transition-all duration-300 ease-out group shadow-xs cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 group-hover:scale-115 group-hover:rotate-3 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-2xs">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider group-hover:text-blue-600 transition-colors">
                  Email Us
                </div>
                <div className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all mt-0.5 break-all">
                  shreekrishnadigital09@gmail.com
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  We reply within 2 business hours
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 shrink-0 mt-1" />
            </a>

            {/* Office Address Card */}
            <div className="flex items-start gap-4 p-5 rounded-2xl border border-slate-200 bg-slate-50/60 hover:bg-emerald-50/30 hover:border-emerald-400/80 hover:-translate-y-1 hover:translate-x-1.5 hover:shadow-lg transition-all duration-300 ease-out group shadow-xs cursor-default">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-115 group-hover:rotate-3 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-2xs">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider group-hover:text-emerald-700 transition-colors">
                  Head Office
                </div>
                <p className="text-sm font-medium text-slate-800 leading-relaxed mt-1 group-hover:text-slate-900 transition-colors">
                  102 B Mohid Heights, Suresh Nagar, RTO Road, Opp. MHADA Signal, Near Kokilaben Hospital, Andheri West, Mumbai - 400053
                </p>
              </div>
            </div>

            {/* Action Buttons Row: WhatsApp Only */}
            <div className="flex items-center pt-2">
              <a
                href="https://api.whatsapp.com/send/?phone=%2B917021390953&text=Hello%2C%20I%27m%20interested%20in%20your%20digital%20marketing%20services.%20Please%20share%20more%20details%20about%20how%20you%20can%20help%20grow%20my%20business%20online.&type=phone_number&app_absent=0"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm transition-all shadow-md hover:shadow-xl hover:shadow-emerald-500/25 hover:scale-105 active:scale-95 duration-200"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <span>Chat on WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Image Side with Rich Hover & Floating Glass Badges */}
          <div className="w-full h-full flex items-center justify-center relative group">
            
            {/* Ambient Background Glow on Hover */}
            <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/25 via-blue-500/20 to-emerald-500/25 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10" />

            <div className="relative w-full h-[360px] sm:h-[420px] lg:h-[460px] rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 shadow-md group-hover:shadow-2xl group-hover:border-orange-400/80 group-hover:-translate-y-1.5 transition-all duration-500 ease-out">
              
              {/* Clean Image with Smooth Zoom */}
              <Image
                src="/hero-agency-workspace.jpg"
                alt="Shree Krishna Digital Marketing Agency Andheri West Mumbai"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108 group-hover:rotate-1"
              />

              {/* Daylight Subtle Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/20 opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

              {/* Dynamic Light Sheen Sweep on Hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
