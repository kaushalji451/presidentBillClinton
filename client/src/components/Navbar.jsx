import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {FaInstagram } from 'react-icons/fa';
import { FaXTwitter  } from "react-icons/fa6";
import { IoClose } from 'react-icons/io5';
import { RxHamburgerMenu } from "react-icons/rx";
import { motion } from "framer-motion";
import SearchBar from './Search/SearchBar';
import SearchBarmobile from './Search/SearchBarmobile';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsBlurred(window.scrollY > 3);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed w-full top-0 text-white z-50 pt-10 transition-all duration-300
          ${isBlurred
            ? 'backdrop-blur-sm bg-gradient-to-b from-[#091D32] to-transparent'
            : 'bg-gradient-to-b from-[#091D32] to-transparent'
          }`
        }
      >
        {!isOpen ? (
          // Normal navbar shown when menu is closed
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-3 sm:px-6 md:px-9 py-2 md:py-3">
            {/* Search Bar - ONLY visible md and above */}
           <SearchBar/>

            {/* Site Title & Desktop Nav */}
            <div className="w-full md:w-2/4  flex flex-col max-md:flex-row items-center justify-center order-1 md:order-2">
              <Link
                to="/"
                className="text-2xl sm:text-3xl max-md:text-center max-md:w-full font-light leading-tight tracking-wide uppercase block mb-1 md:mb-0"
              >
                PT Alok Tripath
              </Link>
              {/* Desktop Nav */}
              <nav className="hidden md:flex justify-center gap-8 lg:gap-12 text-md mt-2">
                {[
                  { to: '/biography', label: 'Biography' },
                  { to: '/gallery', label: 'Gallery' },
                  { to: '/news', label: 'News' },
                  { to: '/contact', label: 'Contact' },
                  { to: '/founder', label: 'Lineage Tree' },
                ].map(({ to, label }) => (
                  <Link
                    key={to}
                    to={to}
                    className="
                      relative pb-1 after:content-[''] after:block after:absolute after:left-0 after:bottom-0
                      after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300
                      hover:after:w-full
                    "
                  >
                    {label}
                  </Link>
                ))}
              </nav>

              {/* Mobile Menu Button */}
              <div className="md:w-full flex md:hidden justify-center mt-2 order-4">
                <button
                  onClick={() => setIsOpen(true)}
                  className="text-white text-base underline"
                  aria-label="Open menu"
                >
                  <RxHamburgerMenu />
                </button>
              </div>
            </div>

            {/* Social Icons - ONLY visible md and above */}
            <div className="hidden md:flex w-1/4 justify-end items-center gap-4 order-3 mb-2 md:mb-0">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaXTwitter  className="text-xl hover:text-gray-400 transition" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram className="text-xl hover:text-gray-400 transition" />
              </a>
            </div>
          </div>
        ) : null}
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="fixed inset-0 z-[999] h-[100vh] flex flex-col items-center justify-center px-6 py-8 overflow-hidden"
        >
          {/* Background Image */}
          <img
            src="https://images.presidentclinton.com/85056c4c-ffdf-4d45-b4cd-7063381c9c9a"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover object-center -z-10"
            loading="lazy"
          />

          {/* Semi-transparent overlay + blur */}
          <div className="absolute inset-0 bg-[#091D32]/70 backdrop-blur-sm -z-5" />

          {/* Close button */}
          <button
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-3xl text-white hover:text-gray-400 transition focus:outline-none z-20"
          >
            <IoClose />
          </button>

          {/* Site Title */}
          <div className="mb-8 mt-2 text-2xl font-bold uppercase text-white text-center tracking-widest z-20">
            President Alok Ji
          </div>

          {/* Search Bar */}
        <SearchBarmobile/>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-6 text-lg font-medium text-white items-center mb-10 z-20">
            {[
              { to: "/biography", label: "Biography" },
              { to: "/gallery", label: "Gallery" },
              { to: "/news", label: "News" },
              { to: "/contact", label: "Contact" },
              { to: "/founder", label: "Lineage Tree" },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setIsOpen(false)}
                className="hover:underline"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex space-x-6 text-2xl text-white justify-center z-20">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaXTwitter className="hover:text-gray-400" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="hover:text-gray-400" />
            </a>
          </div>
        </motion.div>

      )}
    </>
  );
}
