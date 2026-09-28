import React from 'react';

export default function MovingBanner() {
  const text = "পুজো বদলায়, সময় বদলায় — ভালোবাসা বদলায় না";

  return (
    <div className="w-full bg-[#f3eae1] border-y border-[#e6d8c8] py-3.5 overflow-hidden relative flex items-center">
      {/* Container holding dual marquee elements for seamless looping */}
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center space-x-6 mx-6 shrink-0">
            {/* Decorative Gold Floral/Star Emblem */}
            <span className="text-[#c48c32] text-xl select-none">✽</span>
            
            {/* Bengali Moving Italic Text */}
            <span className="text-[#583d2e] italic font-serif text-base sm:text-lg tracking-wide font-bengali-serif">
              {text}
            </span>
          </div>
        ))}
      </div>

      <div className="flex whitespace-nowrap animate-marquee" aria-hidden="true">
        {[...Array(4)].map((_, i) => (
          <div key={`dup-${i}`} className="flex items-center space-x-6 mx-6 shrink-0">
            <span className="text-[#c48c32] text-xl select-none">✽</span>
            <span className="text-[#583d2e] italic font-serif text-base sm:text-lg tracking-wide font-bengali-serif">
              {text}
            </span>
          </div>
        ))}
      </div>

      {/* CSS Animation Keyframes */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        /* Pause scrolling on hover */
        .overflow-hidden:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}