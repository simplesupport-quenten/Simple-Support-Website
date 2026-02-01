
import React from 'react';
import { INSTALLATION_GUIDES, GuideContent, UserType } from '../constants';
import { ArrowRight } from 'lucide-react';

interface InstallationGuidesProps {
  onOpenGuide: (guide: GuideContent) => void;
  userType: UserType;
}

const InstallationGuides: React.FC<InstallationGuidesProps> = ({ onOpenGuide, userType }) => {
  const filteredGuides = INSTALLATION_GUIDES.filter(g => g.audience === userType || g.audience === 'both');
  const brandColor = userType === 'home' ? 'text-[#67c621]' : 'text-[#045184]';

  return (
    <section id="installation" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tighter uppercase">DEPLOYMENT <span className={userType === 'home' ? 'text-[#67c621]' : 'text-[#045184]'}>GUIDES</span></h2>
            <p className="mt-4 text-lg text-slate-500 font-medium">
              Step-by-step instructions for implementing new {userType} infrastructure.
            </p>
          </div>
          <div className="flex-shrink-0">
            <div className="bg-white px-6 py-4 rounded-2xl border border-slate-200 inline-block shadow-sm">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-950 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></span>
                Updated Monthly
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredGuides.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenGuide(item)}
              className="flex bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-slate-200 transition-all group overflow-hidden relative cursor-pointer"
            >
              <div className="mr-6 relative z-10">
                <div className={`w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center transition-all duration-500 ${userType === 'home' ? 'text-[#67c621] group-hover:bg-[#67c621] group-hover:text-slate-950' : 'text-[#045184] group-hover:bg-[#045184] group-hover:text-white'}`}>
                  {item.icon}
                </div>
              </div>
              <div className="relative z-10">
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-2">{item.title}</h3>
                <p className="text-slate-500 text-xs font-bold leading-relaxed mb-6 line-clamp-2">
                  {item.description}
                </p>
                <div className={`inline-flex items-center font-black text-[10px] uppercase tracking-[0.2em] group-hover:translate-x-2 transition-transform ${brandColor}`}>
                  <span>View Documentation</span>
                  <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
              <div className="absolute bottom-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.07] transition-all duration-700">
                 {/* Fix: Added <any> generic to React.ReactElement to resolve className typing error */}
                 {React.cloneElement(item.icon as React.ReactElement<any>, { className: "w-48 h-48 transform translate-x-12 translate-y-12" })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstallationGuides;
