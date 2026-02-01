
import React from 'react';
import { Award, Zap, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import { UserType } from '../constants';

interface WhyChooseUsProps {
  userType: UserType;
}

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ userType }) => {
  const brandColor = userType === 'home' ? 'text-[#67c621]' : 'text-[#045184]';
  const brandBg = userType === 'home' ? 'bg-[#67c621]' : 'bg-[#045184]';
  const brandBgLight = userType === 'home' ? 'bg-[#67c621]/5' : 'bg-[#045184]/5';
  const brandBorder = userType === 'home' ? 'border-[#67c621]/20' : 'border-[#045184]/20';
  const brandGradient = userType === 'home' 
    ? 'from-[#67c621] to-[#a8f26a]' 
    : 'from-[#045184] to-[#0b79c3]';

  const differentiators = [
    {
      title: "Certified Expertise",
      description: "Our engineers aren't just 'tech-savvy'—they are certified veterans with deep roots in enterprise-scale infrastructure and residential smart systems.",
      icon: Award
    },
    {
      title: "Extreme Reliability",
      description: "We guarantee response times that lead the industry. Whether it's a critical server failure or a WiFi dead zone, we deploy solutions that stick.",
      icon: Zap
    },
    {
      title: "Ethical Technology",
      description: "No tech jargon, no hidden fees, and no 'fixing' what isn't broken. We provide transparent diagnostics and straightforward, value-based pricing.",
      icon: ShieldCheck
    },
    {
      title: "Human-First Support",
      description: "Technology should serve people, not the other way around. We focus on clear communication and building long-term trust with every client.",
      icon: Heart
    }
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      <div className={`absolute top-1/2 right-0 w-96 h-96 blur-[120px] opacity-10 rounded-full ${brandBg}`}></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-20">
          <div className={`inline-flex items-center space-x-2 px-3 py-1 mb-6 text-[10px] font-black uppercase tracking-widest rounded-lg border bg-white ${brandBorder} ${brandColor}`}>
            <Sparkles className="w-3 h-3" />
            <span>The Simple Difference</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-950 mb-6 uppercase tracking-tighter italic leading-none">
            WHY CHOOSE <br /> <span className={brandColor}>SIMPLE SUPPORT</span>
          </h2>
        </div>

        {/* Compact Guarantee Bar */}
        <div className="mb-16 relative group">
          <div className={`absolute -inset-0.5 bg-gradient-to-r ${brandGradient} rounded-[2rem] blur opacity-15 group-hover:opacity-30 transition duration-1000`}></div>
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 p-8 md:p-10 bg-slate-950 rounded-[2rem] border border-white/5 overflow-hidden shadow-2xl">
            <div className={`absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l ${userType === 'home' ? 'from-[#67c621]/10' : 'from-[#045184]/10'} to-transparent pointer-events-none`}></div>
            
            <div className="flex items-center space-x-6 relative z-10">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${brandBg} text-slate-950 shadow-xl`}>
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div className="flex flex-col">
                <h3 className={`text-2xl md:text-3xl font-black uppercase tracking-tighter italic leading-none ${brandColor}`}>
                  NO FIX, NO FEE. <span className="text-white">PERIOD.</span>
                </h3>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mt-2">Verified Technical Outcome Guarantee</p>
              </div>
            </div>

            <div className="text-center md:text-right relative z-10">
              <p className="text-xs text-slate-400 font-bold leading-relaxed uppercase tracking-wider max-w-xs ml-auto">
                {userType === 'home' 
                  ? "Zero Risk Troubleshooting. If we can't solve it, you pay nothing. No hidden diagnostic fees."
                  : "Performance SLA. If deployment fails to meet scope, the invoice is voided automatically."}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentiators.map((item, index) => (
            <div 
              key={index} 
              className="group p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/40 transition-all duration-500 hover:-translate-y-2 hover:border-slate-200 hover:shadow-2xl"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 ${brandBgLight} ${brandColor} group-hover:scale-110 group-hover:rotate-6`}>
                <item.icon className="w-7 h-7" />
              </div>
              
              <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-4 group-hover:text-slate-950 transition-colors">
                {item.title}
              </h3>
              
              <p className="text-xs text-slate-500 font-bold leading-relaxed tracking-wide">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
