import React from 'react';

// Google 4-Color Flat Icon
export const GoogleFlatIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fill="#FFC107"
      d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
    />
    <path
      fill="#FF3D00"
      d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
    />
    <path
      fill="#4CAF50"
      d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
    />
    <path
      fill="#1976D2"
      d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
    />
  </svg>
);

// Google Maps 4-Color Pin Flat Icon
export const GoogleMapsFlatIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M24 4C15.716 4 9 10.716 9 19c0 10.45 13.064 23.473 14.28 24.66a1 1 0 0 0 1.44 0C25.936 42.473 39 29.45 39 19c0-8.284-6.716-15-15-15z"
      fill="#EA4335"
    />
    <path
      d="M24 26a7 7 0 1 0 0-14 7 7 0 0 0 0 14z"
      fill="#FFFFFF"
    />
    <circle cx="24" cy="19" r="4.5" fill="#4285F4" />
    <path
      d="M33.5 19c0 6.5-6.5 15.5-9.5 19.5 0 0 2-3 4-7.5s5.5-8.5 5.5-12z"
      fill="#FBBC04"
      opacity="0.3"
    />
  </svg>
);

// Flat Colorful Target / Lead Generation Ads Icon
export const AdsTargetFlatIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="20" fill="#EEF2FF" stroke="#6366F1" strokeWidth="2.5" />
    <circle cx="24" cy="24" r="14" fill="#E0E7FF" stroke="#4F46E5" strokeWidth="2.5" />
    <circle cx="24" cy="24" r="8" fill="#4338CA" />
    <circle cx="24" cy="24" r="3.5" fill="#38BDF8" />
    <path
      d="M35 13L25.5 22.5M35 13H28M35 13V20"
      stroke="#EF4444"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Flat Speedometer / Performance Lighthouse Score 99 Icon
export const PerformanceFlatIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="14" fill="#ECFDF5" />
    <path
      d="M12 28C12 21.3726 17.3726 16 24 16C30.6274 16 36 21.3726 36 28"
      stroke="#10B981"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M24 24L31 19"
      stroke="#047857"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <circle cx="24" cy="28" r="3" fill="#065F46" />
    <circle cx="16" cy="28" r="1.5" fill="#10B981" />
    <circle cx="24" cy="18" r="1.5" fill="#10B981" />
    <circle cx="32" cy="28" r="1.5" fill="#10B981" />
  </svg>
);

// Flat Trend Growth Badge Icon
export const TrendUpFlatIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3 17L9 11L13 15L21 7"
      stroke="#16A34A"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 7H21V14"
      stroke="#16A34A"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Flat Phone Call Icon (Local Lead / Volume)
export const PhoneFlatIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="6" fill="#DCFCE7" />
    <path
      d="M8.5 7.5C8.5 7.5 9 6.5 10 7C11 7.5 11.5 8.5 11 9.5C10.5 10.5 10.5 11 11.5 12.5C12.5 14 13 13.5 14 13C15 12.5 16 13 16.5 14C17 15 16 15.5 16 15.5C14.5 17 11 16.5 9 14.5C7 12.5 6.5 9 8.5 7.5Z"
      fill="#16A34A"
    />
  </svg>
);

// Industry Icons for Trust Bar
export const HealthcareFlatIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="6" fill="#FEE2E2" />
    <path d="M12 7V17M7 12H17" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

export const RealEstateFlatIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="6" fill="#FEF3C7" />
    <path d="M6 18V10L12 5L18 10V18H6Z" fill="#D97706" />
    <path d="M10 18V13H14V18" fill="#FEF3C7" />
  </svg>
);

