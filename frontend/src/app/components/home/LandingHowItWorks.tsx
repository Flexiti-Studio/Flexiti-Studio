'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const steps = [
  {
    num: '01',
    title: "Idea / Consultation",
    description: "Defining your vision and market fit.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    num: '02',
    title: "Design & Planning",
    description: "High-fidelity UI/UX and system architecture.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    )
  },
  {
    num: '03',
    title: "Development",
    description: "Agile building with weekly updates.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    num: '04',
    title: "Launch & Scale",
    description: "Global deployment and ongoing support.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  }
];

export default function LandingHowItWorks() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true;

  return (
    <section 
      className={`w-full py-24 px-4 md:px-8 transition-all duration-700 relative overflow-hidden ${
        isDark 
          ? 'bg-[#12004a] text-white border-y border-indigo-500/20' 
          : 'bg-indigo-50/50 text-slate-900 border-y border-indigo-100/60'
      }`}
    >
      {/* Dynamic atmospheric radial glows */}
      <div 
        className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ${
          isDark 
            ? 'bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.15),transparent_70%)]' 
            : 'bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.04),transparent_60%)]'
        }`} 
      />

      <div className="relative z-10 max-w-6xl mx-auto space-y-16">
        {/* Title Block */}
        <div className="text-center space-y-4">
          <span className={`inline-block px-4 py-1.5 rounded-full font-bold text-[10px] tracking-[0.3em] uppercase mb-2 border transition-colors ${
            isDark 
              ? 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20' 
              : 'bg-indigo-100 text-indigo-700 border-indigo-200'
          }`}>
            Our Process
          </span>
          <h2 className={`text-4xl md:text-5xl font-extrabold tracking-tight transition-colors ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            A Proven Path to Launch
          </h2>
          <p className={`max-w-xl mx-auto text-base font-medium transition-colors ${
            isDark ? 'text-indigo-200' : 'text-slate-500'
          }`}>
            Transparency at every stage of the build.
          </p>
        </div>

        {/* 4-Column Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className={`group p-8 rounded-[2rem] border transition-all duration-300 flex flex-col justify-between min-h-[220px] cursor-pointer ${
                isDark 
                  ? 'border-indigo-400/20 bg-indigo-950/20 hover:bg-indigo-950/40' 
                  : 'border-indigo-100/80 bg-white hover:bg-indigo-50/30 hover:shadow-xl hover:shadow-indigo-500/5'
              }`}
            >
              {/* Card Header: Step number & arrow click tracker */}
              <div className="flex items-center justify-between">
                <span className={`font-extrabold tracking-tight text-xl transition-colors ${
                  isDark ? 'text-indigo-300' : 'text-indigo-600'
                }`}>
                  {step.num}
                </span>

                {/* Arrow up right visual indicator */}
                <svg 
                  className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                    isDark ? 'text-indigo-400 group-hover:text-white' : 'text-indigo-400 group-hover:text-indigo-700'
                  }`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>

              {/* Title & Description */}
              <div className="mt-8 space-y-2">
                <h4 className={`text-lg font-bold tracking-tight transition-colors ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  {step.title}
                </h4>
                <p className={`text-sm leading-relaxed transition-colors ${
                  isDark ? 'text-indigo-200' : 'text-slate-500'
                }`}>
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
