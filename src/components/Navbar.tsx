import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <Logo size={isScrolled ? 'medium' : 'medium'} className={isScrolled ? '' : 'brightness-0 invert'} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-800 hover:text-orange-500' : 'text-white hover:text-orange-300'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-800 hover:text-orange-500' : 'text-white hover:text-orange-300'
              }`}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-800 hover:text-orange-500' : 'text-white hover:text-orange-300'
              }`}
            >
              Services
            </Link>
            <Link 
              to="/portfolio" 
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-800 hover:text-orange-500' : 'text-white hover:text-orange-300'
              }`}
            >
              Portfolio
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-800 hover:text-orange-500' : 'text-white hover:text-orange-300'
              }`}
            >
              Contact
            </Link>
            <a 
              href="tel:+1234567890" 
              className={`flex items-center px-6 py-3 rounded-md font-medium transition-all transform hover:scale-105 ${
                isScrolled 
                  ? 'bg-orange-500 text-white hover:bg-orange-600' 
                  : 'bg-white text-orange-500 hover:bg-orange-50'
              }`}
            >
              <Phone size={18} className="mr-2" />
              Get a Quote
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden focus:outline-none transition-colors ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}
            onClick={toggleMenu}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-md transition-all duration-300 ease-in-out transform ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-gray-800 hover:text-orange-500 font-medium py-2 transition-colors"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-gray-800 hover:text-orange-500 font-medium py-2 transition-colors"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className="text-gray-800 hover:text-orange-500 font-medium py-2 transition-colors"
              onClick={closeMenu}
            >
              Services
            </Link>
            <Link 
              to="/portfolio" 
              className="text-gray-800 hover:text-orange-500 font-medium py-2 transition-colors"
              onClick={closeMenu}
            >
              Portfolio
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-800 hover:text-orange-500 font-medium py-2 transition-colors"
              onClick={closeMenu}
            >
              Contact
            </Link>
            <a 
              href="tel:+1234567890" 
              className="flex items-center justify-center bg-orange-500 text-white px-6 py-3 rounded-md font-medium hover:bg-orange-600 transition-colors"
              onClick={closeMenu}
            >
              <Phone size={18} className="mr-2" />
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;