export const HospitalityFlatIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="6" fill="#E0E7FF" />
    <path d="M6 10H18V17C18 17.5 17.5 18 17 18H7C6.5 18 6 17.5 6 17V10Z" fill="#4F46E5" />
    <path d="M9 7C9 7 9.5 8 10.5 8C11.5 8 12 7 12 7" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M13 7C13 7 13.5 8 14.5 8C15.5 8 16 7 16 7" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const EducationFlatIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="6" fill="#EDE9FE" />
    <path d="M12 4L4 8L12 12L20 8L12 4Z" fill="#7C3AED" />
    <path d="M6 10.5V15C6 16.5 8.7 18 12 18C15.3 18 18 16.5 18 15V10.5" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M20 9V14" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const LocalBusinessFlatIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="6" fill="#F0FDF4" />
    <path d="M5 9L6.5 4H17.5L19 9V10C19 11.1 18.1 12 17 12C15.9 12 15 11.1 15 10C15 11.1 14.1 12 13 12C11.9 12 11 11.1 11 10C11 11.1 10.1 12 9 12C7.9 12 7 11.1 7 10C7 11.1 6.1 12 5 12V9Z" fill="#059669" />
    <path d="M6 12V18H18V12" stroke="#059669" strokeWidth="1.5" />
  </svg>
);

// =========================================================
// Real-World Multi-Color Brand & Service Label Icons
// =========================================================

// 1. Google SEO & Organic Search Label Icon
export const GoogleSeoLabelIcon = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.5" />
    {/* Google 4-Color G */}
    <path
      d="M24 10C16.27 10 10 16.27 10 24C10 31.73 16.27 38 24 38C32.18 38 37.64 32.27 37.64 24.18C37.64 23.45 37.55 22.73 37.45 22H24V26.73H31.64C31.27 28.73 29.82 31.18 26.91 32.73C24.82 33.82 22.09 34.18 19.45 33.09C15.73 31.55 13.82 27.27 15.09 23.36C16.09 20.27 18.91 18.18 22.18 18.18C24.36 18.18 26.27 19.09 27.73 20.45L31.27 17C28.82 14.64 25.64 13.27 22.18 13.27C17.73 13.27 13.73 15.73 11.82 19.64L7.55 16.36C10.27 11 15.73 7.36 22.18 7.36C26.73 7.36 30.73 9 33.73 11.91L30.18 15.45C28.55 13.91 26.45 13.09 24 13.09V10Z"
      fill="#4285F4"
    />
    <path d="M11.82 19.64C11.27 21 11 22.45 11 24C11 25.55 11.27 27 11.82 28.36L7.55 31.64C6.55 29.36 6 26.73 6 24C6 21.27 6.55 18.64 7.55 16.36L11.82 19.64Z" fill="#FBBC05" />
    <path d="M24 38C28.45 38 32.36 36.45 35.18 33.82L31 30.45C29.45 31.55 27.27 32.45 24.55 32.45C21.45 32.45 18.73 30.64 17.55 27.91L13.18 31.27C15.45 35.36 19.45 38 24 38Z" fill="#34A853" />
    <path d="M37.45 22H24V26.73H31.64C31.09 29.36 29.45 31.36 26.91 32.73L31 36C35.09 32.27 37.64 26.91 37.64 24.18C37.64 23.45 37.55 22.73 37.45 22Z" fill="#4285F4" />
    <path d="M22.18 13.27C24.36 13.27 26.27 14.09 27.73 15.45L31.27 12C28.82 9.64 25.64 8.27 22.18 8.27C16.73 8.27 12.09 11.45 9.73 16.09L14.09 19.36C15.18 15.82 18.36 13.27 22.18 13.27Z" fill="#EA4335" />
    {/* Floating Search Glass Accent */}
    <circle cx="36" cy="12" r="7" fill="#EA4335" />
    <path d="M33.5 12L38.5 12M36 9.5L36 14.5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// 2. Meta Business & Paid Ads Label Icon
