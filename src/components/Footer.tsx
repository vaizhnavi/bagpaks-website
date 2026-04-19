import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <img
                src="/bagpaks-logo.png"
                alt="Bagpak Logo"
                className="h-12 w-12 object-contain"
              />
              <h3 className="ml-2 text-xl font-bold">Bagpak Oman</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Leading provider of industrial packaging solutions in Oman. Specializing in FIBC bags, Baffle bags, and Woven PP bags for diverse industrial applications.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button
                onClick={() => handleNavigation('home')}
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                Home
              </button>
              <button
                onClick={() => handleNavigation('products')}
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                Products
              </button>
              <button
                onClick={() => handleNavigation('about')}
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                About Us
              </button>
              <button
                onClick={() => handleNavigation('contact')}
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                Contact Us
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div className="ml-3 text-sm">
                  <a href="tel:+96892208039" className="block text-gray-400 hover:text-white transition-colors">
                    +968 9220 8039
                  </a>
                  <a href="tel:+96892240805" className="block text-gray-400 hover:text-white transition-colors">
                    +968 9224 0805
                  </a>
                  <a href="tel:+96891187614" className="block text-gray-400 hover:text-white transition-colors">
                    +96891187614
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@bagpak.com"
                  className="ml-3 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  info@bagpak.com
                </a>
              </div>

              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                <p className="ml-3 text-sm text-gray-400 leading-relaxed">
                  Plot No. 25, Squara 4, P.O. Box: 170, PC: 311,<br />
                  Fala Al-Ouhi Industrial Area, Sohar,<br />
                  Sultanate of Oman
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Bagpak Oman. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                A subsidiary of Ocean of Majan International Commercial Services LLC
              </p>
            </div>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              Industrial Packaging Solutions
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
