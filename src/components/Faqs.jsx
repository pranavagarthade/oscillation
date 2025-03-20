import {
  Award,
  Calendar,
  DollarSign,
  HelpCircle,
  Info,
  Users,
  Wifi,
  ChevronDown
} from "lucide-react";
import React, { useState } from "react";

export default function Faqs() {
  // FAQ data for mapping
  const faqItems = [
    {
      question: "What Is Oscillation?",
      answer: "Oscillation is a hackathon event where participants collaborate to create innovative solutions within a limited timeframe. It brings together developers, designers, and creative thinkers to tackle challenges and build exciting projects.",
      icon: <Info className="w-6 h-6" />,
    },
    {
      question: "When and Where would the Hackathon Take Place?",
      answer: "The hackathon will take place on April 15-17, 2025 at the Tech Innovation Center. The event will run for 48 hours with opening and closing ceremonies.",
      icon: <Calendar className="w-6 h-6" />,
    },
    {
      question: "Is There a Participation Fee?",
      answer: "No, Oscillation is completely free to attend! We believe in making tech events accessible to everyone. Food, drinks, and swag will be provided to all participants.",
      icon: <DollarSign className="w-6 h-6" />,
    },
    {
      question: "Are There Any Prizes?",
      answer: "Yes! We have a total prize pool of $10,000 distributed across different categories including Best Overall Project, Most Innovative Solution, Best UI/UX, and more.",
      icon: <Award className="w-6 h-6" />,
    },
    {
      question: "Will There be Wi-Fi?",
      answer: "Absolutely! High-speed Wi-Fi will be available throughout the venue. We'll also have backup solutions in case of any connectivity issues.",
      icon: <Wifi className="w-6 h-6" />,
    },
    {
      question: "What is The Theme of Oscillation?",
      answer: "This year's theme is 'Sustainable Tech for a Better Tomorrow.' Participants are encouraged to create solutions addressing environmental challenges using technology.",
      icon: <HelpCircle className="w-6 h-6" />,
    },
    {
      question: "How To Register?",
      answer: "Registration is simple! Visit our website at oscillation.tech and fill out the registration form. Teams of 2-4 members are recommended, but individual participants are welcome too.",
      icon: <HelpCircle className="w-6 h-6" />,
    },
    {
      question: "W?",
      answer: "Oscillation welcomes participants of all skill levels, from beginners to experts. Students, professionals, and tech enthusiasts 18 years and older are eligible to participate.",
      icon: <Users className="w-6 h-6" />,
    },
  ];

  // State to track which FAQ is open
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-[#1e1937] min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl text-center font-bold text-white mb-16">Frequently Asked Questions</h2>
        
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Left side image */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="relative">
              {/* Purple glows for image background */}
              <div className="absolute w-64 h-64 top-0 left-0 bg-[#6f2270] rounded-full opacity-50 blur-3xl"></div>
              <div className="absolute w-64 h-64 bottom-0 right-0 bg-[#541b81] rounded-full opacity-40 blur-3xl"></div>
              
              {/* Placeholder image - in a real application, replace with your actual image */}
              <div className="relative aspect-square bg-gradient-to-br from-[#2a1b4a] to-[#1e1937] rounded-2xl overflow-hidden border border-purple-500/30 shadow-lg shadow-purple-900/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-4">Oscillation</div>
                    <div className="text-white/70 px-8">Your gateway to innovation and creativity</div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-purple-600/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-600/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
              </div>
            </div>
          </div>
          
          {/* Right side FAQs */}
          <div className="w-full md:w-1/2">
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div 
                  key={index}
                  className="bg-[#2929294c] rounded-xl border border-purple-500/20 overflow-hidden transition-all duration-300 hover:border-purple-500/40 cursor-pointer"
                  onClick={() => toggleFaq(index)}
                >
                  <div className="px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="p-2 bg-purple-900/30 rounded-lg text-purple-300">
                        {item.icon}
                      </span>
                      <h3 className="font-medium text-white">{item.question}</h3>
                    </div>
                    <ChevronDown 
                      className={`w-5 h-5 text-purple-300 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}
                    />
                  </div>
                  
                  {/* Answer section with animation */}
                  <div 
                    className={`px-6 pb-4 pt-0 text-white/70 overflow-hidden transition-all duration-300 ease-in-out ${
                      openFaq === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pt-2 border-t border-purple-500/20">
                      {item.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}