'use client';

import React, { useEffect, useState } from 'react';

interface KeywordSection {
  slug: string;
  keyword: string;
  selector: string;
}

const keywordSections: KeywordSection[] = [
  {
    slug: 'best-digital-marketing-agency-mumbai',
    keyword: 'Best Digital Marketing Agency in Mumbai',
    selector: '#best-digital-marketing-agency-mumbai',
  },
  {
    slug: 'digital-marketing-agency-andheri',
    keyword: 'Digital Marketing Agency in Andheri',
    selector: '#about',
  },
  {
    slug: 'digital-marketing-experts-andheri',
    keyword: 'Digital Marketing Experts in Andheri',
    selector: '#services',
  },
  {
    slug: 'whatsapp-marketing-in-andheri',
    keyword: 'WhatsApp Marketing in Andheri',
    selector: '#services-overview',
  },
  {
    slug: 'photoshoot-videoshoot-agency-andheri',
    keyword: 'Photo Shoot & Video Shoot Agency in Andheri',
    selector: '#why-choose-us',
  },
  {
    slug: 'contact-digital-marketing-andheri',
    keyword: 'Digital Marketing Agency in Andheri West Mumbai',
    selector: '#contact',
  },
];

export default function KeywordScrollSpy() {
  useEffect(() => {
    let lastActiveSlug = '';

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      for (let i = keywordSections.length - 1; i >= 0; i--) {
        const item = keywordSections[i];
        const el = document.querySelector(item.selector);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          if (scrollPosition >= top) {
            if (lastActiveSlug !== item.slug) {
              lastActiveSlug = item.slug;
              // Update URL hash quietly in browser address bar only
              if (window.history && window.history.replaceState) {
                window.history.replaceState(null, '', `#${item.slug}`);
              }
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Show slug strictly in URL address bar only, no visual overlay on website
  return null;
}