export const MetaBusinessLabelIcon = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#0064E0" />
    {/* Meta Infinity Ribbon in Crisp White with Depth */}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.8 15C9.5 15 6 18.9 6 24C6 29.1 9.5 33 13.8 33C17.4 33 20.3 30.4 22.6 26.7L23.8 24.7L25 26.7C27.3 30.4 30.2 33 33.8 33C38.1 33 41.6 29.1 41.6 24C41.6 18.9 38.1 15 33.8 15C30.2 15 27.3 17.6 25 21.3L23.8 23.3L22.6 21.3C20.3 17.6 17.4 15 13.8 15ZM13.8 19C11.5 19 9.8 21.2 9.8 24C9.8 26.8 11.5 29 13.8 29C16.1 29 18.1 26.7 19.8 24C18.1 21.3 16.1 19 13.8 19ZM33.8 19C31.5 19 29.5 21.3 27.8 24C29.5 26.7 31.5 29 33.8 29C36.1 29 37.8 26.8 37.8 24C37.8 21.2 36.1 19 33.8 19Z"
      fill="#FFFFFF"
    />
    {/* Growth Spark Badge */}
    <circle cx="37" cy="11" r="5" fill="#00D26A" />
    <path d="M35 11L36.5 12.5L39.5 9.5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// 3. Website & App Development Label Icon
export const WebDevCodeLabelIcon = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#0F172A" />
    {/* Browser Header Bar with 3 Colored Dots */}
    <rect x="6" y="8" width="36" height="32" rx="6" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
    <circle cx="12" cy="14" r="2" fill="#EF4444" />
    <circle cx="18" cy="14" r="2" fill="#F59E0B" />
    <circle cx="24" cy="14" r="2" fill="#10B981" />
    {/* Colorful Code Bracket Syntax */}
    <path d="M16 23L11 28L16 33" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M32 23L37 28L32 33" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M26 21L22 35" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

// 4. Social Media Marketing (Instagram / Meta Gradient) Label Icon
export const SocialMediaLabelIcon = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="instaGrad" x1="6" y1="42" x2="42" y2="6" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFDC80" />
        <stop offset="0.3" stopColor="#F77737" />
        <stop offset="0.6" stopColor="#E1306C" />
        <stop offset="1" stopColor="#833AB4" />
      </linearGradient>
    </defs>
    <rect width="48" height="48" rx="12" fill="url(#instaGrad)" />
    {/* Camera / Social Lens Outline */}
    <rect x="12" y="12" width="24" height="24" rx="7" stroke="#FFFFFF" strokeWidth="3" />
    <circle cx="24" cy="24" r="6" stroke="#FFFFFF" strokeWidth="3" />
    <circle cx="30.5" cy="17.5" r="1.5" fill="#FFFFFF" />
    {/* Floating Red Heart / Like Badge */}
    <circle cx="36" cy="10" r="6.5" fill="#FF004F" stroke="#FFFFFF" strokeWidth="1.5" />
    <path d="M36 12.8L33.8 10.6C33 9.8 33 8.5 33.8 7.7C34.6 7 35.8 7 36.5 7.7L36.6 7.8L36.7 7.7C37.4 7 38.6 7 39.4 7.7C40.2 8.5 40.2 9.8 39.4 10.6L36 12.8Z" fill="#FFFFFF" />
  </svg>
);

// 5. 3D ROI & Conversion Growth Label Icon (Why Choose Us)
export const RoiGrowthLabelIcon = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#ECFDF5" stroke="#A7F3D0" strokeWidth="1.5" />
    {/* 3D Ascending Bars */}
    <rect x="10" y="28" width="6" height="12" rx="2" fill="#6EE7B7" />
    <rect x="18" y="22" width="6" height="18" rx="2" fill="#34D399" />
    <rect x="26" y="16" width="6" height="24" rx="2" fill="#10B981" />
    <rect x="34" y="10" width="6" height="30" rx="2" fill="#059669" />
    {/* Ascending Trend Line with Arrow */}
    <path d="M9 25L19 18L27 22L39 8" stroke="#F97316" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M33 8H39V14" stroke="#F97316" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// 6. Certified Google & Meta Partner Badge Shield (Why Choose Us)
