import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function AboutAndCountdown() {
  // Target Date: Durga Puja 2026 (Shasthi - Oct 16, 2026 00:00:00)
  const targetDate = new Date('2026-10-16T00:00:00').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({
          days: String(days).padStart(2, '0'),
          hours: String(hours).padStart(2, '0'),
          minutes: String(minutes).padStart(2, '0'),
          seconds: String(seconds).padStart(2, '0'),
        });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const features = [
    { icon: 'ri-flower-line', title: 'Traditional', subtitle: 'Rituals', bengali: 'ঐতিহ্যবাহী আচার' },
    { icon: 'ri-music-2-line', title: 'Cultural', subtitle: 'Programs', bengali: 'সাংস্কৃতিক অনুষ্ঠান' },
    { icon: 'ri-user-shared-line', title: 'Community', subtitle: 'Bonding', bengali: 'সম্প্রদায়িক মেলবন্ধন' },
    { icon: 'ri-heart-3-line', title: 'Food &', subtitle: 'Festivities', bengali: 'খাবার ও উৎসব' },
  ];

  return (
    <section className="w-full bg-[#fbf6ee] text-[#4a0303] py-16 px-4 sm:px-8 lg:px-16 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* LEFT COLUMN: About the Event */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 flex flex-col space-y-6"
        >
          {/* Header Decorative Divider */}
          <div className="flex items-center space-x-3 text-[#d89f4c]">
            <span className="h-[1px] w-8 bg-[#d89f4c]"></span>
            <i className="ri-lotus-line text-lg"></i>
            <span className="h-[1px] w-8 bg-[#d89f4c]"></span>
          </div>

          <div>
           
            <h2 
              className="text-4xl sm:text-5xl font-bold font-serif text-[#580a0a] tracking-tight leading-none"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              About the Event
            </h2>
          </div>

          <p className="text-xs uppercase tracking-[0.25em] text-[#a5433a] font-semibold">
            FAITH &bull; CULTURE &bull; COMMUNITY
          </p>

          <p className="text-sm sm:text-base text-[#5c3e38] leading-relaxed max-w-xl">
            দুর্গাপূজা শুধু একটি উৎসব নয় &mdash; এটি বাঙালি সংস্কৃতি, ভক্তি, শিল্প, সঙ্গীত এবং সম্প্রদায়ের এক জীবন্ত প্রকাশ। ঐতিহ্যবাহী আচার-অনুষ্ঠান, ঢাকের শব্দ ও আলপনার সাথে মা দুর্গার আগমন উদযাপনে আমাদের সাথে যোগ দিন।
          </p>

          {/* Feature Grid with Bengali Titles */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
            {features.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-2 border-r last:border-r-0 border-[#e8d5c4] pr-2">
                <div className="w-10 h-10 rounded-full bg-[#f5e8d8] flex items-center justify-center text-[#700808]">
                  <i className={`${item.icon} text-lg`}></i>
                </div>
                <div className="text-xs font-semibold text-[#580a0a] leading-tight space-y-0.5">
                  <p className="font-bengali-sans text-[#700808] font-bold">{item.bengali}</p>
                  <p className="text-[11px] text-[#5c3e38]">{item.title} {item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Divider */}
          <div className="flex items-center justify-center space-x-4 pt-2 text-xs text-[#a5433a] font-medium tracking-wider">
            <i className="ri-rhombus-fill text-[8px] text-[#d89f4c]"></i>
            <span className="h-[1px] w-12 bg-[#e8d5c4]"></span>
            <span className="font-bengali-sans text-sm">একত্রে আমরা উদযাপন করি</span>
            <span className="h-[1px] w-12 bg-[#e8d5c4]"></span>
            <i className="ri-rhombus-fill text-[8px] text-[#d89f4c]"></i>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Red Mandala Background Countdown Card (Height: 60vh) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-6 w-full"
        >
          <div 
            className="relative h-[20vh] min-h-[420px] max-h-[580px] w-full rounded-2xl p-6 sm:p-10 border-4 border-[#e5a93c]/50 shadow-2xl overflow-hidden flex flex-col justify-between items-center text-center bg-cover bg-center"
            style={{
              backgroundImage: `url('/images/bg1.png')`,
            }}
          >
            {/* Subtle Overlay to ensure complete text readability */}
            <div className="absolute inset-0 bg-black/10 pointer-events-none" />

            {/* Header Content with Bengali Text */}
            <div className="relative z-10 space-y-1">

              <h3 
                className="font-serif text-2xl sm:text-3xl font-bold tracking-wider text-[#fbeee0] uppercase leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                COUNTDOWN TO PUJA 2026
              </h3>
              <p className="text-xs text-[#fbeee0]/80 font-bengali-sans pt-0.5">
                মা দুর্গার আগমন বার্তা প্রায় 
              </p>
            </div>

            {/* Circular Countdown Timers */}
            <div className="relative z-10 grid grid-cols-4 gap-3 sm:gap-6 my-auto w-full max-w-lg">
              
              {/* Days / দিন */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 sm:w-30 sm:h-30 rounded-full border-2 border-[#e5a93c] flex flex-col items-center justify-center bg-[#400202]/70 backdrop-blur-sm shadow-xl hover:border-yellow-300 transition-colors">
                  <span className="text-xl sm:text-4xl font-bold font-mono text-white leading-none">
                    {timeLeft.days}
                  </span>
                  <span className="text-[10px] sm:text-lg text-[#e5a93c] font-bengali-sans font-semibold mt-1">
                    দিন
                  </span>
                </div>
                <span className="text-[10px] text-[#fbeee0]/70 uppercase tracking-widest mt-1">Days</span>
              </div>

              {/* Hours / ঘণ্টা */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 sm:w-30 sm:h-30 rounded-full border-2 border-[#e5a93c] flex flex-col items-center justify-center bg-[#400202]/70 backdrop-blur-sm shadow-xl hover:border-yellow-300 transition-colors">
                  <span className="text-xl sm:text-4xl font-bold font-mono text-white leading-none">
                    {timeLeft.hours}
                  </span>
                  <span className="text-[10px] sm:text-lg text-[#e5a93c] font-bengali-sans font-semibold mt-1">
                    ঘণ্টা
                  </span>
                </div>
                <span className="text-[10px] text-[#fbeee0]/70 uppercase tracking-widest mt-1">Hours</span>
              </div>

              {/* Minutes / মিনিট */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 sm:w-30 sm:h-30 rounded-full border-2 border-[#e5a93c] flex flex-col items-center justify-center bg-[#400202]/70 backdrop-blur-sm shadow-xl hover:border-yellow-300 transition-colors">
                  <span className="text-xl sm:text-4xl font-bold font-mono text-white leading-none">
                    {timeLeft.minutes}
                  </span>
                  <span className="text-[10px] sm:text-lg text-[#e5a93c] font-bengali-sans font-semibold mt-1">
                    মিনিট
                  </span>
                </div>
                <span className="text-[10px] text-[#fbeee0]/70 uppercase tracking-widest mt-1">Mins</span>
              </div>

              {/* Seconds / সেকেন্ড */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 sm:w-30 sm:h-30 rounded-full border-2 border-[#e5a93c] flex flex-col items-center justify-center bg-[#400202]/70 backdrop-blur-sm shadow-xl hover:border-yellow-300 transition-colors">
                  <span className="text-xl sm:text-4xl font-bold font-mono text-white leading-none">
                    {timeLeft.seconds}
                  </span>
                  <span className="text-[10px] sm:text-xs text-[#e5a93c] font-bengali-sans font-semibold mt-1">
                    সেকেন্ড
                  </span>
                </div>
                <span className="text-[10px] text-[#fbeee0]/70 uppercase tracking-widest mt-1">Secs</span>
              </div>

            </div>

            {/* Bottom Decorative Lotus Emblem */}
            <div className="relative z-10 flex justify-center pt-2">
              <i className="ri-rhombus-fill text-[8px] text-[#d89f4c]"></i>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}