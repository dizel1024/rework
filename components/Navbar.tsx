import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'פרויקטים', href: '#projects' },
  { label: 'סטודיו', href: '#about' },
  { label: 'לקוחות', href: '#testimonials' },
  { label: 'שירותים', href: '#services' },
  { label: 'צור קשר', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const textColorClass = isScrolled || isMobileMenuOpen ? 'text-black' : 'text-white';

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "circOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center transition-opacity duration-300 hover:opacity-80">
          <img
            src={isScrolled || isMobileMenuOpen ? "/assets/rework logo Black.webp" : "/assets/rework logo.webp"}
            alt="REWORK"
            className="h-8 w-auto transition-all duration-300"
            style={{
              filter: isScrolled || isMobileMenuOpen ? 'none' : 'brightness(0) invert(1)'
            }}
            loading="eager"
            fetchPriority="high"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm font-medium hover:opacity-70 transition-colors duration-300 ${textColorClass}`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Button
            variant={isScrolled ? "primary" : "dark"}
            className="text-sm px-5 py-2"
            onClick={() => window.location.href = '#contact'}
          >
            התחילו פרויקט
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 transition-colors duration-300 ${textColorClass}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 p-6 shadow-2xl flex flex-col gap-2 z-50 overflow-hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block w-full py-4 text-center text-lg font-bold text-gray-800 hover:bg-gray-50 rounded-xl transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-gray-100">
              <Button
                variant="primary"
                className="w-full text-lg py-4 rounded-xl shadow-lg shadow-blue-500/20"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.location.href = '#contact';
                }}
              >
                התחילו פרויקט
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;