
import React from 'react';
import { SERVICES, UserType, ServiceDetail, BOOKING_URL } from '../constants';
import { ArrowLeft, ArrowRight, Home, Building2, Zap, Sparkles, ExternalLink, ChevronRight } from 'lucide-react';

interface AllServicesPageProps {
  onOpenService: (service: ServiceDetail) => void;
  onBack: () => void;
  userType: UserType;
}

const AllServicesPage: React.FC<AllServicesPageProps> = ({ onOpenService, onBack, userType }) => {
  const homeServices = SERVICES.filter(s => s.audience === 'home');
  const businessServices = SERVICES.filter(s => s.audience === 'business');
  const sharedServices = SERVICES.filter(s => s.audience === 'both');

  const brandColor = userType === 'home' ? 'text-[#67c621]' : 'text-[#045184]';
  const brandBg = userType === 'home' ? 'bg-[#67c621]' : 'bg-[#045184]';
  const primaryBtnClass = userType === 'home' 
    ? 'bg-[#67c621] text-slate-950 shadow-2xl shadow-[#67c621]/20 hover:shadow-[#67c621]/40' 
    : 'bg-[#045184] text-white shadow-2xl shadow-[#045184]/20 hover:shadow-[#045184]/40';

  const ServiceGrid = ({ services, title, icon: Icon, description }: { services: ServiceDetail[], title: string, icon: any, description: string }) => (
    <div className="space-y-12 mb-32 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-slate-100 pb-10">
        <div className="max-w-2xl">
          <div className="flex items-center space-x-4 mb-6">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-xl ${brandBg}`}>
              <Icon className="w-8 h-8" />
            </div>
            <h2 className="text-4xl font-black uppercase tracking-tighter text-slate-950 italic">{title}</h2>
          </div>
          <p className="text-lg text-slate-500 font-medium leading-relaxed">{description}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div 
            key={service.name}
            onClick={() => onOpenService(service)}
            className="group flex flex-col h-full p-10 bg-slate-50 rounded-[3rem] border border-slate-200 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-2xl hover:shadow-slate-200/50 cursor-pointer hover:bg-white hover:border-slate-300 relative overflow-hidden"
          >
            <div className="flex-grow flex flex-col">
              <div className={`w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 shadow-sm border border-slate-100 ${brandColor}`}>
                {service.icon}
              </div>
              <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-4 group-hover:text-slate-950 transition-colors">
                {service.name}
              </h3>
              <p className="text-xs text-slate-500 font-bold leading-[1.6] mb-10 line-clamp-4">
                {service.description}
              </p>
            </div>
            
            <div className="mt-auto pt-8 border-t border-slate-100 flex items-center justify-between">
              <div className={`inline-flex items-center space-x-3 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 group-hover:translate-x-1 ${brandColor}`}>
                 <span className="relative pb-1">
                    Learn More
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ${brandBg}`}></span>
                 </span>
                 <ArrowRight className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
              <ChevronRight className={`w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ${brandColor}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen pt-32 pb-24 bg-white">
      {/* Hero Header */}
      <section className="relative px-6 md:px-12 py-24 mb-24 overflow-hidden bg-slate-950 rounded-b-[4rem] text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className={`absolute -top-24 -right-24 w-96 h-96 rounded-full blur-[120px] ${brandBg}`}></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-[100px] bg-indigo-600"></div>
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 mb-8 rounded-xl bg-white/10 border border-white/20 font-black uppercase text-[10px] tracking-[0.2em] text-white animate-in slide-in-from-top duration-500">
            <Sparkles className={`w-3.5 h-3.5 ${brandColor}`} />
            <span>Full Capability Catalog</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase mb-8 leading-none italic animate-in fade-in duration-1000">
            ENGINEERING <br /> <span className={brandColor}>EXCELLENCE</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed max-w-3xl mx-auto mb-12 animate-in fade-in slide-in-from-bottom duration-1000">
            The complete inventory of technology solutions provided by Simple Support. Expertly deployed, monitored, and maintained.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
             <a 
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center px-10 py-5 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] transition-all duration-300 hover:-translate-y-1 active:scale-95 shadow-2xl ${primaryBtnClass}`}
            >
              Start New Project <ArrowRight className="ml-4 w-4 h-4" />
            </a>
            <button 
              onClick={onBack}
              className="inline-flex items-center justify-center px-10 py-5 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-white"
            >
              <ArrowLeft className="mr-4 w-4 h-4" /> Go Back
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ServiceGrid 
          services={homeServices} 
          title="Residential Solutions" 
          icon={Home} 
          description="High-performance technology support designed for the modern home ecosystem."
        />
        
        <ServiceGrid 
          services={businessServices} 
          title="Enterprise Infrastructure" 
          icon={Building2} 
          description="Scalable IT management and software expertise for commercial organizations."
        />

        <ServiceGrid 
          services={sharedServices} 
          title="Unified Services" 
          icon={Zap} 
          description="Essential technology deployments suitable for both residential and commercial applications."
        />

        {/* Bottom Contact Section */}
        <section className={`rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden group border border-slate-100 bg-slate-50 mb-12`}>
          <div className="relative z-10 max-w-4xl mx-auto">
            <Sparkles className={`w-16 h-16 mx-auto mb-10 opacity-40 ${brandColor}`} />
            <h2 className="text-4xl md:text-6xl font-black text-slate-950 mb-8 uppercase tracking-tighter italic leading-none">
              Don't see exactly <br /> <span className={brandColor}>what you need?</span>
            </h2>
            <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium">
              Our engineering team handles custom integrations and specialized hardware deployments daily. Reach out for a custom strategy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center px-10 py-5 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] transition-all duration-300 shadow-2xl hover:-translate-y-1 active:scale-95 ${primaryBtnClass}`}
              >
                Inquire for Custom Work <ArrowRight className="ml-4 w-5 h-5" />
              </a>
              <button 
                onClick={onBack}
                className="inline-flex items-center justify-center px-10 py-5 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] bg-white border border-slate-200 text-slate-900 transition-all hover:bg-slate-50"
              >
                Return Home
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AllServicesPage;
