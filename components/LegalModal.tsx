
import React from 'react';
import { X, Shield, FileText, Lock, Scale, AlertCircle } from 'lucide-react';
import { UserType } from '../constants';

interface LegalModalProps {
  type: 'terms' | 'privacy' | null;
  onClose: () => void;
  userType: UserType;
}

const LegalModal: React.FC<LegalModalProps> = ({ type, onClose, userType }) => {
  if (!type) return null;

  const brandColor = userType === 'home' ? 'text-[#67c621]' : 'text-[#045184]';
  const brandBg = userType === 'home' ? 'bg-[#67c621]' : 'bg-[#045184]';
  const isTerms = type === 'terms';

  const content = isTerms ? {
    title: "Terms & Conditions",
    subtitle: "Standard Deployment Protocol",
    sections: [
      {
        icon: <Scale className="w-5 h-5" />,
        heading: "Service Engagement",
        text: "By requesting support from Simple Support, you agree to provide accurate diagnostic information and authorize our engineers to perform the requested optimizations. Remote sessions require user-side authorization and can be terminated at any time."
      },
      {
        icon: <Shield className="w-5 h-5" />,
        heading: "Liability & Warranty",
        text: "Simple Support operates under a 'No Fix, No Fee' guarantee. While we take extreme care with your data and hardware, clients are responsible for maintaining current backups before any major infrastructure changes or software modifications."
      },
      {
        icon: <AlertCircle className="w-5 h-5" />,
        heading: "Payment & Cancellation",
        text: "Payments for sessions are due upon completion of the service. Subscription-based Managed IT services follow a monthly billing cycle. Cancellations for scheduled on-site visits must be made at least 24 hours in advance."
      }
    ]
  } : {
    title: "Privacy Protocol",
    subtitle: "Data Integrity & Protection",
    sections: [
      {
        icon: <Lock className="w-5 h-5" />,
        heading: "Data Collection",
        text: "We collect only the essential telemetry and contact data required to facilitate your support sessions. Remote access logs are stored for 30 days for security auditing and then permanently purged."
      },
      {
        icon: <Shield className="w-5 h-5" />,
        heading: "Third-Party Disclosure",
        text: "Your data is never sold or shared with third-party marketing entities. We only interface with verified software providers (like Intuit or Microsoft) when explicitly required for your project success."
      },
      {
        icon: <FileText className="w-5 h-5" />,
        heading: "Encryption Standards",
        text: "All remote support sessions utilize TLS 1.3 end-to-end encryption. Diagnostic reports are transmitted via secure, encrypted channels to prevent intercept during deployment."
      }
    ]
  };

  return (
    <div className="fixed inset-0 z-[210] flex items-center justify-center p-4 sm:p-8">
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-xl animate-in fade-in duration-500"
        onClick={onClose}
      ></div>
      
      <div className="relative w-full max-w-3xl bg-white rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-8 duration-500 max-h-[90vh] flex flex-col">
        <div className="p-8 md:p-12 border-b border-slate-50 flex justify-between items-start shrink-0">
          <div>
            <div className={`inline-flex items-center space-x-2 px-3 py-1 mb-4 rounded-lg bg-slate-50 border border-slate-100 text-[10px] font-black uppercase tracking-widest ${brandColor}`}>
              {isTerms ? <Scale className="w-3.5 h-3.5" /> : <Lock className="w-3.5 h-3.5" />}
              <span>Legal Documentation</span>
            </div>
            <h2 className="text-4xl font-black text-slate-950 uppercase tracking-tighter italic leading-none">{content.title}</h2>
            <p className="mt-2 text-slate-500 font-bold uppercase tracking-widest text-[10px]">{content.subtitle}</p>
          </div>
          <button 
            onClick={onClose}
            className="p-3 bg-slate-50 hover:bg-slate-100 rounded-2xl transition-all group"
          >
            <X className="w-6 h-6 text-slate-400 group-hover:text-slate-900" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 md:p-12 space-y-12 scrollbar-thin">
          {content.sections.map((section, idx) => (
            <div key={idx} className="flex gap-8 group">
              <div className={`shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center ${brandColor} bg-slate-50 group-hover:bg-slate-950 group-hover:text-white transition-all duration-500 shadow-sm border border-slate-100`}>
                {section.icon}
              </div>
              <div className="space-y-4">
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest">{section.heading}</h3>
                <p className="text-slate-600 leading-relaxed font-medium text-sm md:text-base">
                  {section.text}
                </p>
              </div>
            </div>
          ))}

          <div className="p-10 rounded-[2.5rem] bg-slate-950 text-white relative overflow-hidden group">
            <div className={`absolute top-0 right-0 w-32 h-32 blur-[60px] opacity-10 ${brandBg}`}></div>
            <div className="relative z-10">
              <h4 className="text-lg font-black uppercase tracking-tighter mb-4 italic">Agreement Acceptance</h4>
              <p className="text-slate-400 text-xs font-medium leading-relaxed mb-8">
                By continuing to use our services, you confirm that you have read and understood our legal protocols. These terms are updated periodically to reflect new engineering standards.
              </p>
              <button 
                onClick={onClose}
                className={`w-full py-4 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] transition-all duration-300 ${brandBg} text-white shadow-xl hover:-translate-y-1 active:scale-95`}
              >
                Acknowledge & Close
              </button>
            </div>
          </div>
        </div>

        <div className="p-6 bg-slate-50 border-t border-slate-100 text-center shrink-0">
          <p className="text-[9px] text-slate-400 font-black uppercase tracking-[0.3em]">Last Updated: November 2024 • Greenville, SC</p>
        </div>
      </div>
    </div>
  );
};

export default LegalModal;
