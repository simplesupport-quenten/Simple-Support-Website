
import React from 'react';
import { Home, ChevronRight, Building2 } from 'lucide-react';
import { UserType, SLOGAN } from '../constants';
import Logo from './Logo';

interface UserTypeSelectorProps {
  onSelect: (type: UserType) => void;
  currentType: UserType;
}

const UserTypeSelector: React.FC<UserTypeSelectorProps> = ({ onSelect, currentType }) => {
  if (currentType !== 'none') return null;

  return (
    <div className="fixed inset-0 z-[200] bg-slate-950 flex flex-col items-center justify-start md:justify-center p-4 sm:p-8 md:p-12 overflow-y-auto">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#045184]/15 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[0%] right-[-5%] w-[50%] h-[70%] bg-[#67c621]/10 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center pt-8 md:pt-0">
        <div className="mb-8 md:mb-12 animate-in fade-in slide-in-from-top duration-700 flex flex-col items-center">
          <Logo className="h-10 md:h-16 w-auto mb-4 md:mb-6" color="light" />
          <h1 className="text-3xl md:text-5xl font-black text-white text-center tracking-tighter mb-2 md:mb-4">
            HOW CAN WE HELP?
          </h1>
          <p className="text-[#67c621] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-[10px] md:text-xs text-center">
            {SLOGAN}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full max-w-4xl">
          {/* Home Option */}
          <button
            onClick={() => onSelect('home')}
            className="group relative h-[240px] sm:h-[300px] md:h-[450px] bg-slate-900 border border-white/5 rounded-[2rem] md:rounded-[3rem] overflow-hidden transition-all duration-700 hover:border-[#67c621]/50 hover:-translate-y-2 hover:shadow-[0_40px_80px_-20px_rgba(103,198,33,0.2)] focus:outline-none focus:ring-2 focus:ring-[#67c621]/50"
          >
            <div className="absolute inset-0 grayscale-[0.8] group-hover:grayscale-0 transition-all duration-1000 opacity-20 group-hover:opacity-30">
              <img 
                src="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800" 
                className="w-full h-full object-cover" 
                alt="Smart Home" 
              />
            </div>
            
            <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-end text-left">
              <div className="w-10 h-10 md:w-16 md:h-16 bg-[#67c621]/10 rounded-xl md:rounded-2xl flex items-center justify-center text-[#67c621] mb-4 md:mb-6 group-hover:scale-110 group-hover:bg-[#67c621] group-hover:text-slate-950 transition-all duration-500">
                <Home className="w-5 h-5 md:w-8 md:h-8" />
              </div>
              <h2 className="text-xl md:text-3xl font-black text-white mb-2 md:mb-4 tracking-tight">RESIDENTIAL</h2>
              <p className="text-slate-400 font-medium text-[10px] md:text-sm leading-relaxed mb-4 md:mb-8 max-w-[280px] hidden sm:block">
                Smart home setup, personal devices, WiFi optimization, and home theater support.
              </p>
              <div className="flex items-center text-[8px] md:text-[10px] font-black uppercase tracking-widest text-[#67c621] group-hover:translate-x-2 transition-transform">
                Configure Home Support <ChevronRight className="ml-1 md:ml-2 w-3 h-3 md:w-4 md:h-4" />
              </div>
            </div>
          </button>

          {/* Business Option */}
          <button
            onClick={() => onSelect('business')}
            className="group relative h-[240px] sm:h-[300px] md:h-[450px] bg-slate-900 border border-white/5 rounded-[2rem] md:rounded-[3rem] overflow-hidden transition-all duration-700 hover:border-[#045184]/50 hover:-translate-y-2 hover:shadow-[0_40px_80px_-20px_rgba(4,81,132,0.3)] focus:outline-none focus:ring-2 focus:ring-[#045184]/50"
          >
            <div className="absolute inset-0 grayscale-[0.8] group-hover:grayscale-0 transition-all duration-1000 opacity-20 group-hover:opacity-30">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" 
                className="w-full h-full object-cover" 
                alt="Business Office" 
              />
            </div>
            
            <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-end text-left">
              <div className="w-10 h-10 md:w-16 md:h-16 bg-[#045184]/10 rounded-xl md:rounded-2xl flex items-center justify-center text-[#045184] mb-4 md:mb-6 group-hover:scale-110 group-hover:bg-[#045184] group-hover:text-white transition-all duration-500">
                <Building2 className="w-5 h-5 md:w-8 md:h-8" />
              </div>
              <h2 className="text-xl md:text-3xl font-black text-white mb-2 md:mb-4 tracking-tight">BUSINESS</h2>
              <p className="text-slate-400 font-medium text-[10px] md:text-sm leading-relaxed mb-4 md:mb-8 max-w-[280px] hidden sm:block">
                Managed IT, QuickBooks, structured cabling, and proactive network security.
              </p>
              <div className="flex items-center text-[8px] md:text-[10px] font-black uppercase tracking-widest text-[#045184] group-hover:translate-x-2 transition-transform">
                Configure Business IT <ChevronRight className="ml-1 md:ml-2 w-3 h-3 md:w-4 md:h-4" />
              </div>
            </div>
          </button>
        </div>

        <p className="mt-8 md:mt-16 mb-8 md:mb-0 text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-slate-600 text-center">
          SECURE | PROFESSIONAL | SCALABLE
        </p>
      </div>
    </div>
  );
};

export default UserTypeSelector;
