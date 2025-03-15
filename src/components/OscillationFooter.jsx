import React, { useEffect, useState } from 'react';

const OscillationFooter = () => {
  const [windowWidth, setWindowWidth] = useState(0);

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
            <h3 className="text-xl mb-5 relative inline-block title-underline font-semibold">Stay Updated</h3>
            <p className="mb-4 text-gray-200">Subscribe to our newsletter for the latest updates on events, speakers, and opportunities.</p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 mt-4">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 bg-white bg-opacity-10 text-white rounded-lg sm:rounded-l-lg sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-pink-500 placeholder-gray-400"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-pink-500 to-orange-400 text-white rounded-lg sm:rounded-l-none sm:rounded-r-lg transition-all duration-300 hover:from-orange-400 hover:to-pink-500 active:scale-95">
                Subscribe
              </button>
            </div>
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