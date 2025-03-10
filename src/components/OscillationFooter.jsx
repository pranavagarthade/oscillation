import React, { useEffect } from 'react';

const OscillationFooter = () => {
  useEffect(() => {
    // Create animated particles
    const createParticles = () => {
      const particlesContainer = document.getElementById('particles');
      if (!particlesContainer) return;
      
      // Clear any existing particles first
      particlesContainer.innerHTML = '';
      
      const particleCount = 15;
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        
        // Random size
        const size = Math.random() * 6 + 2;
        
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
    
    createParticles();
    
    // Re-create particles on window resize
    window.addEventListener('resize', createParticles);
    
    return () => {
      window.removeEventListener('resize', createParticles);
    };
  }, []);
  
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white font-sans py-10 px-5">
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
      
      {/* Tech-themed background elements */}
      <div className="absolute bottom-8 left-1/10 text-4xl opacity-10 animate-spin duration-20000 z-10">{'{ }'}</div>
      <div className="absolute top-5 right-1/6 text-3xl opacity-10 z-10 animate-bounce duration-15000">#</div>
      
      <div className="flex flex-wrap justify-between max-w-6xl mx-auto relative z-20">
        <div className="flex-1 min-w-max p-4 mb-8 md:mb-0">
          <h3 className="text-xl mb-5 relative inline-block title-underline">About Oscillation</h3>
          <p className="mb-4">The premier tech event by AI & Data Science. VPPCOEVA unites coders, innovators, and tech enthusiasts to learn, compete, and innovate.</p>
          <div className="flex gap-4 mt-4">
            {['in', 'f', 'tw', 'ig'].map((icon, index) => (
              <div 
                key={index} 
                className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-pink-500 hover:-translate-y-1"
              >
                {icon}
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex-1 min-w-max p-4 mb-8 md:mb-0">
          <h3 className="text-xl mb-5 relative inline-block title-underline">Quick Links</h3>
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
        
        <div className="flex-1 min-w-max p-4 mb-8 md:mb-0">
          <h3 className="text-xl mb-5 relative inline-block title-underline">Events</h3>
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
        
        <div className="flex-1 min-w-max p-4 mb-8 md:mb-0">
          <h3 className="text-xl mb-5 relative inline-block title-underline">Stay Updated</h3>
          <p className="mb-4">Subscribe to our newsletter for the latest updates on events, speakers, and opportunities.</p>
          <div className="flex mt-4">
            <input 
              type="email" 
              placeholder="Your email" 
              className="flex-grow px-4 py-2 bg-white bg-opacity-10 text-white rounded-l-md focus:outline-none"
            />
            <button className="px-4 py-2 bg-gradient-to-r from-pink-500 to-orange-400 text-white rounded-r-md transition-all duration-300 hover:from-orange-400 hover:to-pink-500">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      
      <div className="text-center pt-8 border-t border-white border-opacity-10 mt-8 w-full">
        <div className="oscillation-logo text-2xl font-bold tracking-wide mb-2">
          OSCILLATION 2K25
        </div>
        <p className="text-sm">© 2025 Oscillation. All rights reserved. Organized by students, for everyone.</p>
      </div>
    </footer>
  );
};

export default OscillationFooter;