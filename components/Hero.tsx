
import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Zap, Phone, Shield } from 'lucide-react';
import { BOOKING_URL, SLOGAN, PHONE_NUMBER, UserType } from '../constants';

interface HeroProps {
  userType: UserType;
}

const Hero: React.FC<HeroProps> = ({ userType }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollOffset(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const content = {
    home: {
      tag: "Premium Residential Support",
      h1: "Home Tech <br /> <span class='text-transparent bg-clip-text bg-gradient-to-r from-[#67c621] to-[#a8f26a]'>Simplified.</span>",
      p: "Eliminate frustration. We provide expert troubleshooting for your WiFi, entertainment systems, and personal devices with a human touch.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200", // Focused, friendly person using tech
      gradient: "from-[#67c621] to-[#a8f26a]"
    },
    business: {
      tag: "Proactive IT Management",
      h1: "Business IT <br /> <span class='text-transparent bg-clip-text bg-gradient-to-r from-[#045184] via-[#0b79c3] to-[#7acfff]'>Simplified.</span>",
      p: "Scale with confidence. High-performance infrastructure and rapid support engineered specifically for your enterprise.",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1200", // Professional engineer
      gradient: "from-[#045184] via-[#0b79c3] to-[#7acfff]"
    },
    none: { tag: "", h1: "", p: "", image: "", gradient: "" }
  }[userType] || { tag: "", h1: "", p: "", image: "", gradient: "" };

  const primaryBtnClass = userType === 'home' 
    ? 'bg-[#67c621] text-slate-950 shadow-2xl shadow-[#67c621]/20 hover:shadow-[#67c621]/40' 
    : 'bg-[#045184] text-white shadow-2xl shadow-[#045184]/20 hover:shadow-[#045184]/40';

  const secondaryBtnClass = 'bg-slate-900 text-white border border-white/10 hover:bg-slate-800 shadow-2xl';

  return (
    <section id="home" className="pt-40 pb-24 md:pt-60 md:pb-40 bg-slate-950 overflow-hidden relative">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Parallax Blobs */}
        <div 
          className={`absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[160px] animate-pulse transition-all duration-1000 ${userType === 'home' ? 'bg-[#67c621]/20' : 'bg-[#045184]/20'}`}
          style={{ transform: `translateY(${scrollOffset * 0.2}px)` }}
        ></div>
        <div 
          className="absolute bottom-[0%] right-[-5%] w-[40%] h-[60%] bg-[#045184]/10 rounded-full blur-[140px]"
          style={{ transform: `translateY(${scrollOffset * -0.1}px)` }}
        ></div>
        
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10 animate-in fade-in slide-in-from-left duration-1000">
            <div>
              <div className={`inline-flex items-center space-x-3 px-4 py-2 mb-8 text-[10px] font-black tracking-[0.2em] uppercase rounded-lg border transition-all ${userType === 'home' ? 'text-[#67c621] bg-[#67c621]/10 border-[#67c621]/20' : 'text-[#045184] bg-[#045184]/10 border-[#045184]/20'}`}>
                <Shield className={`w-3 h-3 ${userType === 'home' ? 'fill-[#67c621]' : 'fill-[#045184]'}`} />
                <span>{content.tag}</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tight" dangerouslySetInnerHTML={{ __html: content.h1 }}></h1>
              <p className={`mt-6 text-xl md:text-2xl font-black uppercase tracking-[0.4em] animate-in fade-in slide-in-from-bottom duration-1000 delay-500 text-transparent bg-clip-text bg-gradient-to-r ${content.gradient}`}>
                {SLOGAN}
              </p>
              <p className="mt-8 text-lg text-slate-400 max-w-lg leading-relaxed font-medium">
                {content.p}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center px-10 py-5 font-black uppercase text-[10px] tracking-[0.2em] rounded-2xl transition-all duration-300 hover:-translate-y-1 active:scale-95 group ${primaryBtnClass}`}
              >
                <span>Book A Session</span>
                <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href={`tel:${PHONE_NUMBER}`}
                className={`inline-flex items-center justify-center px-10 py-5 font-black uppercase text-[10px] tracking-[0.2em] rounded-2xl transition-all duration-300 hover:-translate-y-1 active:scale-95 group ${secondaryBtnClass}`}
              >
                <Phone className={`mr-3 w-4 h-4 group-hover:rotate-12 transition-transform ${userType === 'home' ? 'text-[#67c621]' : 'text-[#045184]'}`} />
                {PHONE_NUMBER}
              </a>
            </div>
          </div>

          <div 
            className="relative animate-in fade-in zoom-in duration-1000 delay-300"
            style={{ transform: `translateY(${scrollOffset * 0.05}px)` }}
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] border border-white/10 aspect-square w-full bg-slate-900">
              <img
                src={content.image}
                alt="Friendly Support Specialist"
                className={`w-full h-full object-cover transition-all duration-1000 ease-out grayscale-[0.2] hover:grayscale-0 brightness-90 hover:brightness-100 ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
                onLoad={() => setImageLoaded(true)}
              />
              <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/20 rounded-[3rem]"></div>
            </div>
            
            <div className={`absolute -top-10 -right-10 z-20 bg-slate-900/90 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-white/10 transition-all duration-1000 ${imageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center space-x-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${userType === 'home' ? 'bg-[#67c621]/20 text-[#67c621]' : 'bg-[#045184]/20 text-[#045184]'}`}>
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xl font-black text-white leading-none tracking-tighter">1hr</p>
                  <p className="text-[8px] text-slate-500 font-black uppercase tracking-widest mt-1">SLA Response</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
