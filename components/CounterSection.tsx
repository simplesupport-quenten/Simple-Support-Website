
import React, { useState, useEffect, useRef } from 'react';
import { Users, Smile, MapPin, CheckCircle, Building2, Zap, Globe, ShieldCheck, Wrench, Activity, Heart } from 'lucide-react';
import { UserType } from '../constants';

interface CounterItemProps {
  target: number;
  label: string;
  icon: any;
  suffix?: string;
  userType: UserType;
}

const CounterItem: React.FC<CounterItemProps> = ({ target, label, icon: Icon, suffix = "+", userType }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });
    if (domRef.current) observer.observe(domRef.current);
    return () => {
      if (domRef.current) observer.unobserve(domRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const end = target;
    if (start === end) return;

    let totalDuration = 2000;
    let incrementTime = Math.abs(Math.floor(totalDuration / end));
    if (incrementTime < 10) incrementTime = 10; 

    let timer = setInterval(() => {
      start += Math.ceil(end / 100);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 20);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  const brandCardStyle = userType === 'home' 
    ? 'hover:border-[#67c621]/30 hover:shadow-[#67c621]/5' 
    : 'hover:border-[#045184]/30 hover:shadow-[#045184]/5';

  return (
    <div 
      ref={domRef} 
      className={`flex flex-col items-center p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 transition-all hover:-translate-y-2 duration-500 group ${brandCardStyle}`}
      aria-label={`${label}: ${target}${suffix}`}
    >
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 transition-all duration-500 shadow-lg ${
        userType === 'home' 
          ? 'bg-[#67c621] shadow-[#67c621]/20 group-hover:bg-slate-950 group-hover:text-[#67c621]' 
          : 'bg-[#045184] shadow-[#045184]/20 group-hover:bg-slate-950 group-hover:text-white'
      }`} aria-hidden="true">
        <Icon className="w-8 h-8 group-hover:scale-110 transition-transform" />
      </div>
      <div className="text-4xl md:text-5xl font-black text-slate-950 mb-2 tabular-nums tracking-tighter" aria-hidden="true">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-slate-600 font-black uppercase tracking-[0.2em] text-[10px] text-center">
        {label}
      </div>
    </div>
  );
};

interface CounterSectionProps {
  userType: UserType;
}

const CounterSection: React.FC<CounterSectionProps> = ({ userType }) => {
  const brandGlow = userType === 'home' ? 'bg-[#67c621]/5' : 'bg-[#045184]/5';
  const pulseColor = userType === 'home' ? 'bg-[#67c621]' : 'bg-[#045184]';
  const brandColorText = userType === 'home' ? 'text-[#67c621]' : 'text-[#045184]';

  const stats = userType === 'home' ? [
    { target: 2450, label: "Verified Residents", icon: Users, suffix: "+" },
    { target: 99, label: "Customer Happiness", icon: Heart, suffix: "%" },
    { target: 42, label: "Local Service Zones", icon: MapPin, suffix: "" },
    { target: 3200, label: "Devices Optimized", icon: Wrench, suffix: "+" },
  ] : [
    { target: 390, label: "Enterprise Partners", icon: Building2, suffix: "+" },
    { target: 99.9, label: "Network Reliability", icon: Activity, suffix: "%" },
    { target: 12, label: "Strategic Regions", icon: Globe, suffix: "" },
    { target: 5000, label: "Uptime Challenges Solved", icon: ShieldCheck, suffix: "+" },
  ];

  return (
    <section id="impact" className="py-32 relative overflow-hidden bg-white">
      <div className={`absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] -mr-64 -mt-64 transition-colors duration-1000 ${brandGlow}`} aria-hidden="true"></div>
      <div className={`absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[120px] -ml-64 -mb-64 transition-colors duration-1000 ${brandGlow}`} aria-hidden="true"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-20">
          <div className={`inline-flex items-center space-x-2 px-3 py-1 mb-6 text-[10px] font-black uppercase tracking-widest rounded-lg border bg-white ${userType === 'home' ? 'text-[#67c621] border-[#67c621]/20' : 'text-[#045184] border-[#045184]/20'}`}>
            <Activity className="w-3 h-3" aria-hidden="true" />
            <span>Real-time Operational Metrics</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-950 mb-6 uppercase tracking-tighter italic leading-[0.9]">
            OUR GROWING <br /> <span className={brandColorText}>IMPACT</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
            {userType === 'home' 
              ? "Engineering-grade support tailored for modern home environments across the community." 
              : "High-performance infrastructure management deployed for critical business operations."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <CounterItem 
              key={index}
              target={stat.target} 
              label={stat.label} 
              icon={stat.icon} 
              suffix={stat.suffix}
              userType={userType}
            />
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <div className="inline-flex items-center space-x-5 px-10 py-5 bg-white border border-slate-100 rounded-[2rem] shadow-2xl shadow-slate-200/40 group hover:border-slate-300 transition-all cursor-default">
            <span className="relative flex h-3.5 w-3.5">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${pulseColor}`}></span>
              <span className={`relative inline-flex rounded-full h-3.5 w-3.5 ${pulseColor}`}></span>
            </span>
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-slate-950 tracking-[0.3em] uppercase">
                SYSTEM STATUS: OPTIMAL
              </span>
              <span className="text-[8px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">
                Last integrity check: Just Now
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
