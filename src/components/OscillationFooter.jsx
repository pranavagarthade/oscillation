import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import EmailForm from './EmailForm';

const OscillationFooter = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  // Developer team data
  const developers = [
    { name: "Deep Mohite", role: "Full Stack Developer", image: "/api/placeholder/80/80" },
    { name: "Pranav Agarthade", role: "Frontend Engineer", image: "/api/placeholder/80/80" },
    { name: "Siddhesh Varhadi", role: "Backend Developer", image: "/api/placeholder/80/80" },
  ];

  useEffect(() => {
    // Set initial window width
    setWindowWidth(window.innerWidth);
    
    // Create animated particles
    const createParticles = () => {
      const particlesContainer = document.getElementById('particles');
      if (!particlesContainer) return;
      
      // Clear any existing particles first
      particlesContainer.innerHTML = '';
      
      // Adjust particle count based on screen size
      const isSmallScreen = window.innerWidth < 768;
      const particleCount = isSmallScreen ? 8 : 15;
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        
        // Random size (smaller on mobile)
        const size = isSmallScreen ? (Math.random() * 4 + 1) : (Math.random() * 6 + 2);
        
        // Random position
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        
        // Random color
        const colors = ['bg-pink-500', 'bg-orange-400', 'bg-yellow-300', 'bg-emerald-400'];
        const colorClass = colors[Math.floor(Math.random() * colors.length)];
        
        // Random animation duration and delay
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
    
    // Re-create particles on window resize
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white font-sans py-10 px-4 sm:px-5">
      {/* Add keyframes for animations */}
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
        
        @keyframes glow {
          0% {
            box-shadow: 0 0 5px #ff6b9d;
          }
          100% {
            box-shadow: 0 0 15px #ff9b6b;
          }
        }
        
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }
        
        @keyframes float2 {
          0% {
            transform: translateY(0px);
          }
          100% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes colorShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        .title-underline::after {
          content: '';
          position: absolute;
          width: 50%;
          height: 3px;
          bottom: -8px;
          left: 0;
          background: linear-gradient(90deg, #ff6b9d, #ff9b6b);
          animation: glow 2s infinite alternate;
        }
        
        .oscillation-logo {
          background: linear-gradient(90deg, #ff6b9d, #ff9b6b, #ffd166, #06d6a0);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: colorShift 8s infinite linear;
        }

        .dev-card {
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
        }
        
        .dev-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
          background: rgba(255, 255, 255, 0.1);
        }
      `}</style>
      
      {/* Animated particles background */}
      <div id="particles" className="absolute top-0 left-0 w-full h-full pointer-events-none"></div>
      
      {/* Tech-themed background elements - adjusted for better mobile display */}
      <div className="absolute bottom-8 left-1/10 text-4xl opacity-10 animate-spin duration-20000 z-10 hidden sm:block">{'{ }'}</div>
      <div className="absolute top-5 right-1/6 text-3xl opacity-10 z-10 animate-bounce duration-15000 hidden sm:block">#</div>
      
      {/* Main footer content with improved mobile layout */}
      <div className="max-w-6xl mx-auto relative z-20">
        {/* Mobile header for branding - visible only on small screens */}
        <div className="md:hidden mb-8 text-center">
          <div className="oscillation-logo text-3xl font-bold tracking-wide mb-2 inline-block">
            OSCILLATION 2K25
          </div>
          <p className="text-sm px-4">The premier tech event uniting coders, innovators, and tech enthusiasts</p>
        </div>
        
        {/* Grid layout for footer sections - responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-4 relative group transition-all duration-300 hover:bg-white/5 rounded-lg">
            <h3 className="text-xl mb-5 relative inline-block title-underline font-semibold">About Oscillation</h3>
            <p className="mb-4 text-gray-200">The premier tech event by AI & Data Science. VPPCOEVA unites coders, innovators, and tech enthusiasts to learn, compete, and innovate.</p>
            <div className="flex gap-4 mt-4">
              {['in', 'f', 'tw', 'ig'].map((icon, index) => (
                <div 
                  key={index} 
                  className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-pink-500 hover:-translate-y-1 active:scale-90"
                  style={{animation: index % 2 === 0 ? 'pulse 3s infinite' : ''}}
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>
          
          <div className="p-4 relative group transition-all duration-300 hover:bg-white/5 rounded-lg">
            <h3 className="text-xl mb-5 relative inline-block title-underline font-semibold">Quick Links</h3>
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
            <h3 className="text-xl mb-5 relative inline-block title-underline font-semibold">Events</h3>
            <div className="space-y-3">
              {['Code Relay 2.0', 'Tech Roast Battle', 'Hackathon', 'Workshops', 'Schedule'].map((event, index) => (
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
              ))}
            </div>
          </div>
          
          <div className="p-4 relative group transition-all duration-300 hover:bg-white/5 rounded-lg">
            <h3 className="text-xl mb-5 relative inline-block title-underline font-semibold">And Doubts We Didnt Answer?</h3>
            <p className="mb-4 text-gray-200">How About Emailing Us! We Will get to You ASAP!</p>
            <EmailForm />
          </div>
        </div>
        
        {/* Developer Section - Centered and Professional */}
        <div className="mt-12 p-6 bg-gradient-to-r from-purple-900/30 via-purple-800/50 to-purple-900/30 rounded-lg border border-white/10">
          <h3 className="text-2xl mb-6 text-center font-bold">
            <span className="oscillation-logo">Development Team</span>
          </h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-3xl mx-auto">
            {developers.map((dev, index) => (
              <div key={index} className="dev-card rounded-lg p-4 flex flex-col items-center w-full md:w-1/3">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-3 border-2 border-pink-500 p-1 bg-gradient-to-br from-pink-500/20 to-purple-600/20">
                  <img 
                    src={dev.image} 
                    alt={dev.name} 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h4 className="font-bold text-lg text-center mt-2">{dev.name}</h4>
                <p className="text-sm text-gray-300 text-center">{dev.role}</p>
                <div className="flex gap-3 mt-3">
                  <a href="#" className="text-white hover:text-pink-400 transition-colors">
                    <span className="sr-only">GitHub</span>
                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-white hover:text-pink-400 transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom copyright section - improved spacing for mobile */}
      <div className="text-center pt-8 border-t border-white border-opacity-10 mt-8 w-full">
        <div className="oscillation-logo text-2xl font-bold tracking-wide mb-2 hidden md:block">
          OSCILLATION 2K25
        </div>
        <p className="text-sm px-4">© 2025 Oscillation. All rights reserved. Organized by students, for everyone.</p>
      </div>
    </footer>
  );
};

export default OscillationFooter;