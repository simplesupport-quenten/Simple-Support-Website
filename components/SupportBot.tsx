
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2, Calendar, Sparkles, Zap, Shield, Bot, Terminal, CheckCircle2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { BOOKING_URL, UserType } from '../constants';

interface Message {
  role: 'user' | 'bot';
  text: string;
  isStreaming?: boolean;
  intent?: 'booking' | 'troubleshooting' | 'none';
}

interface SupportBotProps {
  userType: UserType;
}

const SupportBot: React.FC<SupportBotProps> = ({ userType }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: `Systems online. I'm the Simple Support AI Core. I've optimized my logic for ${userType === 'home' ? 'Residential Engineering' : 'Enterprise Infrastructure'}. What can I help you deploy or fix today?` }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const quickActions = userType === 'home' 
    ? [
        { label: "Slow WiFi", query: "My WiFi is slow, can you run a diagnostic?" },
        { label: "Book TV Mount", query: "I need to schedule a TV mounting session." },
        { label: "Starlink", query: "Help me plan a Starlink installation." }
      ]
    : [
        { label: "Network Audit", query: "I need a security audit for my business network." },
        { label: "QuickBooks Help", query: "We have database errors in QuickBooks multi-user mode." },
        { label: "Hire MSP", query: "Tell me about your Managed IT Service contracts." }
      ];

  const handleSend = async (customQuery?: string) => {
    const userMsg = customQuery || input.trim();
    if (!userMsg || isLoading) return;

    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    // Initial streaming state
    setMessages(prev => [...prev, { role: 'bot', text: '', isStreaming: true }]);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const streamResponse = await ai.models.generateContentStream({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: `You are the "Simple Support AI Dispatcher". 
          Profile: ${userType.toUpperCase()}.
          Tone: Highly professional, efficient, engineer-led.
          Goal: Solve simple tech questions and transition complex ones to a "Human Engineering Session".
          Rules:
          1. If the user asks for help with a problem, give 2-3 expert bullet points first.
          2. If the user mentions "book", "schedule", "hire", "visit", or "help", explicitly mention that our team has same-day slots in Greenville and the Upstate.
          3. Use technical terms like "latency", "throughput", "redundancy", and "endpoint" correctly to maintain authority.
          4. Keep it under 120 words.`,
        }
      });

      let fullText = '';
      for await (const chunk of streamResponse) {
        const textChunk = chunk.text;
        if (textChunk) {
          fullText += textChunk;
          setMessages(prev => {
            const newMessages = [...prev];
            const lastMsg = newMessages[newMessages.length - 1];
            if (lastMsg.role === 'bot') {
              lastMsg.text = fullText;
              lastMsg.isStreaming = true;
            }
            return newMessages;
          });
        }
      }

      setMessages(prev => {
        const newMessages = [...prev];
        const lastMsg = newMessages[newMessages.length - 1];
        if (lastMsg.role === 'bot') {
          lastMsg.isStreaming = false;
        }
        return newMessages;
      });

    } catch (error) {
      setMessages(prev => {
        const filtered = prev.filter(m => !m.isStreaming || m.text !== '');
        return [...filtered, { role: 'bot', text: "Signal dropped. Please access our Booking Hub directly for priority assistance." }];
      });
    } finally {
      setIsLoading(false);
    }
  };

  const hasBookingIntent = (text: string) => {
    const keywords = ['book', 'schedule', 'hire', 'visit', 'appointment', 'session', 'expert', 'professional'];
    return keywords.some(k => text.toLowerCase().includes(k));
  };

  const brandColor = userType === 'home' ? 'text-[#67c621]' : 'text-[#045184]';
  const brandBg = userType === 'home' ? 'bg-[#67c621]' : 'bg-[#045184]';
  const brandGradient = userType === 'home' 
    ? 'from-[#67c621] to-[#a8f26a]' 
    : 'from-[#045184] to-[#0b79c3]';
  
  // Dynamic header text color for accessibility
  const headerTextColor = userType === 'home' ? 'text-slate-950' : 'text-white';
  const headerMutedColor = userType === 'home' ? 'text-slate-900/60' : 'text-white/60';

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      {isOpen ? (
        <div 
          className="bg-slate-950 w-[380px] sm:w-[420px] h-[650px] rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden border border-white/10 animate-in slide-in-from-bottom-8 zoom-in-95 duration-500"
          role="complementary"
        >
          {/* Header Area */}
          <div className={`relative p-7 bg-gradient-to-br ${brandGradient} overflow-hidden`}>
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '15px 15px' }}></div>
            <div className="relative z-10 flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/30 shadow-inner">
                  <Bot className={`w-7 h-7 ${headerTextColor}`} />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className={`font-black text-[10px] uppercase tracking-[0.25em] leading-none ${headerTextColor}`}>AI Core v5.1</h3>
                    <div className="flex h-2 w-2">
                      <span className={`animate-ping absolute inline-flex h-2 w-2 rounded-full opacity-75 ${userType === 'home' ? 'bg-slate-900' : 'bg-white'}`}></span>
                      <span className={`relative inline-flex rounded-full h-2 w-2 ${userType === 'home' ? 'bg-slate-900' : 'bg-white'}`}></span>
                    </div>
                  </div>
                  <p className={`text-[12px] font-bold uppercase tracking-widest mt-1.5 ${headerTextColor}`}>Engineering Dispatch</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="bg-black/10 hover:bg-black/20 p-2 rounded-full transition-all"
                aria-label="Minimize"
              >
                <X className={`w-5 h-5 ${headerTextColor}`} />
              </button>
            </div>
          </div>

          {/* Neural Processing Indicator */}
          <div className="bg-slate-900 px-7 py-2 border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Terminal className="w-3 h-3 text-slate-500" />
              <span className="text-[8px] font-black uppercase tracking-[0.3em] text-slate-500">Processing Node: UPSTATE_SC</span>
            </div>
            {isLoading && (
              <div className="flex items-center space-x-2 animate-pulse">
                <div className={`w-1 h-1 rounded-full ${brandBg}`}></div>
                <span className={`text-[8px] font-black uppercase tracking-widest ${brandColor}`}>Analyzing...</span>
              </div>
            )}
          </div>

          {/* Messages Area */}
          <div 
            ref={scrollRef} 
            className="flex-1 overflow-y-auto p-7 space-y-6 bg-slate-950 scrollbar-thin"
          >
            {messages.map((m, i) => {
              const booking = m.role === 'bot' && !m.isStreaming && hasBookingIntent(m.text);
              return (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
                  <div className="max-w-[85%] space-y-3">
                    <div 
                      className={`p-5 rounded-[2rem] text-[13px] font-medium leading-relaxed shadow-sm border ${
                        m.role === 'user' 
                          ? `${brandBg} text-slate-950 border-white/10 rounded-tr-none` 
                          : 'bg-slate-900 text-slate-200 border-white/5 rounded-tl-none'
                      }`}
                    >
                      {m.text || "..."}
                      {m.isStreaming && <span className="inline-block w-1.5 h-4 bg-white/20 ml-1 animate-pulse align-middle"></span>}
                    </div>
                    {booking && (
                      <div className="animate-in zoom-in-95 duration-500 delay-150">
                        <div className="p-5 bg-white/5 border border-white/10 rounded-[2rem] space-y-4">
                           <div className="flex items-center space-x-2 text-[9px] font-black uppercase tracking-widest text-slate-400">
                              <CheckCircle2 className={`w-3.5 h-3.5 ${brandColor}`} />
                              <span>Verified Engineering Match</span>
                           </div>
                           <a
                             href={BOOKING_URL}
                             target="_blank"
                             rel="noopener noreferrer"
                             className={`inline-flex items-center justify-center w-full px-6 py-4 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] transition-all duration-300 hover:-translate-y-1 active:scale-95 border border-white/10 ${
                               userType === 'home' ? 'bg-[#67c621] text-slate-950' : 'bg-[#045184] text-white'
                             }`}
                           >
                             <Calendar className="w-4 h-4 mr-3" />
                             <span>Secure Next Slot</span>
                           </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Input Area */}
          <div className="p-7 bg-slate-900 border-t border-white/10">
            {!isLoading && messages.length < 3 && (
              <div className="flex gap-2 overflow-x-auto pb-4 mb-2 no-scrollbar">
                {quickActions.map((action, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(action.query)}
                    className="whitespace-nowrap px-4 py-2.5 bg-slate-950 border border-white/10 rounded-full text-[10px] font-black text-slate-400 hover:bg-white/5 hover:text-white transition-all flex items-center space-x-2"
                  >
                    <Sparkles className={`w-3 h-3 ${brandColor}`} />
                    <span>{action.label}</span>
                  </button>
                ))}
              </div>
            )}

            <div className="relative">
              <input
                type="text"
                placeholder="Ask your diagnostic query..."
                className="w-full bg-slate-950 text-white border border-white/10 rounded-2xl px-6 py-5 pr-14 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-white/20 transition-all placeholder:text-slate-700"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              />
              <button 
                onClick={() => handleSend()}
                disabled={isLoading || !input.trim()}
                className={`absolute right-3 top-3 p-3 rounded-xl transition-all disabled:opacity-20 shadow-lg ${
                  userType === 'home' ? 'bg-[#67c621] text-slate-950' : 'bg-[#045184] text-white'
                }`}
              >
                {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
              </button>
            </div>
            
            <div className="mt-4 flex items-center justify-center space-x-2 text-[8px] font-black uppercase tracking-[0.4em] text-slate-600">
               <Shield className="w-3 h-3" />
               <span>End-to-End Encrypted Tunnel</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative group">
          <div className={`absolute -inset-4 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 ${brandBg}`}></div>
          <button
            onClick={() => setIsOpen(true)}
            className={`relative p-6 rounded-[2rem] shadow-2xl hover:scale-110 active:scale-95 animate-subtle-bounce transition-all duration-500 border border-white/10 flex items-center space-x-4 ${
              userType === 'home' ? 'bg-[#67c621] text-slate-950' : 'bg-[#045184] text-white'
            }`}
          >
            <div className="relative">
              <MessageSquare className="w-8 h-8" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full border-2 border-slate-900"></div>
            </div>
            <div className="hidden sm:flex flex-col items-start pr-2">
               <span className="text-[8px] font-black uppercase tracking-[0.3em] opacity-60">AI Hub</span>
               <span className="text-xs font-black uppercase tracking-widest">Live Help</span>
            </div>
          </button>
        </div>
      )}
    </div>
  );
};

export default SupportBot;
