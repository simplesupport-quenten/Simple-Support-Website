
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Download, ExternalLink, Search, Sparkles, Filter, LayoutGrid, Monitor, Laptop, Smartphone, Globe, ShieldCheck, Zap, MousePointer2, Apple } from 'lucide-react';
import { SOFTWARE_CATALOG, UserType, SoftwareTool } from '../constants';

interface SoftwarePageProps {
  onBack: () => void;
  userType: UserType;
}

const SoftwarePage: React.FC<SoftwarePageProps> = ({ onBack, userType }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const categories = ['All', 'Support', 'Network', 'Hardware', 'Security', 'Business'];

  const filteredSoftware = SOFTWARE_CATALOG.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || tool.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const brandColor = userType === 'home' ? 'text-[#67c621]' : 'text-[#045184]';
  const brandBg = userType === 'home' ? 'bg-[#67c621]' : 'bg-[#045184]';
  const brandBgLight = userType === 'home' ? 'bg-[#67c621]/10' : 'bg-[#045184]/10';

  const PlatformTag = ({ platform }: { platform: string }) => {
    const configs: Record<string, { styles: string, icon: React.ReactNode }> = {
      'Windows': {
        styles: 'bg-blue-50 text-blue-700 border-blue-200/50',
        icon: <Monitor className="w-3.5 h-3.5" />
      },
      'Mac': {
        styles: 'bg-slate-100 text-slate-800 border-slate-200',
        icon: <Laptop className="w-3.5 h-3.5" />
      },
      'iOS': {
        styles: 'bg-slate-900 text-white border-slate-800',
        icon: <Apple className="w-3.5 h-3.5" />
      },
      'Android': {
        styles: 'bg-green-50 text-green-700 border-green-200/50',
        icon: <Smartphone className="w-3.5 h-3.5" />
      },
      'Web': {
        styles: 'bg-indigo-50 text-indigo-700 border-indigo-200/50',
        icon: <Globe className="w-3.5 h-3.5" />
      }
    };

    const config = configs[platform] || { styles: 'bg-slate-50 text-slate-400 border-slate-100', icon: null };

    return (
      <div className={`flex items-center space-x-2 px-3 py-1.5 border rounded-lg text-[9px] font-black uppercase tracking-widest shadow-sm transition-transform hover:scale-105 ${config.styles}`}>
        {config.icon}
        <span>{platform}</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen pt-32 pb-24 bg-white animate-in fade-in duration-700">
      {/* Hero Header */}
      <section className="relative px-6 md:px-12 py-24 mb-16 overflow-hidden bg-slate-950 rounded-b-[4rem] text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className={`absolute -top-24 -right-24 w-96 h-96 rounded-full blur-[120px] ${brandBg}`}></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-[100px] bg-indigo-600"></div>
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className={`inline-flex items-center space-x-2 px-4 py-1.5 mb-8 rounded-xl bg-white/10 border border-white/20 font-black uppercase text-[10px] tracking-[0.2em] text-white`}>
            <Download className={`w-3.5 h-3.5 ${brandColor}`} />
            <span>Technical Repository</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase mb-8 leading-none italic">
            SOFTWARE <br /> <span className={brandColor}>CATALOG</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed max-w-3xl mx-auto mb-12">
            Verified engineering tools, diagnostic utilities, and support software for both home users and enterprise environments.
          </p>
          
          <div className="flex justify-center">
             <button 
              onClick={onBack}
              className="inline-flex items-center justify-center px-10 py-5 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-white group"
            >
              <ArrowLeft className="mr-4 w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Return to Command Center
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Filter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-16">
          <div className="relative w-full lg:max-w-md group">
             <Search className={`absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${brandColor}`} />
             <input 
              type="text" 
              placeholder="Filter tools by name or purpose..."
              className="w-full bg-slate-50 border border-slate-200 rounded-3xl py-5 pl-16 pr-8 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all"
              style={{ '--tw-ring-color': userType === 'home' ? '#67c621' : '#045184' } as any}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
             />
          </div>

          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none no-scrollbar">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                  activeCategory === cat 
                    ? `${brandBg} text-white shadow-lg` 
                    : 'bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-900 border border-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Software Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {filteredSoftware.length > 0 ? (
            filteredSoftware.map((tool, idx) => (
              <div 
                key={tool.name}
                className={`group p-10 bg-white rounded-[3rem] border border-slate-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-200/50 flex flex-col relative overflow-hidden ${tool.isPrimary ? 'border-2 ' + (userType === 'home' ? 'border-[#67c621]/20' : 'border-[#045184]/20') : ''}`}
              >
                {tool.isPrimary && (
                   <div className={`absolute top-8 right-8 flex items-center space-x-1.5 px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest ${brandBgLight} ${brandColor}`}>
                      <Zap className="w-3 h-3" />
                      <span>Support Priority</span>
                   </div>
                )}
                
                <div className="flex-1">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-10 transition-all duration-500 ${brandBgLight} ${brandColor} group-hover:bg-slate-950 group-hover:text-white shadow-inner`}>
                    <div className="group-hover:scale-110 group-hover:rotate-6 transition-transform">
                      {React.cloneElement(tool.icon as React.ReactElement<any>, { className: "w-8 h-8" })}
                    </div>
                  </div>
                  
                  <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-4 transition-colors group-hover:text-slate-950">
                    {tool.name}
                  </h3>
                  
                  <p className="text-xs text-slate-500 leading-relaxed font-bold tracking-wide mb-8 line-clamp-3">
                    {tool.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-10">
                    {tool.platforms.map(p => (
                      <PlatformTag key={p} platform={p} />
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-8 border-t border-slate-50 flex items-center justify-between">
                  <a 
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center space-x-3 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 group-hover:translate-x-1 ${brandColor}`}
                  >
                    <span>Download Utility</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 ${brandBgLight}`}>
                     <Download className={`w-4 h-4 ${brandColor}`} />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-32 text-center bg-slate-50 rounded-[4rem] border border-dashed border-slate-200">
               <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <Search className="w-10 h-10 text-slate-300" />
               </div>
               <h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter mb-2">No Matching Utilities</h3>
               <p className="text-slate-500 font-medium">Try a different keyword or reset your filters.</p>
            </div>
          )}
        </div>

        {/* Safety Disclaimer */}
        <section className={`rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden border border-slate-100 bg-slate-50 mb-12`}>
           <div className="relative z-10 max-w-4xl mx-auto">
             <ShieldCheck className={`w-16 h-16 mx-auto mb-10 opacity-40 ${brandColor}`} />
             <h2 className="text-4xl md:text-5xl font-black text-slate-950 mb-8 uppercase tracking-tighter italic leading-none">
               Verified & <br /> <span className={brandColor}>Safe Packages</span>
             </h2>
             <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
               Every utility in this catalog is vetted by our engineering team. These links lead to the official developer repositories to ensure you receive untampered, virus-free installers.
             </p>
             <button 
                onClick={onBack}
                className={`inline-flex items-center justify-center px-10 py-5 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] transition-all duration-300 hover:-translate-y-1 active:scale-95 bg-white border border-slate-200 text-slate-950 shadow-lg`}
              >
                <ArrowLeft className="w-4 h-4 mr-3" />
                Return to Command Center
              </button>
           </div>
        </section>
      </div>
    </div>
  );
};

export default SoftwarePage;
