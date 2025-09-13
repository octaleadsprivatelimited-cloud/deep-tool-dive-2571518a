import React from 'react';

const Globe = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Main globe container */}
      <div className="relative w-80 h-80 md:w-96 md:h-96">
        {/* Outer rotating ring */}
        <div className="absolute inset-0 rounded-full border-2 border-red-500/30 animate-spin" style={{ animationDuration: '20s' }}></div>
        
        {/* Middle rotating ring */}
        <div className="absolute inset-4 rounded-full border border-red-400/40 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
        
        {/* Inner rotating ring */}
        <div className="absolute inset-8 rounded-full border border-red-300/50 animate-spin" style={{ animationDuration: '10s' }}></div>
        
        {/* Grid lines */}
        <div className="absolute inset-0 rounded-full">
          {/* Vertical lines */}
          <div className="absolute top-0 left-1/2 w-px h-full bg-red-500/20 transform -translate-x-1/2"></div>
          <div className="absolute top-0 left-1/4 w-px h-full bg-red-500/15 transform -translate-x-1/2"></div>
          <div className="absolute top-0 right-1/4 w-px h-full bg-red-500/15 transform translate-x-1/2"></div>
          
          {/* Horizontal lines */}
          <div className="absolute left-0 top-1/2 w-full h-px bg-red-500/20 transform -translate-y-1/2"></div>
          <div className="absolute left-0 top-1/4 w-full h-px bg-red-500/15 transform -translate-y-1/2"></div>
          <div className="absolute left-0 bottom-1/4 w-full h-px bg-red-500/15 transform translate-y-1/2"></div>
        </div>
        
        {/* Data points representing global threats */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-[#021346] rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-red-400 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 right-1/4 w-2.5 h-2.5 bg-red-700 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/2 w-1.5 h-1.5 bg-red-500 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 left-1/2 w-1 h-1 bg-[#021346] rounded-full animate-bounce"></div>
        <div className="absolute bottom-1/2 left-1/6 w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/6 right-1/6 w-1.5 h-1.5 bg-red-700 rounded-full animate-ping"></div>
        <div className="absolute top-2/3 left-1/2 w-1 h-1 bg-red-500 rounded-full animate-bounce"></div>
        <div className="absolute bottom-1/6 right-1/3 w-2 h-2 bg-[#021346] rounded-full animate-pulse"></div>
        
        {/* Connection lines between threat points */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-1/2 h-px bg-gradient-to-r from-red-500/60 to-transparent transform rotate-12 origin-left"></div>
          <div className="absolute top-1/3 right-1/3 w-1/3 h-px bg-gradient-to-l from-red-600/60 to-transparent transform -rotate-12 origin-right"></div>
          <div className="absolute bottom-1/3 left-1/3 w-2/3 h-px bg-gradient-to-r from-red-400/60 to-transparent transform rotate-6 origin-left"></div>
          <div className="absolute top-1/2 right-1/4 w-1/4 h-px bg-gradient-to-l from-red-700/60 to-transparent transform -rotate-6 origin-right"></div>
          <div className="absolute top-3/4 left-1/2 w-1/3 h-px bg-gradient-to-r from-red-500/60 to-transparent transform rotate-3 origin-left"></div>
          <div className="absolute bottom-1/6 right-1/3 w-1/2 h-px bg-gradient-to-l from-red-600/60 to-transparent transform -rotate-3 origin-right"></div>
        </div>
        
        {/* Center glow effect */}
        <div className="absolute inset-1/2 w-4 h-4 bg-red-500/20 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        
        {/* Additional rotating elements for depth */}
        <div className="absolute inset-12 rounded-full border border-red-200/20 animate-spin" style={{ animationDuration: '8s', animationDirection: 'reverse' }}></div>
        <div className="absolute inset-16 rounded-full border border-red-100/10 animate-spin" style={{ animationDuration: '6s' }}></div>
      </div>
    </div>
  );
};

export default Globe;
