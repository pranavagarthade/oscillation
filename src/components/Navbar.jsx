import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    console.log("Toggle clicked, isOpen:", !isOpen);
    setIsOpen(!isOpen);
  };

  const handleNavigation = (path) => {
    setIsOpen(false);
    navigate(path);
  };

  return (
    <div className="relative">
      {/* Toggle Button (Three Lines) */}
      <button 
        onClick={toggleMenu} 
        className="fixed top-6 right-6 z-50 flex flex-col justify-center items-center focus:outline-none"
        aria-label="Toggle Menu"
      >
        <span className={`w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 ${
          isOpen ? 'transform rotate-45 translate-y-2' : ''
        }`}></span>
        <span className={`w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 ${
          isOpen ? 'opacity-0' : ''
        }`}></span>
        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${
          isOpen ? 'transform -rotate-45 -translate-y-2' : ''
        }`}></span>
      </button>

      {/* Full Screen Transparent Menu Overlay with Blur Effect */}
      <div 
        className={`fixed inset-0 backdrop-blur-lg bg-black/50 z-40 transition-all duration-1000 transform ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex h-full items-center justify-center">
          <nav className="text-center">
            <ul className="space-y-8">
              {[
                { name: 'Home', path: '/' },
                { name: 'Events', path: '/events' },
                { name: 'HighLights', path: '/highlights' },
                { name: 'Sponsors', path: '/sponsors' },
                { name: 'FAQS', path: '/faqs' }
              ].map((item, index) => (
                <li 
                  key={index}
                  className={`transform transition-all duration-1000 ${
                    isOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${isOpen ? index * 100 : 0}ms` }}
                >
                  <button 
                    className="text-4xl md:text-5xl font-bold text-white hover:text-indigo-300 transition-colors"
                    onClick={() => handleNavigation(item.path)}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Social Media Links */}
        <div className={`absolute bottom-8 right-8 flex space-x-6 transition-all duration-500 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '700ms' }}>
          {['Facebook', 'Instagram', 'Youtube'].map((social, index) => (
            <a 
              key={index}
              href={`https://${social.toLowerCase()}.com`} 
              className="text-white hover:text-indigo-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {social}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;