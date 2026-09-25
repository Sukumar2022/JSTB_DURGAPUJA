import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const galleryImages = [
  {
    id: 1,
    title: 'Making Maa Durga Idol',
    image: '/images/moment1.jpg',
    alt: 'Making maa Durga Idol with clay and straw'
  },
  {
    id: 2,
    title: 'Completion of Maa Durga with Gomutra',
    image: '/images/moment2.jpg',
    alt: 'Completion of Maa Durga with gomutra'
  },
  {
    id: 3,
    title: 'Dhaki Performance',
    image: '/images/moment3.jpg',
    alt: 'Dhaki Performance during Puja'
  },
  {
    id: 4,
    title: 'Sidur khela and Earthen Lamps',
    image: '/images/moment4.jpg',
    alt: 'Earthen Lamps and Diyas'
  }
];

const features = [
  {
    icon: 'ri-leaf-line',
    title: 'Eco Friendly',
    bengali: 'পরিবেশ বান্ধব',
    desc: 'Green initiatives for a better tomorrow.'
  },
  {
    icon: 'ri-shield-check-line',
    title: 'Safe & Secure',
    bengali: 'নিরাপদ ও সুসুরক্ষিত',
    desc: 'Your safety is our priority.'
  },
  {
    icon: 'ri-group-line',
    title: 'Open for All',
    bengali: 'সবার জন্য উন্মুক্ত',
    desc: 'Everyone is welcome to join the celebration.'
  },
  {
    icon: 'ri-heart-line',
    title: 'Support Local',
    bengali: 'স্থানীয় শিল্পীদের সহায়তা',
    desc: 'Promoting local artists, crafts and businesses.'
  }
];

export default function MomentsOfPuja() {
  return (
    <section 
      className="w-full relative bg-cover bg-center text-[#fbeee0] py-14 px-4 sm:px-8 lg:px-16 overflow-hidden font-sans border-t-2 border-b-2 border-[#e5a93c]/30"
      style={{
        backgroundImage: `url('/images/bg1.png')`,
        backgroundAttachment: 'fixed' // Replace with your image path
      }}
    >
      {/* Dark Overlay for optimal text readability */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          
          <div className="flex items-center space-x-4">
            {/* Decorative Golden Lotus Icon */}
            <img src='https://cdn-icons-png.flaticon.com/128/1419/1419255.png' className='h-10'/>
            <div>
              <h2 
                className="text-3xl sm:text-4xl font-bold font-serif text-[#fbeee0] leading-tight tracking-wide drop-shadow-md"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Moments of Puja
              </h2>
              <p className="text-xs sm:text-sm text-[#e5a93c] tracking-[0.2em] font-semibold uppercase mt-0.5">
                ART, DEVOTION AND THE COLOURS OF BENGAL
              </p>
            </div>
          </div>

          {/* View Gallery Button */}
          <Link
            to="/gallery"
            className="inline-flex items-center space-x-2 border-2 border-[#e5a93c] hover:bg-[#e5a93c] text-[#fbeee0] hover:text-[#580a0a] text-xs font-bold px-5 py-2.5 rounded-full transition-all duration-300 shadow-lg backdrop-blur-sm bg-black/20"
          >
            <i className="ri-gallery-line text-sm"></i>
            <span>View Gallery</span>
          </Link>
        </div>

        {/* IMAGE GALLERY GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {galleryImages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="relative group h-60 sm:h-64 rounded-xl overflow-hidden border-2 border-[#e5a93c]/40 shadow-2xl cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Golden Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity flex items-end p-4">
                <span className="text-sm font-semibold text-[#fbeee0] font-serif tracking-wide">
                  {item.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FEATURE HIGHLIGHTS FOOTER BAR */}
        <div className="bg-[#fffdfa]/10 backdrop-blur-md rounded-2xl p-6 border border-[#e5a93c]/30 shadow-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feat, idx) => (
              <div 
                key={idx} 
                className="flex items-start space-x-4 border-b sm:border-b-0 sm:border-r last:border-none border-[#e5a93c]/20 pb-4 sm:pb-0 pr-2"
              >
                <div className="w-10 h-10 rounded-full bg-[#e5a93c]/20 border border-[#e5a93c] flex items-center justify-center text-[#e5a93c] shrink-0">
                  <i className={`${feat.icon} text-lg`}></i>
                </div>
                <div className="space-y-0.5">
                  <h4 
                    className="text-base font-bold text-[#fbeee0] leading-tight"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {feat.title}
                  </h4>
                  <p className="text-xs text-[#e5a93c] font-bengali-sans font-semibold">
                    {feat.bengali}
                  </p>
                  <p className="text-[11px] text-[#fbeee0]/80 leading-snug pt-0.5">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
