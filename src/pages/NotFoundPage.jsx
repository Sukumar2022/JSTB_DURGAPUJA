import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <section 
      className="w-full relative bg-cover bg-center bg-no-repeat text-[#fbeee0] py-20 px-4 min-h-screen flex items-center justify-center font-sans"
      style={{ backgroundImage: `url('/images/bg3.png')`, backgroundAttachment: 'fixed' }}
    >
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      <div className="relative z-10 max-w-lg w-full bg-[#fbf6ee] text-[#4a0303] rounded-2xl p-8 border-2 border-[#e5a93c]/60 shadow-2xl text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-6xl font-extrabold text-[#580a0a]" style={{ fontFamily: "'Playfair Display', serif" }}>
            404
          </h1>
          <h2 className="text-xl font-bold text-[#8a5d24] font-bengali-sans">
            পৃষ্ঠাটি পাওয়া যায়নি — Page Not Found
          </h2>
        </div>

        <p className="text-xs text-[#5c3e38] leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <Link 
          to="/" 
          className="inline-flex items-center space-x-2 bg-[#580a0a] hover:bg-[#720e0e] text-[#e5a93c] py-3 px-6 rounded-xl font-bold text-xs transition-colors shadow-lg border border-[#e5a93c]/40"
        >
          <i className="ri-home-4-line text-base"></i>
          <span>Return to Home</span>
        </Link>
      </div>
    </section>
  );
}