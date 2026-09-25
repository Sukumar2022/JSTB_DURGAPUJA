import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[550px] lg:min-h-[800px] bg-[#580a0a] text-white overflow-hidden flex items-center px-4 sm:px-8 lg:px-16 py-12">
      
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero.png" 
          alt="Durga Puja Background" 
          className="w-full h-full object-cover object-left lg:object-center"
        />
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(74, 3, 3, 0.1) 0%, rgba(88, 10, 10, 0.65) 45%, rgba(88, 10, 10, 0.95) 75%, #580a0a 100%)'
          }}
        />

        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(88, 10, 10, 0.5) 0%, transparent 20%, transparent 80%, rgba(88, 10, 10, 0.9) 100%)'
          }}
        />

        <div className="absolute right-10 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#e5a93c]/10 blur-3xl pointer-events-none" />
      </div>

      {/* ------------------------------------------------------------------- */}
      {/* HERO CONTENT AREA */}
      {/* ------------------------------------------------------------------- */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
 
        <div className="hidden lg:block lg:col-span-5 h-full min-h-[300px]" />

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start space-y-4 lg:pl-8"
        >

          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#e5a93c] text-2xl sm:text-3xl font-medium tracking-wide drop-shadow font-bengali-sans"
          >
           শুভ শারদীয়া
          </motion.span>

          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold font-serif tracking-tight text-white leading-tight drop-shadow-md font-bengali-ui"
          >
           জুজারসাহা সিংহবাহিনীতলা বারোয়ারী দুর্গোৎসব কমিটি
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xs sm:text-lg uppercase tracking-[0.01em] text-[#d0a890] font-semibold font-bengali-serif "
          >
            পুজো | সংস্কৃতি | সম্প্রীতি | মানুষের মিলন
          </motion.p>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-sm sm:text-base text-[#fbeee0]/90 max-w-md font-sans leading-relaxed pt-1 drop-shadow-sm font-bengali-sans"
          >
            Join us in celebrating the divine spirit of Maa Durga with devotion, tradition and joy.
          </motion.p>

  
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col space-y-2 pt-2 text-sm text-[#fbeee0]/90 font-medium"
          >
            <div className="flex items-center space-x-3 justify-center lg:justify-start">
              <i className="ri-calendar-line text-[#e5a93c] text-lg"></i>
              <span>16th Oct &ndash; 21st Oct, 2026</span>
            </div>
            <div className="flex items-center space-x-3 justify-center lg:justify-start">
              <i className="ri-map-pin-line text-[#e5a93c] text-lg"></i>
              <span>Jujersaha Pallishree Nabin Sangha- Playing Ground, Singhabahinitala - Jujersaha,Panchla,Howrah</span>
            </div>
          </motion.div>

 
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="pt-4"
          >
            <Link
              to="/about"
              className="inline-flex items-center space-x-2 bg-[#e5a93c] hover:bg-[#d4972b] text-[#580a0a] font-bold px-7 py-3 rounded-full text-sm transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-yellow-500/20"
            >
              <span>Explore Now</span>
              <i className="ri-arrow-right-line text-lg"></i>
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
