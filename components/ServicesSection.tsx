
import React, { useState, useEffect, useRef } from 'react';
import { SERVICES, BOOKING_URL, PHONE_NUMBER, UserType, ServiceDetail } from '../constants';
import { ArrowRight, Sparkles, Home, Building2, ExternalLink, ChevronRight, LayoutGrid, Zap, Filter, Search, ChevronDown, MousePointer2 } from 'lucide-react';

interface ServicesSectionProps {
  userType: UserType;
  setUserType: (type: UserType) => void;
  onOpenService: (service: ServiceDetail) => void;
  onViewAll?: () => void;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ userType, setUserType, onOpenService, onViewAll }) => {
  const [activeFilter, setActiveFilter] = useState<UserType | 'all'>(userType);
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const mobileFilterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setActiveFilter(userType);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileFilterRef.current && !mobileFilterRef.current.contains(event.target as Node)) {
        setShowMobileFilters(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [userType]);

  const handleFilterChange = (filter: UserType | 'all') => {
    if (filter === activeFilter) {
      setShowMobileFilters(false);
      return;
    }
    
    setIsAnimating(true);
    setShowMobileFilters(false);
    
    setTimeout(() => {
      setActiveFilter(filter);
      if (filter !== 'all' && filter !== 'none') {
        setUserType(filter);
      }
      setIsAnimating(false);
    }, 300);
  };

  const toggleSubServices = (e: React.MouseEvent, serviceName: string) => {
    e.stopPropagation();
    setExpandedService(expandedService === serviceName ? null : serviceName);
  };

  const filteredServices = activeFilter === 'all' 
    ? SERVICES 
    : SERVICES.filter(s => s.audience === activeFilter || s.audience === 'both');

  const brandColor = userType === 'home' ? 'text-[#67c621]' : 'text-[#045184]';
  const brandBg = userType === 'home' ? 'bg-[#67c621]' : 'bg-[#045184]';
  const brandBgLight = userType === 'home' ? 'bg-[#67c621]/10' : 'bg-[#045184]/10';

  const getFilterStyles = (type: string) => {
    if (activeFilter === type) {
      if (type === 'home') return 'bg-[#67c621] text-slate-950 shadow-[0_10px_20px_-5px_rgba(103,198,33,0.3)] scale-[1.02] z-10';
      if (type === 'business') return 'bg-[#045184] text-white shadow-[0_10px_20px_-5px_rgba(4,81,132,0.4)] scale-[1.02] z-10';
      return 'bg-slate-950 text-white shadow-xl scale-[1.02] z-10';
    }
    return 'bg-transparent text-slate-500 hover:text-slate-950 hover:bg-slate-50';
  };

  const filterOptions = [
    { id: 'all' as const, label: 'All Solutions', icon: LayoutGrid },
    { id: 'home' as const, label: 'Home Solutions', icon: Home },
    { id: 'business' as const, label: 'Business Solutions', icon: Building2 },
  ];

  const getCardTheme = (serviceAudience: 'home' | 'business' | 'both') => {
    if (activeFilter === 'home') return { color: 'text-[#67c621]', bg: 'bg-[#67c621]', bgLight: 'bg-[#67c621]/10', border: 'border-[#67c621]/20', hoverBorder: 'hover:border-[#67c621]/50', label: 'Residential' };
    if (activeFilter === 'business') return { color: 'text-[#045184]', bg: 'bg-[#045184]', bgLight: 'bg-[#045184]/10', border: 'border-[#045184]/20', hoverBorder: 'hover:border-[#045184]/50', label: 'Business Grade' };
    
    if (serviceAudience === 'home') return { color: 'text-[#67c621]', bg: 'bg-[#67c621]', bgLight: 'bg-[#67c621]/10', border: 'border-[#67c621]/20', hoverBorder: 'hover:border-[#67c621]/50', label: 'Residential' };
    if (serviceAudience === 'business') return { color: 'text-[#045184]', bg: 'bg-[#045184]', bgLight: 'bg-[#045184]/10', border: 'border-[#045184]/20', hoverBorder: 'hover:border-[#045184]/50', label: 'Business Grade' };
    
    return { color: 'text-indigo-500', bg: 'bg-indigo-600', bgLight: 'bg-indigo-500/10', border: 'border-indigo-500/20', hoverBorder: 'hover:border-indigo-500/50', label: 'Universal Support' };
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Fullscreen Header: Headline and Filter Switch Side-by-Side */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20">
          <div className="max-w-3xl">
            <div className={`inline-flex items-center space-x-2 px-3 py-1 mb-6 text-[10px] font-black uppercase tracking-widest rounded-lg border transition-colors ${userType === 'home' ? 'text-[#67c621] bg-[#67c621]/5 border-[#67c621]/10' : 'text-[#045184] bg-[#045184]/5 border-[#045184]/10'}`}>
              <Filter className="w-3 h-3" />
              <span>Strategic Capabilities</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-950 leading-[0.95] tracking-tighter uppercase">
              {activeFilter === 'all' ? 'FULL' : activeFilter.toUpperCase()} <br />
              <span className={activeFilter === 'all' ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#67c621] to-[#045184]' : brandColor}>SOLUTIONS</span>
            </h2>
          </div>

          {/* New Prominent Filter Bar Position */}
          <div className="w-full lg:w-auto">
            <div className="bg-white p-2 rounded-[2rem] md:rounded-[3rem] border border-slate-200 shadow-xl shadow-slate-200/40 relative">
              {/* Desktop Segmented Control */}
              <div className="hidden md:flex items-center gap-1">
                {filterOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleFilterChange(option.id)}
                    className={`flex items-center justify-center space-x-3 px-8 py-4 rounded-[2rem] text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 whitespace-nowrap ${getFilterStyles(option.id)}`}
                  >
                    <option.icon className="w-4 h-4" />
                    <span>{option.label}</span>
                  </button>
                ))}
              </div>

              {/* Mobile Filter Control */}
              <div className="md:hidden relative" ref={mobileFilterRef}>
                <button 
                  onClick={() => setShowMobileFilters(!showMobileFilters)}
                  className="w-full flex items-center justify-between px-6 py-4 rounded-3xl text-[11px] font-black uppercase tracking-widest text-slate-900 transition-all active:scale-95"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${activeFilter === 'all' ? 'bg-slate-950' : brandBg} text-white`}>
                      {activeFilter === 'all' && <LayoutGrid className="w-4 h-4" />}
                      {activeFilter === 'home' && <Home className="w-4 h-4" />}
                      {activeFilter === 'business' && <Building2 className="w-4 h-4" />}
                    </div>
                    <span>{activeFilter === 'all' ? 'All Solutions' : `${activeFilter.toUpperCase()} SOLUTIONS`}</span>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-500 ${showMobileFilters ? 'rotate-180' : ''}`} />
                </button>
                <div 
                  className={`absolute top-full left-0 right-0 mt-3 p-2 bg-white rounded-[2rem] border border-slate-100 shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-50 ${
                    showMobileFilters ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'
                  }`}
                >
                  {filterOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => handleFilterChange(option.id)}
                      className={`w-full flex items-center space-x-4 px-5 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${
                        activeFilter === option.id 
                          ? `${activeFilter === 'all' ? 'bg-slate-950' : brandBg} text-white shadow-lg` 
                          : 'text-slate-500 hover:bg-slate-50'
                      }`}
                    >
                      <option.icon className="w-4 h-4" />
                      <span>{option.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Side Strategy Column (Sticky) */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-8">
            <div className="p-8 md:p-10 bg-white rounded-[3rem] border border-slate-200 shadow-sm">
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${activeFilter === 'all' ? 'bg-slate-950' : brandBg} text-white`}>
                  <Sparkles className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-black uppercase tracking-widest text-slate-950">Project Strategy</h4>
              </div>
              <p className="text-xs text-slate-500 font-bold leading-relaxed mb-8">
                Every {activeFilter === 'business' ? 'enterprise' : 'residential'} deployment begins with an engineering diagnostic to ensure absolute mission success.
              </p>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center w-full px-8 py-5 font-black text-[10px] uppercase tracking-[0.2em] rounded-2xl transition-all duration-300 shadow-xl hover:-translate-y-1 bg-slate-950 text-white hover:bg-slate-800 group`}
              >
                <span>Request Discovery</span>
                <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className={`hidden lg:flex flex-col p-10 bg-slate-950 rounded-[3rem] text-white border border-white/5 relative overflow-hidden group shadow-2xl`}>
               <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-1000 ${brandBg}`}></div>
               <div className="relative z-10">
                 <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-white/5 border border-white/10 ${brandColor}`}>
                    <Zap className="w-6 h-6" />
                 </div>
                 <h4 className="text-lg font-black uppercase tracking-tighter mb-2">Emergency Hub</h4>
                 <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-6 leading-relaxed">System critical failure? <br /> Our dispatch line is monitored 24/7.</p>
                 <a href={`tel:${PHONE_NUMBER}`} className={`text-xl font-black tracking-widest transition-colors ${brandColor} hover:text-white`}>{PHONE_NUMBER}</a>
               </div>
            </div>
          </div>

          {/* Dynamic Service List */}
          <div className="lg:col-span-8 space-y-8">
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isAnimating ? 'opacity-0 translate-y-8 scale-95 blur-sm' : 'opacity-100 translate-y-0 scale-100 blur-0'}`}>
              {filteredServices.length > 0 ? (
                filteredServices.map((service, idx) => {
                  const isExpanded = expandedService === service.name;
                  const theme = getCardTheme(service.audience);
                  const isRemote = service.name === 'Remote Support';

                  return (
                    <div 
                      key={service.name}
                      onClick={() => onOpenService(service)}
                      className={`group p-8 md:p-10 bg-white rounded-[2.5rem] border border-slate-200 transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-200/60 cursor-pointer relative overflow-hidden flex flex-col ${isRemote ? 'border-2 ' + theme.border : ''}`}
                    >
                      <div className="flex justify-between items-start mb-8">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${theme.bgLight} ${theme.color} group-hover:bg-slate-950 group-hover:text-white`}>
                          <div className="group-hover:scale-110 group-hover:rotate-6 transition-transform">
                            {service.icon}
                          </div>
                        </div>
                        {activeFilter === 'all' && (
                          <div className="flex items-center space-x-1.5 opacity-40">
                             <div className={`w-1 h-1 rounded-full ${theme.bg}`}></div>
                             <span className="text-[7px] font-black uppercase tracking-[0.2em] text-slate-500">{theme.label}</span>
                          </div>
                        )}
                      </div>
                      
                      <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-4 transition-colors group-hover:text-slate-950">
                        {service.name}
                      </h3>
                      
                      <p className="text-xs text-slate-500 leading-relaxed font-bold tracking-wide mb-8 group-hover:text-slate-700">
                        {service.description}
                      </p>

                      <div className={`mt-auto pt-6 border-t border-slate-50 flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest transition-all ${theme.color}`}>
                         <span>{isRemote ? 'Launch Console' : 'Explore Deployment'}</span>
                         <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="col-span-full py-24 text-center bg-white rounded-[3rem] border border-slate-100">
                  <h4 className="text-xl font-black uppercase tracking-tighter text-slate-900 mb-2">No Matching Services</h4>
                  <p className="text-slate-500 font-medium">Try resetting your filter to view all solutions.</p>
                </div>
              )}
              
              {/* Full Catalog Action Card */}
              <div 
                onClick={onViewAll}
                className="p-10 bg-slate-950 rounded-[2.5rem] border border-white/5 transition-all duration-700 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl cursor-pointer flex flex-col items-center justify-center text-center group"
              >
                <LayoutGrid className={`w-12 h-12 mb-6 transition-transform group-hover:rotate-12 ${brandColor}`} />
                <h3 className="text-sm font-black text-white uppercase tracking-widest mb-3">Complete Catalog</h3>
                <div className={`flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest transition-all ${brandColor}`}>
                  <span>Full Inventory</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
