import React from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Committee', href: '/committee' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

const socialLinks = [
  { iconClass: 'ri-facebook-fill', label: 'Facebook', href: 'https://www.facebook.com/jstbduc' },
  { iconClass: 'ri-instagram-line', label: 'Instagram', href: 'https://www.instagram.com/jstb_durgapuja?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==' },
  { iconClass: 'ri-youtube-fill', label: 'YouTube', href: '#' },
  { iconClass: 'ri-[#580a0a]', iconClassRaw: 'ri-twitter-x-fill', label: 'X (Twitter)', href: '#' },
];

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#580a0a] text-[#fbeee0] pt-10 pb-8 px-4 sm:px-6 lg:px-8 border-b-8 border-[#e5a93c] font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          
          {/* Column 1: Logo & Brand */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center md:items-start space-y-2"
          >
            <div className="flex items-center space-x-3 font-dm-serif">
              <img
                  src="/images/logo.png"
                  alt="Digital Puja"
                  className="h-12 w-auto"
                />

              <div>
                <h2 className="font-serif font-bold text-xl tracking-wider text-[#fbeee0] leading-none uppercase">
                  Jujersaha Singhabahinitala 
                </h2>
                <span className="text-[10px] tracking-[0.2em] text-[#d0a890] block uppercase font-medium mt-1 uppercase">
                  Barowari Durga Puja Committee
                </span>
              </div>
            </div>

            <p className="text-xs text-[#d0a890] tracking-wide pt-1">
              Faith &bull; Culture &bull; Community
            </p>
          </motion.div>

          {/* Column 2: Navigation Links & Copyright */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center space-y-3"
          >
            <nav className="flex flex-wrap justify-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-[#fbeee0] hover:text-[#e5a93c] transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <p className="text-xs text-[#d0a890]">
              &copy; 2026-2027 Durga Puja. All rights reserved.
            </p>
          </motion.div>

          {/* Column 3: CDN Social Icons & Credits */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center md:items-end space-y-3"
          >
            <div className="flex space-x-3">
              {socialLinks.map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.href}
                  aria-label={item.label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8 h-8 rounded-full bg-[#e5a93c] text-[#580a0a] flex items-center justify-center transition-opacity hover:opacity-90"
                >
                  <i className={`${item.iconClassRaw || item.iconClass} text-sm leading-none`}></i>
                </motion.a>
              ))}
            </div>
            
            <p className="text-xs text-[#d0a890] flex items-center gap-1">
              Made with <i className="ri-heart-fill text-red-500 text-xs"></i> for our culture by Sukumar 
            </p>
          </motion.div>

        </div>
      </div>
    </footer>
  );
}
