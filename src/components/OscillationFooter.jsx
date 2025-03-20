import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import EmailForm from './EmailForm';
import insta from '../assets/image-removebg-preview (1).png';

const OscillationFooter = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const createParticles = () => {
      const particlesContainer = document.getElementById('particles');
      if (!particlesContainer) return;

      particlesContainer.innerHTML = '';

      const isSmallScreen = window.innerWidth < 768;
      const particleCount = isSmallScreen ? 8 : 15;

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');

        const size = isSmallScreen ? (Math.random() * 4 + 1) : (Math.random() * 6 + 2);
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;

        const colors = ['bg-pink-500', 'bg-orange-400', 'bg-yellow-300', 'bg-emerald-400'];
        const colorClass = colors[Math.floor(Math.random() * colors.length)];

        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 10;

        particle.className = `absolute rounded-full opacity-50 ${colorClass}`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.animation = `float ${duration}s infinite linear`;
        particle.style.animationDelay = `${delay}s`;

        particlesContainer.appendChild(particle);
      }
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      createParticles();
    };

    createParticles();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white font-sans py-10 px-4 sm:px-5">
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.5;
          }
          90% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-100px) translateX(100px);
            opacity: 0;
          }
        }
      `}</style>

      <div id="particles" className="absolute top-0 left-0 w-full h-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-20">
        <div className="md:hidden mb-8 text-center">
          <div className="oscillation-logo text-3xl font-bold tracking-wide mb-2 inline-block">
            OSCILLATION 2K25
          </div>
          <p className="text-sm px-4">
            The premier tech event uniting coders, innovators, and tech enthusiasts
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-4 relative group transition-all duration-300 hover:bg-white/5 rounded-lg">
            <h3 className="text-xl mb-5 relative inline-block title-underline font-semibold">
              About Oscillation
            </h3>
            <p className="mb-4 text-gray-200">
              The premier tech event by AI & Data Science. VPPCOEVA unites coders, innovators, and
              tech enthusiasts to learn, compete, and innovate.
            </p>

            <div className="flex items-center flex-row gap-2 mt-4">
              <img src={insta} alt="Instagram" className="w-6 h-6 transition-all duration-300 group-hover:scale-110" />
              <div className="cursor-pointer hover:text-pink-500" onClick={() => window.open('https://www.instagram.com/oscillation_2025')}>@oscillation_2025</div>
            </div>

            <div className="flex items-center flex-row gap-2 mt-4">
              <img src={insta} alt="Instagram" className="w-6 h-6 transition-all duration-300 group-hover:scale-110" />
              <div className="cursor-pointer hover:text-pink-500" onClick={() => window.open('https://www.instagram.com/aisac_vppcoe')}>@aisac_vppcoe</div>
            </div>
          </div>

          <div className="p-4 relative group transition-all duration-300 hover:bg-white/5 rounded-lg">
            <h3 className="text-xl mb-5 relative inline-block title-underline font-semibold">
              Quick Links
            </h3>
            <div className="space-y-3">
              {['Home', 'Events', 'Register', 'Sponsors', 'Contact'].map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="block text-gray-200 transition-all duration-300 hover:text-pink-500 hover:translate-x-1 relative group"
                >
                  <span className="absolute -left-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-left-3">
                    &gt;
                  </span>
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div className="p-4 relative group transition-all duration-300 hover:bg-white/5 rounded-lg">
            <h3 className="text-xl mb-5 relative inline-block title-underline font-semibold">
              Events
            </h3>
            <div className="space-y-3">
              {['Code Relay 2.0', 'Valorant', 'Hackathon', 'Treasure Hunt', 'Project Presentation', 'BGMI', 'Carrom Clash', 'Code and Pray', 'Dumb Charades', 'AI Visionary', 'Ludo', 'Schedule'].map(
                (event, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block text-gray-200 transition-all duration-300 hover:text-pink-500 hover:translate-x-1 relative group"
                  >
                    <span className="absolute -left-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-left-3">
                      &gt;
                    </span>
                    {event}
                  </a>
                )
              )}
            </div>
          </div>

          <div className="p-4 relative group transition-all duration-300 hover:bg-white/5 rounded-lg">
            <h3 className="text-xl mb-5 relative inline-block title-underline font-semibold">
              Any Doubts We Didn't Answer?
            </h3>
            <p className="mb-4 text-gray-200">How About Emailing Us! We Will get to You ASAP!</p>
            <EmailForm />
          </div>
        </div>
      </div>

      <div className="text-center pt-8 border-t border-white border-opacity-10 mt-8 w-full">
        <div className="oscillation-logo text-2xl font-bold tracking-wide mb-2 hidden md:block">
          OSCILLATION 2K25
        </div>
        <p className="text-sm px-4">
          © 2025 Oscillation. All rights reserved. Organized by students, for everyone.
        </p>
      </div>
    </footer>
  );
};

export default OscillationFooter;
