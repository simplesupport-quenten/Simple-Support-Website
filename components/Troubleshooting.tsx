
import React from 'react';
import { TROUBLESHOOTING_RESOURCES, GuideContent, UserType } from '../constants';
import { BookOpen, Sparkles, ArrowRight } from 'lucide-react';

interface TroubleshootingProps {
  onOpenGuide: (guide: GuideContent) => void;
  userType: UserType;
}

const Troubleshooting: React.FC<TroubleshootingProps> = ({ onOpenGuide, userType }) => {
  const filteredResources = TROUBLESHOOTING_RESOURCES.filter(r => r.audience === userType || r.audience === 'both');

  const brandColor = userType === 'home' ? 'text-[#67c621]' : 'text-[#045184]';

  return (
    <section id="troubleshooting" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 mb-4 text-[10px] font-black uppercase tracking-widest text-slate-400">
               <Sparkles className={`w-3 h-3 ${brandColor}`} />
               <span>Self-Service Engineering</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tighter uppercase">
              {userType} <span className={userType === 'home' ? 'text-[#67c621]' : 'text-[#045184]'}>RESOURCES</span>
            </h2>
            <p className="mt-4 text-lg text-slate-500 font-medium">
              Quick fixes for the most common technology hurdles in your {userType} setup.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredResources.map((item) => (
            <div
              key={item.id}
              className={`p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 transition-all group cursor-pointer ${userType === 'home' ? 'hover:border-[#67c621]/20 hover:shadow-2xl hover:shadow-[#67c621]/10' : 'hover:border-[#045184]/20 hover:shadow-2xl hover:shadow-[#045184]/10'}`}
              onClick={() => onOpenGuide(item)}
            >
              <div className={`w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 transition-colors shadow-sm ${userType === 'home' ? 'text-[#67c621] group-hover:bg-[#67c621] group-hover:text-slate-950' : 'text-[#045184] group-hover:bg-[#045184] group-hover:text-white'}`}>
                {item.icon}
              </div>
              <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-3">{item.title}</h3>
              <p className="text-slate-500 text-xs font-bold leading-relaxed mb-6 line-clamp-3">
                {item.description}
              </p>
              <button className={`font-black text-[10px] uppercase tracking-[0.2em] flex items-center space-x-2 transition-all group-hover:translate-x-1 ${brandColor}`}>
                <BookOpen className="w-3.5 h-3.5" />
                <span>Read Manual</span>
                <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Troubleshooting;
