import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Quick Cards Data (Main Section)
const scheduleData = [
  {
    day: 'DAY 00',
    title: 'Mahalaya',
    time: '6:00 AM',
    subtitle: 'Chanting & Anjali',
    bengaliSubtitle: 'তর্পণ, দেবীকে আহ্বান',
  },
  {
    day: 'DAY 01',
    title: 'Shasthi',
    time: '9:00 AM',
    subtitle: 'Bodhon & Adhibas',
    bengaliSubtitle: 'বোধন — জাগরণ',
  },
  {
    day: 'DAY 02',
    title: 'Saptami',
    time: '9:00 AM',
    subtitle: 'Kumari Puja',
    bengaliSubtitle: 'কুমারী পূজা',
  },
  {
    day: 'DAY 03',
    title: 'Ashtami',
    time: '11:00 AM',
    subtitle: 'Pushpanjali',
    bengaliSubtitle: 'পরম ভক্তি + সন্ধি পূজা',
  },
  {
    day: 'DAY 04',
    title: 'Navami',
    time: '7:00 PM',
    subtitle: 'Sandhi Puja',
    bengaliSubtitle: 'চূড়ান্ত হোম এবং নৈবেদ্য',
  },
  {
    day: 'DAY 05',
    title: 'Dashami',
    time: '5:00 PM',
    subtitle: 'Sindoor Khela',
    bengaliSubtitle: 'সিঁদুর খেলা, বিসর্জন',
  },
];

// Full Detailed Schedule for Popup Modal
const fullScheduleData = [
  {
    day: 'Day 1: Shasthi',
    date: 'Friday, October 16, 2026',
    timing: 'Evening: 5:57 PM – 6:30 PM',
    events: [
      { icon: 'ri-time-line', text: 'Bodhon, Amantran & Adhibas' },
      { icon: 'ri-store-2-line', text: 'Maddox Square Book Fair Inauguration' }
    ]
  },
  {
    day: 'Day 2: Saptami',
    date: 'Saturday, October 17, 2026',
    timing: 'Timing: 7:41 AM – 10:03 AM',
    events: [
      { icon: 'ri-time-line', text: 'Nabapatrika Prabesh, Sthapan & Saptami Puja' },
      { icon: 'ri-hand-heart-line', text: 'Pushpanjali: 10:05 AM' },
      { icon: 'ri-palette-line', text: 'Patachitra Live Demo' }
    ],
    note: '(দেবীর ঘোটকে আগমন — ফল: ছত্রভঙ্গ) | Arrival on Horse — Instability'
  },
  {
    day: 'Day 3: Ashtami',
    date: 'Sunday, October 18, 2026',
    timing: 'Timing: 6:14 AM – 10:03 AM',
    events: [
      { icon: 'ri-time-line', text: 'Maha Ashtami Puja' },
      { icon: 'ri-hand-heart-line', text: 'Pushpanjali: 10:05 AM' },
      { icon: 'ri-user-star-line', text: 'Kumari Puja' },
      { icon: 'ri-restaurant-line', text: 'Special Bhog: 2:00 PM – 4:00 PM' }
    ]
  },
  {
    day: 'Day 4: Ashtami (Sandhi Puja)',
    date: 'Monday, October 19, 2026',
    timing: '7:26 AM - 8:14 AM',
    events: [
      { icon: 'ri-time-line', text: 'Sandhi Puja Begins (7:26 AM)' },
      { icon: 'ri-fire-line', text: 'Bali Daan (Sacred Offering) (7:50 AM)' },
      { icon: 'ri-time-line', text: 'Sandhi Puja Ends (8:14 AM)' },
      { icon: 'ri-hand-heart-line', text: 'Pushpanjali: 8:15 AM & 10:05 AM' },
      { icon: 'ri-shopping-bag-line', text: 'Cultural Flea & Handicraft Expo' }
    ],
    note: '⚡ 108 diyas are lit during Sandhi Puja - Most auspicious moment'
  },
  {
    day: 'Day 5: Navami',
    date: 'Tuesday, October 20, 2026',
    timing: 'Timing: 9:06 AM – 9:31 AM',
    events: [
      { icon: 'ri-time-line', text: 'Maha Navami Puja' },
      { icon: 'ri-hand-heart-line', text: 'Pushpanjali: 9:35 AM' },
      { icon: 'ri-user-star-line', text: 'Kumari Puja' },
      { icon: 'ri-restaurant-line', text: 'Special Bhog: 2:00 PM – 4:00 PM' },
      { icon: 'ri-fire-line', text: 'Dhunuchi Naach & Dandiya Night' }
    ]
  },
  {
    day: 'Day 6: Dashami',
    date: 'Wednesday, October 21, 2026',
    timing: 'Timing: 6:14 AM – 9:06 AM',
    events: [
      { icon: 'ri-time-line', text: 'Dashami Puja & Visarjan' },
      { icon: 'ri-hand-heart-line', text: 'Pushpanjali: 9:05 AM' },
      { icon: 'ri-heart-pulse-line', text: 'Sindur Khela' },
      { icon: 'ri-community-line', text: 'Bisarjan (Immersion) & Bijoya Sammilani' }
    ],
    note: '(দেবীর নৌকায় গমন — ফল: শস্যবৃদ্ধি ও জলবৃদ্ধি) | Departure by Boat — Prosperity'
  }
];

