
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, User, Briefcase, RefreshCcw, ArrowLeft, Home as HomeIcon, Zap, Sparkles, Search, Command, BookOpen, HelpCircle, ArrowRight, Activity } from 'lucide-react';
import { NAV_LINKS, BOOKING_URL, SLOGAN, UserType, SERVICES, TROUBLESHOOTING_RESOURCES, INSTALLATION_GUIDES, FAQ_DATA, GuideContent, ServiceDetail } from '../constants';
import Logo from './Logo';

interface NavbarProps {
  onSwitchProfile: () => void;
  currentUserType: UserType;
  isDetailPage?: boolean;
  onBackHome?: () => void;
  onNavigateSection?: (id: string) => void;
  onSelectServiceByName?: (name: string) => void;
  onOpenGuide?: (guide: GuideContent) => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  onSwitchProfile, 
  currentUserType, 
  isDetailPage, 
  onBackHome, 
  onNavigateSection, 
  onSelectServiceByName,
  onOpenGuide
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const accentColor = currentUserType === 'home' ? 'text-[#67c621]' : 'text-[#045184]';
  const brandBg = currentUserType === 'home' ? 'bg-[#67c621]' : 'bg-[#045184]';
  const brandBgLight = currentUserType === 'home' ? 'bg-[#67c621]/10' : 'bg-[#045184]/10';

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isSubItem: boolean = false, itemName: string = '') => {
    if (href === '#remote') {
      e.preventDefault();
      onNavigateSection?.('#remote');
      setIsOpen(false);
      return;
    }

    if (href === '#speed-test') {
      e.preventDefault();
      onNavigateSection?.('#speed-test');
      setIsOpen(false);
      return;
    }

    if (isSubItem && onSelectServiceByName) {
      e.preventDefault();
      onSelectServiceByName(itemName);
      setActiveDropdown(null);
      setIsOpen(false);
      return;
    }

    if (href.startsWith('#')) {
      e.preventDefault();
      onNavigateSection?.(href);
      setIsOpen(false);
    } else {
      setIsOpen(false);
    }
  };

  const getSearchResults = () => {
    if (!searchQuery.trim()) return { services: [], guides: [], faqs: [] };
    const query = searchQuery.toLowerCase();

    const filteredServices = SERVICES.filter(s => 
      (s.audience === currentUserType || s.audience === 'both') && 
      (s.name.toLowerCase().includes(query) || s.description.toLowerCase().includes(query))
    );

    const filteredGuides = [...TROUBLESHOOTING_RESOURCES, ...INSTALLATION_GUIDES].filter(g => 
      (g.audience === currentUserType || g.audience === 'both') &&
      (g.title.toLowerCase().includes(query) || g.description.toLowerCase().includes(query))
    );

    const filteredFaqs = FAQ_DATA.filter(f => 
      f.question.toLowerCase().includes(query) || f.answer.toLowerCase().includes(query)
    );

    return { services: filteredServices, guides: filteredGuides, faqs: filteredFaqs };
  };

  const results = getSearchResults();
  const hasResults = results.services.length > 0 || results.guides.length > 0 || results.faqs.length > 0;

  return (
    <div className={`fixed top-0 w-full z-[100] transition-all duration-700 px-4 sm:px-8 py-6 ${scrolled ? 'py-4' : 'py-8'}`}>
      <nav 
        className={`mx-auto max-w-6xl transition-all duration-700 relative transform-gpu border ${
          isOpen ? 'rounded-[2rem]' : 'rounded-full'
        } ${
          scrolled 
            ? `${isOpen ? 'bg-slate-950 shadow-2xl' : 'bg-slate-950/95 shadow-lg'} border-white/20 backdrop-blur-3xl px-6 md:px-10 ${isOpen ? 'scale-100' : 'scale-[0.98]'}` 
            : `${isOpen ? 'bg-white shadow-2xl' : 'bg-white/80 shadow-xl'} border-slate-200/50 backdrop-blur-xl px-8 md:px-12 scale-100`
        }`}
      >
        <div className="relative z-10 flex justify-between items-center py-3">
          <div className="flex items-center space-x-8">
            <div 
              className="flex items-center space-x-3 group cursor-pointer" 
              onClick={() => onBackHome ? onBackHome() : window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <Logo 
                className="h-7 md:h-9 w-auto transition-all duration-700 group-hover:scale-105" 
                color={scrolled ? 'light' : 'original'}
                userType={currentUserType}
              />
            </div>
            
            {isDetailPage && (
              <button 
                onClick={onBackHome}
                className={`hidden lg:flex items-center space-x-2 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-500 ${scrolled ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-slate-900/5 text-slate-900 hover:bg-slate-900/10'}`}
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Return</span>
              </button>
            )}
          </div>

          <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
            {NAV_LINKS.map((link) => (
              <div 
                key={link.name} 
                className="relative h-full flex items-center"
                onMouseEnter={() => link.subItems && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={link.href}
                  onClick={(e) => handleNavLinkClick(e, link.href)}
                  className={`flex items-center space-x-1 font-bold text-[11px] uppercase tracking-widest transition-all duration-500 ${
                    scrolled 
                      ? (activeDropdown === link.name ? accentColor : 'text-slate-400 hover:text-white') 
                      : (activeDropdown === link.name ? accentColor : 'text-slate-900 hover:text-slate-600')
                  }`}
                >
                  <span>{link.name}</span>
                  {link.subItems && <ChevronDown className={`w-3 h-3 transition-transform duration-500 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />}
                </a>

                {link.subItems && (
                  <div 
                    className={`absolute left-1/2 -translate-x-1/2 top-full pt-6 w-[600px] transition-all duration-700 ${
                      activeDropdown === link.name 
                        ? 'opacity-100 scale-100 translate-y-0' 
                        : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'
                    }`}
                  >
                    <div className="bg-slate-950 border border-white/10 rounded-[2.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] overflow-hidden p-8 grid grid-cols-2 gap-10 backdrop-blur-3xl">
                      <div>
                        <div className="flex items-center space-x-2 mb-6 border-b border-white/5 pb-4">
                          <HomeIcon className="w-3.5 h-3.5 text-[#67c621]" />
                          <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-500">Residential</span>
                        </div>
                        <div className="space-y-1">
                          {link.subItems.filter(s => s.audience === 'home' || s.audience === 'both').slice(0, 6).map(sub => (
                            <button
                              key={sub.name}
                              onClick={(e: any) => handleNavLinkClick(e, sub.href, true, sub.name)}
                              className="w-full flex items-center space-x-3 px-3 py-2 text-[10px] font-black uppercase tracking-wider text-slate-400 hover:text-[#67c621] hover:bg-white/5 rounded-xl transition-all group"
                            >
                              <div className="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-[#67c621] transition-colors"></div>
                              <span>{sub.name}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 mb-6 border-b border-white/5 pb-4">
                          <Briefcase className="w-3.5 h-3.5 text-[#045184]" />
                          <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-500">Business IT</span>
                        </div>
                        <div className="space-y-1">
                          {link.subItems.filter(s => s.audience === 'business' || s.audience === 'both').slice(0, 6).map(sub => (
                            <button
                              key={sub.name}
                              onClick={(e: any) => handleNavLinkClick(e, sub.href, true, sub.name)}
                              className="w-full flex items-center space-x-3 px-3 py-2 text-[10px] font-black uppercase tracking-wider text-slate-400 hover:text-[#045184] hover:bg-white/5 rounded-xl transition-all group"
                            >
                              <div className="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-[#045184] transition-colors"></div>
                              <span>{sub.name}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <button
              onClick={() => setIsSearchOpen(true)}
              className={`flex items-center space-x-3 px-4 py-2.5 rounded-full transition-all duration-500 hover:scale-105 active:scale-95 ${
                scrolled ? 'bg-white/5 text-slate-400 hover:text-white' : 'bg-slate-100 text-slate-500 hover:text-slate-900'
              }`}
              title="Search Support (Cmd+K)"
            >
              <Search className="w-4 h-4" />
              <div className={`hidden lg:flex items-center space-x-1 px-2 py-0.5 rounded-md border ${scrolled ? 'border-white/20 bg-white/5 text-white' : 'border-slate-300 bg-white text-slate-600 shadow-sm'}`}>
                <Command className="w-2.5 h-2.5" />
                <span className="text-[9px] font-black tracking-widest">K</span>
              </div>
            </button>

            <button
              onClick={onSwitchProfile}
              className={`p-2.5 rounded-full transition-all duration-500 hover:scale-110 active:scale-95 ${
                scrolled ? 'bg-white/5 text-slate-400 hover:text-white' : 'bg-slate-100 text-slate-500 hover:text-slate-900'
              }`}
              title="Switch Profile"
            >
              <RefreshCcw className="w-4 h-4" />
            </button>

            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden md:inline-flex items-center justify-center px-8 py-3 rounded-full font-black text-[10px] uppercase tracking-[0.2em] transition-all duration-700 hover:-translate-y-1 active:scale-95 shadow-xl ${
                scrolled 
                  ? `${brandBg} text-white shadow-black/40` 
                  : 'bg-slate-900 text-white hover:shadow-slate-200'
              }`}
            >
              Request Tech
            </a>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2.5 rounded-xl transition-all duration-300 ${
                  isOpen 
                    ? (scrolled ? 'bg-white/10 text-white' : 'bg-slate-900/10 text-slate-900') 
                    : (scrolled ? 'text-white' : 'text-slate-900')
                }`}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        <div 
          className={`md:hidden overflow-hidden transition-all duration-700 ${
            isOpen ? 'max-h-[80vh] pb-8 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="space-y-2 px-1">
            {NAV_LINKS.map(link => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavLinkClick(e, link.href)}
                className={`block px-6 py-4 rounded-2xl font-black text-[11px] uppercase tracking-[0.3em] transition-colors ${
                  scrolled 
                    ? 'bg-white/5 text-white hover:bg-white/10' 
                    : 'bg-slate-50 text-slate-900 hover:bg-slate-100'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-6 grid grid-cols-2 gap-4">
              <button 
                onClick={onSwitchProfile} 
                className={`px-6 py-4 rounded-2xl text-[9px] font-black uppercase tracking-widest transition-all ${
                  scrolled 
                    ? 'bg-white/10 text-white border border-white/10 hover:bg-white/20' 
                    : 'bg-slate-100 text-slate-900 border border-slate-200 hover:bg-slate-200'
                }`}
              >
                Profile
              </button>
              <a 
                href={BOOKING_URL} 
                className={`px-6 py-4 rounded-2xl text-[9px] font-black uppercase tracking-widest text-center transition-all ${brandBg} text-white hover:brightness-110 active:scale-95`}
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </nav>

      {isSearchOpen && (
        <div className="fixed inset-0 z-[200] flex items-start justify-center p-4 sm:p-8 md:p-12 lg:p-24 overflow-hidden">
          <div 
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-2xl animate-in fade-in duration-500"
            onClick={() => setIsSearchOpen(false)}
          ></div>
          
          <div className="relative w-full max-w-4xl h-full max-h-[800px] flex flex-col animate-in zoom-in-95 slide-in-from-top-8 duration-500">
            <div className="relative group bg-slate-900 rounded-t-[3rem] border-x border-t border-white/10 p-8 shadow-2xl">
              <Search className={`absolute left-14 top-1/2 -translate-y-1/2 w-6 h-6 ${accentColor}`} />
              <input
                ref={searchInputRef}
                type="text"
                placeholder={`Search ${currentUserType} services, guides, or help...`}
                className="w-full bg-slate-950/50 text-white border border-white/10 rounded-2xl py-6 pl-16 pr-8 text-xl font-bold placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button 
                onClick={() => setIsSearchOpen(false)}
                className="absolute right-14 top-1/2 -translate-y-1/2 p-2 text-slate-500 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto bg-slate-900 rounded-b-[3rem] border-x border-b border-white/10 p-8 pt-0 scrollbar-thin">
              {searchQuery.trim() ? (
                hasResults ? (
                  <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8">
                      {/* Special result for speed test if it matches */}
                      {('speed test'.includes(searchQuery.toLowerCase())) && (
                        <button
                          onClick={() => {
                            onNavigateSection?.('#speed-test');
                            setIsSearchOpen(false);
                            setSearchQuery('');
                          }}
                          className="group flex items-center space-x-4 p-5 bg-slate-950 border border-white/5 rounded-2xl text-left transition-all hover:bg-white/5 hover:border-white/20"
                        >
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${brandBgLight} ${accentColor} group-hover:scale-110 transition-transform`}>
                            <Activity className="w-5 h-5" />
                          </div>
                          <div>
                            <h5 className="text-sm font-black text-white uppercase tracking-tight">Run Speed Test</h5>
                            <p className="text-[10px] text-slate-500 font-bold line-clamp-1">Diagnose your network throughput and latency.</p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-slate-700 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        </button>
                      )}

                      {results.services.map((s) => (
                        <button
                          key={s.name}
                          onClick={() => {
                            onSelectServiceByName?.(s.name);
                            setIsSearchOpen(false);
                            setSearchQuery('');
                          }}
                          className="group flex items-center space-x-4 p-5 bg-slate-950 border border-white/5 rounded-2xl text-left transition-all hover:bg-white/5 hover:border-white/20"
                        >
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${brandBgLight} ${accentColor} group-hover:scale-110 transition-transform`}>
                            {s.icon}
                          </div>
                          <div>
                            <h5 className="text-sm font-black text-white uppercase tracking-tight">{s.name}</h5>
                            <p className="text-[10px] text-slate-500 font-bold line-clamp-1">{s.description}</p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-slate-700 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center py-24 text-center">
                    <Search className="w-16 h-16 text-slate-600 mb-6" />
                    <h4 className="text-xl font-black text-white uppercase tracking-tighter mb-2">No matching resources</h4>
                  </div>
                )
              ) : (
                <div className="h-full flex flex-col items-center justify-center py-24 text-center">
                  <Logo className="h-12 w-auto mb-8 opacity-20 grayscale" userType={currentUserType} />
                  <h4 className="text-slate-500 text-xs font-black uppercase tracking-[0.5em]">Global Diagnostic Search</h4>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
