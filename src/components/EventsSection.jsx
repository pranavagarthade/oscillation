import React, { useState, useEffect } from 'react';
import coderelay from '../assets/coderelay.jpg'

const App = () => {
  // Events data
  const events = [
    {
      id: "hugsAndBugs",
      title: "Hugs and Bugs",
      description: "Debug challenging code and solve complex programming puzzles in this exciting competition.",
      icon: "fas fa-bug",
      image: "",
      registrationLink: "https://forms.google.com/your-hugs-and-bugs-form"
    },
    {
      id: "hackathon",
      title: "Hackathon",
      description: "24-hour coding marathon to build innovative solutions for real-world problems.",
      icon: "fas fa-laptop-code",
      image: "coderelay.jpg",
      registrationLink: "https://forms.google.com/your-hackathon-form"
    },
    {
      id: "chess",
      title: "Chess Tournament",
      description: "Strategic battle of minds in this classic game of chess.",
      icon: "fas fa-chess",
      image: "/api/placeholder/600/400",
      registrationLink: "https://forms.google.com/your-chess-form"
    },
    {
      id: "treasureHunt",
      title: "Treasure Hunt",
      description: "Follow the clues and solve riddles in this tech-themed treasure hunt.",
      icon: "fas fa-map-marked-alt",
      image: "/api/placeholder/600/400",
      registrationLink: "https://forms.google.com/your-treasure-hunt-form"
    },
    {
      id: "projectPresentation",
      title: "Project Presentation",
      description: "Showcase your innovative projects and get feedback from industry experts.",
      icon: "fas fa-project-diagram",
      image: "/api/placeholder/600/400",
      registrationLink: "https://forms.google.com/your-project-presentation-form"
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

  // Handle back button click - Fixed to ensure this function works properly
  const handleBackClick = () => {
    setShowEventDetails(false);
    setSelectedEvent(null);
  };

  // Added event listener for browser back button (optional enhancement)
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
    <section id="events" data-name="events-section" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 data-name="events-title" className="text-4xl font-bold text-white mb-4">
            Featured Events
          </h2>
          <p data-name="events-subtitle" className="text-gray-300">
            Participate in our exciting events and showcase your skills
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                
                {/* Buttons that appear on hover */}
                <div className={`transition-all duration-300 mt-4 flex space-x-3 ${
                  hoveredEvent === event.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <button 
                    data-name="event-details-button" 
                    className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300"
                    onClick={() => handleEventClick(event.id)}
                  >
                    Details <i className="fas fa-info-circle ml-2"></i>
                  </button>
                  <a 
                    href={event.registrationLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    data-name="event-register-button" 
                    className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300"
                  >
                    Register <i className="fas fa-external-link-alt ml-2"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Event Details Page Component - Made more compact and fixed back button
const EventDetailsPage = ({ eventId, events, handleBackClick }) => {
  // Find the current event to get registration link
  const currentEvent = events.find(event => event.id === eventId);
  
  // Event details data
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
      website: "www.event-competition.com",
      coordinators: "John Doe & Jane Smith"
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
      {/* Fixed Header with Back Button */}
      <div className="sticky top-0 z-50 bg-slate-800 py-4 px-4 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button 
            onClick={handleBackClick}
            className="bg-purple-700 hover:bg-purple-800 text-white px-3 py-1 rounded-md transition-colors duration-300 flex items-center"
          >
            <i className="fas fa-arrow-left mr-2"></i> Back to Events
          </button>
          <h1 className="text-2xl font-bold text-white">Event Details</h1>
          
          {/* Registration Button */}
          <a 
            href={currentEvent?.registrationLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300 flex items-center"
          >
            Register Now <i className="fas fa-external-link-alt ml-2"></i>
          </a>
        </div>
      </div>
      
      {/* Tabs Navigation for compact sections */}
      <div className="bg-slate-800 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto">
            <button 
              className={`py-3 px-4 font-medium transition-colors ${activeSection === 'details' ? 'text-purple-400 border-b-2 border-purple-400' : 'text-gray-400 hover:text-white'}`}
              onClick={() => setActiveSection('details')}
            >
              Details & Prizes
            </button>
            <button 
              className={`py-3 px-4 font-medium transition-colors ${activeSection === 'rules' ? 'text-purple-400 border-b-2 border-purple-400' : 'text-gray-400 hover:text-white'}`}
              onClick={() => setActiveSection('rules')}
            >
              Rules
            </button>
            <button 
              className={`py-3 px-4 font-medium transition-colors ${activeSection === 'timeline' ? 'text-purple-400 border-b-2 border-purple-400' : 'text-gray-400 hover:text-white'}`}
              onClick={() => setActiveSection('timeline')}
            >
              Timeline
            </button>
            <button 
              className={`py-3 px-4 font-medium transition-colors ${activeSection === 'contact' ? 'text-purple-400 border-b-2 border-purple-400' : 'text-gray-400 hover:text-white'}`}
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
              <div className="grid grid-cols-2 gap-2">
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
              <div className="grid grid-cols-3 gap-3">
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
            <div className="relative border-l-2 border-purple-500 pl-6 pb-2">
              {eventDetails.timeline.map((item, index) => (
                <div key={index} className="mb-4 relative">
                  <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-8 top-1"></div>
                  <div className="font-semibold text-purple-300">{item.date}</div>
                  <div className="text-gray-300">{item.event}</div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Contact Section */}
        {activeSection === 'contact' && (
          <div className="bg-slate-800 rounded-lg p-5">
            <h2 className="text-xl font-bold text-purple-400 mb-4">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="flex items-center mb-3">
                  <div className="text-purple-400 mr-3">
                    <i className="fas fa-phone"></i>
                  </div>
                  <span className="text-gray-300">{eventDetails.contacts.phone}</span>
                </div>
                <div className="flex items-center mb-3">
                  <div className="text-purple-400 mr-3">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <span className="text-gray-300">{eventDetails.contacts.email}</span>
                </div>
                <div className="flex items-center mb-3">
                  <div className="text-purple-400 mr-3">
                    <i className="fas fa-globe"></i>
                  </div>
                  <span className="text-gray-300">{eventDetails.contacts.website}</span>
                </div>
              </div>
              <div>
                <p className="mb-3">
                  <span className="font-semibold text-white">Event Coordinators:</span><br />
                  <span className="text-gray-300">{eventDetails.contacts.coordinators}</span>
                </p>
                <div className="flex space-x-3 mt-4">
                  <a href="#" className="bg-purple-700 hover:bg-purple-800 text-white p-2 rounded-full transition-colors">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="bg-purple-700 hover:bg-purple-800 text-white p-2 rounded-full transition-colors">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="bg-purple-700 hover:bg-purple-800 text-white p-2 rounded-full transition-colors">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;