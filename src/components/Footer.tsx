import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Youtube, Linkedin, Instagram } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
          <Logo 
            size="xlarge" className="mb-4 brightness-0 invert hover:brightness-100 hover:invert-0 transition-all"
          />
            <p className="text-gray-300 max-w-xs">
              Providing exceptional post-construction cleaning, project management, and business analysis services with a commitment to continuous business improvement.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors" aria-label="YouTube">
              <Youtube />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-orange-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-orange-500 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-orange-500 transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-300 hover:text-orange-500 transition-colors">Portfolio</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-orange-500 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/post-construction-cleaning" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Post-Construction Cleaning
                </Link>
              </li>
              <li>
                <Link to="/services/project-management" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Project Management
                </Link>
              </li>
              <li>
                <Link to="/services/business-analysis" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Business Analysis
                </Link>
              </li>
              <li>
                <Link to="/services/consultancy" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Consultancy Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={20} className="mr-3 text-orange-500 flex-shrink-0 mt-1" />
                <span className="text-gray-300">+1 (234) 567-8900</span>
              </li>
              <li className="flex items-start">
                <Mail size={20} className="mr-3 text-orange-500 flex-shrink-0 mt-1" />
                <a href="mailto:info@boledimcg.com" className="text-gray-300 hover:text-orange-500 transition-colors">
                  info@boledimcg.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 text-orange-500 flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  123 Business Avenue, Suite 500<br />
                  Johannesburg, South Africa
                </span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Boledi Management Consultancy Group. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-gray-400 text-sm hover:text-orange-500 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-400 text-sm hover:text-orange-500 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;