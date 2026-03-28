'use client';

import { useState, useEffect } from 'react';

export default function ContactHeroForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    // Simulate "loading" when form is opened/mounted
    const timer = setTimeout(() => setIsLoaded(true), 800);
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
      <div className="lg:col-span-8 min-h-[600px] flex items-center justify-center bg-surface-container-lowest rounded-lg">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          <p className="font-label text-sm text-on-surface-variant animate-pulse">Initializing Secure Form...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
      {/* Main Form */}
      <div className="lg:col-span-8">
        <div className={`bg-surface-container-lowest p-8 md:p-12 rounded-lg shadow-[0_12px_40px_rgba(19,27,46,0.06)] relative overflow-hidden transition-all duration-500 ${isSubmitting ? 'opacity-70 pointer-events-none scale-[0.99]' : 'opacity-100 scale-100'}`}>
          {isSubmitting && (
            <div className="absolute inset-0 z-20 flex items-center justify-center bg-surface-container-lowest/40 backdrop-blur-[2px]">
              <div className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest">Transmitting Data...</p>
              </div>
            </div>
          )}
          
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
          
          {status === 'success' ? (
            <div className="relative z-10 py-20 text-center space-y-6 animate-in fade-in zoom-in duration-500">
              <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
                <span className="material-symbols-outlined text-4xl">check_circle</span>
              </div>
              <h3 className="text-3xl font-bold font-headline">Message Transmitted</h3>
              <p className="text-on-surface-variant max-w-md mx-auto">
                Thank you for reaching out. An engineer from our team will review your inquiry and respond within 24 hours.
              </p>
              <button 
                onClick={() => setStatus('idle')}
                className="text-primary font-bold hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form 
              onSubmit={handleSubmit}
              className="space-y-8 relative z-10"
            >
              {/* Web3Forms Access Key */}
              <input type="hidden" name="access_key" value="35fd18a6-c818-43c2-a992-711c02374cbb" />
              <input type="hidden" name="from_name" value="Flexiti Studio Contact Form" />
              <input type="hidden" name="subject" value="New Project Inquiry from Flexiti Studio" />
  
              {/* Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="font-label text-sm font-semibold text-on-surface">Full Name</label>
                  <input
                    name="name"
                    required
                    disabled={isSubmitting}
                    className="w-full px-5 py-4 bg-surface-container-low border-0 rounded focus:ring-2 focus:ring-primary transition-all font-body disabled:opacity-50"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-label text-sm font-semibold text-on-surface">Email Address</label>
                  <input
                    name="email"
                    required
                    disabled={isSubmitting}
                    className="w-full px-5 py-4 bg-surface-container-low border-0 rounded focus:ring-2 focus:ring-primary transition-all font-body disabled:opacity-50"
                    placeholder="john@company.com"
                    type="email"
                  />
                </div>
              </div>
              {/* Company + Project Type */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="font-label text-sm font-semibold text-on-surface">
                    Company <span className="text-outline text-xs font-normal">(Optional)</span>
                  </label>
                  <input
                    name="company"
                    disabled={isSubmitting}
                    className="w-full px-5 py-4 bg-surface-container-low border-0 rounded focus:ring-2 focus:ring-primary transition-all font-body disabled:opacity-50"
                    placeholder="Your Startup Inc."
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-label text-sm font-semibold text-on-surface">Project Type</label>
                  <select 
                    name="project_type"
                    disabled={isSubmitting}
                    className="w-full px-5 py-4 bg-surface-container-low border-0 rounded focus:ring-2 focus:ring-primary transition-all font-body appearance-none disabled:opacity-50"
                  >
                    <option>Web App</option>
                    <option>Mobile App</option>
                    <option>SaaS Product</option>
                    <option>MVP Development</option>
                    <option>AI Tool</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              {/* Budget + Timeline */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="font-label text-sm font-semibold text-on-surface">Budget Range</label>
                  <select 
                    name="budget"
                    disabled={isSubmitting}
                    className="w-full px-5 py-4 bg-surface-container-low border-0 rounded focus:ring-2 focus:ring-primary transition-all font-body disabled:opacity-50"
                  >
                    <option>₦50k – ₦200k</option>
                    <option>₦200k – ₦500k</option>
                    <option>₦500k – ₦1M</option>
                    <option>₦1M+</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="font-label text-sm font-semibold text-on-surface">Timeline</label>
                  <select 
                    name="timeline"
                    disabled={isSubmitting}
                    className="w-full px-5 py-4 bg-surface-container-low border-0 rounded focus:ring-2 focus:ring-primary transition-all font-body disabled:opacity-50"
                  >
                    <option>ASAP</option>
                    <option>1–2 weeks</option>
                    <option>1–2 months</option>
                    <option>Flexible</option>
                  </select>
                </div>
              </div>
              {/* Message */}
              <div className="space-y-2">
                <label className="font-label text-sm font-semibold text-on-surface">Project Description</label>
                <textarea
                  name="message"
                  required
                  disabled={isSubmitting}
                  className="w-full px-5 py-4 bg-surface-container-low border-0 rounded focus:ring-2 focus:ring-primary transition-all font-body disabled:opacity-50"
                  placeholder="Tell us about your goals, key features, and any specific challenges you're facing..."
                  rows={5}
                ></textarea>
              </div>
  
              {status === 'error' && (
                <p className="text-red-500 text-sm font-semibold animate-shake">
                  Something went wrong. Please try again or email us directly.
                </p>
              )}
  
              <button
                className={`w-full py-5 rounded-full bg-gradient-to-r from-primary to-primary-container text-on-primary font-headline font-bold text-lg transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 ${isSubmitting ? 'opacity-80 cursor-not-allowed' : 'hover:opacity-90 hover:-translate-y-1 active:scale-95'}`}
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-3 border-on-primary border-t-transparent rounded-full animate-spin"></div>
                    <span>Processing...</span>
                  </>
                ) : (
                  'Start Your Project'
                )}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Sidebar */}
      <div className="lg:col-span-4 space-y-12">
        {/* Direct Contact */}
        <section className="space-y-6">
          <h3 className="font-headline text-2xl font-bold text-on-surface">Get in touch directly</h3>
          <div className="space-y-4">
            <a className="flex items-center gap-4 p-4 rounded bg-surface-container hover:bg-surface-container-high transition-colors group" href="mailto:admin@flexitistudio.com">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <div>
                <p className="font-label text-xs font-bold text-outline uppercase tracking-wider">Email Us</p>
                <p className="font-headline font-semibold text-on-surface">admin@flexitistudio.com</p>
              </div>
            </a>
            <a className="flex items-center gap-4 p-4 rounded bg-surface-container hover:bg-surface-container-high transition-colors group" href="#">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all">
                <span className="material-symbols-outlined">chat_bubble</span>
              </div>
              <div>
                <p className="font-label text-xs font-bold text-outline uppercase tracking-wider">WhatsApp</p>
                <p className="font-headline font-semibold text-on-surface">Chat with our team</p>
              </div>
            </a>
            <a className="flex items-center gap-4 p-4 rounded border-2 border-primary/20 hover:border-primary transition-all group" href="#">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-on-primary shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined">calendar_today</span>
              </div>
              <div>
                <p className="font-label text-xs font-bold text-primary uppercase tracking-wider">Discovery Call</p>
                <p className="font-headline font-semibold text-on-surface">Book a 15-min intro</p>
              </div>
            </a>
          </div>
        </section>

        {/* Info Cards */}
        <div className="grid grid-cols-1 gap-4">
          {[
            { icon: 'speed', color: 'text-primary', title: 'Fast Response', desc: 'We reply within 24 hours. Your vision is our priority.' },
            { icon: 'sync_alt', color: 'text-primary', title: 'Seamless Onboarding', desc: 'From first contact to kick-off, we keep things simple and clear.' },
            { icon: 'check_circle', color: 'text-tertiary', title: 'Current Availability', desc: 'Accepting 2 new projects for Q3 2024. Secure your slot.' },
          ].map((card) => (
            <div key={card.title} className="p-6 bg-surface-container-low rounded-lg border border-outline-variant/10">
              <div className="flex items-center gap-3 mb-3">
                <span
                  className={`material-symbols-outlined ${card.color}`}
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {card.icon}
                </span>
                <h4 className="font-headline font-bold text-on-surface">{card.title}</h4>
              </div>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
