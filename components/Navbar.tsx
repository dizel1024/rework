import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, Link, useNavigate } from 'react-router-dom';
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

  const location = useLocation();
  const navigate = useNavigate();
  const isInnerPage = location.pathname !== '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Automatically scroll to hash if it exists when navigating from another page
    if (isInnerPage === false && location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  const textColorClass = isScrolled || isMobileMenuOpen || isInnerPage ? 'text-black' : 'text-white';
  const logoSrc = isScrolled || isMobileMenuOpen || isInnerPage ? "/assets/rework logo Black.webp" : "/assets/rework logo.webp";
  const logoFilter = isScrolled || isMobileMenuOpen || isInnerPage ? 'none' : 'brightness(0) invert(1)';

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    setIsMobileMenuOpen(false);
    if (!isInnerPage && href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "circOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isInnerPage ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center transition-opacity duration-300 hover:opacity-80">
          <img
            src={logoSrc}
            alt="REWORK"
            className="h-8 w-auto transition-all duration-300"
            style={{ filter: logoFilter }}
            loading="eager"
            fetchPriority="high"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href.startsWith('#') ? `/${item.href}` : item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`text-sm font-medium hover:opacity-70 transition-colors duration-300 ${textColorClass}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Button
            variant={isScrolled || isInnerPage ? "primary" : "dark"}
            className="text-sm px-5 py-2"
            onClick={() => {
              if (isInnerPage) { navigate('/#contact'); }
              else { document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }
            }}
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
              <Link
                key={item.label}
                to={item.href.startsWith('#') ? `/${item.href}` : item.href}
                className="block w-full py-4 text-center text-lg font-bold text-gray-800 hover:bg-gray-50 rounded-xl transition-colors"
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 mt-2 border-t border-gray-100">
              <Button
                variant="primary"
                className="w-full text-lg py-4 rounded-xl shadow-lg shadow-blue-500/20"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  if (isInnerPage) { navigate('/#contact'); }
                  else { document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }
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