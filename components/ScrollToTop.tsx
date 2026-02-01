
import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { UserType } from '../constants';

interface ScrollToTopProps {
  userType: UserType;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ userType }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const isHome = userType === 'home';

  // Dynamic classes based on user profile
  const buttonColors = isHome
    ? 'text-[#67c621] border-[#67c621]/30 hover:bg-[#67c621] hover:text-slate-950'
    : 'text-[#045184] border-[#045184]/30 hover:bg-[#045184] hover:text-white';
  
  const tooltipColors = isHome
    ? 'bg-[#67c621] text-slate-950'
    : 'bg-[#045184] text-white';

  return (
    <div className={`fixed bottom-24 right-6 z-[90] transition-all duration-500 transform ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
    }`}>
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`group relative p-4 bg-white/90 backdrop-blur-lg border shadow-2xl rounded-2xl transition-all duration-500 hover:scale-110 active:scale-95 ${buttonColors}`}
      >
        <ChevronUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300" />
        
        {/* Tooltip */}
        <span className={`absolute right-full mr-4 top-1/2 -translate-y-1/2 text-[10px] font-black uppercase tracking-widest py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none shadow-xl ${tooltipColors}`}>
          Back to Top
        </span>
      </button>
    </div>
  );
};

export default ScrollToTop;
