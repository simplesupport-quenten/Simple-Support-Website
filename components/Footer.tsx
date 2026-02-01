
import React from 'react';
import { Twitter, Facebook, Instagram, Linkedin, ArrowRight, Activity, Download, ShieldCheck, ExternalLink, HardDrive, Layout, MousePointer2 } from 'lucide-react';
import { SLOGAN, SUPPORT_EMAIL, UserType, SERVICES, BOOKING_URL } from '../constants';
import Logo from './Logo';

interface FooterProps {
  userType: UserType;
  onNavigateSection?: (id: string) => void;
  onSelectServiceByName?: (name: string) => void;
  onOpenLegal?: (type: 'terms' | 'privacy') => void;
}

const Footer: React.FC<FooterProps> = ({ userType, onNavigateSection, onSelectServiceByName, onOpenLegal }) => {
  const handleFooterLink = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (onNavigateSection && (href.startsWith('#') || href === '#software' || href === '#remote' || href === '#speed-test')) {
      e.preventDefault();
      onNavigateSection(href);
    }
  };

  const handleServiceClick = (e: React.MouseEvent<HTMLAnchorElement>, name: string) => {
    e.preventDefault();
    if (onSelectServiceByName) {
      onSelectServiceByName(name);
    }
  };

  // Expanded list of all core solutions to be filtered by profile
  const footerServices = [
    'Remote Support',
    'Managed IT (MSP)',
    'Network Solutions',
    'Residential ISP Prep',
    'Commercial ISP Solutions',
    'QuickBooks Support',
    'TV Mounting',
    'Low Voltage Cabling',
    'Security Camera Installations',
    'Pro Audio / Video',
    'Device Repair',
    'Starlink Installations',
    'E-Recycling Services'
  ].filter(name => {
    const service = SERVICES.find(s => s.name === name);
    if (!service) return true;
    return service.audience === 'both' || service.audience === userType;
  });

  const brandColor = userType === 'home' ? 'group-hover:text-[#67c621]' : 'group-hover:text-[#045184]';
  const accentColor = userType === 'home' ? 'text-[#67c621]' : 'text-[#045184]';
  const brandBg = userType === 'home' ? 'bg-[#67c621]' : 'bg-[#045184]';

  return (
    <footer className="bg-slate-900 text-white pt-24 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Identity Column */}
          <div className="space-y-8">
            <div className="flex flex-col">
              <Logo className="h-10 w-auto mb-2" color="light" userType={userType} />
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mt-2">
                {SLOGAN}
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm font-medium">
              Empowering home users and small businesses through simplified technology solutions and enterprise-grade support.
            </p>
            <div className="flex flex-wrap gap-3">
              <SocialIcon href="https://x.com/simplebiz864" icon={<Twitter className="w-5 h-5" />} label="Twitter" />
              <SocialIcon href="http://www.facebook.com/simplesupportsc" icon={<Facebook className="w-5 h-5" />} label="Facebook" />
              <SocialIcon href="https://instagram.com/simplebiz864" icon={<Instagram className="w-5 h-5" />} label="Instagram" />
              <SocialIcon href="https://linkedin.com/company/simplebiz864" icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
              <SocialIcon href="https://www.yelp.com/biz/simple-support-greenville" icon={<YelpIcon />} label="Yelp" />
            </div>
          </div>

          {/* Service Catalog Column - Expanded */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.4em] text-white mb-8 border-b border-white/5 pb-4">Service Catalog</h4>
            <ul className="space-y-4 text-slate-400 text-[11px] font-bold uppercase tracking-wider">
              {footerServices.map(name => (
                <li key={name}>
                   <a 
                    href="#" 
                    onClick={(e) => handleServiceClick(e, name)}
                    className={`flex items-center space-x-3 transition-colors group ${brandColor}`}
                   >
                     <span className="opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all"><ArrowRight className="w-3.5 h-3.5" /></span>
                     <span>{name}</span>
                   </a>
                </li>
              ))}
              <li className="pt-2">
                <a href="#services" onClick={(e) => handleFooterLink(e, '#services')} className={`flex items-center space-x-3 transition-colors group ${brandColor}`}>
                  <span className="opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all"><ArrowRight className="w-3.5 h-3.5" /></span>
                  <span className={accentColor}>View All Capabilities</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Technical Toolbox Column */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.4em] text-white mb-8 border-b border-white/5 pb-4">Technical Toolbox</h4>
            <ul className="space-y-5 text-slate-400 text-[11px] font-bold uppercase tracking-wider">
              <li>
                <a 
                  href="#remote" 
                  onClick={(e) => handleFooterLink(e, '#remote')}
                  className={`flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 transition-all group hover:bg-white hover:border-white ${brandColor}`}
                >
                  <div className="flex items-center space-x-3">
                    <MousePointer2 className={`w-4 h-4 ${accentColor} group-hover:text-slate-950`} />
                    <span className="group-hover:text-slate-900">Instant Remote Help</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 opacity-40 group-hover:text-slate-900" />
                </a>
              </li>
              <li>
                <a 
                  href="#speed-test" 
                  onClick={(e) => handleFooterLink(e, '#speed-test')}
                  className={`flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 transition-all group hover:bg-white hover:border-white ${brandColor}`}
                >
                  <div className="flex items-center space-x-3">
                    <Activity className={`w-4 h-4 ${accentColor} group-hover:text-slate-950`} />
                    <span className="group-hover:text-slate-900">Run Speed Test</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 opacity-40 group-hover:text-slate-900" />
                </a>
              </li>
              <li>
                <a 
                  href="#software" 
                  onClick={(e) => handleFooterLink(e, '#software')}
                  className={`flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 transition-all group hover:bg-white hover:border-white ${brandColor}`}
                >
                  <div className="flex items-center space-x-3">
                    <Layout className={`w-4 h-4 ${accentColor} group-hover:text-slate-950`} />
                    <span className="group-hover:text-slate-900">Software Hub</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 opacity-40 group-hover:text-slate-900" />
                </a>
              </li>
              <li>
                <a 
                  href={BOOKING_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 transition-all group hover:bg-white hover:border-white ${brandColor}`}
                >
                  <div className="flex items-center space-x-3">
                    <HardDrive className={`w-4 h-4 ${accentColor} group-hover:text-slate-950`} />
                    <span className="group-hover:text-slate-900">Client Hub Login</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 opacity-40 group-hover:text-slate-900" />
                </a>
              </li>
              <li className="pt-2">
                <div className="flex items-center space-x-3 px-3 py-1">
                  <div className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-500">System Status: Optimal</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Dispatch Column */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.4em] text-white mb-8 border-b border-white/5 pb-4">Engineering Dispatch</h4>
            <p className="text-slate-400 mb-6 text-sm font-medium">Join our network for critical tech alerts and security updates.</p>
            <form className="flex flex-col space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Secure email address..."
                className="bg-slate-800 border border-slate-700/50 rounded-xl px-5 py-3 w-full focus:ring-2 focus:ring-slate-600 outline-none text-xs font-bold transition-all"
              />
              <button className={`px-6 py-3 rounded-xl transition-all font-black text-[10px] uppercase tracking-widest shadow-lg ${brandBg} text-white hover:brightness-110 active:scale-95`}>
                Activate Subscription
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-slate-500 text-[10px] font-black uppercase tracking-widest gap-6">
          <p>© {new Date().getFullYear()} Simple Support. Greenville, SC. All rights reserved.</p>
          <div className="flex space-x-10">
            <button onClick={() => onOpenLegal?.('privacy')} className="hover:text-slate-300 transition-colors uppercase">Privacy Protocol</button>
            <button onClick={() => onOpenLegal?.('terms')} className="hover:text-slate-300 transition-colors uppercase">Terms & Conditions</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface SocialIconProps {
  icon: React.ReactNode;
  href: string;
  label: string;
}

const SocialIcon = ({ icon, href, label }: SocialIconProps) => (
  <a 
    href={href} 
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="w-11 h-11 bg-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:bg-slate-700 hover:text-white transition-all transform hover:-translate-y-1 shadow-md"
  >
    {icon}
  </a>
);

const YelpIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M11.96 15.65c-.17.14-.36.21-.57.21l-1.34-.14c-.17-.02-.3-.1-.38-.26-.08-.15-.09-.31-.03-.49l.66-1.57c.06-.18.17-.3.33-.38.16-.08.33-.09.49-.03l1.34.14c.17.02.3.1.38.26.08.15.09.31.03.49l-.66 1.57c-.06.18-.17.3-.33.38l-.32.02zm-.66-6.42l-.17-.18c-.16-.16-.25-.36-.26-.57 0-.21.07-.41.22-.58l.94-1.07c.15-.17.34-.28.56-.32.22-.04.44.01.64.15.2.14.33.34.39.58l.42 1.63c.05.21.03.41-.06.62-.09.2-.24.36-.45.45l-.48.2c-.17.07-.33.09-.49.07-.16-.02-.31-.08-.45-.16l-.81-.83zm4.51 3.5c-.21.04-.42.02-.62-.05l-1.35-.49c-.17-.07-.31-.19-.4-.36-.09-.17-.12-.36-.07-.56l.39-1.57c.04-.21.15-.38.33-.51.18-.13.39-.18.6-.14l1.35.49c.17.07.31.19.4.36.09.17.12.36.07.56l-.39 1.57c-.04.21-.15.38-.33.51-.18.13-.39.18-.6.14l-.32.05zm-1.8 3.5l.1.1c.19.19.31.42.36.65.05.24.01.46-.1.68l-.75 1.15c-.12.2-.28.34-.5.44s-.44.11-.66.04c-.22-.07-.39-.21-.52-.42l-.89-1.42c-.12-.2-.16-.42-.1-.65.05-.23.18-.41.38-.56l.48-.35c.16-.11.34-.17.54-.18.2 0 .39.04.57.12l1.09.83zm-4.32-.42l-.12.11c-.2.17-.43.25-.66.24s-.46-.1-.65-.28l-1.01-.94c-.16-.15-.24-.35-.25-.56s.05-.42.2-.62c.15-.2.34-.33.56-.4l1.52-.42c.22-.06.44-.04.65.06.21.1.37.26.47.48l.24.52c.08.18.12.36.1.55-.02.19-.08.36-.18.52l-.87.82zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
  </svg>
);

export default Footer;
