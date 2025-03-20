import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

import hodImage from '..//assets/HOD_MAM_IMAGE-removebg-preview.png';
import suvarnamam from '..//assets/image-removebg-preview.png';
import principal from '..//assets/Principal_Sir-removebg-preview.png';

const TeachersComponent = () => {
  const containerRef = useRef(null);
  
  // Letter animation variants - similar to your main title
  const letterVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };
  
  // Teacher data
  const teachers = [
    {
      name: "Dr. Suwarna Bhise",
      role: "ISF Staff Co-Ordinator",
      imageSrc: suvarnamam // Replace with actual image path
    },
    {
      name: "Dr. Sailakshmi Parvathi",
      role: "Head Of Department",
      imageSrc: hodImage // Replace with actual image path
    },
    {
      name: "Dr. Alam Shaikh ",
      role: "Principal",
      imageSrc: principal // Replace with actual image path
    }
  ];
  
  // Card hover animation effect - matches your event cards
  const cardVariants = {
    initial: { y: 20, opacity: 0 },
    animate: (i) => ({ 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.5,
        delay: 0.8 + (i * 0.2) 
      }
    }),
    hover: { 
      y: -8,
      boxShadow: "0 10px 25px -5px rgba(236, 72, 153, 0.3)",
      borderColor: "rgba(236, 72, 153, 0.5)",
      transition: { duration: 0.3 }
    }
  };
  
  
  return (
    <div className="relative py-16 sm:py-24 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 overflow-hidden font-['Montserrat',sans-serif]">
      {/* Background glow effect */}
      <motion.div
        className="absolute inset-0 z-0 opacity-30 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(213,51,105,0.4) 0%, rgba(255,105,180,0) 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
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
      
      {/* Floating particles - similar to your canvas but simplified */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-pink-500"
          style={{
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.3 + 0.1
          }}
          animate={{
            y: [0, -20, 0, 20, 0],
            x: [0, 15, 0, -15, 0],
            transition: {
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              ease: "linear"
            }
          }}
        />
      ))}
      
      {/* Main Content */}
      <div ref={containerRef} className="relative z-10 container mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <motion.div 
          className="mb-12 sm:mb-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
            {/* Animated title letters - similar to your OSCILLATION title */}
            <div className="flex flex-wrap justify-center">
              {"OUR MENTORS".split('').map((letter, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  custom={i}
                  initial="hidden"
                  animate="visible"
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
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </div>
          </h2>
          <motion.div 
            className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-pink-600 to-pink-400"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 96, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.div>
        
        {/* Teachers Grid */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {teachers.map((teacher, index) => (
            <motion.div
              key={index}
              className="w-64 bg-black/30 backdrop-blur-md rounded-2xl border border-pink-500/20 overflow-hidden shadow-lg"
              custom={index}
              initial="initial"
              animate="animate"
              whileHover="hover"
              whileTap="hover" // For mobile support
              variants={cardVariants}
            >
              {/* Teacher Image with Overlay Effect */}
              <div className="relative h-64 w-full overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-purple-900 to-transparent opacity-0 z-10"
                whileHover={{ opacity: 0.05 }}
              />
                <motion.div
                  className="h-full w-full bg-gray-300"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    backgroundImage: `url(${teacher.imageSrc})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  {/* Fallback for image loading issues */}
                  {/* <div className="h-full w-full bg-gradient-to-br from-purple-900 via-pink-800 to-purple-800 opacity-70" /> */}
                </motion.div>
                
                {/* Circular glow effect */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 w-full h-32 z-0"
                  style={{
                    background: 'radial-gradient(circle, rgba(236,72,153,0.3) 0%, rgba(236,72,153,0) 70%)',
                    borderRadius: '50%',
                    transform: 'translateY(50%)'
                  }}
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "mirror"
                  }}
                />
              </div>
              
              {/* Teacher Info */}
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                  {teacher.name}
                </h3>
                <p className="text-pink-300 text-sm font-medium tracking-wider" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                  {teacher.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeachersComponent;