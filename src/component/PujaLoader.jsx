import React from 'react';
import { motion } from 'framer-motion';

export default function PujaLoader({ text = "Loading Sharad Utsav..." }) {
  return (
    <div 
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat text-[#fbeee0] font-sans overflow-hidden"
      style={{
        backgroundImage: `url('/images/bg3.png')`,
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center space-y-6 p-6 text-center">
        
        {/* ANIMATED LOADER EMBLEM */}
        <div className="relative flex items-center justify-center w-32 h-32">
          
          {/* Outer Rotating Glowing Alpona Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
            className="absolute inset-0 rounded-full border-2 border-dashed border-[#e5a93c]/70 shadow-[0_0_25px_rgba(229,169,60,0.4)]"
          />

          {/* Inner Counter-Rotating Pulse Ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            className="absolute inset-2 rounded-full border border-dotted border-[#fbeee0]/50"
          />

          {/* Center Glowing Trishul / Durga Eye Motif */}
          <motion.div
            animate={{ scale: [0.95, 1.1, 0.95] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-16 h-16 text-[#e5a93c] drop-shadow-[0_0_12px_rgba(229,169,60,0.8)] flex items-center justify-center"
          >
            <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
              {/* Trishul Path */}
              <path d="M50 5 C45 20, 35 25, 30 15 C28 35, 42 45, 45 55 L45 90 C45 92, 55 92, 55 90 L55 55 C58 45, 72 35, 70 15 C65 25, 55 20, 50 5 Z" />
              {/* Center Spear Core */}
              <circle cx="50" cy="50" r="4" fill="#580a0a" />
            </svg>
          </motion.div>
        </div>

        {/* LOADING TEXT & BENGALI SUBTITLE */}
        <div className="space-y-2">
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-extrabold text-[#fbeee0] tracking-wide drop-shadow-md"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {text}
          </motion.h3>

          <p className="text-xs sm:text-sm text-[#e5a93c] uppercase tracking-[0.25em] font-bold font-bengali-sans">
            শুভ শারদীয়া — 🌸 আগমনীর সুর
          </p>
        </div>

        {/* PROGRESS DOTS ANIMATION */}
        <div className="flex items-center space-x-2 pt-2">
          {[0, 1, 2].map((idx) => (
            <motion.span
              key={idx}
              animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
              transition={{
                repeat: Infinity,
                duration: 1.2,
                delay: idx * 0.2,
                ease: "easeInOut"
              }}
              className="w-2.5 h-2.5 rounded-full bg-[#e5a93c] shadow-md"
            />
          ))}
        </div>

      </div>
    </div>
  );
}