export const CertifiedBadgeLabelIcon = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="1.5" />
    {/* Verified Blue Shield */}
    <path
      d="M24 7L11 12V23C11 31.5 16.5 39.4 24 41.5C31.5 39.4 37 31.5 37 23V12L24 7Z"
      fill="#2563EB"
    />
    <path
      d="M24 10.5L14 14.5V23C14 29.8 18.3 36.1 24 38C29.7 36.1 34 29.8 34 23V14.5L24 10.5Z"
      fill="#3B82F6"
    />
    {/* Gold Laurel Star & Checkmark */}
    <path d="M19 23.5L22.5 27L29 19.5" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// 7. 100% Transparent Live Dashboard Screen Label Icon (Why Choose Us)
export const LiveDashboardLabelIcon = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#F0FDF4" stroke="#BBF7D0" strokeWidth="1.5" />
    {/* Monitor Dashboard */}
    <rect x="8" y="10" width="32" height="24" rx="4" fill="#0F172A" />
    {/* Live Pulse Dot */}
    <circle cx="13" cy="15" r="2" fill="#22C55E" />
    <path d="M17 15H25" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" />
    {/* Chart Line Inside Monitor */}
    <path d="M12 26L18 21L23 24L30 17L36 21" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    {/* Monitor Stand */}
    <path d="M24 34V39M18 39H30" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

// 8. 48-Hour Rapid Execution Rocket Accelerator Label Icon (Why Choose Us)
export const FastRocketLabelIcon = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#FFF7ED" stroke="#FED7AA" strokeWidth="1.5" />
    {/* Takeoff Rocket Body */}
    <path
      d="M24 8C19 14 18 22 18 26L24 24L30 26C30 22 29 14 24 8Z"
      fill="#F97316"
    />
    <path
      d="M24 8C22 13 21.5 19 21.5 24L24 23.5L26.5 24C26.5 19 26 13 24 8Z"
      fill="#FB923C"
    />
    <circle cx="24" cy="16" r="2.5" fill="#FFFFFF" />
    {/* Wings */}
    <path d="M18 23L13 26L15 30L19 26.5" fill="#EF4444" />
    <path d="M30 23L35 26L33 30L29 26.5" fill="#EF4444" />
    {/* Flame Thrust */}
    <path d="M21 26C21 31 24 36 24 36C24 36 27 31 27 26H21Z" fill="#FACC15" />
    <path d="M22.5 26C22.5 29 24 32 24 32C24 32 25.5 29 25.5 26H22.5Z" fill="#EF4444" />
  </svg>
);

// 9. Client Retention & Trust Gold Medal Label Icon
export const ClientRetentionLabelIcon = ({ className = "w-7 h-7" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Ribbon Tails */}
    <path d="M11 20L8 30L16 26L24 30L21 20" fill="#F59E0B" />
    <path d="M11 20L8 30L16 26V20H11Z" fill="#D97706" />
    {/* Medal Body */}
    <circle cx="16" cy="14" r="11" fill="#FBBF24" stroke="#F59E0B" strokeWidth="1.5" />
    <circle cx="16" cy="14" r="8.5" fill="#FEF3C7" />
    {/* Verified Checkmark inside Medal */}
    <path d="M12.5 14L15 16.5L19.5 11.5" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// 10. Paid Leads & Lead Magnet 3D Target Label Icon
export const PaidLeadsLabelIcon = ({ className = "w-7 h-7" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="14" fill="#FFEDD5" stroke="#FDBA74" strokeWidth="1.5" />
    <circle cx="16" cy="16" r="10" fill="#EA580C" />
    <circle cx="16" cy="16" r="6.5" fill="#FFFFFF" />
    <circle cx="16" cy="16" r="3.5" fill="#EA580C" />
    {/* Incoming Lead Arrow */}
    <path d="M24 8L17 15" stroke="#0284C7" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M17 10.5V15H21.5" stroke="#0284C7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);


