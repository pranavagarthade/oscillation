import React, { useState, useEffect } from 'react';

const InteractiveBrochureDownload = ({ 
  
  brochurePath = './assets/Oscillation 2k25 Brochure.pdf',
  onError = () => {handleDownloadError}
}) => {
  const [animationState, setAnimationState] = useState("initial");
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState(false);
  
  // Animation sequence effect
  useEffect(() => {
    if (isDownloading) {
      const timer = setTimeout(() => {
        setIsDownloading(false);
        setAnimationState("initial");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isDownloading]);
  
  const handleDownloadClick = (e) => {
    // Check if the file exists before starting download animation
    fetch(brochurePath)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to fetch file: ${response.status}`);
        }
        // File exists, proceed with download
        setAnimationState("downloading");
        setIsDownloading(true);
        setDownloadError(false);
        // The actual download will happen through the anchor tag
      })
      .catch(error => {
        console.error("Error checking brochure availability:", error);
        e.preventDefault(); // Prevent the default anchor behavior
        setDownloadError(true);
        setIsDownloading(false);
        onError(error);
      });
  };

  return (
    <div className="w-full max-w-md mx-auto my-8">
      {/* Title heading */}
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-white">OSCILLATION</h1>
        <p className="text-xl text-red-200 font-mono mt-1">2K25</p>
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-red-300 to-transparent mx-auto my-4" />
      </div>
      
      {/* Animated brochure preview container */}
      <div className="relative h-72 mb-4 overflow-hidden rounded-lg bg-slate-900 shadow-lg">
        {/* AI Neural Network Animation */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(10)].map((_, i) => (
            <div key={`node-${i}`} className="absolute">
              {[...Array(5)].map((_, j) => (
                <div 
                  key={`connection-${i}-${j}`}
                  className="absolute bg-pink-400 rounded-full"
                  style={{
                    height: '1px',
                    width: `${Math.random() * 50 + 20}px`,
                    top: `${Math.random() * 200 + 10}px`,
                    left: `${Math.random() * 300 + 10}px`,
                    transform: `rotate(${Math.random() * 360}deg)`,
                    opacity: Math.random() * 0.5 + 0.2,
                    animation: `pulseConnection ${Math.random() * 3 + 1}s infinite alternate`
                  }}
                />
              ))}
              <div 
                className="absolute w-3 h-3 bg-purple-500 rounded-full"
                style={{
                  top: `${Math.random() * 220 + 10}px`,
                  left: `${Math.random() * 320 + 10}px`,
                  animation: `glowNode ${Math.random() * 2 + 1}s infinite alternate`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              />
            </div>
          ))}
        </div>
        
        {/* Robot/Mechanical Elements */}
        <div className="absolute inset-0 opacity-20">
          {/* Gear elements */}
          {[...Array(4)].map((_, i) => (
            <div 
              key={`gear-${i}`}
              className="absolute border-2 border-dashed border-purple-400 rounded-full"
              style={{
                width: `${30 + i * 15}px`,
                height: `${30 + i * 15}px`,
                top: `${20 + i * 60}px`,
                left: i % 2 === 0 ? '15%' : '75%',
                animation: `rotateGear ${3 + i}s linear infinite`,
                animationDirection: i % 2 === 0 ? 'normal' : 'reverse'
              }}
            />
          ))}
          
          {/* Circuit board traces */}
          <div className="absolute top-0 right-0 w-32 h-32">
            {[...Array(5)].map((_, i) => (
              <div
                key={`circuit-${i}`}
                className="absolute bg-purple-500"
                style={{
                  height: '1px',
                  width: `${10 + i * 5}px`,
                  top: `${10 + i * 7}px`,
                  right: '10px',
                  animation: `dataFlow 2s infinite linear`,
                  animationDelay: `${i * 0.3}s`
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Binary code animation in background */}
        <div className="absolute inset-0 flex flex-wrap content-start opacity-10">
          {[...Array(50)].map((_, i) => (
            <div 
              key={`binary-${i}`}
              className="text-xs text-green-400 font-mono"
              style={{
                animation: `fadeInOut ${Math.random() * 5 + 2}s infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            >
              {Math.random() > 0.5 ? '1' : '0'}
            </div>
          ))}
        </div>
        
        {/* Central brochure title */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <div className={`transform transition-all duration-500 ${
            animationState === "downloading" ? "scale-90 opacity-80" : "scale-100"
          }`}>
            <h3 className="text-2xl font-bold text-white mb-2 text-center">EVENT BROCHURE</h3>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-red-300 to-transparent mx-auto my-3" />
            <p className="text-sm text-center text-gray-300">MARCH 2025</p>
          </div>
          
          {/* Animated download indicator */}
          {animationState === "downloading" && (
            <div className="absolute inset-0 flex items-center justify-center bg-slate-900 bg-opacity-70 z-20">
              <div className="text-center">
                <div className="inline-block relative w-16 h-16">
                  {/* AI/Robot processing animation */}
                  <div className="absolute inset-0 border-4 border-t-cyan-500 border-r-blue-300 border-b-green-500 border-l-blue-300 rounded-full animate-spin"></div>
                  <div className="absolute inset-2 border-2 border-dashed border-cyan-400 rounded-full animate-spin" style={{ animationDuration: '3s', animationDirection: 'reverse' }}></div>
                </div>
                <p className="text-white mt-4 font-mono text-sm animate-pulse">PROCESSING REQUEST</p>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Download Button with interactive effects */}
      <a 
        href={brochurePath} 
        download="Oscillation 2K25 Brochure.pdf"
        onClick={handleDownloadClick}
        className={`relative w-full bg-gradient-to-r from-purple-600 to-pink-400 text-white font-bold py-4 px-6 rounded-lg overflow-hidden block ${
          isDownloading ? 'pointer-events-none opacity-80' : 'hover:shadow-lg hover:shadow-purple-500/30'
        }`}
      >
        {/* Animated background effect */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-white/20 to-cyan-500/0"
            style={{
              transform: 'skewX(-20deg) translateX(-100%)',
              animation: animationState !== "initial" ? 'shine 1.5s ease-in-out infinite' : 'none'
            }}
          />
        </div>
        
        {/* Button content */}
        <div className="flex items-center justify-center relative z-10">
          <svg 
            className={`w-5 h-5 mr-2 ${isDownloading ? 'animate-bounce' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <span>{isDownloading ? 'INITIALIZING...' : 'DOWNLOAD BROCHURE'}</span>
        </div>
      </a>
      
      {/* Error message for download failures */}
      {downloadError && (
        <div className="text-red-400 text-sm text-center mt-2 font-mono animate-pulse">
          Error: Could not locate brochure file
        </div>
      )}
      
      {/* File details with tech-themed animation */}
      <div className="flex justify-center mt-2 text-xs text-gray-400 font-mono">
        <div className="flex items-center space-x-2">
          <span>PDF</span>
          <span className="inline-block w-1 h-1 bg-red-500 rounded-full animate-pulse"></span>
          <span>2.4MB</span>
        </div>
      </div>
      
      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes pulseConnection {
          0% { opacity: 0.2; }
          100% { opacity: 0.7; }
        }
        
        @keyframes glowNode {
          0% { box-shadow: 0 0 2px 1px rgba(6, 182, 212, 0.2); }
          100% { box-shadow: 0 0 8px 2px rgba(6, 182, 212, 0.6); }
        }
        
        @keyframes rotateGear {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes dataFlow {
          0% { opacity: 0.8; transform: translateX(0); }
          100% { opacity: 0.2; transform: translateX(-20px); }
        }
        
        @keyframes fadeInOut {
          0% { opacity: 0.1; }
          50% { opacity: 0.8; }
          100% { opacity: 0.1; }
        }
        
        @keyframes shine {
          0% { transform: skewX(-20deg) translateX(-100%); }
          100% { transform: skewX(-20deg) translateX(200%); }
        }
      `}</style>
    </div>
  );
};

// Simplified page with just the brochure component
const OscillationEventPage = () => {
  const [errorMsg, setErrorMsg] = useState("");
  
  const handleDownloadError = (error) => {
    console.error("Download error:", error);
    setErrorMsg("Couldn't find the brochure file. Please check the file path.");
  };
  
  return (
    <div className="bg-slate-900 min-h-screen text-white p-4 flex items-center justify-center">
      <div className="max-w-md mx-auto w-full"> 
        <InteractiveBrochureDownload 
          brochurePath="/public/files/Oscillation 2K25 Brochure.pdf" 
          onError={handleDownloadError}
        />
        {errorMsg && (
          <div className="mt-4 p-3 bg-red-900/30 border border-red-500 rounded-md text-red-300 text-sm">
            {errorMsg}
          </div>
        )}
      </div>
    </div>
  );
};

export default OscillationEventPage;