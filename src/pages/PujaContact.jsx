import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { contactDetails, emergencyContacts } from '../data/contactData';

export default function PujaContact() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Redirects directly to WhatsApp with pre-filled message
    const waText = `Name: ${formData.name}%0APhone: ${formData.phone}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/${contactDetails.whatsapp.replace(/[^0-9]/g, '')}?text=${waText}`, '_blank');
  };

  return (
    <section 
      className="w-full relative bg-cover bg-center bg-no-repeat text-[#fbeee0] py-16 px-4 sm:px-8 lg:px-16 font-sans border-t-2 border-b-2 border-[#e5a93c]/30 min-h-screen flex items-center"
      style={{
        backgroundImage: `url('/images/bg3.png')`,
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark overlay for optimal visual clarity */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 w-full space-y-12">
        
        {/* SECTION HEADER */}
        <div className="text-center space-y-3">
            <img src='https://cdn-icons-png.flaticon.com/128/1419/1419255.png' className='h-10 mx-auto'/>
          <h2 
            className="text-3xl sm:text-5xl font-extrabold text-[#fbeee0] tracking-wide drop-shadow-md"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Get in Touch
          </h2>
          <p className="text-xs sm:text-sm text-[#e5a93c] uppercase tracking-[0.25em] font-bold">
            যোগাযোগ করুন — We are Here to Assist You
          </p>
        </div>

        {/* MAIN CONTACT CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT SIDE: DIRECT CONTACT & HELPLINES */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Action Buttons Card */}
            <div className="bg-[#fbf6ee] text-[#4a0303] rounded-2xl p-6 border-2 border-[#e5a93c]/50 shadow-2xl space-y-4">
              <h3 
                className="text-2xl font-bold text-[#580a0a] border-b border-[#e5a93c]/30 pb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Quick Connect
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {/* Direct Phone Call Button */}
                <a 
                  href={`tel:${contactDetails.phone}`}
                  className="flex items-center justify-center space-x-2 bg-[#580a0a] hover:bg-[#720e0e] text-[#e5a93c] py-3 px-4 rounded-xl font-bold text-xs transition-colors shadow-md border border-[#e5a93c]/40"
                >
                  <i className="ri-phone-fill text-lg"></i>
                  <span>Call Us Now</span>
                </a>

                {/* Direct WhatsApp Button */}
                <a 
                  href={`https://wa.me/${contactDetails.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(contactDetails.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-[#25D366] hover:bg-[#20ba5a] text-white py-3 px-4 rounded-xl font-bold text-xs transition-colors shadow-md"
                >
                  <i className="ri-whatsapp-line text-lg"></i>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Helpline / Specific Contacts */}
            <div className="bg-[#fffdfa]/10 backdrop-blur-md text-[#fbeee0] rounded-2xl p-6 border border-[#e5a93c]/30 shadow-2xl space-y-4">
              <h4 
                className="text-xl font-bold text-[#e5a93c]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Helpdesk & Inquiries
              </h4>

              <div className="space-y-3 divide-y divide-[#e5a93c]/20">
                {emergencyContacts.map((item, idx) => (
                  <div key={idx} className={`${idx !== 0 ? 'pt-3' : ''} flex justify-between items-center`}>
                    <div>
                      <h5 className="text-sm font-bold text-[#fbeee0]">{item.title}</h5>
                      <span className="text-[11px] font-semibold text-[#e5a93c] font-bengali-sans block">{item.bengali}</span>
                      <p className="text-xs text-[#d0a890]">{item.name}</p>
                    </div>
                    <a 
                      href={`tel:${item.phone}`} 
                      className="bg-[#e5a93c]/20 hover:bg-[#e5a93c] text-[#e5a93c] hover:text-[#4a0303] text-xs font-bold px-3 py-1.5 rounded-lg border border-[#e5a93c]/40 transition-colors"
                    >
                      {item.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Venue Address */}
            <div className="bg-[#fffdfa]/10 backdrop-blur-md text-[#fbeee0] rounded-2xl p-6 border border-[#e5a93c]/30 shadow-2xl space-y-2">
              <div className="flex items-center space-x-2 text-[#e5a93c]">
                <i className="ri-map-pin-2-line text-lg"></i>
                <h4 className="text-xs font-bold uppercase tracking-wider">Pandal Address</h4>
              </div>
              <p className="text-xs leading-relaxed text-[#fbeee0]/90">{contactDetails.address}</p>
              <p className="text-xs font-semibold text-[#e5a93c] font-bengali-sans">{contactDetails.bengaliAddress}</p>
            </div>

          </div>

          {/* RIGHT SIDE: DIRECT MESSAGE FORM */}
          <div className="lg:col-span-7 bg-[#fbf6ee] text-[#4a0303] rounded-2xl p-6 sm:p-8 border-2 border-[#e5a93c]/50 shadow-2xl space-y-6">
            <div>
              <h3 
                className="text-2xl sm:text-3xl font-bold text-[#580a0a]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Send Us a Message
              </h3>
              <p className="text-xs text-[#8a5d24] font-semibold mt-1">
                Fill out the form below to reach us directly on WhatsApp.
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-[#580a0a]">Your Name *</label>
                <input 
                  type="text" 
                  name="name" 
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. Rahul Sharma" 
                  className="w-full bg-[#fffdfa] border border-[#e5a93c]/60 rounded-xl px-4 py-3 text-xs text-[#4a0303] focus:outline-none focus:border-[#580a0a]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-[#580a0a]">Phone Number *</label>
                <input 
                  type="tel" 
                  name="phone" 
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="e.g. +91 98300 00000" 
                  className="w-full bg-[#fffdfa] border border-[#e5a93c]/60 rounded-xl px-4 py-3 text-xs text-[#4a0303] focus:outline-none focus:border-[#580a0a]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-[#580a0a]">Message *</label>
                <textarea 
                  name="message" 
                  rows="4" 
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Write your message or inquiry here..." 
                  className="w-full bg-[#fffdfa] border border-[#e5a93c]/60 rounded-xl px-4 py-3 text-xs text-[#4a0303] focus:outline-none focus:border-[#580a0a] resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-[#580a0a] hover:bg-[#720e0e] text-[#e5a93c] font-bold text-xs py-3.5 rounded-xl transition-colors shadow-lg flex items-center justify-center space-x-2 border border-[#e5a93c]/40"
              >
                <i className="ri-send-plane-fill text-sm"></i>
                <span>Send via WhatsApp</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}