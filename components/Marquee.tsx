
import React from 'react';
import { UserType } from '../constants';
import { Apple, Monitor, Globe, Smartphone, Laptop, Wifi, Shield, Cpu, Cloud, Database, Speaker, Tv } from 'lucide-react';

interface MarqueeProps {
  userType: UserType;
}

const Marquee: React.FC<MarqueeProps> = ({ userType }) => {
  const brands = [
    { name: 'Apple Ecosystem', icon: <Apple className="w-5 h-5" /> },
    { name: 'Microsoft Azure', icon: <Monitor className="w-5 h-5" /> },
    { name: 'Ubiquiti UniFi', icon: <Wifi className="w-5 h-5" /> },
    { name: 'Starlink', icon: <Globe className="w-5 h-5" /> },
    { name: 'Sonos Audio', icon: <Speaker className="w-5 h-5" /> },
    { name: 'QuickBooks', icon: <Database className="w-5 h-5" /> },
    { name: 'Cisco Systems', icon: <Shield className="w-5 h-5" /> },
    { name: 'NVIDIA AI', icon: <Cpu className="w-5 h-5" /> },
    { name: 'Google Workspace', icon: <Cloud className="w-5 h-5" /> },
    { name: 'Android OS', icon: <Smartphone className="w-5 h-5" /> },
    { name: 'Dell Technologies', icon: <Laptop className="w-5 h-5" /> },
    { name: 'Samsung Display', icon: <Tv className="w-5 h-5" /> },
  ];

  const brandColor = userType === 'home' ? 'text-[#67c621]' : 'text-[#045184]';
  const brandBg = userType === 'home' ? 'bg-[#67c621]/10' : 'bg-[#045184]/10';

  // Double the brands to create seamless loop
  const displayBrands = [...brands, ...brands];

  return (
    <div className="bg-slate-950 py-16 overflow-hidden border-y border-white/5 relative">
      <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-slate-950 via-slate-950/80 to-transparent z-10"></div>
      
      <div className="flex items-center space-x-12 animate-marquee whitespace-nowrap">
        {displayBrands.map((brand, idx) => (
          <div 
            key={idx} 
            className="flex items-center space-x-6 px-10 py-4 rounded-full bg-white/5 border border-white/5 hover:border-white/10 transition-all duration-500 group cursor-default"
          >
            <div className={`p-2.5 rounded-full ${brandBg} ${brandColor} group-hover:scale-110 group-hover:bg-white transition-all`}>
              {brand.icon}
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 group-hover:text-white transition-colors">
              {brand.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
