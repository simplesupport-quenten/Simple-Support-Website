
import React from 'react';
import { Star, Quote, User, CheckCircle, Sparkles } from 'lucide-react';
import { UserType } from '../constants';

interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
  audience: 'home' | 'business' | 'both';
  image: string;
  date: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Jonathan Aris",
    role: "Residential Client",
    text: "Simple Support saved my home office. My WiFi was dropping constantly during meetings, and they diagnosed the interference issue remotely in under 20 minutes. Absolute life savers!",
    rating: 5,
    audience: 'home',
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    date: "2 days ago"
  },
  {
    name: "Emily Chen",
    role: "Director of Ops, TechFlow",
    text: "Switching to their Managed IT was the best decision for our studio. We haven't had a single minute of downtime in 6 months. Their security auditing is truly enterprise-grade.",
    rating: 5,
    audience: 'business',
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    date: "1 week ago"
  },
  {
    name: "Marcus Holloway",
    role: "Freelance Designer",
    text: "The Starlink installation was flawless. They handled the roof mount and the interior wiring so cleanly you can't even see the cables. 10/10 engineering.",
    rating: 5,
    audience: 'home',
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    date: "3 days ago"
  },
  {
    name: "Sarah Varghese",
    role: "Founder, Bloom Retail",
    text: "Their POS network setup and security camera integration gave me complete peace of mind. The ability to view my shop's 4K cameras from my phone is a game changer.",
    rating: 5,
    audience: 'business',
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop",
    date: "Just now"
  }
];

interface TestimonialsProps {
  userType: UserType;
}

const Testimonials: React.FC<TestimonialsProps> = ({ userType }) => {
  const brandColor = userType === 'home' ? 'text-[#67c621]' : 'text-[#045184]';
  const brandBg = userType === 'home' ? 'bg-[#67c621]' : 'bg-[#045184]';
  const brandBgLight = userType === 'home' ? 'bg-[#67c621]/10' : 'bg-[#045184]/10';

  const filtered = TESTIMONIALS.filter(t => t.audience === userType || t.audience === 'both');

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <div className={`inline-flex items-center space-x-2 px-3 py-1 mb-6 text-[10px] font-black uppercase tracking-widest rounded-lg border ${userType === 'home' ? 'text-[#67c621] border-[#67c621]/20' : 'text-[#045184] border-[#045184]/20'}`}>
            <Sparkles className="w-3 h-3" />
            <span>Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-950 mb-6 uppercase tracking-tighter italic leading-none">
            TRUSTED BY <br /> <span className={brandColor}>THE COMMUNITY</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((testimonial, idx) => (
            <div 
              key={idx} 
              className="group p-10 bg-slate-50 rounded-[3rem] border border-slate-100 hover:bg-white hover:border-slate-200 hover:shadow-2xl transition-all duration-700 reveal-element"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-white shadow-lg">
                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-slate-950 uppercase tracking-tight">{testimonial.name}</h4>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className={`w-3 h-3 fill-current ${brandColor}`} />
                  ))}
                </div>
              </div>

              <div className="relative">
                <Quote className={`absolute -top-4 -left-2 w-10 h-10 opacity-5 ${brandColor}`} />
                <p className="text-base text-slate-700 font-medium leading-relaxed relative z-10 mb-8 italic">
                  "{testimonial.text}"
                </p>
              </div>

              <div className="pt-6 border-t border-slate-200/50 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <CheckCircle className={`w-4 h-4 ${brandColor}`} />
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-500">Verified Deployment</span>
                </div>
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">{testimonial.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
