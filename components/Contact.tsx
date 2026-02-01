
import React from 'react';
import { Mail, Phone, MapPin, Calendar, ExternalLink, ShieldCheck, Sparkles } from 'lucide-react';
import { BOOKING_URL, PHONE_NUMBER, SUPPORT_EMAIL, UserType } from '../constants';

interface ContactProps {
  userType: UserType;
}

const Contact: React.FC<ContactProps> = ({ userType }) => {
  const isHome = userType === 'home';
  const brandColor = isHome ? 'text-[#67c621]' : 'text-[#045184]';
  const brandBg = isHome ? 'bg-[#67c621]' : 'bg-[#045184]';
  const brandBorder = isHome ? 'border-[#67c621]/20' : 'border-[#045184]/20';
  
  const primaryBtnClass = isHome 
    ? 'bg-[#67c621] text-slate-950 shadow-2xl shadow-[#67c621]/20 hover:shadow-[#67c621]/40' 
    : 'bg-[#045184] text-white shadow-2xl shadow-[#045184]/20 hover:shadow-[#045184]/40';

  const envImage = isHome 
    ? "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800" 
    : "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800";

  return (
    <section id="contact" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="bg-slate-950 rounded-[4rem] p-10 md:p-20 relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] border border-white/5">
          {/* Dark Background Glows */}
          <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[80%] bg-indigo-600/10 rounded-full blur-[160px]"></div>
          <div className={`absolute bottom-[-10%] left-[-5%] w-[40%] h-[60%] rounded-full blur-[140px] opacity-20 ${brandBg}`}></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="text-white space-y-8">
              <div className={`inline-flex items-center space-x-2 px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-lg border ${isHome ? 'text-[#67c621] bg-[#67c621]/10 border-[#67c621]/20' : 'text-[#045184] bg-[#045184]/10 border-[#045184]/20'}`}>
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified Provider</span>
              </div>

              {/* New Profile-Specific Environment Image */}
              <div className="relative group max-w-sm">
                <div className={`absolute -inset-1 rounded-[2rem] blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 ${brandBg}`}></div>
                <div className={`relative h-48 w-full rounded-[2rem] overflow-hidden border border-white/10 rotate-[-1deg] group-hover:rotate-0 transition-transform duration-700`}>
                  <img 
                    src={envImage} 
                    alt="Technical Environment" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-6 flex items-center space-x-2">
                    <Sparkles className={`w-3 h-3 ${brandColor}`} />
                    <span className="text-[8px] font-black uppercase tracking-[0.3em] text-white/60">System Ready</span>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-4xl md:text-6xl font-black mb-6 leading-[1.05] tracking-tighter uppercase italic">
                  READY TO <br />
                  <span className={brandColor}>UPGRADE?</span>
                </h2>
                <p className="text-slate-400 text-lg mb-12 max-w-md font-medium leading-relaxed">
                  Whether you need a full network overhaul or a quick fix for a corrupted file, our engineering team is ready to deploy.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 border-t border-white/5 pt-10">
                <div className="space-y-1">
                  <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">Engineering Line</p>
                  <a href={`tel:${PHONE_NUMBER}`} className={`font-black text-xl transition-colors ${isHome ? 'text-white hover:text-[#67c621]' : 'text-white hover:text-[#045184]'}`}>{PHONE_NUMBER}</a>
                </div>
                <div className="space-y-1">
                  <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">Project Inquiry</p>
                  <a href={`mailto:${SUPPORT_EMAIL}`} className={`font-black text-xl transition-colors ${isHome ? 'text-white hover:text-[#67c621]' : 'text-white hover:text-[#045184]'}`}>Email Dispatch</a>
                </div>
                <div className="sm:col-span-2 space-y-1">
                  <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">Deployment Zone</p>
                  <p className="text-white font-black text-xl">Greenville, SC & Upstate</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[3rem] p-10 md:p-14 shadow-2xl relative">
              {/* Technical Indicator */}
              <div className="absolute top-8 right-8 flex space-x-1">
                 {[1,2,3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>)}
              </div>

              <div className="text-center mb-10">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl mb-6 shadow-sm ${isHome ? 'bg-[#67c621]/10 text-[#67c621]' : 'bg-[#045184]/10 text-[#045184]'}`}>
                  <Calendar className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-black text-slate-950 mb-3 tracking-tighter">SECURE BOOKING</h3>
                <p className="text-slate-500 font-bold text-sm tracking-wide">Sync with our real-time availability below.</p>
              </div>

              <div className="space-y-4 mb-10">
                {['Select System Category', 'View Real-time Slot', 'Instant Confirmation'].map((step, idx) => (
                  <div key={idx} className={`flex items-center p-5 bg-slate-50 rounded-2xl border border-slate-100 group transition-all ${isHome ? 'hover:border-[#67c621]/30' : 'hover:border-[#045184]/30'}`}>
                    <div className={`w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[10px] font-black text-slate-400 group-hover:text-white transition-all ${isHome ? 'group-hover:bg-[#67c621]' : 'group-hover:bg-[#045184]'}`}>{idx + 1}</div>
                    <div className="ml-4 text-xs font-black uppercase tracking-widest text-slate-600 group-hover:text-slate-900 transition-colors">{step}</div>
                  </div>
                ))}
              </div>

              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center w-full px-10 py-5 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] transition-all duration-300 hover:-translate-y-1 active:scale-95 shadow-2xl group ${primaryBtnClass}`}
              >
                <span>Access Booking Hub</span>
                <ExternalLink className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
