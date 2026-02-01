
import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { FAQ_DATA, UserType } from '../constants';

interface FAQProps {
  userType: UserType;
}

const FAQ: React.FC<FAQProps> = ({ userType }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const brandBg = userType === 'home' ? 'bg-[#67c621]' : 'bg-[#045184]';

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 -z-10 transition-colors duration-1000 ${userType === 'home' ? 'bg-[#67c621]' : 'bg-[#045184]'}`} aria-hidden="true"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center space-x-2 px-3 py-1 mb-4 text-xs font-bold uppercase tracking-wider rounded-full ${userType === 'home' ? 'text-[#67c621] bg-[#67c621]/5' : 'text-[#045184] bg-[#045184]/5'}`}>
            <HelpCircle className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 uppercase tracking-tighter">Frequently Asked <span className={userType === 'home' ? 'text-[#67c621]' : 'text-[#045184]'}>Questions</span></h2>
          <p className="text-lg text-slate-600 font-medium">
            Everything you need to know about our {userType} tech support services.
          </p>
        </div>

        <div className="space-y-4" role="presentation">
          {FAQ_DATA.map((item, index) => (
            <div 
              key={index}
              className={`group border rounded-[2rem] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                activeIndex === index 
                  ? `bg-white shadow-2xl border-slate-200 scale-[1.01]` 
                  : 'bg-slate-50/50 border-slate-100 hover:bg-white hover:border-slate-200 shadow-sm hover:shadow-md'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
                className="w-full text-left px-6 py-6 sm:px-8 flex justify-between items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-[2rem]"
              >
                <span className={`text-lg font-black tracking-tight transition-colors duration-300 ${
                  activeIndex === index ? (userType === 'home' ? 'text-[#67c621]' : 'text-[#045184]') : 'text-slate-900'
                }`}>
                  {item.question}
                </span>
                <div className={`p-2.5 rounded-xl transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                  activeIndex === index 
                    ? `text-white rotate-180 shadow-lg ${userType === 'home' ? 'bg-[#67c621] shadow-[#67c621]/20' : 'bg-[#045184] shadow-[#045184]/20'}` 
                    : 'bg-white text-slate-400 group-hover:text-slate-900 shadow-sm'
                }`}>
                  <ChevronDown className="w-5 h-5" aria-hidden="true" />
                </div>
              </button>
              
              <div 
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                className={`grid transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                  activeIndex === index 
                    ? 'grid-rows-[1fr] opacity-100' 
                    : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-8 sm:px-8 text-slate-600 leading-relaxed">
                    <div className={`pt-4 border-t border-slate-100/60 font-medium transition-all duration-700 delay-100 ${
                      activeIndex === index 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-4 opacity-0'
                    }`}>
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-12 text-center p-10 rounded-[2.5rem] border backdrop-blur-sm transition-all duration-500 ${userType === 'home' ? 'bg-[#67c621]/5 border-[#67c621]/10' : 'bg-[#045184]/5 border-[#045184]/10'}`}>
          <p className="text-slate-700 font-bold mb-8">Still have questions?</p>
          <a 
            href="#contact" 
            className={`inline-flex items-center justify-center px-10 py-4 font-black uppercase text-[10px] tracking-[0.2em] rounded-2xl transition-all duration-300 shadow-2xl hover:-translate-y-1 active:scale-95 group ${brandBg} text-white focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500`}
          >
            <span>Book a discovery call</span>
            <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
