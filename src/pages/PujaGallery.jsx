import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryItems, categories } from '../data/galleryData';

export default function PujaGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredItems = activeFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section 
      className="w-full relative bg-cover bg-center bg-no-repeat text-[#fbeee0] py-16 px-4 sm:px-8 lg:px-16 overflow-hidden font-sans border-t-2 border-b-2 border-[#e5a93c]/30"
      style={{
        backgroundImage: `url('/images/bg3.png')`, 
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark overlay for optimal visual clarity */}
      <div className="absolute inset-0 bg-black/25 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-10">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center space-x-4">
           <img src='https://cdn-icons-png.flaticon.com/128/1419/1419255.png' className='h-10'/>
            <div>
              <h2 
                className="text-3xl sm:text-5xl font-extrabold font-serif text-[#fbeee0] tracking-wide drop-shadow-md"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Glimpses of Celebration
              </h2>
              <p className="text-xs sm:text-sm text-[#e5a93c] uppercase tracking-[0.25em] font-bold mt-1">
                পুজোর মুহূর্ত — Capturing Devotion & Heritage
              </p>
            </div>
          </div>

          {/* FILTER BUTTONS */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`text-xs font-bold px-4 py-2 rounded-full transition-all duration-300 border ${
                  activeFilter === cat
                    ? 'bg-[#e5a93c] text-[#4a0303] border-[#e5a93c] shadow-lg scale-105'
                    : 'bg-[#fffdfa]/10 text-[#fbeee0] border-[#e5a93c]/30 hover:border-[#e5a93c] hover:bg-[#e5a93c]/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* GALLERY GRID WITH ANIMATED HOVER EFFECTS */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="group relative h-80 sm:h-96 rounded-2xl overflow-hidden border-2 border-[#e5a93c]/30 hover:border-[#e5a93c] shadow-2xl cursor-pointer bg-[#4a0303]"
              >
                {/* Image Component with Smooth Zoom on Hover */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />

                {/* Dark to Warm Golden Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#3b0303] via-[#4a0303]/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Golden Inner Frame Effect on Hover */}
                <div className="absolute inset-3 border border-[#e5a93c]/0 group-hover:border-[#e5a93c]/60 rounded-xl transition-all duration-500 pointer-events-none" />

                {/* Top Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-[#580a0a]/80 backdrop-blur-md text-[#e5a93c] border border-[#e5a93c]/40 text-[10px] font-bold tracking-wider px-3 py-1 rounded-full uppercase">
                    {item.category}
                  </span>
                </div>

                {/* Floating View Icon (Slides in on Hover) */}
                <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <div className="w-9 h-9 rounded-full bg-[#e5a93c] text-[#4a0303] flex items-center justify-center shadow-lg">
                    <i className="ri-fullscreen-line text-lg"></i>
                  </div>
                </div>

                {/* Bottom Content Info (Reveals on Hover) */}
                <div className="absolute bottom-0 inset-x-0 p-6 z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-xs font-semibold text-[#e5a93c] font-bengali-sans block mb-0.5">
                    {item.bengali}
                  </span>
                  <h3 
                    className="text-2xl font-bold text-[#fbeee0] group-hover:text-[#e5a93c] transition-colors"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {item.title}
                  </h3>
                  
                  {/* Expandable description text on hover */}
                  <p className="text-xs text-[#d0a890] mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl bg-[#4a0303] rounded-2xl overflow-hidden border-2 border-[#e5a93c] shadow-2xl z-10 flex flex-col md:flex-row max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#580a0a] text-white flex items-center justify-center hover:bg-[#e5a93c] hover:text-[#4a0303] transition-colors"
              >
                <i className="ri-close-line text-xl"></i>
              </button>

              {/* Lightbox Image */}
              <div className="md:w-3/5 h-64 md:h-auto relative bg-black">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Lightbox Content Details */}
              <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-b from-[#580a0a] to-[#3b0303]">
                <div className="space-y-4">
                  <span className="bg-[#e5a93c] text-[#4a0303] text-[10px] font-bold tracking-wider px-3 py-1 rounded-sm uppercase inline-block">
                    {selectedImage.category}
                  </span>

                  <div>
                    <h4 className="text-sm font-semibold text-[#e5a93c] font-bengali-sans">
                      {selectedImage.bengali}
                    </h4>
                    <h3 
                      className="text-2xl sm:text-3xl font-bold text-[#fbeee0] mt-1"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {selectedImage.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#d0a890] leading-relaxed">
                    {selectedImage.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#e5a93c]/20 flex items-center justify-between">
                  <span className="text-xs text-[#e5a93c] font-serif">🌸 Sharad Utsav</span>
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="text-xs font-bold text-[#fbeee0] hover:text-[#e5a93c] transition-colors"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}