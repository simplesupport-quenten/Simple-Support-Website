
import React from 'react';
import { ArrowLeft, Activity, ShieldCheck, Zap, Gauge, Info, ArrowRight, MousePointer2, Globe } from 'lucide-react';
import { UserType, BOOKING_URL } from '../constants';

interface SpeedTestPageProps {
  onBack: () => void;
  userType: UserType;
}

const SpeedTestPage: React.FC<SpeedTestPageProps> = ({ onBack, userType }) => {
  const brandColor = userType === 'home' ? 'text-[#67c621]' : 'text-[#045184]';
  const brandBg = userType === 'home' ? 'bg-[#67c621]' : 'bg-[#045184]';
  const brandBgLight = userType === 'home' ? 'bg-[#67c621]/5' : 'bg-[#045184]/5';
  const brandBorder = userType === 'home' ? 'border-[#67c621]/20' : 'border-[#045184]/20';

  const primaryBtnClass = userType === 'home' 
    ? 'bg-[#67c621] text-slate-950 shadow-2xl shadow-[#67c621]/20 hover:shadow-[#67c621]/40' 
    : 'bg-[#045184] text-white shadow-2xl shadow-[#045184]/20 hover:shadow-[#045184]/40';

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
            <Activity className={`w-3.5 h-3.5 ${brandColor}`} />
            <span>Real-Time Network Diagnostic</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase mb-8 leading-none italic">
            SPEED <span className={brandColor}>CHECK</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed max-w-3xl mx-auto mb-12">
            Verify your bandwidth availability, latency, and signal integrity. Essential for diagnosing streaming issues or VoIP jitter.
          </p>
          
          <div className="flex justify-center">
             <button 
              onClick={onBack}
              className="inline-flex items-center justify-center px-10 py-5 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-white group"
            >
              <ArrowLeft className="mr-4 w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Return Home
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Main Speed Test Area */}
          <div className="lg:col-span-8 space-y-12">
            <div className="bg-slate-50 rounded-[3rem] border border-slate-200 shadow-sm overflow-hidden relative">
              <div className="p-8 border-b border-slate-200 bg-white flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Gauge className={`w-5 h-5 ${brandColor}`} />
                  <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-900">Network Probe</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Secure Connection</span>
                </div>
              </div>

              {/* Responsive Iframe Container */}
              <div className="aspect-video w-full bg-white relative">
                 <iframe 
                    src="https://openspeedtest.com/speedtest" 
                    className="w-full h-full border-none"
                    title="OpenSpeedTest Diagnostic"
                    loading="lazy"
                 ></iframe>
              </div>

              <div className="p-8 bg-slate-100 flex items-center justify-center space-x-8">
                 <div className="flex items-center space-x-2">
                    <ShieldCheck className="w-4 h-4 text-slate-400" />
                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-500">End-to-End Encrypted Tunnel</span>
                 </div>
                 <div className="flex items-center space-x-2">
                    <Globe className="w-4 h-4 text-slate-400" />
                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-500">Global Node Access</span>
                 </div>
              </div>
            </div>

            {/* Diagnostic Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: "Latency (Ping)", desc: "The time it takes for data to travel to the server and back. Lower is better for gaming and calls.", icon: <Zap /> },
                { label: "Download Speed", desc: "How fast you can receive data. Crucial for 4K streaming and downloading large assets.", icon: <Gauge /> },
                { label: "Upload Speed", desc: "How fast you can send data. Essential for video conferencing and cloud backups.", icon: <Activity /> }
              ].map((info, idx) => (
                <div key={idx} className="p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm group hover:border-slate-200 transition-all">
                  <div className={`w-10 h-10 rounded-xl mb-6 flex items-center justify-center ${brandBgLight} ${brandColor} group-hover:scale-110 transition-transform`}>
                    {/* Fix: Added <any> generic to React.ReactElement to resolve className typing error */}
                    {React.cloneElement(info.icon as React.ReactElement<any>, { className: "w-5 h-5" })}
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-tight text-slate-900 mb-3">{info.label}</h3>
                  <p className="text-[11px] text-slate-500 font-medium leading-relaxed">{info.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar Area */}
          <div className="lg:col-span-4 space-y-8">
            <div className="sticky top-40 space-y-8">
              
              <div className="bg-slate-950 p-10 rounded-[3rem] text-white shadow-2xl border border-white/5 relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 blur-[60px] opacity-20 ${brandBg}`}></div>
                <div className="relative z-10">
                   <Info className={`w-10 h-10 mb-8 ${brandColor}`} />
                   <h3 className="text-xl font-black uppercase tracking-tighter mb-4 italic">Bad Results?</h3>
                   <p className="text-slate-400 text-sm font-medium leading-relaxed mb-10">
                     If your speeds are significantly lower than what you pay for, or if your ping is consistently high (above 100ms), our engineers can perform a deeper diagnostic on your router, cabling, or ISP signal.
                   </p>
                   <a 
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center w-full px-8 py-5 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] transition-all duration-300 hover:-translate-y-1 active:scale-95 shadow-2xl group ${primaryBtnClass}`}
                   >
                     Book Network Audit <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                   </a>
                </div>
              </div>

              <div className={`p-10 rounded-[3rem] border ${brandBorder} ${brandBgLight} flex flex-col items-center text-center group`}>
                 <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-white border ${brandBorder} ${brandColor} group-hover:bg-slate-950 group-hover:text-white transition-all duration-500`}>
                    <MousePointer2 className="w-8 h-8" />
                 </div>
                 <h4 className="text-sm font-black uppercase tracking-widest text-slate-900 mb-2">Remote Optimization</h4>
                 <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider leading-relaxed">
                   We can often improve network performance remotely by optimizing channel frequency and router firmware.
                 </p>
              </div>

            </div>
          </div>

        </div>
      </div>
      
      {/* Footer Disclaimer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-24">
        <div className="pt-12 border-t border-slate-100 text-center">
          <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.4em]">
            Diagnostic data is processed locally — No private data is stored.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpeedTestPage;
