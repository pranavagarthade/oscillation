import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import TeachersComponent from './TeachersComponent';
import logo_white from '../assets/logo_white.png';
import oscillation_logo from '../assets/oscillation_logo.png';

const HomePage = () => {
  const navigate = useNavigate();
  const canvasRef = useRef(null);
  const textRef = useRef(null);
  
  // Function to navigate to events page
  const navigateToEvents = () => {
    navigate('/events');
  };
  
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

  // Improved text letter animation with sequential pattern
  const title = "OSCILLATION";
  const letterVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        // Create a more organized wave effect instead of random animation
        repeat: Infinity,
        repeatType: "reverse",
        // Use a sequential pattern based on letter position
        repeatDelay: 2 + Math.sin(i * 0.8) * 1.5,
      }
    }),
    hover: {
      y: -10,
      scale: 1.1,
      color: "#ff69b4",
      transition: { duration: 0.2 }
    }
  };

  // AI & Data Science text animation variants
  const aiTextVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2
      }
    }
  };
  
  // Individual letter animation for AI & Data Science
  const aiLetterVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.03,
        duration: 0.3,
        ease: "easeOut"
      }
    })
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
      {/* Changed to a wrapper div with continuous background */}
      <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 overflow-hidden font-['Montserrat',sans-serif]">
        {/* Main container for HomePage section - using relative min-h-screen to ensure full height */}
        <div className="relative min-h-screen">
          {/* Canvas for particles - limited to hero section */}
          <canvas 
            ref={canvasRef} 
            className="absolute inset-0 z-0"
          />
          
          {/* Main Content */}
          <div className="relative z-10 container mx-auto px-4 sm:px-6 py-6 sm:py-12 min-h-screen flex flex-col justify-center">
            <div className="flex flex-col items-center justify-center max-w-6xl mx-auto">
              {/* Animated Main Title - Reduced top padding on mobile to move title up */}
              <motion.div 
                className="mb-6 sm:mb-12 w-full pt-0 sm:pt-0" // Changed pt-8 to pt-0 to remove top padding on mobile
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <div 
                  ref={textRef}
                  className="relative text-center overflow-hidden py-0 sm:py-8" // Changed py-4 to py-0 for mobile to move up
                >
                  {/* Reduced spacer height for mobile to move title up */}
                  <div className="h-2 sm:h-0 block sm:hidden"></div> {/* Changed from h-10 to h-2 */}
                  
                  {/* Mobile version of logos - displayed in a row above the title - moved up */}
                  <motion.div 
                    className="flex justify-center items-center gap-4 mb-2 sm:hidden mt-4" // Added mt-4 for top spacing and reduced mb-4 to mb-2
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    <img 
                      src={logo_white} 
                      alt="Company Logo" 
                      className="w-14 h-14 object-contain" // Reduced from w-16 h-16 to w-14 h-14
                    />
                    <img 
                      src={oscillation_logo} 
                      alt="Oscillation Logo" 
                      className="w-14 h-14 object-contain" // Reduced from w-16 h-16 to w-14 h-14
                    />
                  </motion.div>
                  
                  <div className="flex justify-center items-center">
                    {/* Company Logo - Hidden on mobile with responsive classes */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="mr-6 hidden sm:block" // Hide on mobile, show on sm screens and up
                    >
                      <img 
                        src={logo_white} 
                        alt="Company Logo" 
                        className="w-24 h-24 object-contain" 
                      />
                    </motion.div>
                  
                    {/* Oscillation Title */}
                    <div className="flex flex-wrap justify-center text-5xl sm:text-7xl md:text-8xl font-extrabold mt-0 sm:mt-0"> {/* Added mt-0 to ensure no top margin on mobile */}
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
                            filter: `hue-rotate(${i * 8}deg)`,
                            transformOrigin: 'center',
                            fontFamily: "'Orbitron', sans-serif"
                          }}
                        >
                          {letter}
                        </motion.span>
                      ))}
                    </div>
                    
                    {/* Added Oscillation Logo - Hidden on mobile with responsive classes */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="ml-6 hidden sm:block" // Hide on mobile, show on sm screens and up
                    >
                      <img 
                        src={oscillation_logo} 
                        alt="Oscillation Logo" 
                        className="w-24 h-24 object-contain" 
                      />
                    </motion.div>
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
                    className="mt-2 sm:mt-8" // Reduced from mt-4 to mt-2 on mobile
                  >
                    {/* Add animated AI & Data Science text above 2K25 */}
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      variants={aiTextVariants}
                      className="mb-0 sm:mb-2"
                    >
                      {/* Use gradient text with animated appearance for each letter */}
                      <div className="inline-block">
                        {"ARTIFICIAL INTELLIGENCE & DATA SCIENCE".split('').map((letter, i) => (
                          <motion.span
                            key={i}
                            custom={i}
                            initial="hidden"
                            animate="visible"
                            variants={aiLetterVariants}
                            className="inline-block"
                            style={{ 
                              backgroundImage: 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)',
                              backgroundClip: 'text',
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              fontFamily: "'Rajdhani', sans-serif",
                              fontWeight: 600,
                              fontSize: '1rem',
                              letterSpacing: '0.05em',
                              '@media (min-width: 640px)': {
                                fontSize: '1.1rem',
                              }
                            }}
                          >
                            {letter === ' ' ? '\u00A0' : letter}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>

                    <motion.span 
                      className="text-xl sm:text-2xl font-light tracking-widest text-pink-400 inline-block mb-2 sm:mb-6" // Reduced mb-4 to mb-2 on mobile
                      style={{ fontFamily: "'Rajdhani', sans-serif" }}
                    >
                      <br></br>
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
                        {/* Reduced bottom margin for mobile to prevent white gap */}
                        <div className="bg-black/30 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-pink-500/20 shadow-lg shadow-pink-500/10 w-full mb-6 sm:mb-0">
                          <h3 className="text-lg sm:text-xl font-bold text-pink-300 mb-4 sm:mb-6 text-center" style={{ fontFamily: "'Rajdhani', sans-serif" }}>JOIN THE EXPERIENCE</h3>
                          
                          {/* Updated EXPLORE EVENTS button with onClick handler */}
                          <motion.button 
                            className="px-6 sm:px-8 py-3 sm:py-4 mb-3 sm:mb-4 bg-gradient-to-r from-pink-600 to-pink-500 rounded-full text-white font-semibold shadow-lg hover:shadow-pink-500/40 active:shadow-pink-500/40 hover:-translate-y-1 active:-translate-y-1 transition-all duration-300 w-full text-sm sm:text-base"
                            whileHover={{ 
                              scale: 1.05, 
                              boxShadow: "0 0 15px rgba(236, 72, 153, 0.7)"
                            }}
                            whileTap={{ 
                              scale: 0.95,
                              boxShadow: "0 0 15px rgba(236, 72, 153, 0.7)"
                            }}
                            onClick={navigateToEvents}
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
                            whileTap={{ 
                              scale: 0.95,
                              boxShadow: "0 0 15px rgba(236, 72, 153, 0.7)"
                            }}
                            style={{ fontFamily: "'Rajdhani', sans-serif", letterSpacing: "0.1em" }}
                          >
                            JOIN NOW
                          </motion.button>
                          
                          {/* Increased contrast and visibility for date section */}
                          <div className="mt-4 sm:mt-6 text-center bg-black/40 p-3 rounded-xl border border-pink-500/30">
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
          
          {/* Floating oscillation logos in background */}
          <motion.div
            className="absolute bottom-10 left-10 opacity-10 z-0 hidden md:block"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 10, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "mirror"
            }}
          >
            <img 
              src={oscillation_logo} 
              alt="Floating Oscillation Logo" 
              className="w-40 h-40 object-contain" 
            />
          </motion.div>
          
          <motion.div
            className="absolute top-20 right-10 opacity-10 z-0 hidden md:block"
            animate={{
              y: [0, 10, 0],
              rotate: [0, -10, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "mirror"
            }}
          >
            <img 
              src={oscillation_logo} 
              alt="Floating Oscillation Logo" 
              className="w-32 h-32 object-contain" 
            />
          </motion.div>
        </div>
        
        {/* Teacher/Mentor Section below homepage - kept within the same background container */}
        <TeachersComponent/>
      </div>
      
      {/* Font imports */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&family=Orbitron:wght@400;600;800&family=Quicksand:wght@300;400;600&family=Rajdhani:wght@300;400;600;700&display=swap');
        
        /* Modified styles to prevent overlap */
        html, body {
          overscroll-behavior: none;
          overflow-x: hidden; /* Prevent horizontal scrolling */
          width: 100%;
          height: 100%;
          touch-action: manipulation;
          margin: 0;
          padding: 0;
          background-color: #111827; /* Match the from-gray-900 color */
        }
        
        /* Improve mobile tap targets */
        button, a {
          touch-action: manipulation;
        }
        
        /* Fix for component overlap */
        #root {
          overflow-x: hidden;
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          background-color: #111827; /* Match the from-gray-900 color */
        }
      `}</style>
    </>
  );
};

export default HomePage;