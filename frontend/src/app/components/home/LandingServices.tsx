'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const services = [
  {
    title: "Web App Development",
    description: "High-performance, scalable web applications built with React, Next.js, and robust backends.",
    icon: "terminal",
    color: "blue"
  },
  {
    title: "Mobile App Development",
    description: "Native-feel cross-platform mobile experiences that users love to keep on their home screens.",
    icon: "smartphone",
    color: "indigo"
  },
  {
    title: "SaaS Product Development",
    description: "Multi-tenant architectures, subscription management, and secure cloud infrastructure.",
    icon: "cloud_done",
    color: "purple"
  },
  {
    title: "MVP Development",
    description: "Fast-track your idea to market with essential features and scalable code foundation.",
    icon: "rocket_launch",
    color: "cyan"
  },
  {
    title: "AI Tools & Automation",
    description: "Integrating LLMs and custom automation flows to supercharge your business efficiency.",
    icon: "psychology",
    color: "teal"
  },
  {
    title: "System Integration",
    description: "Connecting disparate systems via custom APIs to create a unified digital ecosystem.",
    icon: "hub",
    color: "sky"
  }
];

export default function LandingServices() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? (resolvedTheme === 'dark' || theme === 'dark') : true;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any }
    }
  };

  return (
    <section className="py-32 relative overflow-hidden bg-surface dark:bg-black transition-colors duration-500" id="services">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 max-w-2xl"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold text-[10px] tracking-[0.3em] uppercase mb-6 border border-blue-500/20">
            Our Expertise
          </span>
          <h2 className="font-headline text-4xl md:text-5xl font-black mb-6 text-slate-900 dark:text-white leading-tight">
            Expert Solutions for <br /> Modern Challenges
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg font-medium leading-relaxed">
            We combine engineering precision with creative vision to deliver products that dominate markets.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`
                group p-8 rounded-[2rem] transition-all duration-300 border
                ${isDark 
                  ? 'bg-white/5 border-white/10 hover:bg-white/[0.08] hover:border-white/20' 
                  : 'bg-white border-slate-200 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50'}
                backdrop-blur-xl relative overflow-hidden
              `}
            >
              {/* Subtle gradient blob on hover */}
              <div className={`absolute -right-10 -top-10 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-${service.color}-500`} />
              
              <div className={`
                w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500
                ${isDark ? 'bg-white/5 text-white group-hover:bg-blue-600' : 'bg-slate-50 text-slate-900 group-hover:bg-slate-900 group-hover:text-white'}
              `}>
                <span className="material-symbols-outlined text-3xl font-light">{service.icon}</span>
              </div>
              
              <h3 className="text-xl font-black mb-4 text-slate-900 dark:text-white leading-tight">
                {service.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
