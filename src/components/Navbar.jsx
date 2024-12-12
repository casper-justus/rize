import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSpring, animated } from '@react-spring/web';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Our Team', href: '/Founders' },
    { name: 'Programs', href: '/programs' },
    { name: 'Resources', href: '/resources' },
    { name: 'Get Involved', href: '/get-involved' },
    { name: 'Contact', href: '/contact' },
  ];

  const menuAnimation = useSpring({
    transform: isMobileMenuOpen ? 'translateX(0%)' : 'translateX(-100%)',
    config: { duration: 300 },
  });

  const handleSwipe = (e) => {
    if (e.type === 'touchstart') {
      const startX = e.touches[0].clientX;
      e.target.addEventListener('touchend', (e) => {
        const endX = e.changedTouches[0].clientX;
        if (startX < endX) {
          setIsMobileMenuOpen(true);
        }
      });
    }
  };

  return (
    <motion.nav 
      className="bg-white shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Brand Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary-600">
              Rise Africa
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${
                  location.pathname === item.href
                    ? 'border-primary-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                } inline-flex items-center px-4 py-2 border-b-2 text-sm font-medium transition-colors duration-200`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <animated.div
        style={menuAnimation}
        className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 overflow-y-auto"
        onTouchStart={handleSwipe}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-500 hover:text-gray-700">
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className={`block px-4 py-3 text-lg ${
              location.pathname === item.href ? 'bg-primary-100 text-gray-900 font-semibold' : 'text-gray-700 hover:bg-gray-100'
            } transition duration-200`}
            onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
          >
            {item.name}
          </Link>
        ))}
      </animated.div>
    </motion.nav>
  );
}
