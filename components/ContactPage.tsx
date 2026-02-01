
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Calendar, ExternalLink, ShieldCheck, Send, Clock, MessageSquare, ArrowLeft, Sparkles, User, Briefcase } from 'lucide-react';
import { BOOKING_URL, PHONE_NUMBER, SUPPORT_EMAIL, UserType, SLOGAN } from '../constants';

interface ContactPageProps {
  onBack: () => void;
  userType: UserType;
}

const ContactPage: React.FC<ContactPageProps> = ({ onBack, userType }) => {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const brandColor = userType === 'home' ? 'text-[#67c621]' : 'text-[#045184]';
  const brandBg = userType === 'home' ? 'bg-[#67c621]' : 'bg-[#045184]';
  const brandBorder = userType === 'home' ? 'border-[#67c621]/20' : 'border-[#045184]/20';
  const brandBgLight = userType === 'home' ? 'bg-[#67c621]/5' : 'bg-[#045184]/5';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
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
            <Sparkles className={`w-3.5 h-3.5 ${brandColor}`} />
            <span>Deployment Readiness: Active</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase mb-8 leading-none italic">
            GET IN <span className={brandColor}>TOUCH</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed max-w-3xl mx-auto mb-12">
            Engineering-grade support is just a message away. Reach out for diagnostics, project quotes, or immediate emergency support.
          </p>
          
          <div className="flex justify-center">
             <button 
              onClick={onBack}
              className="inline-flex items-center justify-center px-10 py-5 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-white group"
            >
              <ArrowLeft className="mr-4 w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Go Back Home
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Contact Form Area */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-6">
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">Project Diagnostic Form</h2>
              <div className="bg-slate-50 p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-sm relative overflow-hidden">
                {submitted ? (
                  <div className="py-20 text-center animate-in zoom-in duration-500">
                    <div className={`w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center text-white ${brandBg}`}>
                      <ShieldCheck className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-950 uppercase tracking-tighter mb-4">Transmission Received</h3>
                    <p className="text-slate-500 font-medium">Our dispatch team has been notified. We will reach out within 60 minutes.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">Full Name</label>
                        <input 
                          required
                          type="text" 
                          placeholder="Your Name"
                          className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all"
                          style={{ '--tw-ring-color': userType === 'home' ? '#67c621' : '#045184' } as any}
                          value={formState.name}
                          onChange={e => setFormState({...formState, name: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">Email Address</label>
                        <input 
                          required
                          type="email" 
                          placeholder="your@email.com"
                          className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all"
                          style={{ '--tw-ring-color': userType === 'home' ? '#67c621' : '#045184' } as any}
                          value={formState.email}
                          onChange={e => setFormState({...formState, email: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">Subject</label>
                      <select 
                        className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 appearance-none transition-all"
                        style={{ '--tw-ring-color': userType === 'home' ? '#67c621' : '#045184' } as any}
                        value={formState.subject}
                        onChange={e => setFormState({...formState, subject: e.target.value})}
                      >
                        <option value="">Select Department</option>
                        <option value="Residential">Residential Support</option>
                        <option value="Commercial">Commercial IT</option>
                        <option value="Billing">Billing Inquiry</option>
                        <option value="Emergency">Emergency Call-out</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">Message / Diagnostic Notes</label>
                      <textarea 
                        required
                        rows={5}
                        placeholder="Describe the technical challenge..."
                        className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all resize-none"
                        style={{ '--tw-ring-color': userType === 'home' ? '#67c621' : '#045184' } as any}
                        value={formState.message}
                        onChange={e => setFormState({...formState, message: e.target.value})}
                      ></textarea>
                    </div>
                    <button 
                      type="submit"
                      className={`w-full py-5 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] flex items-center justify-center space-x-3 transition-all duration-300 hover:-translate-y-1 active:scale-95 shadow-2xl ${brandBg} text-white`}
                    >
                      <span>Deploy Message</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}
                
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <MessageSquare className="w-32 h-32" />
                </div>
              </div>
            </div>

            {/* Coverage Map Placeholder/Info */}
            <div className={`p-10 rounded-[3rem] border ${brandBorder} ${brandBgLight} flex flex-col md:flex-row items-center gap-8`}>
              <div className={`w-20 h-20 rounded-3xl bg-white border ${brandBorder} flex items-center justify-center shrink-0`}>
                <MapPin className={`w-10 h-10 ${brandColor}`} />
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-950 uppercase tracking-tighter mb-2">Service Radius</h3>
                <p className="text-slate-600 font-medium">We provide on-site engineering support across Greenville, SC and the surrounding Upstate area, plus full remote diagnostics worldwide.</p>
              </div>
            </div>
          </div>

          {/* Sidebar Info Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="sticky top-40 space-y-8">
              
              {/* Communication Channels */}
              <div className="bg-slate-950 p-10 md:p-12 rounded-[3rem] text-white shadow-2xl border border-white/5 relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 blur-[60px] opacity-20 ${brandBg}`}></div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 mb-10">Direct Channels</h3>
                
                <div className="space-y-10">
                  <div className="group cursor-pointer">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-2">Engineering Line</p>
                    <a href={`tel:${PHONE_NUMBER}`} className="flex items-center space-x-4">
                      <div className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-slate-950 transition-all ${brandColor}`}>
                        <Phone className="w-5 h-5" />
                      </div>
                      <span className="text-2xl font-black tracking-widest">{PHONE_NUMBER}</span>
                    </a>
                  </div>

                  <div className="group cursor-pointer">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-2">Project Inquiries</p>
                    <a href={`mailto:${SUPPORT_EMAIL}`} className="flex items-center space-x-4">
                      <div className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-slate-950 transition-all ${brandColor}`}>
                        <Mail className="w-5 h-5" />
                      </div>
                      <span className="text-sm font-black uppercase tracking-widest break-all">{SUPPORT_EMAIL}</span>
                    </a>
                  </div>

                  <div className="group">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-2">Standard Uptime</p>
                    <div className="flex items-center space-x-4">
                      <div className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center ${brandColor}`}>
                        <Clock className="w-5 h-5" />
                      </div>
                      <div className="text-sm font-black uppercase tracking-widest">
                        MON — FRI <br />
                        <span className="text-slate-400">08:00 — 18:00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Secure Booking Card */}
              <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl relative group overflow-hidden">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${brandBgLight} ${brandColor}`}>
                    <Calendar className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-black uppercase tracking-tighter">Secure Slot</h3>
                </div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-8">Skip the queue. Book an engineering session in real-time.</p>
                <a 
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center w-full py-5 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] transition-all duration-300 hover:-translate-y-1 active:scale-95 shadow-xl ${brandBg} text-white`}
                >
                  <span>Open Hub</span>
                  <ExternalLink className="ml-3 w-4 h-4" />
                </a>
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

export default ContactPage;
