
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import ServicesSection from './components/ServicesSection';
import CounterSection from './components/CounterSection';
import Troubleshooting from './components/Troubleshooting';
import InstallationGuides from './components/InstallationGuides';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import ContactPage from './components/ContactPage';
import RemoteSupportPage from './components/RemoteSupportPage';
import SpeedTestPage from './components/SpeedTestPage';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';
import SupportBot from './components/SupportBot';
import GuideModal from './components/GuideModal';
import ServicePage from './components/ServicePage';
import AllServicesPage from './components/AllServicesPage';
import SoftwarePage from './components/SoftwarePage';
import ScrollToTop from './components/ScrollToTop';
import UserTypeSelector from './components/UserTypeSelector';
import LegalModal from './components/LegalModal';
import { GuideContent, ServiceDetail, UserType, SERVICES } from './constants';

function App() {
  const [userType, setUserType] = useState<UserType>('none');
  const [activeGuide, setActiveGuide] = useState<GuideContent | null>(null);
  const [activeService, setActiveService] = useState<ServiceDetail | null>(null);
  const [view, setView] = useState<'home' | 'service' | 'all-services' | 'contact' | 'remote' | 'software' | 'speed-test'>('home');
  const [activeLegal, setActiveLegal] = useState<'terms' | 'privacy' | null>(null);

  // Handle browser back button/scrolling when changing views
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view, activeService]);

  // Setup Scroll Observer for high-end staggered reveal effects
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          
          // If it's a reveal-group, stagger its children manually for better control
          if (entry.target.classList.contains('reveal-group')) {
            const children = entry.target.querySelectorAll('.reveal-element');
            children.forEach((child, idx) => {
              (child as HTMLElement).style.animationDelay = `${idx * 0.15}s`;
              child.classList.add('is-visible');
            });
          }
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal-element, .reveal-group');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, [view, userType]);

  const openGuide = (guide: GuideContent) => setActiveGuide(guide);
  const closeGuide = () => setActiveGuide(null);
  
  const openService = (service: ServiceDetail) => {
    // AUTO-SWITCH PROFILE: If a service is specific to an audience, switch the brand theme automatically
    if (service.audience === 'home' || service.audience === 'business') {
      setUserType(service.audience);
    }

    if (service.name === 'Remote Support') {
      setView('remote');
      return;
    }
    setActiveService(service);
    setView('service');
  };

  const openServiceByName = (name: string) => {
    const service = SERVICES.find(s => s.name === name);
    if (service) {
      openService(service);
    }
  };

  const openAllServices = () => {
    setView('all-services');
  };

  const goBackToHome = (sectionId?: string) => {
    if (sectionId === '#contact') {
      setView('contact');
      return;
    }
    
    if (sectionId === '#remote') {
      setView('remote');
      return;
    }

    if (sectionId === '#software') {
      setView('software');
      return;
    }

    if (sectionId === '#speed-test') {
      setView('speed-test');
      return;
    }
    
    setView('home');
    setActiveService(null);
    if (sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleSwitchProfile = () => {
    setUserType('none');
    setView('home');
    setActiveService(null);
  };

  return (
    <div className="min-h-screen bg-white relative selection:bg-slate-900 selection:text-white">
      <UserTypeSelector onSelect={setUserType} currentType={userType} />
      
      {userType !== 'none' && (
        <>
          <Navbar 
            onSwitchProfile={handleSwitchProfile} 
            currentUserType={userType} 
            isDetailPage={view !== 'home'}
            onBackHome={() => goBackToHome()}
            onNavigateSection={(id) => goBackToHome(id)}
            onSelectServiceByName={openServiceByName}
            onOpenGuide={openGuide}
          />
          
          <main className="transition-all duration-1000">
            {view === 'home' ? (
              <>
                <Hero userType={userType} />
                <Marquee userType={userType} />
                <div className="reveal-group">
                  <ServicesSection 
                    userType={userType} 
                    setUserType={setUserType} 
                    onOpenService={openService} 
                    onViewAll={openAllServices}
                  />
                  <CounterSection userType={userType} />
                  <Troubleshooting onOpenGuide={openGuide} userType={userType} />
                  <InstallationGuides onOpenGuide={openGuide} userType={userType} />
                  <Testimonials userType={userType} />
                  <WhyChooseUs userType={userType} />
                  <FAQ userType={userType} />
                  <Contact userType={userType} />
                </div>
              </>
            ) : view === 'service' ? (
              <ServicePage 
                service={activeService} 
                onBack={() => goBackToHome()} 
                onOpenService={openService}
                userType={userType} 
              />
            ) : view === 'all-services' ? (
              <AllServicesPage 
                onOpenService={openService}
                onBack={() => goBackToHome()}
                userType={userType}
              />
            ) : view === 'contact' ? (
              <ContactPage 
                onBack={() => goBackToHome()}
                userType={userType}
              />
            ) : view === 'software' ? (
              <SoftwarePage 
                onBack={() => goBackToHome()}
                userType={userType}
              />
            ) : view === 'speed-test' ? (
              <SpeedTestPage 
                onBack={() => goBackToHome()}
                userType={userType}
              />
            ) : (
              <RemoteSupportPage 
                onBack={() => goBackToHome()}
                userType={userType}
              />
            )}
          </main>
          
          <Footer 
            userType={userType} 
            onNavigateSection={(id) => goBackToHome(id)} 
            onSelectServiceByName={openServiceByName}
            onOpenLegal={(type) => setActiveLegal(type)}
          />
          <SupportBot userType={userType} />
          <ScrollToTop userType={userType} />
          <GuideModal guide={activeGuide} onClose={closeGuide} userType={userType} />
          <LegalModal type={activeLegal} onClose={() => setActiveLegal(null)} userType={userType} />
        </>
      )}
    </div>
  );
}

export default App;
