import React from 'react';
import { motion } from 'framer-motion';
import { committeeMembers } from '../data/committeeData';

export default function PujaCommittee() {
  return (
    <section 
      className="w-full relative bg-cover bg-center bg-no-repeat text-[#fbeee0] py-16 px-4 sm:px-8 lg:px-16 font-sans border-t-2 border-b-2 border-[#e5a93c]/30"
      style={{
        backgroundImage: `url('/images/bg3.png')`,
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        
        {/* SECTION HEADER */}
        <div className="text-center space-y-3">
          <div className="flex justify-center">
            <img src='https://cdn-icons-png.flaticon.com/128/1419/1419255.png' className='h-12'/>
          </div>
          <h2 
            className="text-3xl sm:text-5xl font-extrabold text-[#fbeee0] tracking-wide drop-shadow-md"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Organizing Committee
          </h2>
          <p className="text-xs sm:text-sm text-[#e5a93c] uppercase tracking-[0.25em] font-bold">
            আমাদের পুজো কমিটি — Pillars of Our Celebration
          </p>
        </div>

        {/* COMMITTEE CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {committeeMembers.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-[#fbf6ee] text-[#4a0303] rounded-2xl p-6 border-2 border-[#e5a93c]/50 shadow-2xl relative overflow-hidden flex flex-col justify-between group"
            >
              {/* Corner Ornamental Motif Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#e5a93c]/30 to-transparent rounded-bl-full pointer-events-none" />

              <div>
                {/* Header Badge (Initials + Role) */}
                <div className="flex items-center justify-between border-b border-[#e5a93c]/30 pb-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#580a0a] text-[#e5a93c] flex items-center justify-center font-bold text-lg border border-[#e5a93c]/60 shadow-md">
                    {member.initials}
                  </div>
                  <div className="text-right">
                    <span className="bg-[#580a0a] text-[#e5a93c] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-[#e5a93c]/30 inline-block">
                      {member.role}
                    </span>
                    <span className="block text-[11px] font-bold text-[#8a5d24] mt-1 font-bengali-sans">
                      {member.bengaliRole}
                    </span>
                  </div>
                </div>

                {/* Member Info */}
                <div className="space-y-1">
                  <h3 
                    className="text-xl font-bold text-[#580a0a] group-hover:text-[#8a1c1c] transition-colors"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#a5433a] font-bengali-sans">
                    {member.bengaliName}
                  </p>
                </div>
              </div>

              {/* Card Footer Details */}
              <div className="pt-6 mt-6 border-t border-[#e5a93c]/30 flex items-center justify-between text-xs font-medium text-[#5c3e38]">
                <div className="flex items-center space-x-2 text-[#580a0a]">
                  <i className="ri-phone-line text-[#e5a93c] text-sm"></i>
                  <span>{member.phone}</span>
                </div>
                <i className="ri-flower-line text-[#e5a93c] text-lg"></i>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}