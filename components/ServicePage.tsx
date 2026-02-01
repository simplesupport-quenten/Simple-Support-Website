
import React, { useEffect, useState } from 'react';
import { CheckCircle2, Zap, ArrowRight, ShieldCheck, HelpCircle, Briefcase, Home, ArrowLeft, Sparkles, ExternalLink, ChevronRight, ChevronDown, Calendar } from 'lucide-react';
import { ServiceDetail, BOOKING_URL, UserType, SERVICES, FAQ_DATA } from '../constants';

interface ServicePageProps {
  service: ServiceDetail | null;
  onBack: () => void;
  onOpenService: (service: ServiceDetail) => void;
  userType: UserType;
}

const ServicePage: React.FC<ServicePageProps> = ({ service, onBack, onOpenService, userType }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  
  if (!service) return null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [service]);

  const brandColor = userType === 'home' ? 'text-[#67c621]' : 'text-[#045184]';
  const brandBg = userType === 'home' ? 'bg-[#67c621]' : 'bg-[#045184]';
  const brandBgLight = userType === 'home' ? 'bg-[#67c621]/5' : 'bg-[#045184]/5';
  const brandShadow = userType === 'home' ? 'shadow-[#67c621]/10' : 'shadow-[#045184]/10';
  const brandHoverShadow = userType === 'home' ? 'hover:shadow-[#67c621]/20' : 'hover:shadow-[#045184]/20';

  const relatedServices = SERVICES
    .filter(s => s.name !== service.name && (s.audience === userType || s.audience === 'both'))
    .slice(0, 3);

  const primaryBtnClass = userType === 'home' 
    ? 'bg-[#67c621] text-slate-950 shadow-2xl shadow-[#67c621]/20 hover:shadow-[#67c621]/40' 
    : 'bg-[#045184] text-white shadow-2xl shadow-[#045184]/20 hover:shadow-[#045184]/40';

  const secondaryBtnClass = 'bg-white border border-slate-200 text-slate-950 hover:bg-slate-50 shadow-lg';

  // Use service-specific FAQs if available, otherwise fallback to generic ones
  const pageFaqs = service.faqs || FAQ_DATA.slice(0, 4);

  return (
    <div className="min-h-screen pt-32 pb-24 bg-white animate-in fade-in duration-700">
      {/* Hero Header */}
      <section className={`relative px-6 md:px-12 py-24 mb-16 overflow-hidden ${brandBgLight}`}>
        <div className="absolute inset-0 z-0 opacity-10">
          <div className={`absolute -top-24 -right-24 w-96 h-96 rounded-full blur-[120px] ${brandBg}`}></div>
          <div className={`absolute bottom-0 left-0 w-64 h-64 rounded-full blur-[100px] ${brandBg}`}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
            <div className={`w-28 h-28 md:w-36 md:h-36 rounded-[2.5rem] flex items-center justify-center shadow-2xl ${brandBg} text-white shrink-0 animate-in zoom-in duration-500`}>
              {React.cloneElement(service.icon as React.ReactElement<any>, { className: "w-14 h-14 md:w-20 md:h-20" })}
            </div>
            <div className="text-center md:text-left">
              <div className={`inline-flex items-center space-x-2 px-4 py-1.5 mb-6 rounded-xl border font-black uppercase text-[10px] tracking-[0.2em] ${userType === 'home' ? 'bg-[#67c621]/10 border-[#67c621]/20 text-[#67c621]' : 'bg-[#045184]/10 border-[#045184]/20 text-[#045184]'}`}>
                {service.audience === 'both' ? <Zap className="w-3.5 h-3.5" /> : (service.audience === 'home' ? <Home className="w-3.5 h-3.5" /> : <Briefcase className="w-3.5 h-3.5" />)}
                <span>{service.audience.toUpperCase()} SERVICE PROFILE</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-slate-950 tracking-tighter uppercase mb-6 leading-[0.9]">
                {service.name}
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed max-w-3xl">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-32">
          {/* Main Info Column */}
          <div className="lg:col-span-7 space-y-16">
            <div className="space-y-6">
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">Technical Overview</h2>
              <p className="text-slate-700 leading-[1.6] font-medium text-lg md:text-xl">
                {service.longDescription}
              </p>
            </div>

            <div className="space-y-10">
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-5 p-6 bg-slate-50 rounded-[2rem] border border-slate-100 transition-all hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 group">
                    <div className={`shrink-0 w-10 h-10 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-sm transition-all duration-300 group-hover:scale-110 ${brandColor} group-hover:bg-slate-950 group-hover:text-white`}>
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-black uppercase tracking-tight text-slate-700 group-hover:text-slate-950">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="pt-6">
                <a 
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center px-10 py-5 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] transition-all duration-300 hover:-translate-y-1 active:scale-95 shadow-2xl group ${primaryBtnClass}`}
                >
                  <Calendar className="w-4 h-4 mr-3" />
                  Book a Session
                  <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Strategic Benefits */}
            <div className="space-y-10">
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">Strategic Benefits</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center space-x-4 p-6 bg-slate-50 rounded-3xl border border-slate-100 transition-all hover:bg-white hover:shadow-xl group">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${brandBgLight} ${brandColor}`}>
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-black uppercase tracking-tight text-slate-800">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Sub-section on Service Page */}
            <div className="space-y-10 pt-10 border-t border-slate-100">
               <div className="flex items-center justify-between">
                  <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">Common Inquiries</h2>
                  <HelpCircle className={`w-5 h-5 ${brandColor}`} />
               </div>
               <div className="space-y-4">
                  {pageFaqs.map((faq, idx) => (
                    <div key={idx} className={`rounded-3xl border transition-all duration-300 overflow-hidden ${activeFaq === idx ? 'bg-slate-50 border-slate-200 shadow-sm' : 'bg-white border-slate-100'}`}>
                       <button 
                        onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                        className="w-full flex items-center justify-between p-6 text-left"
                       >
                          <span className="text-sm font-black uppercase tracking-tight text-slate-900">{faq.question}</span>
                          <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${activeFaq === idx ? 'rotate-180' : ''}`} />
                       </button>
                       <div className={`transition-all duration-300 ${activeFaq === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                          <div className="p-6 pt-0 text-xs font-medium text-slate-600 leading-relaxed border-t border-slate-200/50 mt-2">
                             {faq.answer}
                          </div>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>

          {/* Sidebar / Feature List */}
          <div className="lg:col-span-5">
            <div className="sticky top-40">
              <div className="bg-slate-950 rounded-[3rem] p-10 md:p-14 text-white shadow-2xl relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-48 h-48 blur-[80px] opacity-20 ${brandBg}`}></div>
                <div className="relative z-10">
                  <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-500 mb-10">Core Specifications</h2>
                  <ul className="space-y-8">
                    {service.features.slice(0, 5).map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-5 group">
                        <div className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${brandBg}`}></div>
                        <span className="text-base font-bold text-slate-300 leading-snug group-hover:text-white transition-colors">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-16 pt-10 border-t border-white/5 space-y-8">
                     <a 
                      href={BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center w-full px-10 py-5 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] transition-all duration-300 hover:-translate-y-1 active:scale-95 shadow-2xl group ${primaryBtnClass}`}
                    >
                      Instant Booking <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Back Button */}
              <button 
                onClick={onBack}
                className={`mt-10 inline-flex items-center justify-center w-full px-10 py-5 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] transition-all duration-300 hover:-translate-y-1 active:scale-95 ${secondaryBtnClass}`}
              >
                <ArrowLeft className="w-4 h-4 mr-3" />
                <span>Return to Overview</span>
              </button>
            </div>
          </div>
        </div>

        {/* Related Solutions */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black uppercase tracking-tighter italic">Related <span className={brandColor}>Solutions</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedServices.map((rs) => (
              <div 
                key={rs.name}
                onClick={() => onOpenService(rs)}
                className={`group flex flex-col h-full min-h-[420px] p-10 rounded-[3rem] border border-slate-200 transition-all duration-700 hover:-translate-y-4 cursor-pointer bg-slate-50 hover:bg-white shadow-sm ${brandHoverShadow} hover:shadow-2xl`}
              >
                <div className="flex-1 flex flex-col relative z-10">
                  <div className={`w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${brandColor} group-hover:bg-slate-900 group-hover:text-white shadow-sm border border-slate-100`}>
                    {rs.icon}
                  </div>
                  <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-4 transition-colors group-hover:text-slate-950">
                    {rs.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-bold leading-relaxed mb-6 flex-grow line-clamp-5">
                    {rs.description}
                  </p>
                </div>
                
                <div className="mt-auto pt-8 border-t border-slate-100 flex items-center justify-between">
                  <div className={`inline-flex items-center space-x-3 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 group-hover:translate-x-1 ${brandColor}`}>
                     <span className="relative">
                        View Solution
                        <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${brandBg} transition-all duration-500 group-hover:w-full`}></span>
                     </span>
                     <ExternalLink className="w-4 h-4" />
                  </div>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 ${brandBgLight}`}>
                    <ChevronRight className={`w-5 h-5 ${brandColor}`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA Section */}
        <section className="rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden border border-slate-100 bg-slate-50 mb-12">
          <div className="relative z-10 max-w-4xl mx-auto">
            <HelpCircle className={`w-16 h-16 mx-auto mb-10 opacity-40 ${brandColor}`} />
            <h2 className="text-4xl md:text-6xl font-black text-slate-950 mb-8 uppercase tracking-tighter italic leading-none">
              Need implementation <br /> <span className={brandColor}>right now?</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center px-10 py-5 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] transition-all duration-300 shadow-2xl hover:-translate-y-1 active:scale-95 group ${primaryBtnClass}`}
              >
                Schedule Service <ArrowRight className="ml-4 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <button 
                onClick={onBack}
                className={`inline-flex items-center justify-center px-10 py-5 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] transition-all duration-300 hover:-translate-y-1 active:scale-95 ${secondaryBtnClass}`}
              >
                Go Back Home
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServicePage;
