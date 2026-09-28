import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Key Highlights Data
const highlights = [
  {
    icon: 'ri-community-line',
    title: '100% Community-Driven',
    bengali: 'জনগণের পুজো',
    desc: 'Organized by the people, for the people. Built on shared subscriptions, passion, and collective unity.'
  },
  {
    icon: 'ri-brush-line',
    title: 'Artistic Excellence',
    bengali: 'শিল্প ও সৃজনশীলতা',
    desc: 'Showcasing intricate pandal architecture and handcrafted clay idols by master artisans of Bengal.'
  },
  {
    icon: 'ri-heart-3-line',
    title: 'Inclusivity & Heritage',
    bengali: 'ঐতিহ্য ও মেলবন্ধন',
    desc: 'Breaking barriers to welcome everyone — regardless of background — to celebrate together.'
  },
  {
    icon: 'ri-[#e5a93c] ri-hand-heart-line',
    title: 'Social Initiatives',
    bengali: 'সমাজ সেবা',
    desc: 'Extending the spirit of giving through clothes distribution, bhog distribution, and medical camps.'
  }
];

// Timeline / Milestones Data
const milestones = [
  { year: '2019', title: 'The Start', desc: 'All started with a small group of passionate individuals.' },
  { year: '2020', title: 'Best Pratima Award', desc: 'Received the highest honor for our artistic presentation.' },
  { year: '2025', title: 'Eco-Puja Pioneer', desc: 'Switched 100% to eco-friendly clay, organic dyes, and zero-plastic pandals.' },
  { year: '2026', title: '7+ Years of Glory', desc: 'Continuing a rich legacy of warmth, grand rituals, and community bonding.' }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full text-[#fbeee0] font-sans relative overflow-hidden">
      
      {/* HERO / HEADER SECTION WITH BACKGROUND IMAGE */}
      <section 
        className="w-full relative bg-cover bg-center bg-no-repeat py-20 px-4 sm:px-8 lg:px-16 border-b-2 border-[#e5a93c]/30"
        style={{
          backgroundImage: `url('/images/bg1.png')`, // Replace with your image path
        }}
      >
        {/* Subtle Dark Vignette Overlay for Readability */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10 text-center space-y-6">
          {/* Header Icon */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
           <img src='https://cdn-icons-png.flaticon.com/128/1419/1419255.png' className='h-10'/>
          </motion.div>

          {/* Titles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-3"
          >
            <span className="text-xs sm:text-sm text-[#e5a93c] uppercase tracking-[0.3em] font-bold">
              আমাদের বারোয়ারি পুজো
            </span>
            <h1 
              className="text-4xl sm:text-6xl font-extrabold font-serif text-[#fbeee0] tracking-wide drop-shadow-md"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              The Heart of Our Community
            </h1>
            <p className="text-sm sm:text-lg text-[#d0a890] max-w-3xl mx-auto leading-relaxed">
              For four decades, our <span className="text-[#e5a93c] font-semibold">Jujarsaha Singhabahinitala Barowari Durga Puja Committee</span> has been more than a festival — it is a living emotion, a celebration of togetherness, and a devotion to Bengal’s rich heritage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* STORY & ORIGIN SECTION */}
      <section 
        className="w-full relative bg-cover bg-center py-16 px-4 sm:px-8 lg:px-16"
        style={{
          backgroundImage: `url('/images/bg2.png')`,
          backgroundAttachment: 'fixed' // Replace with your image path
        }}
      >
        <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text Box */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-[#fffdfa]/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-[#e5a93c]/30 shadow-2xl space-y-4"
          >
            <div className="flex items-center space-x-2 text-[#e5a93c]">
              <i className="ri-history-line text-xl"></i>
              <h2 className="text-xs uppercase tracking-widest font-bold">What is "Barowari"?</h2>
            </div>
            
            <h3 
              className="text-2xl sm:text-3xl font-bold text-[#fbeee0]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Born from Collective Devotion
            </h3>

            <p className="text-xs sm:text-sm text-[#fbeee0]/90 leading-relaxed font-normal">
              The term <strong className="text-[#e5a93c]">Barowari</strong> originates from <em>"Baro Yaar"</em> (twelve friends) who came together in Guptipara, Bengal in 1790 to organize a public festival using community subscriptions. 
            </p>

            <p className="text-xs sm:text-sm text-[#fbeee0]/90 leading-relaxed">
              Carrying forward that legendary 230-year legacy, our committee brings together neighborhood families, artisans, and volunteers. From <em>Mahalaya’s</em> morning chants to the tearful farewell of <em>Dashami’s Sindoor Khela</em>, every moment is crafted by shared joy.
            </p>

            <div className="pt-2 border-t border-[#e5a93c]/20 flex items-center justify-between">
              <span className="text-sm font-semibold text-[#e5a93c] font-bengali-sans">
                "সবাইকে নিয়ে মেতে ওঠার উৎসব"
              </span>
              <i className="ri-quill-pen-line text-[#e5a93c] text-lg"></i>
            </div>
          </motion.div>

          {/* Right Highlights Cards */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <div className="bg-[#fbf6ee] text-[#4a0303] rounded-xl p-5 border border-[#e5a93c]/40 shadow-lg flex flex-col justify-center text-center space-y-2">
              <i className="ri-user-heart-line text-3xl text-[#580a0a]"></i>
              <h4 className="text-2xl font-bold font-serif text-[#580a0a]">50+</h4>
              <p className="text-xs font-semibold text-[#8a5d24] uppercase tracking-wider">Active Volunteers</p>
            </div>

            <div className="bg-[#fbf6ee] text-[#4a0303] rounded-xl p-5 border border-[#e5a93c]/40 shadow-lg flex flex-col justify-center text-center space-y-2">
              <i className="ri-footprint-line text-3xl text-[#580a0a]"></i>
              <h4 className="text-2xl font-bold font-serif text-[#580a0a]">20,000+</h4>
              <p className="text-xs font-semibold text-[#8a5d24] uppercase tracking-wider">Visitors Every Year</p>
            </div>

            <div className="bg-[#fbf6ee] text-[#4a0303] rounded-xl p-5 border border-[#e5a93c]/40 shadow-lg flex flex-col justify-center text-center space-y-2 sm:col-span-2">
              <i className="ri-emotion-happy-line  text-3xl text-[#580a0a]"></i>
              <h4 className="text-2xl font-bold font-serif text-[#580a0a]">Create amazing experiences</h4>
              <p className="text-xs font-semibold text-[#8a5d24] uppercase tracking-wider">Memorable moments for everyone</p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* CORE PILLARS / VALUES SECTION */}
      <section 
        className="w-full relative bg-cover bg-center py-16 px-4 sm:px-8 lg:px-16 border-t border-b border-[#e5a93c]/20"
        style={{
          backgroundImage: `url('/images/bg2.png')`,
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-6xl mx-auto relative z-10 space-y-10">
          
          <div className="text-center space-y-2">
            <h2 
              className="text-3xl sm:text-4xl font-bold text-[#fbeee0]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Pillars of Our Puja
            </h2>
            <p className="text-xs sm:text-sm text-[#e5a93c]">
              The principles that guide our grand celebration every autumn.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-[#fbf6ee] text-[#4a0303] rounded-xl p-5 border-2 border-[#e5a93c]/40 shadow-xl flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-lg bg-[#580a0a] text-[#e5a93c] flex items-center justify-center text-2xl shadow-md">
                    <i className={item.icon}></i>
                  </div>
                  <h3 
                    className="text-xl font-bold text-[#580a0a]"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#a5433a] font-bengali-sans">
                    {item.bengali}
                  </p>
                  <p className="text-xs text-[#5c3e38] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#e5a93c]/20 text-right">
                  <i className="ri-rhombus-fill text-xs text-[#d89f4c]"></i>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* MILESTONES TIMELINE SECTION */}
      <section 
        className="w-full relative bg-cover bg-center py-16 px-4 sm:px-8 lg:px-16"
        style={{
          backgroundImage: `url('/images/bg2.png')`,
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-5xl mx-auto relative z-10 space-y-10">
          
          <div className="text-center space-y-2">
            <h2 
              className="text-3xl sm:text-4xl font-bold text-[#fbeee0]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Our Journey Over the Decades
            </h2>
            <p className="text-xs sm:text-sm text-[#e5a93c]">
              From humble beginnings to an iconic landmark celebration.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {milestones.map((m, index) => (
              <div 
                key={index}
                className="bg-[#fffdfa]/10 backdrop-blur-md p-5 rounded-xl border border-[#e5a93c]/30 text-center space-y-2"
              >
                <span className="inline-block bg-[#e5a93c] text-[#4a0303] text-xs font-bold px-3 py-1 rounded-full font-mono">
                  {m.year}
                </span>
                <h4 
                  className="text-lg font-bold text-[#fbeee0]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {m.title}
                </h4>
                <p className="text-xs text-[#fbeee0]/80 leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* JOIN US / INVITATION FOOTER */}
      <section 
        className="w-full relative bg-cover bg-center py-12 px-4 text-center border-t border-[#e5a93c]/30"
        style={{
          backgroundImage: `url('/images/bg2.png')`,
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-3xl mx-auto relative z-10 space-y-4">
          <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#fbeee0]">
            Be a Part of Our Celebration
          </h3>
          <p className="text-xs sm:text-sm text-[#d0a890]">
            Whether you want to volunteer, contribute, or simply seek Maa Durga's blessings — our pandal doors are always open for you.
          </p>
          
          <div className="pt-2 flex justify-center space-x-4">
            <Link 
              to="/contact"
              className="bg-[#e5a93c] hover:bg-[#d89f4c] text-[#4a0303] font-bold text-xs px-6 py-2.5 rounded-full transition-colors shadow-lg"
            >
              Contact Committee
            </Link>
            <a 
              href="https://maps.app.goo.gl/VhqZnm7Gs5JcKKtg8"
              className="border border-[#e5a93c] text-[#fbeee0] hover:bg-[#e5a93c]/20 font-bold text-xs px-6 py-2.5 rounded-full transition-colors"
            >
              Get Location
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
