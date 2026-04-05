'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Send, CheckCircle, AlertCircle, Mail, MessageSquare, Calendar, Shield, Zap, RefreshCw } from 'lucide-react';

export default function ContactHeroForm() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');

    const formData = new FormData(e.currentTarget);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const result = await response.json();
      if (result.success) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isLoaded) {
    return (
      <div className="w-full min-h-[600px] flex items-center justify-center">
        <div className="flex flex-col items-center gap-6">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full"
          />
          <p className="text-sm font-bold uppercase tracking-[0.2em] animate-pulse opacity-50">Initializing Secure Form</p>
        </div>
      </div>
    );
  }

  const inputClasses = `w-full px-6 py-5 rounded-2xl border transition-all duration-300 outline-none font-medium ${
    isDark 
      ? 'bg-white/[0.03] border-white/10 focus:border-primary-light focus:bg-white/[0.06] placeholder:text-white/20' 
      : 'bg-black/[0.02] border-black/10 focus:border-primary focus:bg-black/[0.04] placeholder:text-black/20'
  }`;

  const labelClasses = `block text-sm font-bold uppercase tracking-widest mb-3 ${
    isDark ? 'text-white/40' : 'text-black/40'
  }`;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
      {/* Main Form Section */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="lg:col-span-8 relative group"
      >
        <div className={`relative z-10 backdrop-blur-3xl p-8 md:p-14 rounded-[3rem] border shadow-2xl transition-all duration-500 overflow-hidden ${
          isDark ? 'bg-white/[0.02] border-white/10 shadow-black/40' : 'bg-black/[0.01] border-black/10 shadow-primary/5'
        } ${isSubmitting ? 'opacity-60 pointer-events-none' : ''}`}>
          
          {/* Animated Background Element */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-[100px] group-hover:bg-primary/20 transition-colors duration-700" />
          
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div 
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="py-20 text-center"
              >
                <div className="w-24 h-24 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-10 shadow-inner">
                  <CheckCircle className="w-12 h-12" />
                </div>
                <h3 className="text-4xl font-black mb-6 tracking-tight">Project Initialized.</h3>
                <p className={`text-xl max-w-md mx-auto mb-12 ${isDark ? 'text-white/50' : 'text-black/50'}`}>
                  Your inquiry has been encrypted and transmitted. An architect will respond within 24 hours.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="flex items-center gap-3 mx-auto font-bold text-primary hover:text-primary-light transition-colors group"
                >
                  <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                  Send Another Transmission
                </button>
              </motion.div>
            ) : (
              <form 
                key="form"
                onSubmit={handleSubmit}
                className="space-y-10 relative z-10"
              >
                {/* Web3Forms Metadata */}
                <input type="hidden" name="access_key" value="35fd18a6-c818-43c2-a992-711c02374cbb" />
                <input type="hidden" name="from_name" value="Flexiti Studio — Elite Transmission" />
                <input type="hidden" name="subject" value="New High-Value Project Inquiry" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className={labelClasses}>Architect Full Name</label>
                    <input
                      name="name"
                      required
                      placeholder="John Doe"
                      type="text"
                      className={inputClasses}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className={labelClasses}>Electronic Address</label>
                    <input
                      name="email"
                      required
                      placeholder="john@future.com"
                      type="email"
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className={labelClasses}>Entity Name</label>
                    <input
                      name="company"
                      placeholder="Your Visionary Startup"
                      type="text"
                      className={inputClasses}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className={labelClasses}>Solution Type</label>
                    <select name="project_type" className={inputClasses}>
                      <option className="bg-slate-900">Custom Web Platform</option>
                      <option className="bg-slate-900">Mobile Ecosystem</option>
                      <option className="bg-slate-900">SaaS Architecture</option>
                      <option className="bg-slate-900">MVP Engineering</option>
                      <option className="bg-slate-900">AI Integration</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className={labelClasses}>Capital Allocation</label>
                    <select name="budget" className={inputClasses}>
                      <option className="bg-slate-900">Elite (₦1M+)</option>
                      <option className="bg-slate-900">Scale (₦500k – ₦1M)</option>
                      <option className="bg-slate-900">Growth (₦200k – ₦500k)</option>
                      <option className="bg-slate-900">Bootstrap (₦50k – ₦200k)</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className={labelClasses}>Velocity Profile</label>
                    <select name="timeline" className={inputClasses}>
                      <option className="bg-slate-900">Immediate Apex</option>
                      <option className="bg-slate-900">Standard Sprint (1–2mo)</option>
                      <option className="bg-slate-900">Flexible Delivery</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className={labelClasses}>Vision Details</label>
                  <textarea
                    name="message"
                    required
                    placeholder="Outline your objectives, target audience, and critical success metrics..."
                    rows={5}
                    className={`${inputClasses} resize-none`}
                  />
                </div>

                <AnimatePresence>
                  {status === 'error' && (
                    <motion.p 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-red-500 font-bold flex items-center gap-2"
                    >
                      <AlertCircle className="w-5 h-5" />
                      Transmission failed. Check network or email directly.
                    </motion.p>
                  )}
                </AnimatePresence>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`group relative w-full py-6 rounded-2xl bg-primary ${isDark ? 'text-black' : 'text-white'} font-black text-xl tracking-tighter overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-primary/20`}
                >
                  <div className="relative z-10 flex items-center justify-center gap-4">
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-6 h-6 animate-spin" />
                        <span className="uppercase tracking-[0.2em] text-sm">Transmitting</span>
                      </>
                    ) : (
                      <>
                        <span>Initialize Collaboration</span>
                        <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-light via-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </button>
              </form>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Sidebar Communication Channels */}
      <div className="lg:col-span-4 space-y-10">
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="space-y-8"
        >
          <h3 className="text-3xl font-black tracking-tight mb-8">Direct Channels</h3>
          
          <div className="space-y-4">
            {[
              { icon: Mail, label: 'Secure Email', value: 'admin@flexitistudio.com', href: 'mailto:admin@flexitistudio.com', color: 'text-primary' },
              { icon: MessageSquare, label: 'Instant Chat', value: 'WhatsApp Engineering', href: '#', color: 'text-green-500' },
              { icon: Calendar, label: 'Strategic Sync', value: 'Book 15min Discovery', href: '#', color: 'text-blue-500', highlighted: true },
            ].map((channel, i) => (
              <a 
                key={channel.label}
                href={channel.href}
                className={`flex items-center gap-5 p-5 rounded-3xl border transition-all duration-300 group ${
                  channel.highlighted 
                    ? `bg-primary border-primary ${isDark ? 'text-black' : 'text-white'} shadow-xl shadow-primary/20 hover:scale-[1.03]` 
                    : `${isDark ? 'bg-white/[0.03] border-white/10 hover:bg-white/[0.06]' : 'bg-black/[0.02] border-black/10 hover:bg-black/[0.05]'}`
                }`}
              >
                <div className={`shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center shadow-inner transition-colors ${
                  channel.highlighted ? 'bg-white/20' : `${isDark ? 'bg-white/5' : 'bg-black/5'} ${channel.color}`
                }`}>
                  <channel.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className={`text-[10px] font-black uppercase tracking-widest opacity-50 mb-1`}>
                    {channel.label}
                  </p>
                  <p className="font-bold text-sm tracking-tight">{channel.value}</p>
                </div>
                {!channel.highlighted && <Zap className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 text-primary-light transition-all" />}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Technical Validation Badges */}
        <div className="grid grid-cols-1 gap-4 mt-12">
          {[
            { icon: Zap, title: 'Rapid Response', desc: 'SLA under 120 minutes' },
            { icon: Shield, title: 'End-to-End', desc: 'Secure project management' },
          ].map((item, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + (i * 0.1) }}
              key={item.title}
              className={`p-6 rounded-[2rem] border ${
                isDark ? 'bg-white/[0.02] border-white/5' : 'bg-black/[0.01] border-black/5'
              }`}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <item.icon className="w-5 h-5 text-primary-light" />
                </div>
                <h4 className="font-black text-sm uppercase tracking-wider">{item.title}</h4>
              </div>
              <p className={`text-xs font-medium leading-relaxed ${isDark ? 'text-white/40' : 'text-black/40'}`}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
