import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import TeachersComponent from './TeachersComponent';
import company_logo from '../assets/company_logo.png';

const HomePage = () => {
  const canvasRef = useRef(null);
  const textRef = useRef(null);
  
  // Particles animation - optimized for mobile
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 4 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = `rgba(${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(Math.random() * 50)}, ${Math.floor(Math.random() * 80)}, ${Math.random() * 0.5 + 0.1})`;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.size > 0.2) this.size -= 0.01;
        
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }
      
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    // Adjust particle count based on device width
    const isMobile = window.innerWidth < 768;
    const particlesArray = [];
    const numberOfParticles = isMobile ? 50 : 100; // Fewer particles on mobile for better performance
    
    const init = () => {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
        
        // Connect particles - reduce connection distance on mobile
        const connectionDistance = isMobile ? 70 : 100;
        for (let j = i; j < particlesArray.length; j++) {
          const dx = particlesArray[i].x - particlesArray[j].x;
          const dy = particlesArray[i].y - particlesArray[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(213, 51, 105, ${0.1 - distance/1000})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
            ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
            ctx.stroke();
          }
        }
        
        if (particlesArray[i].size <= 0.2) {
          particlesArray.splice(i, 1);
          i--;
          particlesArray.push(new Particle());
        }
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    init();
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Text letter animation
  const title = "OSCILLATION";
  const letterVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 5 + i * 0.2,
      }
    }),
    hover: {
      y: -10,
      scale: 1.1,
      color: "#ff69b4",
      transition: { duration: 0.2 }
    }
  };

  // Creative wave effect for text - works for both mouse and touch
  useEffect(() => {
    if (!textRef.current) return;

    const text = textRef.current;
    
    // Handler that works for both mouse and touch events
    const handleInteraction = (e) => {
      // Get event coordinates (works for both mouse and touch)
      const clientX = e.clientX || (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
      const clientY = e.clientY || (e.touches && e.touches[0] ? e.touches[0].clientY : 0);
      
      const { left, top, width, height } = text.getBoundingClientRect();
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      const letters = text.querySelectorAll('.letter');
      letters.forEach((letter, index) => {
        const factor = index / letters.length;
        // Reduce movement amount on smaller screens
        const xMove = window.innerWidth < 768 ? x * 15 : x * 30;
        const yMove = window.innerWidth < 768 ? y * 10 : y * 20;
        letter.style.transform = `translate(${xMove * Math.sin(factor * Math.PI)}px, ${yMove * Math.cos(factor * Math.PI)}px)`;
      });
    };

    // Reset function to return letters to original position
    const resetLetters = () => {
      const letters = text.querySelectorAll('.letter');
      letters.forEach((letter) => {
        letter.style.transform = 'translate(0px, 0px)';
      });
    };

    // Add mouse event listeners
    window.addEventListener('mousemove', handleInteraction);
    window.addEventListener('mouseout', resetLetters);
    
    // Add touch event listeners
    window.addEventListener('touchmove', handleInteraction);
    window.addEventListener('touchend', resetLetters);
    
    return () => {
      // Clean up all event listeners
      window.removeEventListener('mousemove', handleInteraction);
      window.removeEventListener('mouseout', resetLetters);
      window.removeEventListener('touchmove', handleInteraction);
      window.removeEventListener('touchend', resetLetters);
    };
  }, []);
  
  return (
    <>
      <div className="relative h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 overflow-hidden font-['Montserrat',sans-serif]">
        {/* Canvas for particles - limited to hero section */}
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 z-0"
        />
        
        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 py-6 sm:py-12 h-screen flex flex-col justify-center">
          <div className="flex flex-col items-center justify-center max-w-6xl mx-auto">
            {/* Animated Main Title - Added mobile-specific top padding */}
            <motion.div 
              className="mb-6 sm:mb-12 w-full pt-8 sm:pt-0" // Added pt-8 for mobile and sm:pt-0 to reset for larger screens
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div 
                ref={textRef}
                className="relative text-center overflow-hidden py-4 sm:py-8"
              >
                {/* Added this mobile-only spacer div */}
                <div className="h-10 sm:h-0 block sm:hidden"></div>
                
                <div className="flex justify-center items-center">
                  {/* Company Logo - Hidden on mobile with responsive classes */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mr-6 hidden sm:block" // Hide on mobile, show on sm screens and up
                  >
                    <img 
                      src={company_logo} 
                      alt="Company Logo" 
                      className="w-24 h-24 object-contain" 
                    />
                  </motion.div>
                
                  {/* Oscillation Title */}
                  <div className="flex flex-wrap justify-center text-5xl sm:text-7xl md:text-8xl font-extrabold">
                    {title.split('').map((letter, i) => (
                      <motion.span
                        key={i}
                        className="letter inline-block relative"
                        custom={i}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        whileTap="hover" // Added for mobile touch interactivity
                        variants={letterVariants}
                        style={{ 
                          backgroundImage: `linear-gradient(45deg, #d53369 ${i*10}%, #ff69b4 ${100-(i*10)}%)`,
                          backgroundClip: 'text',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          filter: `hue-rotate(${i * 10}deg)`,
                          transformOrigin: 'center',
                          fontFamily: "'Orbitron', sans-serif"
                        }}
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </div>
                </div>
                
                <motion.div
                  className="absolute inset-0 z-0 rounded-full opacity-30 blur-3xl"
                  style={{ 
                    background: 'radial-gradient(circle, rgba(213,51,105,0.8) 0%, rgba(255,105,180,0) 70%)',
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "mirror"
                  }}
                />
                
                {/* Main content area with text left, buttons right */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="mt-4 sm:mt-8"
                >
                  <motion.span 
                    className="text-xl sm:text-2xl font-light tracking-widest text-pink-400 inline-block mb-4 sm:mb-6"
                    style={{ fontFamily: "'Rajdhani', sans-serif" }}
                  >
                    2K25
                  </motion.span>
                  
                  <motion.div 
                    className="flex flex-col md:flex-row gap-4 sm:gap-8 items-start"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    {/* Left side - Text content */}
                    <div className="w-full md:w-2/3 text-left">
                      <div className="bg-black/30 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-pink-500/20 shadow-lg shadow-pink-500/10">
                        <p className="text-gray-200 leading-relaxed text-base sm:text-lg md:text-xl font-light tracking-wide" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                          <span className="font-semibold text-pink-300">Oscillation 2K25</span>, the premier tech event by AI & Data Science, VPPCOEVA, unites <span className="font-medium text-indigo-300">coders, innovators,</span> and tech enthusiasts. Featuring <span className="font-medium text-pink-300">Code Relay 2.0</span>, project reviews, hackathons, and the electrifying <span className="font-medium text-indigo-300">Tech Roast Battle</span>, it challenges participants to excel, collaborate, and showcase their skills. Organized entirely by students, Oscillation 2K25 is the ultimate platform to learn, compete, and innovate.
                        </p>
                      </div>
                      
                      {/* Event highlights - responsive grid */}
                      <motion.div 
                        className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 mt-4 sm:mt-6 w-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.5 }}
                      >
                        {[
                          { name: "CODE RELAY 2.0", icon: "🧩" },
                          { name: "TECH ROAST BATTLE", icon: "🔥" },
                          { name: "HACKATHON", icon: "💻" }
                        ].map((event, index) => (
                          <motion.div
                            key={index}
                            className="bg-gradient-to-b from-black/50 to-purple-900/20 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-pink-500/20 hover:border-pink-500/50 active:border-pink-500/50 transition-all duration-300 text-center shadow-lg"
                            whileHover={{ 
                              y: -8,
                              boxShadow: "0 10px 25px -5px rgba(236, 72, 153, 0.3)",
                            }}
                            // Add touch support for mobile
                            whileTap={{ 
                              y: -8,
                              boxShadow: "0 10px 25px -5px rgba(236, 72, 153, 0.3)",
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1.5 + (index * 0.2) }}
                          >
                            <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">{event.icon}</div>
                            <h3 className="text-xs sm:text-md tracking-wider font-bold text-pink-300 mb-1" style={{ fontFamily: "'Rajdhani', sans-serif" }}>{event.name}</h3>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                    
                    {/* Right side - Buttons */}
                    <motion.div 
                      className="w-full md:w-1/3 flex flex-col items-center justify-center space-y-4 mt-4 sm:mt-6 md:mt-0"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 1.2 }}
                    >
                      <div className="bg-black/30 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-pink-500/20 shadow-lg shadow-pink-500/10 w-full">
                        <h3 className="text-lg sm:text-xl font-bold text-pink-300 mb-4 sm:mb-6 text-center" style={{ fontFamily: "'Rajdhani', sans-serif" }}>JOIN THE EXPERIENCE</h3>
                        
                        <motion.button 
                          className="px-6 sm:px-8 py-3 sm:py-4 mb-3 sm:mb-4 bg-gradient-to-r from-pink-600 to-pink-500 rounded-full text-white font-semibold shadow-lg hover:shadow-pink-500/40 active:shadow-pink-500/40 hover:-translate-y-1 active:-translate-y-1 transition-all duration-300 w-full text-sm sm:text-base"
                          whileHover={{ 
                            scale: 1.05, 
                            boxShadow: "0 0 15px rgba(236, 72, 153, 0.7)"
                          }}
                          // Add touch support for mobile
                          whileTap={{ 
                            scale: 0.95,
                            boxShadow: "0 0 15px rgba(236, 72, 153, 0.7)"
                          }}
                          style={{ fontFamily: "'Rajdhani', sans-serif", letterSpacing: "0.1em" }}
                        >
                          EXPLORE EVENTS
                        </motion.button>
                        
                        <motion.button 
                          className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-pink-500 rounded-full text-pink-300 font-semibold shadow-lg hover:shadow-pink-500/40 active:shadow-pink-500/40 hover:-translate-y-1 active:-translate-y-1 transition-all duration-300 w-full text-sm sm:text-base"
                          whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0 0 15px rgba(236, 72, 153, 0.7)"
                          }}
                          // Add touch support for mobile
                          whileTap={{ 
                            scale: 0.95,
                            boxShadow: "0 0 15px rgba(236, 72, 153, 0.7)"
                          }}
                          style={{ fontFamily: "'Rajdhani', sans-serif", letterSpacing: "0.1em" }}
                        >
                          REGISTER NOW
                        </motion.button>
                        
                        <div className="mt-4 sm:mt-6 text-center">
                          <p className="text-pink-200 text-xs sm:text-sm mb-1 sm:mb-2">Register before</p>
                          <p className="text-white font-bold text-lg sm:text-xl">MARCH 15, 2025</p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Teacher/Mentor Section below homepage */}
      <TeachersComponent/>

      
      
      {/* Font imports */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&family=Orbitron:wght@400;600;800&family=Quicksand:wght@300;400;600&family=Rajdhani:wght@300;400;600;700&display=swap');
        
        /* Modified styles to allow scrolling */
        html, body {
          overscroll-behavior: none;
          overflow-x: hidden; /* Prevent horizontal scrolling */
          width: 100%;
          height: 100%;
          touch-action: manipulation;
        }
        
        /* Improve mobile tap targets */
        button, a {
          touch-action: manipulation;
        }
      `}</style>
    </>
  );
};

export default HomePage;