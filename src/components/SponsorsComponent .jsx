import React from 'react';
import { motion } from 'framer-motion';
import Faqs from './Faqs';

const SponsorsComponent = () => {
  // Sample sponsors data - replace with your actual sponsors
  const sponsors = [
    {
      id: 1,
      name: "TechCorp",
      tier: "Platinum",
      logo: "/api/placeholder/200/100", // Replace with actual logo path
      website: "https://example.com"
    },
    {
      id: 2,
      name: "InnovateTech",
      tier: "Gold",
      logo: "/api/placeholder/200/100", // Replace with actual logo path
      website: "https://example.com"
    },
    {
      id: 3,
      name: "DataFlow",
      tier: "Gold",
      logo: "/api/placeholder/200/100", // Replace with actual logo path
      website: "https://example.com"
    },
    {
      id: 4,
      name: "CloudSys",
      tier: "Silver",
      logo: "/api/placeholder/200/100", // Replace with actual logo path
      website: "https://example.com"
    },
    {
      id: 5,
      name: "CodeWave",
      tier: "Silver",
      logo: "/api/placeholder/200/100", // Replace with actual logo path
      website: "https://example.com"
    },
    {
      id: 6,
      name: "DevPoint",
      tier: "Silver",
      logo: "/api/placeholder/200/100", // Replace with actual logo path
      website: "https://example.com"
    }
  ];

  // Group sponsors by tier
  const tierOrder = ["Platinum", "Gold", "Silver", "Bronze"];
  const sponsorsByTier = sponsors.reduce((acc, sponsor) => {
    if (!acc[sponsor.tier]) {
      acc[sponsor.tier] = [];
    }
    acc[sponsor.tier].push(sponsor);
    return acc;
  }, {});

  // Container animation for the entire section
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  // Item animation for individual elements
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="py-16 px-4 sm:px-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Decorative elements - small particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-pink-500/30 blur-sm"
            style={{
              width: Math.random() * 10 + 5 + 'px',
              height: Math.random() * 10 + 5 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Main content container */}
      <motion.div 
        className="max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Section header */}
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-4 inline-block"
            style={{ 
              backgroundImage: 'linear-gradient(135deg, #ff69b4 0%, #d53369 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontFamily: "'Orbitron', sans-serif"
            }}
          >
            OUR SPONSORS
          </motion.h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-pink-300 mx-auto mb-6"></div>
          
          <motion.p 
            className="text-gray-300 text-lg max-w-3xl mx-auto"
            style={{ fontFamily: "'Quicksand', sans-serif" }}
          >
            Oscillation 2K25 is proudly supported by industry leaders who believe in nurturing tech talent and innovation.
          </motion.p>
        </motion.div>

        {/* Sponsors by tier */}
        {tierOrder.map(tier => 
          sponsorsByTier[tier] && (
            <motion.div key={tier} className="mb-16 last:mb-0" variants={itemVariants}>
              <div className="text-center mb-8">
                <h3 
                  className="text-xl sm:text-2xl font-semibold mb-2 text-white"
                  style={{ fontFamily: "'Rajdhani', sans-serif" }}
                >
                  {tier.toUpperCase()} SPONSORS
                </h3>
                <div className={`w-16 h-0.5 mx-auto ${
                  tier === 'Platinum' ? 'bg-gray-200' : 
                  tier === 'Gold' ? 'bg-yellow-400' : 
                  tier === 'Silver' ? 'bg-gray-400' : 
                  'bg-amber-700'
                }`}></div>
              </div>

              <div className={`grid gap-6 ${
                tier === 'Platinum' ? 'grid-cols-1 sm:grid-cols-1' : 
                tier === 'Gold' ? 'grid-cols-1 sm:grid-cols-2' : 
                'grid-cols-1 sm:grid-cols-2 md:grid-cols-3'
              }`}>
                {sponsorsByTier[tier].map(sponsor => (
                  <motion.div
                    key={sponsor.id}
                    className={`
                      relative rounded-xl p-1 overflow-hidden
                      ${tier === 'Platinum' ? 'bg-gradient-to-r from-gray-300 via-white to-gray-300' : 
                        tier === 'Gold' ? 'bg-gradient-to-r from-yellow-500 to-amber-400' : 
                        tier === 'Silver' ? 'bg-gradient-to-r from-gray-400 to-gray-300' :
                        'bg-gradient-to-r from-amber-700 to-amber-600'}
                    `}
                    whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(236, 72, 153, 0.4)' }}
                    transition={{ duration: 0.3 }}
                    variants={itemVariants}
                  >
                    <div className="bg-gray-900 rounded-lg p-6 h-full">
                      <div className="flex flex-col items-center justify-center h-full">
                        <div className={`
                          relative w-full h-32 mb-4 flex items-center justify-center
                          ${tier === 'Platinum' ? 'max-w-lg mx-auto' : ''}
                        `}>
                          <img 
                            src={sponsor.logo} 
                            alt={`${sponsor.name} logo`} 
                            className="max-h-full max-w-full object-contain transition-all duration-300 filter hover:brightness-125"
                          />
                        </div>
                        <h4 className="text-lg font-semibold text-white mb-1">{sponsor.name}</h4>
                        <a 
                          href={sponsor.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-sm text-pink-400 hover:text-pink-300 transition-colors duration-300"
                        >
                          Visit Website
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )
        )}

        {/* Call to action for becoming a sponsor */}
        <motion.div 
          className="mt-16 text-center bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-pink-500/20 shadow-lg"
          variants={itemVariants}
        >
          <h3 
            className="text-2xl font-bold text-white mb-4"
            style={{ fontFamily: "'Rajdhani', sans-serif" }}
          >
            BECOME A SPONSOR
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto" style={{ fontFamily: "'Quicksand', sans-serif" }}>
            Join leading tech companies in supporting the next generation of innovators. 
            Sponsorship packages offer brand visibility, recruitment opportunities, and more.
          </p>
          <motion.button 
            className="px-8 py-3 bg-gradient-to-r from-pink-600 to-pink-500 rounded-full text-white font-semibold shadow-lg hover:shadow-pink-500/40 hover:-translate-y-1 transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 15px rgba(236, 72, 153, 0.7)"
            }}
            whileTap={{ scale: 0.95 }}
            style={{ fontFamily: "'Rajdhani', sans-serif", letterSpacing: "0.1em" }}
          >
            SPONSORSHIP DETAILS
          </motion.button>
        </motion.div>
      </motion.div>
    </div>

    
    
  );
};

export default SponsorsComponent;
