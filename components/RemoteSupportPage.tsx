
import React from 'react';
import { Monitor, Apple, ArrowLeft, Download, Zap, MousePointer2, ShieldCheck, Laptop, Smartphone as SmartphoneIcon, ExternalLink, Sparkles, MessageSquare, Phone } from 'lucide-react';
import { RUSTDESK_URLS, UserType, PHONE_NUMBER } from '../constants';

interface RemoteSupportPageProps {
  onBack: () => void;
  userType: UserType;
}

const RemoteSupportPage: React.FC<RemoteSupportPageProps> = ({ onBack, userType }) => {
  const brandColor = userType === 'home' ? 'text-[#67c621]' : 'text-[#045184]';
  const brandBg = userType === 'home' ? 'bg-[#67c621]' : 'bg-[#045184]';
  const brandBgLight = userType === 'home' ? 'bg-[#67c621]/5' : 'bg-[#045184]/5';
  const brandBorder = userType === 'home' ? 'border-[#67c621]/20' : 'border-[#045184]/20';

  const primaryBtnClass = userType === 'home' 
    ? 'bg-[#67c621] text-slate-950 shadow-2xl shadow-[#67c621]/20 hover:shadow-[#67c621]/40' 
    : 'bg-[#045184] text-white shadow-2xl shadow-[#045184]/20 hover:shadow-[#045184]/40';

  const secondaryBtnClass = 'bg-slate-900 text-white border border-white/10 hover:bg-slate-800 shadow-2xl';

  const desktopDownloads = [
    {
      platform: "Windows",
      icon: <Monitor className="w-8 h-8" />,
      url: RUSTDESK_URLS.windows,
      label: "Direct Download"
    },
    {
      platform: "Mac OS",
      icon: <Laptop className="w-8 h-8" />,
      url: RUSTDESK_URLS.mac,
      label: "Direct Download"
    }
  ];

  const mobileDownloads = [
    {
      platform: "iOS / iPadOS",
      icon: <Apple className="w-8 h-8" />,
      url: RUSTDESK_URLS.ios,
      label: "Download on the App Store"
    },
    {
      platform: "Android",
      icon: <SmartphoneIcon className="w-8 h-8" />,
      url: RUSTDESK_URLS.android,
      label: "Get it on Google Play"
    }
  ];

  const instructions = [
    {
      title: "Download Client",
      desc: "Select your platform below to download the official RustDesk remote control tool.",
      icon: <Download className="w-5 h-5" />
    },
    {
      title: "Run & Share ID",
      desc: "Open the application and provide your 'ID' and 'One-Time Password' to our technician.",
      icon: <Zap className="w-5 h-5" />
    },
    {
      title: "Encrypted Control",
      desc: "We establish a secure, end-to-end encrypted session to resolve your technical hurdles.",
      icon: <ShieldCheck className="w-5 h-5" />
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 bg-white animate-in fade-in duration-700">
      {/* Hero Header */}
      <section className="relative px-6 md:px-12 py-24 mb-16 overflow-hidden bg-slate-950 rounded-b-[4rem] text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className={`absolute -top-24 -right-24 w-96 h-96 rounded-full blur-[120px] ${brandBg}`}></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-[100px] bg-indigo-600"></div>
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>

        {/* Hero Content with Person Image Background */}
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1600" alt="Support Specialist" className="w-full h-full object-cover opacity-10" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className={`inline-flex items-center space-x-2 px-4 py-1.5 mb-8 rounded-xl bg-white/10 border border-white/20 font-black uppercase text-[10px] tracking-[0.2em] text-white`}>
            <MousePointer2 className={`w-3.5 h-3.5 ${brandColor}`} />
            <span>INSTANT REMOTE ACCESS</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase mb-8 leading-none italic">
            QUICK <span className={brandColor}>SUPPORT</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed max-w-3xl mx-auto mb-12">
            No house call required. Secure remote desktop access allows us to fix software issues, configure networks, and optimize devices instantly.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
             <a 
              href={`tel:${PHONE_NUMBER}`}
              className={`inline-flex items-center justify-center px-10 py-5 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] transition-all duration-300 hover:-translate-y-1 active:scale-95 group ${primaryBtnClass}`}
            >
              <Phone className="mr-4 w-4 h-4 group-hover:rotate-12 transition-transform" />
              Call Technical Support
            </a>
             <button 
              onClick={onBack}
              className={`inline-flex items-center justify-center px-10 py-5 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] transition-all duration-300 hover:-translate-y-1 active:scale-95 group ${secondaryBtnClass}`}
            >
              <ArrowLeft className="mr-4 w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Return Home
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Instructions Column */}
          <div className="lg:col-span-4 space-y-12">
            <div className="space-y-8">
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">Deployment Protocol</h2>
              <div className="space-y-10">
                {instructions.map((step, idx) => (
                  <div key={idx} className="flex space-x-6 group">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border ${brandBorder} ${brandBgLight} ${brandColor} transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-black uppercase tracking-widest text-slate-900 mb-2">{step.title}</h3>
                      <p className="text-xs text-slate-500 font-bold leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={`p-10 rounded-[3rem] border ${brandBorder} bg-slate-50 relative overflow-hidden group`}>
               <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-white border border-slate-100 shadow-sm ${brandColor}`}>
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h4 className="text-sm font-black uppercase tracking-widest text-slate-900 mb-3">Military-Grade Security</h4>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider leading-relaxed">
                    RustDesk uses TLS 1.3 end-to-end encryption. You maintain full control — you can terminate the session at any second.
                  </p>
               </div>
               <div className={`absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform`}>
                 <Sparkles className="w-24 h-24" />
               </div>
            </div>
          </div>

          {/* Download Sections Column */}
          <div className="lg:col-span-8 space-y-16">
             
             {/* Desktop Section */}
             <div className="space-y-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">Desktop Deployment</h2>
                    <div className="hidden md:flex items-center space-x-2 px-4 py-2 bg-slate-50 rounded-xl border border-slate-100">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Service Status: Online</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {desktopDownloads.map((card) => (
                      <a 
                        key={card.platform}
                        href={card.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between p-10 bg-white rounded-[3rem] border border-slate-100 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-slate-200 hover:shadow-2xl hover:shadow-slate-200/60"
                      >
                        <div className="flex items-center space-x-6">
                          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${brandBgLight} ${brandColor} group-hover:bg-slate-950 group-hover:text-white`}>
                            {card.icon}
                          </div>
                          <div>
                            <h3 className="text-sm font-black uppercase tracking-widest text-slate-900">{card.platform}</h3>
                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] mt-1">{card.label}</p>
                          </div>
                        </div>
                        <div className="p-3 bg-slate-50 rounded-xl transition-all duration-300 group-hover:bg-slate-950 group-hover:text-white">
                          <Download className="w-5 h-5" />
                        </div>
                      </a>
                    ))}
                </div>
             </div>

             {/* Mobile Section */}
             <div className="space-y-8">
                <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">Mobile Support Downloads</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {mobileDownloads.map((card) => (
                      <a 
                        key={card.platform}
                        href={card.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between p-10 bg-white rounded-[3rem] border border-slate-100 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-slate-200 hover:shadow-2xl hover:shadow-slate-200/60"
                      >
                        <div className="flex items-center space-x-6">
                          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${brandBgLight} ${brandColor} group-hover:bg-slate-950 group-hover:text-white`}>
                            {card.icon}
                          </div>
                          <div>
                            <h3 className="text-sm font-black uppercase tracking-widest text-slate-900">{card.platform}</h3>
                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] mt-1">{card.label}</p>
                          </div>
                        </div>
                        <div className="p-3 bg-slate-50 rounded-xl transition-all duration-300 group-hover:bg-slate-950 group-hover:text-white">
                          <ExternalLink className="w-5 h-5" />
                        </div>
                      </a>
                    ))}
                </div>
             </div>

             {/* Pro Tip Card */}
             <div className="bg-slate-950 p-10 md:p-14 rounded-[4rem] text-white relative overflow-hidden group">
                <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-1000 ${brandBg}`}></div>
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                   <div className={`w-20 h-20 rounded-3xl flex items-center justify-center shrink-0 border border-white/10 bg-white/5 ${brandColor}`}>
                      <MessageSquare className="w-10 h-10" />
                   </div>
                   <div className="text-center md:text-left">
                      <h4 className="text-2xl font-black uppercase tracking-tighter mb-2 italic">Active Support Required</h4>
                      <p className="text-slate-400 text-sm font-medium leading-relaxed">
                        Please ensure you have an active project open or are on a diagnostic call with our team before launching the remote tool. This ensures our engineers are ready to accept your connection request.
                      </p>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
      
      {/* Footer Disclaimer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-24">
        <div className="pt-12 border-t border-slate-100 text-center">
          <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.4em]">
            Simple Support is a registered service provider — Licensed & Insured
          </p>
        </div>
      </div>
    </div>
  );
};

export default RemoteSupportPage;
