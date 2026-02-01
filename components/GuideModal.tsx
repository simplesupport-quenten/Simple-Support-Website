
import React from 'react';
import { X, Clock, BarChart, CheckCircle2, Calendar, ArrowRight } from 'lucide-react';
import { GuideContent, BOOKING_URL, UserType } from '../constants';

interface GuideModalProps {
  guide: GuideContent | null;
  onClose: () => void;
  userType: UserType;
}

const GuideModal: React.FC<GuideModalProps> = ({ guide, onClose, userType }) => {
  if (!guide) return null;

  const brandBg = userType === 'home' ? 'bg-[#67c621]' : 'bg-[#045184]';
  const brandColor = userType === 'home' ? 'text-[#67c621]' : 'text-[#045184]';

  const primaryBtnClass = userType === 'home' 
    ? 'bg-white text-slate-900 hover:bg-slate-900 hover:text-white' 
    : 'bg-white text-[#045184] hover:bg-slate-900 hover:text-white';

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 md:p-10">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
        aria-hidden="true"
      ></div>
      
      <div 
        className="relative bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] shadow-2xl border border-slate-100 animate-in zoom-in-95 slide-in-from-bottom-4 duration-300"
        role="dialog"
        aria-modal="true"
        aria-labelledby="guide-modal-title"
      >
        <div className="sticky top-0 bg-white/80 backdrop-blur-md px-8 py-6 flex justify-between items-center border-b border-slate-50 z-20">
          <div className="flex items-center space-x-3">
            <div className={`p-2 rounded-xl ${userType === 'home' ? 'bg-[#67c621]/10 text-[#67c621]' : 'bg-[#045184]/10 text-[#045184]'}`} aria-hidden="true">
              {guide.icon}
            </div>
            <h3 id="guide-modal-title" className="text-xl font-bold text-slate-900">{guide.title}</h3>
          </div>
          <button 
            onClick={onClose}
            aria-label="Close guide"
            className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-8 space-y-8">
          <div className="flex flex-wrap gap-4" role="note" aria-label="Guide Metadata">
            <div className="flex items-center space-x-2 px-3 py-1.5 bg-slate-50 rounded-full text-xs font-bold text-slate-600 border border-slate-100">
              <Clock className={`w-3.5 h-3.5 ${brandColor}`} aria-hidden="true" />
              <span>{guide.readTime} Read</span>
            </div>
            <div className="flex items-center space-x-2 px-3 py-1.5 bg-slate-50 rounded-full text-xs font-bold text-slate-600 border border-slate-100">
              <BarChart className={`w-3.5 h-3.5 ${brandColor}`} aria-hidden="true" />
              <span>Difficulty: {guide.difficulty}</span>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              {guide.description}
            </p>
            <div className="h-px bg-slate-100" aria-hidden="true"></div>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-bold text-slate-900 uppercase tracking-tighter">Key Steps & Recommendations</h4>
            <div className="space-y-4">
              {guide.fullContent.map((step, idx) => (
                <div key={idx} className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="mt-0.5 flex-shrink-0" aria-hidden="true">
                    <CheckCircle2 className={`w-5 h-5 ${brandColor}`} />
                  </div>
                  <p className="text-slate-700 leading-relaxed font-medium">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className={`p-10 rounded-[2.5rem] text-white text-center shadow-2xl ${brandBg}`}>
            <h4 className="text-2xl font-black mb-3 uppercase tracking-tighter text-inherit">Need Hands-on Help?</h4>
            <p className="opacity-90 mb-8 font-medium text-sm text-inherit">Our experts can handle this for you in under an hour.</p>
            <a 
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center px-10 py-5 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] transition-all duration-300 shadow-xl hover:-translate-y-1 active:scale-95 group ${primaryBtnClass} focus-visible:ring-2 focus-visible:ring-white`}
            >
              <Calendar className="w-4 h-4 mr-3" aria-hidden="true" />
              <span>Schedule Session</span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="p-8 bg-slate-50 text-center border-t border-slate-100">
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
            Disclaimer: Informational purposes only. Ensure data backups before implementation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GuideModal;