export default function PujaSchedule() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="w-full bg-[#580a0a] text-white py-14 px-4 sm:px-8 lg:px-16 relative overflow-hidden font-sans">
      
      {/* Decorative Background Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `radial-gradient(#e5a93c 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 text-center md:text-left">
          <div className="flex items-center space-x-4">
            {/* Lotus Header Icon */}
           <img src='https://cdn-icons-png.flaticon.com/128/1419/1419255.png' className='h-10'/>
            <div>
              <h2 
                className="text-3xl sm:text-4xl font-bold font-serif text-[#fbeee0] leading-none uppercase"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Puja Schedule
              </h2>
              <p className="text-xs sm:text-sm text-[#d0a890] mt-1">
                Experience the rituals, every day.
              </p>
            </div>
          </div>

          {/* Action Button Triggering Popup Modal */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center space-x-2 border border-[#fbeee0]/40 hover:border-[#e5a93c] bg-[#450303]/40 hover:bg-[#e5a93c] text-[#fbeee0] hover:text-[#580a0a] text-xs font-semibold px-5 py-2.5 rounded-full transition-all duration-300 shadow-md cursor-pointer"
          >
            <i className="ri-calendar-event-line text-sm"></i>
            <span>View Full Schedule</span>
          </button>
        </div>

        {/* Schedule Cards Grid (6 Columns Layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {scheduleData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -5 }}
              className="bg-[#fbf6ee] text-[#4a0303] rounded-xl p-4 flex flex-col justify-between items-center text-center shadow-lg border border-[#e5a93c]/30 min-h-[230px]"
            >
              {/* Day Badge */}
              <span className="bg-[#e5a93c] text-[#4a0303] text-[18px] font-bold tracking-wider px-2.5 py-1 rounded-sm uppercase">
                {item.day}
              </span>

              {/* Day Title */}
              <h3 
                className="text-3xl font-bold text-[#580a0a] my-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {item.title}
              </h3>

              {/* Time & Subtitles */}
              <div className="space-y-1 my-1 w-full">
                <p className="text-lg font-semibold text-[#a5433a] font-mono">
                  {item.time}
                </p>
                <p className="text-[12px] text-[#5c3e38] font-medium leading-tight">
                  {item.subtitle}
                </p>
                <p className="text-lg font-semibold text-[#700808] font-bengali-sans pt-0.5">
                  {item.bengaliSubtitle}
                </p>
              </div>

              {/* Bottom Decorative Emblem */}
              <div className="pt-2">
                <i className="ri-rhombus-fill text-xs text-[#d89f4c]"></i>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* FULL SCHEDULE POPUP MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            
            {/* Backdrop Layer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl max-h-[85vh] bg-[#fffdfa] text-[#333] rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10 border-2 border-[#e5a93c]/50"
            >
              {/* Modal Header */}
              <div className="bg-[#fbf6ee] border-b border-[#e8d5c4] p-5 sm:p-6 text-center relative flex flex-col items-center justify-center">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#580a0a] text-white flex items-center justify-center hover:bg-[#a5433a] transition-colors cursor-pointer"
                >
                  <i className="ri-close-line text-xl"></i>
                </button>

                <div className="flex items-center space-x-2 text-[#e5a93c] mb-1">
                  <i className="ri-calendar-todo-fill text-2xl"></i>
                  <h2 
                    className="text-2xl sm:text-3xl font-bold font-serif text-[#580a0a]"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Day-Wise <span className="text-[#d89f4c]">Durga Puja</span> Schedule 2026
                  </h2>
                </div>
                <p className="text-xs text-[#705852] font-sans">
                  Complete Durga Puja timings & rituals — As per Benimadhab Sil's Panjika
                </p>
              </div>

              {/* Scrollable Day-wise Event List */}
              <div className="overflow-y-auto p-4 sm:p-6 space-y-4 bg-[#f8f4ee]/50">
                {fullScheduleData.map((item, idx) => (
                  <div 
                    key={idx}
                    className="bg-white rounded-xl p-4 sm:p-5 border border-[#e8d5c4] shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row md:items-center justify-between gap-4"
                  >
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-base sm:text-lg font-bold text-[#e5a93c] font-serif">
                          {item.day}
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-[#580a0a]">
                          — {item.date}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#555]">
                        {item.events.map((ev, evIdx) => (
                          <div key={evIdx} className="flex items-center space-x-2">
                            <i className={`${ev.icon} text-[#e5a93c] text-sm shrink-0`}></i>
                            <span>{ev.text}</span>
                          </div>
                        ))}
                      </div>

                      {item.note && (
                        <p className="text-[11px] italic text-[#a5433a] font-bengali-sans pt-1">
                          {item.note}
                        </p>
                      )}
                    </div>

                    <div className="md:text-right shrink-0">
                      <div className="inline-flex items-center space-x-1.5 bg-[#fbf6ee] text-[#8a5d24] px-3 py-1.5 rounded-lg border border-[#e8d5c4] text-xs font-semibold">
                        <i className="ri-time-line text-[#e5a93c]"></i>
                        <span>{item.timing}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Modal Footer */}
              <div className="bg-[#fbf6ee] border-t border-[#e8d5c4] p-4 text-center text-xs text-[#705852] flex justify-between items-center px-6">
                <span className="font-bengali-sans font-semibold text-[#700808]">শুভ শারদীয়া 🌸</span>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="bg-[#580a0a] text-white px-5 py-1.5 rounded-full hover:bg-[#a5433a] transition-colors text-xs font-semibold cursor-pointer"
                >
                  Close
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}