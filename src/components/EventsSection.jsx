import React, { useState, useEffect } from 'react';
import coderelay from '../assets/coderelay.jpg'
import Faqs from './Faqs';
<Faqs />
const App = () => {
  // Events data with unique coordinators for each event
  const events = [
    {
      id: "hugsAndBugs",
      title: "Hugs and Bugs",
      description: "Debug challenging code and solve complex programming puzzles in this exciting competition.",
      icon: "fas fa-bug",
      image: "/api/placeholder/600/400",
      registrationLink: "https://forms.google.com/your-hugs-and-bugs-form",
      coordinators: [
        { 
          name: "Deep Mohite", 
          role: "Lead Coordinator", 
          image: "/api/placeholder/150/150",
          email: "deep@gmail.com"
        },
        { 
          name: "Suyash Lokahare", 
          role: "Technical Support", 
          image: "/api/placeholder/150/150",
          email: "suyash@gmail.com" 
        },
        { 
          name: "Siddesh Vardarhi", 
          role: "Event Manager", 
          image: "/api/placeholder/150/150",
          email: "sid@gmail.com" 
        }
      ]
    },
    {
      id: "hackathon",
      title: "Hackathon",
      description: "24-hour coding marathon to build innovative solutions for real-world problems.",
      icon: "fas fa-laptop-code",
      image: "coderelay.jpg",
      registrationLink: "https://forms.google.com/your-hackathon-form",
      coordinators: [
        { 
          name: "Raj Sharma", 
          role: "Lead Coordinator", 
          image: "/api/placeholder/150/150",
          email: "raj@gmail.com"
        },
        { 
          name: "Priya Patel", 
          role: "Technical Support", 
          image: "/api/placeholder/150/150",
          email: "priya@gmail.com" 
        },
        { 
          name: "Arjun Mehta", 
          role: "Event Manager", 
          image: "/api/placeholder/150/150",
          email: "arjun@gmail.com" 
        }
      ]
    },
    {
      id: "chess",
      title: "Chess Tournament",
      description: "Strategic battle of minds in this classic game of chess.",
      icon: "fas fa-chess",
      image: "/api/placeholder/600/400",
      registrationLink: "https://forms.google.com/your-chess-form",
      coordinators: [
        { 
          name: "Vishal Kumar", 
          role: "Lead Coordinator", 
          image: "/api/placeholder/150/150",
          email: "vishal@gmail.com"
        },
        { 
          name: "Neha Singh", 
          role: "Chess Master", 
          image: "/api/placeholder/150/150",
          email: "neha@gmail.com" 
        },
        { 
          name: "Aditya Joshi", 
          role: "Event Manager", 
          image: "/api/placeholder/150/150",
          email: "aditya@gmail.com" 
        }
      ]
    },

    {
      id: "treasureHunt",
      title: "Treasure Hunt",
      description: "Follow the clues and solve riddles in this tech-themed treasure hunt.",
      icon: "fas fa-map-marked-alt",
      image: "/api/placeholder/600/400",
      registrationLink: "https://forms.google.com/your-treasure-hunt-form",
      coordinators: [
        { 
          name: "Rohit Verma", 
          role: "Hunt Master", 
          image: "/api/placeholder/150/150",
          email: "rohit@gmail.com"
        },
        { 
          name: "Ananya Desai", 
          role: "Clue Designer", 
          image: "/api/placeholder/150/150",
          email: "ananya@gmail.com" 
        },
        { 
          name: "Karan Shah", 
          role: "Event Manager", 
          image: "/api/placeholder/150/150",
          email: "karan@gmail.com" 
        }
      ]
    },
    {
      id: "projectPresentation",
      title: "Project Presentation",
      description: "Showcase your innovative projects and get feedback from industry experts.",
      icon: "fas fa-project-diagram",
      image: "/api/placeholder/600/400",
      registrationLink: "https://forms.google.com/your-project-presentation-form",
      coordinators: [
        { 
          name: "Vikram Malhotra", 
          role: "Industry Expert", 
          image: "/api/placeholder/150/150",
          email: "vikram@gmail.com"
        },
        { 
          name: "Shreya Gupta", 
          role: "Presentation Coach", 
          image: "/api/placeholder/150/150",
          email: "shreya@gmail.com" 
        },
        { 
          name: "Rahul Khanna", 
          role: "Event Manager", 
          image: "/api/placeholder/150/150",
          email: "rahul@gmail.com" 
        }
      ]
    },
    {
      id: "webDevContest",
      title: "Web Dev Contest",
      description: "Create stunning websites with modern technologies in this development challenge.",
      icon: "fas fa-code",
      image: "/api/placeholder/600/400",
      registrationLink: "https://forms.google.com/your-webdev-form",
      coordinators: [
        { 
          name: "Aarav Choudhury", 
          role: "Frontend Expert", 
          image: "/api/placeholder/150/150",
          email: "aarav@gmail.com"
        },
        { 
          name: "Ishita Reddy", 
          role: "UX/UI Specialist", 
          image: "/api/placeholder/150/150",
          email: "ishita@gmail.com" 
        },
        { 
          name: "Dhruv Kapoor", 
          role: "Event Manager", 
          image: "/api/placeholder/150/150",
          email: "dhruv@gmail.com" 
        }
      ]
    },
    {
      id: "botBattle",
      title: "Bot Battle",
      description: "Design and code your own bot to compete in various challenges and games.",
      icon: "fas fa-robot",
      image: "/api/placeholder/600/400",
      registrationLink: "https://forms.google.com/your-botbattle-form",
      coordinators: [
        { 
          name: "Varun Nair", 
          role: "AI Specialist", 
          image: "/api/placeholder/150/150",
          email: "varun@gmail.com"
        },
        { 
          name: "Meera Iyer", 
          role: "Bot Developer", 
          image: "/api/placeholder/150/150",
          email: "meera@gmail.com" 
        },
        { 
          name: "Nikhil Menon", 
          role: "Event Manager", 
          image: "/api/placeholder/150/150",
          email: "nikhil@gmail.com" 
        }
      ]
    },
    {
      id: "quizNight",
      title: "Tech Quiz Night",
      description: "Test your knowledge of technology, programming, and computer science history.",
      icon: "fas fa-question-circle",
      image: "/api/placeholder/600/400",
      registrationLink: "https://forms.google.com/your-quiz-form",
      coordinators: [
        { 
          name: "Aryan Saxena", 
          role: "Quiz Master", 
          image: "/api/placeholder/150/150",
          email: "aryan@gmail.com"
        },
        { 
          name: "Tanvi Agarwal", 
          role: "Question Designer", 
          image: "/api/placeholder/150/150",
          email: "tanvi@gmail.com" 
        },
        { 
          name: "Kunal Chawla", 
          role: "Event Manager", 
          image: "/api/placeholder/150/150",
          email: "kunal@gmail.com" 
        }
      ]
    }

  ];

  

  // State for hovering effect and showing event details
  const [hoveredEvent, setHoveredEvent] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showEventDetails, setShowEventDetails] = useState(false);

  // Handle click to show event details
  const handleEventClick = (eventId) => {
    setSelectedEvent(eventId);
    setShowEventDetails(true);
    // Scroll to top when showing event details
    window.scrollTo(0, 0);
  };

  // Handle back button click
  const handleBackClick = () => {
    setShowEventDetails(false);
    setSelectedEvent(null);
  };

  // Added event listener for browser back button
  useEffect(() => {
    const handlePopState = () => {
      if (showEventDetails) {
        setShowEventDetails(false);
        setSelectedEvent(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [showEventDetails]);

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {!showEventDetails ? (
        <EventsSection 
          events={events} 
          hoveredEvent={hoveredEvent} 
          setHoveredEvent={setHoveredEvent} 
          handleEventClick={handleEventClick} 
        />
      ) : (
        <EventDetailsPage 
          eventId={selectedEvent} 
          events={events}
          handleBackClick={handleBackClick} 
        />
      )}
    </div>
  );
};

// Events Section Component
const EventsSection = ({ events, hoveredEvent, setHoveredEvent, handleEventClick }) => {
  return (
//     <section id="events" data-name="events-section" className="py-20 bg-slate-900 relative overflow-hidden">
//   {/* AI/Robotics Animated Background Elements */}
//   <div className="absolute inset-0 overflow-hidden opacity-20">
//     {/* Circuit Board Lines */}
//     <div className="absolute w-full h-full">
//       <div className="absolute h-px bg-blue-400 w-1/3 top-1/4 left-0 animate-pulse"></div>
//       <div className="absolute h-px bg-purple-400 w-1/2 top-1/3 right-0 animate-pulse" style={{animationDelay: "0.5s"}}></div>
//       <div className="absolute h-px bg-green-400 w-3/4 top-2/3 left-0 animate-pulse" style={{animationDelay: "1.5s"}}></div>
//       <div className="absolute w-px bg-blue-400 h-1/2 top-0 left-1/4 animate-pulse" style={{animationDelay: "0.7s"}}></div>
//       <div className="absolute w-px bg-purple-400 h-1/3 top-1/3 left-1/2 animate-pulse" style={{animationDelay: "1s"}}></div>
//       <div className="absolute w-px bg-green-400 h-3/4 top-0 right-1/4 animate-pulse" style={{animationDelay: "1.2s"}}></div>
//     </div>
    
//     {/* Binary Numbers */}
//     <div className="absolute inset-0 opacity-20">
//       <div className="absolute text-xs text-blue-400 top-1/4 left-1/5">01010111</div>
//       <div className="absolute text-xs text-purple-400 top-1/3 right-1/4">10101010</div>
//       <div className="absolute text-xs text-green-400 bottom-1/3 left-1/3">11001100</div>
//       <div className="absolute text-xs text-blue-400 bottom-1/4 right-1/5">00110011</div>
//     </div>
    
//     {/* Moving Dots (Representing Data Points) */}
//     <div className="absolute top-0 left-0 w-full h-full">
//       <div className="absolute w-2 h-2 rounded-full bg-blue-400 top-1/5 left-1/6 animate-ping" style={{animationDuration: "4s"}}></div>
//       <div className="absolute w-2 h-2 rounded-full bg-purple-400 top-3/5 right-1/5 animate-ping" style={{animationDuration: "3s", animationDelay: "1s"}}></div>
//       <div className="absolute w-2 h-2 rounded-full bg-green-400 bottom-1/4 left-1/4 animate-ping" style={{animationDuration: "5s", animationDelay: "0.5s"}}></div>
//     </div>
    
//     {/* Neural Network Pattern */}
//     <div className="absolute inset-0">
//       <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
//         <path d="M10,20 L30,50 L10,80" stroke="rgba(139, 92, 246, 0.5)" strokeWidth="0.2" fill="none" />
//         <path d="M30,20 L50,50 L30,80" stroke="rgba(139, 92, 246, 0.5)" strokeWidth="0.2" fill="none" />
//         <path d="M50,20 L70,50 L50,80" stroke="rgba(139, 92, 246, 0.5)" strokeWidth="0.2" fill="none" />
//         <path d="M70,20 L90,50 L70,80" stroke="rgba(139, 92, 246, 0.5)" strokeWidth="0.2" fill="none" />
//         <path d="M10,20 L90,20" stroke="rgba(139, 92, 246, 0.5)" strokeWidth="0.2" fill="none" />
//         <path d="M10,50 L90,50" stroke="rgba(139, 92, 246, 0.5)" strokeWidth="0.2" fill="none" />
//         <path d="M10,80 L90,80" stroke="rgba(139, 92, 246, 0.5)" strokeWidth="0.2" fill="none" />
//       </svg>
//     </div>
    
//     {/* Robotic Gear Animation */}
//     <div className="absolute right-10 top-20 w-32 h-32 opacity-20 animate-spin" style={{animationDuration: "20s"}}>
//       <svg viewBox="0 0 100 100">
//         <path d="M50,10 L53,20 L60,12 L58,23 L68,18 L62,27 L73,26 L63,32 L74,35 L61,37 L71,44 L58,42 L64,52 L53,46 L53,57 L47,47 L43,57 L42,46 L34,54 L38,44 L27,48 L35,40 L24,39 L36,35 L25,30 L37,30 L29,22 L40,26 L36,16 L45,24 L43,10 Z" fill="rgba(139, 92, 246, 0.8)" />
//         <circle cx="50" cy="50" r="10" fill="rgba(0, 0, 0, 0.5)" />
//       </svg>
//     </div>
//     <div className="absolute left-20 bottom-20 w-24 h-24 opacity-20 animate-spin" style={{animationDuration: "15s", animationDirection: "reverse"}}>
//       <svg viewBox="0 0 100 100">
//         <path d="M50,10 L53,20 L60,12 L58,23 L68,18 L62,27 L73,26 L63,32 L74,35 L61,37 L71,44 L58,42 L64,52 L53,46 L53,57 L47,47 L43,57 L42,46 L34,54 L38,44 L27,48 L35,40 L24,39 L36,35 L25,30 L37,30 L29,22 L40,26 L36,16 L45,24 L43,10 Z" fill="rgba(74, 222, 128, 0.8)" />
//         <circle cx="50" cy="50" r="10" fill="rgba(0, 0, 0, 0.5)" />
//       </svg>
//     </div>
//   </div>

//   {/* Content - Keep Original */}
//   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//     <div className="text-center mb-12">
//       <h2 data-name="events-title" className="text-4xl font-bold text-white mb-4">
//         Featured Events
//       </h2>
//       <p data-name="events-subtitle" className="text-gray-300">
//         Participate in our exciting events and showcase your skills
//       </p>
//     </div>
    
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//       {events.map((event, index) => (
//         <div 
//           key={event.id} 
//           className="relative overflow-hidden rounded-lg transition-all duration-300 transform" 
//           style={{ 
//             transform: hoveredEvent === event.id ? 'scale(1.03)' : 'scale(1)',
//           }}
//           onMouseEnter={() => setHoveredEvent(event.id)}
//           onMouseLeave={() => setHoveredEvent(null)}
//         >
//           {/* Background Image with Overlay */}
//           <div className="absolute inset-0 w-full h-full">
//             <img 
//               src={event.image} 
//               alt={`${event.title} background`}
//               className="w-full h-full object-cover object-center"
//             />
//             <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 to-purple-800/90"></div>
            
//             {/* Hover Overlay */}
//             <div className={`absolute inset-0 bg-gradient-to-tr from-green-500/20 to-purple-600/20 transition-opacity duration-300 ${
//               hoveredEvent === event.id ? 'opacity-100' : 'opacity-0'
//             }`}></div>
//           </div>
          
//           {/* Card Content */}
//           <div data-name="event-card" className="event-card p-6 relative z-10">
//             <div data-name="event-icon" className="text-purple-400 text-4xl mb-4">
//               <i className={event.icon}></i>
//             </div>
//             <h3 data-name="event-title" className="text-xl font-semibold text-white mb-2">
//               {event.title}
//             </h3>
//             <p data-name="event-description" className="text-gray-300">
//               {event.description}
//             </p>
            
//             {/* Buttons that appear on hover - Also shown on mobile (no hover) */}
//             <div className={`transition-all duration-300 mt-4 flex space-x-3 sm:${
//               hoveredEvent === event.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
//             } opacity-100 sm:flex-row flex-col sm:space-x-3 sm:space-y-0 space-y-2`}>
//               <button 
//                 data-name="event-details-button" 
//                 className="relative overflow-hidden bg-white text-gray-800 py-2 px-5 rounded-md transition-all duration-300 flex items-center justify-center group"
//                 onClick={() => handleEventClick(event.id)}
//               >
//                 <span className="relative z-10 font-medium">Details</span>
//                 <span className="absolute bottom-0 left-0 w-full h-1 bg-purple-500 transition-all duration-300 group-hover:h-full group-hover:opacity-20"></span>
//                 <span className="absolute bottom-0 left-0 w-0 h-1 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//               </button>
//               <a 
//                 href={event.registrationLink} 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 data-name="event-register-button" 
//                 className="relative overflow-hidden bg-white text-gray-800 py-2 px-5 rounded-md transition-all duration-300 flex items-center justify-center group"
//               >
//                 <span className="relative z-10 font-medium">Register</span>
//                 <span className="absolute bottom-0 left-0 w-full h-1 bg-green-500 transition-all duration-300 group-hover:h-full group-hover:opacity-20"></span>
//                 <span className="absolute bottom-0 left-0 w-0 h-1 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                 </svg>
//               </a>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>
<section id="events" data-name="events-section" className="py-20 bg-slate-900 relative overflow-hidden">
{/* Advanced Realistic AI/Robotics Background */}
<div className="absolute inset-0 overflow-hidden">
  {/* Particle Network Effect */}
  <div className="absolute inset-0">
    <div className="particles-container absolute inset-0" style={{
      background: "radial-gradient(circle at 50% 50%, rgba(79, 70, 229, 0.03) 0%, rgba(16, 16, 25, 0) 70%)"
    }}></div>
    <style jsx>{`
      @keyframes particleAnimation {
        0% { transform: translateY(0) translateX(0); }
        25% { transform: translateY(-10px) translateX(10px); }
        50% { transform: translateY(0) translateX(0); }
        75% { transform: translateY(10px) translateX(-10px); }
        100% { transform: translateY(0) translateX(0); }
      }
      .particles-container::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: 
          radial-gradient(circle at 10% 20%, rgba(99, 102, 241, 0.15) 1px, transparent 1px),
          radial-gradient(circle at 30% 40%, rgba(139, 92, 246, 0.15) 1px, transparent 1px),
          radial-gradient(circle at 50% 60%, rgba(59, 130, 246, 0.15) 1px, transparent 1px),
          radial-gradient(circle at 70% 80%, rgba(16, 185, 129, 0.15) 1px, transparent 1px),
          radial-gradient(circle at 90% 10%, rgba(239, 68, 68, 0.15) 1px, transparent 1px);
        background-size: 60px 60px;
        animation: particleAnimation 30s infinite ease-in-out;
      }
    `}</style>
  </div>

  {/* Dynamic Circuit Board with Flow Effect */}
  <div className="absolute inset-0 opacity-40">
    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
      <defs>
        <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(139, 92, 246, 0.5)" />
          <stop offset="50%" stopColor="rgba(59, 130, 246, 0.5)" />
          <stop offset="100%" stopColor="rgba(16, 185, 129, 0.5)" />
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      
      {/* Horizontal Lines */}
      <path d="M10,20 H90" stroke="url(#circuitGradient)" strokeWidth="0.2" fill="none" filter="url(#glow)">
        <animate attributeName="stroke-dasharray" from="0,100" to="100,0" dur="4s" repeatCount="indefinite" />
      </path>
      <path d="M10,40 H90" stroke="url(#circuitGradient)" strokeWidth="0.2" fill="none" filter="url(#glow)">
        <animate attributeName="stroke-dasharray" from="0,100" to="100,0" dur="6s" repeatCount="indefinite" />
      </path>
      <path d="M10,60 H90" stroke="url(#circuitGradient)" strokeWidth="0.2" fill="none" filter="url(#glow)">
        <animate attributeName="stroke-dasharray" from="0,100" to="100,0" dur="5s" repeatCount="indefinite" />
      </path>
      <path d="M10,80 H90" stroke="url(#circuitGradient)" strokeWidth="0.2" fill="none" filter="url(#glow)">
        <animate attributeName="stroke-dasharray" from="0,100" to="100,0" dur="7s" repeatCount="indefinite" />
      </path>
      
      {/* Vertical Lines */}
      <path d="M20,10 V90" stroke="url(#circuitGradient)" strokeWidth="0.2" fill="none" filter="url(#glow)">
        <animate attributeName="stroke-dasharray" from="0,100" to="100,0" dur="8s" repeatCount="indefinite" />
      </path>
      <path d="M40,10 V90" stroke="url(#circuitGradient)" strokeWidth="0.2" fill="none" filter="url(#glow)">
        <animate attributeName="stroke-dasharray" from="0,100" to="100,0" dur="9s" repeatCount="indefinite" />
      </path>
      <path d="M60,10 V90" stroke="url(#circuitGradient)" strokeWidth="0.2" fill="none" filter="url(#glow)">
        <animate attributeName="stroke-dasharray" from="0,100" to="100,0" dur="7s" repeatCount="indefinite" />
      </path>
      <path d="M80,10 V90" stroke="url(#circuitGradient)" strokeWidth="0.2" fill="none" filter="url(#glow)">
        <animate attributeName="stroke-dasharray" from="0,100" to="100,0" dur="10s" repeatCount="indefinite" />
      </path>
      
      {/* Connection Nodes */}
      <circle cx="20" cy="20" r="1" fill="#6366F1" filter="url(#glow)">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="40" cy="40" r="1" fill="#8B5CF6" filter="url(#glow)">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="4s" repeatCount="indefinite" />
      </circle>
      <circle cx="60" cy="60" r="1" fill="#3B82F6" filter="url(#glow)">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="5s" repeatCount="indefinite" />
      </circle>
      <circle cx="80" cy="80" r="1" fill="#10B981" filter="url(#glow)">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="6s" repeatCount="indefinite" />
      </circle>
      
      {/* Data Flow */}
      <circle cx="20" cy="20" r="0.5" fill="#FFFFFF" filter="url(#glow)">
        <animate attributeName="cx" values="20;40;60;80" dur="3s" repeatCount="indefinite" />
        <animate attributeName="cy" values="20;40;60;80" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="80" cy="20" r="0.5" fill="#FFFFFF" filter="url(#glow)">
        <animate attributeName="cx" values="80;60;40;20" dur="4s" repeatCount="indefinite" />
        <animate attributeName="cy" values="20;40;60;80" dur="4s" repeatCount="indefinite" />
      </circle>
    </svg>
  </div>
  
  {/* 3D-looking Holographic AI Visualization */}
  <div className="absolute right-0 top-0 w-96 h-96 opacity-20">
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <radialGradient id="aiGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="rgba(139, 92, 246, 0.8)" />
          <stop offset="100%" stopColor="rgba(139, 92, 246, 0)" />
        </radialGradient>
      </defs>
      
      {/* Brain-like Structure */}
      <g className="transform translate-x-100 translate-y-100">
        <path d="M80,60 C100,40 120,40 140,60 C160,80 160,100 140,120 C120,140 100,140 80,120 C60,100 60,80 80,60 Z" 
              fill="none" stroke="rgba(139, 92, 246, 0.6)" strokeWidth="0.5" filter="url(#glow)">
          <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="30s" repeatCount="indefinite" />
        </path>
        
        {/* Neural Network Connections */}
        <g>
          <line x1="70" y1="70" x2="130" y2="70" stroke="rgba(139, 92, 246, 0.4)" strokeWidth="0.3">
            <animate attributeName="opacity" values="0.2;0.8;0.2" dur="3s" repeatCount="indefinite" />
          </line>
          <line x1="70" y1="100" x2="130" y2="100" stroke="rgba(139, 92, 246, 0.4)" strokeWidth="0.3">
            <animate attributeName="opacity" values="0.2;0.8;0.2" dur="4s" repeatCount="indefinite" />
          </line>
          <line x1="70" y1="130" x2="130" y2="130" stroke="rgba(139, 92, 246, 0.4)" strokeWidth="0.3">
            <animate attributeName="opacity" values="0.2;0.8;0.2" dur="5s" repeatCount="indefinite" />
          </line>
          
          <line x1="70" y1="70" x2="70" y2="130" stroke="rgba(139, 92, 246, 0.4)" strokeWidth="0.3">
            <animate attributeName="opacity" values="0.2;0.8;0.2" dur="4s" repeatCount="indefinite" />
          </line>
          <line x1="100" y1="70" x2="100" y2="130" stroke="rgba(139, 92, 246, 0.4)" strokeWidth="0.3">
            <animate attributeName="opacity" values="0.2;0.8;0.2" dur="5s" repeatCount="indefinite" />
          </line>
          <line x1="130" y1="70" x2="130" y2="130" stroke="rgba(139, 92, 246, 0.4)" strokeWidth="0.3">
            <animate attributeName="opacity" values="0.2;0.8;0.2" dur="3s" repeatCount="indefinite" />
          </line>
        </g>
        
        {/* Neural Nodes */}
        <circle cx="70" cy="70" r="2" fill="rgba(139, 92, 246, 0.8)">
          <animate attributeName="r" values="2;3;2" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="100" cy="70" r="2" fill="rgba(139, 92, 246, 0.8)">
          <animate attributeName="r" values="2;3;2" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="130" cy="70" r="2" fill="rgba(139, 92, 246, 0.8)">
          <animate attributeName="r" values="2;3;2" dur="4s" repeatCount="indefinite" />
        </circle>
        
        <circle cx="70" cy="100" r="2" fill="rgba(139, 92, 246, 0.8)">
          <animate attributeName="r" values="2;3;2" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="100" cy="100" r="2" fill="rgba(139, 92, 246, 0.8)">
          <animate attributeName="r" values="2;3;2" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="130" cy="100" r="2" fill="rgba(139, 92, 246, 0.8)">
          <animate attributeName="r" values="2;3;2" dur="2s" repeatCount="indefinite" />
        </circle>
        
        <circle cx="70" cy="130" r="2" fill="rgba(139, 92, 246, 0.8)">
          <animate attributeName="r" values="2;3;2" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="100" cy="130" r="2" fill="rgba(139, 92, 246, 0.8)">
          <animate attributeName="r" values="2;3;2" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="130" cy="130" r="2" fill="rgba(139, 92, 246, 0.8)">
          <animate attributeName="r" values="2;3;2" dur="3s" repeatCount="indefinite" />
        </circle>
      </g>
    </svg>
  </div>
  
  {/* Advanced Robotics Gear System */}
  <div className="absolute left-10 bottom-10 w-64 h-64 opacity-30">
    <svg viewBox="0 0 200 200" className="w-full h-full filter drop-shadow-lg">
      {/* Main Gear */}
      <g className="animate-spin" style={{animationDuration: "20s", transformOrigin: "center"}}>
        <path d="M100,20 L105,35 L120,25 L115,40 L135,35 L125,50 L145,50 L130,60 L150,65 L130,70 L145,80 L125,80 L135,95 L115,90 L120,105 L105,95 L100,110 L95,95 L80,105 L85,90 L65,95 L75,80 L55,80 L70,70 L50,65 L70,60 L55,50 L75,50 L65,35 L85,40 L80,25 L95,35 Z" 
             fill="rgba(16, 185, 129, 0.6)" stroke="rgba(16, 185, 129, 0.8)" strokeWidth="0.5" />
             <circle cx="100" cy="100" r="15" fill="rgba(0, 0, 0, 0.5)" stroke="rgba(16, 185, 129, 0.8)" strokeWidth="0.5" />
             
             {/* Dynamic teeth lighting */}
             <circle cx="100" cy="100" r="15" fill="rgba(0, 0, 0, 0.5)" stroke="rgba(16, 185, 129, 0.8)" strokeWidth="0.5" />
             
             {/* Dynamic teeth lighting */}
             <circle cx="100" cy="20" r="1" fill="#10B981">
               <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
             </circle>
             <circle cx="135" cy="35" r="1" fill="#10B981">
               <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" />
             </circle>
             <circle cx="145" cy="50" r="1" fill="#10B981">
               <animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite" />
             </circle>
             <circle cx="150" cy="65" r="1" fill="#10B981">
               <animate attributeName="opacity" values="0.5;1;0.5" dur="4s" repeatCount="indefinite" />
             </circle>
             <circle cx="145" cy="80" r="1" fill="#10B981">
               <animate attributeName="opacity" values="0.5;1;0.5" dur="3.5s" repeatCount="indefinite" />
             </circle>
             <circle cx="135" cy="95" r="1" fill="#10B981">
               <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
             </circle>
             <circle cx="120" cy="105" r="1" fill="#10B981">
               <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" />
             </circle>
             <circle cx="100" cy="110" r="1" fill="#10B981">
               <animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite" />
             </circle>
             <circle cx="80" cy="105" r="1" fill="#10B981">
               <animate attributeName="opacity" values="0.5;1;0.5" dur="3.5s" repeatCount="indefinite" />
             </circle>
             <circle cx="65" cy="95" r="1" fill="#10B981">
               <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
             </circle>
             <circle cx="55" cy="80" r="1" fill="#10B981">
               <animate attributeName="opacity" values="0.5;1;0.5" dur="4s" repeatCount="indefinite" />
             </circle>
             <circle cx="50" cy="65" r="1" fill="#10B981">
               <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" />
             </circle>
             <circle cx="55" cy="50" r="1" fill="#10B981">
               <animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite" />
             </circle>
             <circle cx="65" cy="35" r="1" fill="#10B981">
               <animate attributeName="opacity" values="0.5;1;0.5" dur="3.5s" repeatCount="indefinite" />
             </circle>
             <circle cx="80" cy="25" r="1" fill="#10B981">
               <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" />
             </circle>
           </g>
           
           {/* Secondary Gears */}
           <g className="animate-spin" style={{animationDuration: "12s", transformOrigin: "150px 50px", animationDirection: "reverse"}}>
             <path d="M150,30 L153,37 L160,32 L158,40 L167,37 L162,45 L172,45 L165,50 L175,52 L165,55 L172,60 L162,60 L167,68 L158,65 L160,73 L153,68 L150,75 L147,68 L140,73 L142,65 L133,68 L138,60 L128,60 L135,55 L125,52 L135,50 L128,45 L138,45 L133,37 L142,40 L140,32 L147,37 Z" 
                   fill="rgba(99, 102, 241, 0.6)" stroke="rgba(99, 102, 241, 0.8)" strokeWidth="0.5" />
             <circle cx="150" cy="50" r="8" fill="rgba(0, 0, 0, 0.5)" stroke="rgba(99, 102, 241, 0.8)" strokeWidth="0.5" />
           </g>
           
           <g className="animate-spin" style={{animationDuration: "10s", transformOrigin: "50px 150px", animationDirection: "reverse"}}>
             <path d="M50,130 L53,137 L60,132 L58,140 L67,137 L62,145 L72,145 L65,150 L75,152 L65,155 L72,160 L62,160 L67,168 L58,165 L60,173 L53,168 L50,175 L47,168 L40,173 L42,165 L33,168 L38,160 L28,160 L35,155 L25,152 L35,150 L28,145 L38,145 L33,137 L42,140 L40,132 L47,137 Z" 
                   fill="rgba(239, 68, 68, 0.6)" stroke="rgba(239, 68, 68, 0.8)" strokeWidth="0.5" />
             <circle cx="50" cy="150" r="8" fill="rgba(0, 0, 0, 0.5)" stroke="rgba(239, 68, 68, 0.8)" strokeWidth="0.5" />
           </g>
           
           {/* Connection Lines */}
           <line x1="85" y1="115" x2="125" y2="75" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="0.5" strokeDasharray="2,2" />
           <line x1="70" y1="130" x2="35" y2="165" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="0.5" strokeDasharray="2,2" />
           <line x1="130" y1="70" x2="165" y2="35" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="0.5" strokeDasharray="2,2" />
         </svg>
       </div>
     </div>
     
     {/* Content Container */}
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
       <div className="text-center mb-12">
         <h2 data-name="events-title" className="text-4xl font-bold text-white mb-4">
           Featured Events
         </h2>
         <p data-name="events-subtitle" className="text-gray-300">
           Participate in our exciting events and showcase your skills
         </p>
       </div>
       
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
         {events.map((event, index) => (
           <div 
             key={event.id} 
             className="relative overflow-hidden rounded-lg transition-all duration-300 transform" 
             style={{ 
               transform: hoveredEvent === event.id ? 'scale(1.03)' : 'scale(1)',
             }}
             onMouseEnter={() => setHoveredEvent(event.id)}
             onMouseLeave={() => setHoveredEvent(null)}
           >
             {/* Background Image with Overlay */}
             <div className="absolute inset-0 w-full h-full">
               <img 
                 src={event.image} 
                 alt={`${event.title} background`}
                 className="w-full h-full object-cover object-center"
               />
               <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 to-purple-800/90"></div>
               
               {/* Hover Overlay */}
               <div className={`absolute inset-0 bg-gradient-to-tr from-green-500/20 to-purple-600/20 transition-opacity duration-300 ${
                 hoveredEvent === event.id ? 'opacity-100' : 'opacity-0'
               }`}></div>
             </div>
             
             {/* Card Content */}
             <div data-name="event-card" className="event-card p-6 relative z-10">
               <div data-name="event-icon" className="text-purple-400 text-4xl mb-4">
                 <i className={event.icon}></i>
               </div>
               <h3 data-name="event-title" className="text-xl font-semibold text-white mb-2">
                 {event.title}
               </h3>
               <p data-name="event-description" className="text-gray-300">
                 {event.description}
               </p>
               
               {/* Buttons that appear on hover - Also shown on mobile (no hover) */}
               <div className={`transition-all duration-300 mt-4 flex space-x-3 sm:${
                 hoveredEvent === event.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
               } opacity-100 sm:flex-row flex-col sm:space-x-3 sm:space-y-0 space-y-2`}>
                 <button 
                   data-name="event-details-button" 
                   className="relative overflow-hidden bg-white text-gray-800 py-2 px-5 rounded-md transition-all duration-300 flex items-center justify-center group"
                   onClick={() => handleEventClick(event.id)}
                 >
                   <span className="relative z-10 font-medium">Details</span>
                   <span className="absolute bottom-0 left-0 w-full h-1 bg-purple-500 transition-all duration-300 group-hover:h-full group-hover:opacity-20"></span>
                   <span className="absolute bottom-0 left-0 w-0 h-1 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                   </svg>
                 </button>
                 <a 
                   href={event.registrationLink} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   data-name="event-register-button" 
                   className="relative overflow-hidden bg-white text-gray-800 py-2 px-5 rounded-md transition-all duration-300 flex items-center justify-center group"
                 >
                   <span className="relative z-10 font-medium">Register</span>
                   <span className="absolute bottom-0 left-0 w-full h-1 bg-green-500 transition-all duration-300 group-hover:h-full group-hover:opacity-20"></span>
                   <span className="absolute bottom-0 left-0 w-0 h-1 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                   </svg>
                 </a>
               </div>
             </div>
           </div>
         ))}
       </div>
     </div>
   </section>
 );
}

// Event Details Page Component - Updated to show event-specific coordinators
const EventDetailsPage = ({ eventId, events, handleBackClick }) => {
  // Find the current event
  const currentEvent = events.find(event => event.id === eventId);
  
  // Event details data with common information
  const eventDetails = {
    date: "February 15, 2025",
    time: "10:00 AM - 2:00 PM",
    venue: "Computer Lab 1",
    registrationDeadline: "February 1, 2025",
    requirements: "Laptop with any preferred IDE installed",
    teamSize: "2 members per team",
    prizes: [
      { place: "1st Place", amount: "₹10,000" },
      { place: "2nd Place", amount: "₹3,000" },
      { place: "3rd Place", amount: "₹2,000" }
    ],
    timeline: [
      { date: "January 15, 2025", event: "Registration Opens" },
      { date: "February 1, 2025", event: "Registration Closes" },
      { date: "February 10, 2025", event: "Confirmation Emails Sent" },
      { date: "February 15, 2025", event: "Event Day" },
      { date: "February 15, 2025", event: "Results & Prize Distribution" }
    ],
    contacts: {
      phone: "+91 9876543210",
      email: "event@example.com",
      website: "www.event-competition.com"
    },
    rules: [
      "Competition Format: The competition consists of multiple rounds where participants identify and fix bugs in provided code snippets.",
      "Team Composition: Each team must have exactly 2 members. Both team members must be present during the competition.",
      "Timing: The competition will last for 4 hours. Teams must complete and submit their solutions within this timeframe.",
      "Judging Criteria: Solutions will be judged based on correctness, efficiency, and code quality. Teams that solve more problems with fewer attempts will rank higher.",
      "Resources: Teams are allowed to use documentation and reference materials, but not pre-written code or communication with people outside your team.",
      "Programming Languages: Supported languages include Python, Java, C++, and JavaScript. Each team must stick to one language throughout the competition.",
    ]
  };

  // State for toggling sections to make them compact
  const [activeSection, setActiveSection] = useState('details');

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Fixed Header with Back Button - Improved for mobile */}
      <div className="sticky top-0 z-50 bg-slate-800 py-3 px-4 shadow-md">
        <div className="max-w-7xl mx-auto">
          {/* Mobile-friendly header layout */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            {/* Title in center on mobile, left on desktop */}
            <h1 className="text-2xl font-bold text-white order-1 sm:order-1">
              {currentEvent?.title || "Event Details"}
            </h1>
            
            {/* Buttons container - full width on mobile */}
            <div className="flex w-full sm:w-auto gap-4 justify-between order-2 sm:order-2">
                 {/* Back Button */}
                <button 
                  onClick={handleBackClick}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-5 py-2.5 rounded-lg transition-colors duration-200 flex items-center font-medium shadow-sm border border-gray-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back
                </button>
  
                {/* Registration Button */}
                <a 
                  href={currentEvent?.registrationLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center shadow-md"
                >
                  Register
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tabs Navigation - Scrollable for mobile */}
      <div className="bg-slate-800 border-b border-slate-700 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          <div className="flex overflow-x-auto py-1 no-scrollbar">
            <button 
              className={`py-2 px-3 font-medium transition-colors whitespace-nowrap ${activeSection === 'details' ? 'text-purple-400 border-b-2 border-purple-400' : 'text-gray-400 hover:text-white'}`}
              onClick={() => setActiveSection('details')}
            >
              Details & Prizes
            </button>
            <button 
              className={`py-2 px-3 font-medium transition-colors whitespace-nowrap ${activeSection === 'rules' ? 'text-purple-400 border-b-2 border-purple-400' : 'text-gray-400 hover:text-white'}`}
              onClick={() => setActiveSection('rules')}
            >
              Rules
            </button>
            <button 
              className={`py-2 px-3 font-medium transition-colors whitespace-nowrap ${activeSection === 'timeline' ? 'text-purple-400 border-b-2 border-purple-400' : 'text-gray-400 hover:text-white'}`}
              onClick={() => setActiveSection('timeline')}
            >
              Timeline
            </button>
            <button 
              className={`py-2 px-3 font-medium transition-colors whitespace-nowrap ${activeSection === 'contact' ? 'text-purple-400 border-b-2 border-purple-400' : 'text-gray-400 hover:text-white'}`}
              onClick={() => setActiveSection('contact')}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
      
      {/* Content Section - Only shows active section */}
      <div className="container max-w-7xl mx-auto px-4 py-6">
        {/* Event Details & Prizes Section */}
        {activeSection === 'details' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Details */}
            <div className="bg-slate-800 rounded-lg p-5">
              <h2 className="text-xl font-bold text-purple-400 mb-3">Event Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div>
                  <p className="mb-2"><span className="font-semibold text-white">Date:</span> {eventDetails.date}</p>
                  <p className="mb-2"><span className="font-semibold text-white">Time:</span> {eventDetails.time}</p>
                  <p className="mb-2"><span className="font-semibold text-white">Venue:</span> {eventDetails.venue}</p>
                </div>
                <div>
                  <p className="mb-2"><span className="font-semibold text-white">Requirements:</span> {eventDetails.requirements}</p>
                  <p className="mb-2"><span className="font-semibold text-white">Team Size:</span> {eventDetails.teamSize}</p>
                  <p className="mb-2"><span className="font-semibold text-white">Deadline:</span> {eventDetails.registrationDeadline}</p>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-white mt-4 mb-2">Skills</h3>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="bg-purple-700 text-white px-2 py-1 rounded-full text-sm">Problem Solving</span>
                <span className="bg-purple-700 text-white px-2 py-1 rounded-full text-sm">Debugging</span>
                <span className="bg-purple-700 text-white px-2 py-1 rounded-full text-sm">Algorithms</span>
                <span className="bg-purple-700 text-white px-2 py-1 rounded-full text-sm">Code Optimization</span>
              </div>
            </div>
            
            {/* Prizes */}
            <div className="bg-slate-800 rounded-lg p-5">
              <h2 className="text-xl font-bold text-purple-400 mb-3">Prizes</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {eventDetails.prizes.map((prize, index) => (
                  <div key={index} className="text-center bg-slate-700 rounded-lg p-3">
                    <h3 className="text-white font-medium">{prize.place}</h3>
                    <div className="text-xl font-bold text-purple-400">{prize.amount}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {/* Rules Section */}
        {activeSection === 'rules' && (
          <div className="bg-slate-800 rounded-lg p-5">
            <h2 className="text-xl font-bold text-purple-400 mb-3">Event Rules & Guidelines</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {eventDetails.rules.map((rule, index) => (
                <div key={index} className="bg-slate-700/50 p-3 rounded-lg">
                  <p className="text-gray-300">
                    <span className="font-semibold text-white">{rule.split(':')[0]}:</span>
                    {rule.includes(':') ? rule.split(':')[1] : rule}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Timeline Section */}
        {activeSection === 'timeline' && (
          <div className="bg-slate-800 rounded-lg p-5">
            <h2 className="text-xl font-bold text-purple-400 mb-4">Event Timeline</h2>
            <div className="relative border-l-2 border-purple-500 ml-2 pl-6 pb-2">
              {eventDetails.timeline.map((item, index) => (
                <div key={index} className="mb-6 relative">
                  <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-8 top-1"></div>
                  <div className="font-semibold text-purple-300">{item.date}</div>
                  <div className="text-gray-300">{item.event}</div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Contact Section with Coordinator Images - Now showing event-specific coordinators */}
        {activeSection === 'contact' && (
          <div className="bg-slate-800 rounded-lg p-5">
            <h2 className="text-xl font-bold text-purple-400 mb-4">Contact Information</h2>
            
            {/* General Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center">
                <div className="text-purple-400 text-lg mr-3">
                  <i className="fas fa-phone"></i>
                </div>
                <span className="text-gray-300">{eventDetails.contacts.phone}</span>
              </div>
              <div className="flex items-center">
                <div className="text-purple-400 text-lg mr-3">
                  <i className="fas fa-envelope"></i>
                </div>
                <span className="text-gray-300">{eventDetails.contacts.email}</span>
              </div>
              <div className="flex items-center">
                <div className="text-purple-400 text-lg mr-3">
                  <i className="fas fa-globe"></i>
                </div>
                <span className="text-gray-300">{eventDetails.contacts.website}</span>
              </div>
            </div>
            
            {/* Event Coordinators with Images - Now using event-specific coordinators */}
            <h3 className="text-lg font-semibold text-white mb-4">Event Coordinators</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {currentEvent?.coordinators.map((coordinator, index) => (
                <div key={index} className="bg-slate-700 rounded-lg p-4 flex flex-col items-center text-center">
                  {/* Coordinator Image */}
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-3 ring-2 ring-purple-500">
                    <img 
                      src={coordinator.image} 
                      alt={coordinator.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Coordinator Details */}
                  <h4 className="text-white font-semibold text-lg">{coordinator.name}</h4>
                  <p className="text-purple-300 mb-2">{coordinator.role}</p>
                  <p className="text-gray-400 text-sm mb-3">{coordinator.email}</p>
                  
                  {/* Contact Button */}
                  <a 
                    href={`mailto:${coordinator.email}`} 
                    className="bg-purple-700 hover:bg-purple-800 text-white px-3 py-1 rounded-md text-sm transition-colors duration-300"
                  >
                    Contact <i className="fas fa-envelope ml-1"></i>
                  </a>
                </div>
              ))}
            </div>
            {/* Social Media Links */}
            <div className="mt-6 text-center">
              <h4 className="text-white font-medium mb-3">Follow us on social media</h4>
              <div className="flex justify-center space-x-4">
                <a href="#" className="bg-purple-700 hover:bg-purple-800 text-white p-3 rounded-full transition-colors">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="bg-purple-700 hover:bg-purple-800 text-white p-3 rounded-full transition-colors">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="bg-purple-700 hover:bg-purple-800 text-white p-3 rounded-full transition-colors">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="bg-purple-700 hover:bg-purple-800 text-white p-3 rounded-full transition-colors">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;


