import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function AdminDashboard({ onLogout }) {
  const [activeTab, setActiveTab] = useState('gallery');

  return (
    <div 
      className="min-h-screen bg-cover bg-center text-[#fbeee0] font-sans border-t-2 border-[#e5a93c]/30"
      style={{ backgroundImage: `url('/images/bg3.png')`, backgroundAttachment: 'fixed' }}
    >
      <div className="min-h-screen bg-black/40 backdrop-blur-sm flex flex-col md:flex-row">
        
        {/* SIDEBAR */}
        <aside className="w-full md:w-64 bg-[#4a0303]/90 border-r-2 border-[#e5a93c]/40 p-6 flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex items-center space-x-3 border-b border-[#e5a93c]/30 pb-4">
              <div className="w-10 h-10 rounded-full bg-[#e5a93c] text-[#4a0303] flex items-center justify-center font-bold text-lg">
                <i className="ri-shield-flash-line"></i>
              </div>
              <div>
                <h3 className="font-bold text-sm text-[#fbeee0]" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Puja Admin
                </h3>
                <span className="text-[10px] text-[#e5a93c] uppercase font-bold tracking-wider">Control Panel</span>
              </div>
            </div>

            {/* NAV LINKS */}
            <nav className="space-y-2">
              {[
                { id: 'HouseHold', label: 'HouseHold', icon: 'ri-gallery-line' },
                { id: 'Chanda Collection', label: 'Chanda Collection', icon: 'ri-gallery-line' },
                { id: 'gallery', label: 'Manage Gallery', icon: 'ri-gallery-line' },
                { id: 'committee', label: 'Committee Members', icon: 'ri-team-line' },
                { id: 'schedule', label: 'Event Schedule', icon: 'ri-calendar-event-line' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-xs font-bold transition-all ${
                    activeTab === item.id
                      ? 'bg-[#e5a93c] text-[#4a0303] shadow-lg'
                      : 'hover:bg-[#e5a93c]/20 text-[#fbeee0]'
                  }`}
                >
                  <i className={`${item.icon} text-base`}></i>
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
          </div>

          <button
            onClick={onLogout}
            className="mt-6 flex items-center justify-center space-x-2 w-full bg-[#720e0e] hover:bg-[#a5433a] text-white py-2.5 rounded-xl text-xs font-bold transition-colors border border-[#e5a93c]/30"
          >
            <i className="ri-logout-box-r-line text-sm"></i>
            <span>Log Out</span>
          </button>
        </aside>

        {/* MAIN PANEL CONTENT */}
        <main className="flex-1 p-6 sm:p-10">
          <header className="flex justify-between items-center mb-8 border-b border-[#e5a93c]/30 pb-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-[#fbeee0]" style={{ fontFamily: "'Playfair Display', serif" }}>
                {activeTab === 'gallery' && 'Gallery Management'}
                {activeTab === 'committee' && 'Committee Roster'}
                {activeTab === 'schedule' && 'Event Schedule'}
              </h1>
              <p className="text-xs text-[#e5a93c] font-bengali-sans mt-0.5">অ্যাডমিন প্যানেল আপডেট সার্ভিস</p>
            </div>
            <span className="bg-[#25D366]/20 text-[#25D366] text-[10px] font-bold px-3 py-1 rounded-full border border-[#25D366]/40">
              System Online
            </span>
          </header>

          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#fbf6ee] text-[#4a0303] rounded-2xl p-6 border-2 border-[#e5a93c]/50 shadow-2xl min-h-[400px]"
          >
            <p className="text-xs text-[#8a5d24] font-bold uppercase tracking-wider mb-4">
              Active Module: {activeTab}
            </p>
            <div className="p-8 border-2 border-dashed border-[#e5a93c]/40 rounded-xl text-center space-y-3">
              <i className="ri-database-2-line text-4xl text-[#580a0a]"></i>
              <h4 className="font-bold text-lg text-[#580a0a]">Java Backend Integration Ready</h4>
              <p className="text-xs text-[#5c3e38] max-w-md mx-auto">
                Connect your Spring Boot REST APIs (`/api/v1/{activeTab}`) to create, update, and delete entries dynamically.
              </p>
            </div>
          </motion.div>
        </main>

      </div>
    </div>
  );
}