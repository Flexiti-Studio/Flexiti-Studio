# 🌌 SERVICES PAGE SKILL (Dark Premium & 3D Glassmorphism)

This skill defines the technical implementation guidelines, color tokens, visual styles, and copy-pasteable TSX structures to engineer state-of-the-art Services and Showcase pages. It is modeled exactly after the premium **Upward Studio Dark Theme & 3D Glassmorphism** design system.

---

## 🎨 1. CORE DESIGN TOKENS & SYSTEM

All components built under this system must adhere strictly to these visual specs:

### A. Color Palette
- **Primary Background**: Ultimate Dark Gray/Cosmic Black (`#07070a` or `bg-[#07070a]`).
- **Accent Highlight**: Cyber Yellow / Electric Lime (`#eef227` or `text-[#eef227]`).
- **Subtle Glow Backdrops**: Cyan/Indigo radial backlights (`blur-[100px] bg-sky-500/10` or `bg-gradient-to-r from-sky-400/10 to-indigo-500/10`).
- **Glass Card Fill**: Ultra-translucent charcoal slate (`bg-white/[0.01]` or `bg-[#ffffff]/[0.01]`).
- **Micro-Glass Borders**: Hairline gray grids (`border-white/[0.04]` or `border-zinc-800/80`).
- **Primary Text**: Ice White (`text-white`) and Muted Gray (`text-slate-400` / `text-slate-500`).

### B. Effects & Details
- **Lime Handdrawn Underline Accent**: Standardized curly/drawn visual underline highlight below accented terms.
- **Translucent Floating Social Logos**: Discrete dark capsules containing corporate logos with faint gray borders.
- **Value Tab Indicators**: Segmented navigation options with thin gold/orange border underlines for active items.
- **3D Graphic Domes**: Glassmorphic card backdrops housing realistic 3D illustrative assets (targets, lightbulbs) illuminated by cozy radial glows.

---

## 📋 2. COMPONENT ARCHITECTURE & TSX TEMPLATES

### A. The Services Hero (With Ambient Cyan Glows & Lime Highlight)
A center-aligned, modern hero section featuring a custom SVG handdrawn line under the highlighted yellow word.

```tsx
import React from 'react';

export function ServicesHero() {
  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden bg-[#07070a] pt-32 pb-16 px-6">
      
      {/* 🌌 Rich Sky-Blue/Indigo Ambient Backdrop Lights */}
      <div className="absolute top-[-10%] left-1/4 w-[60%] aspect-square rounded-full bg-sky-500/10 blur-[130px] pointer-events-none" />
      <div className="absolute top-[10%] right-1/4 w-[50%] aspect-square rounded-full bg-indigo-500/8 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl text-center space-y-8 flex flex-col items-center">
        
        {/* Main Title with Yellow Accent and SVG Underline */}
        <h1 className="font-headline text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-white leading-[1.1] max-w-4xl mx-auto">
          Your Vision, Our <span className="relative inline-block text-[#eef227] select-none">
            Expertise
            {/* Handdrawn curly underline accent SVG */}
            <span className="absolute bottom-[-10px] left-0 w-full pointer-events-none text-[#eef227]">
              <svg viewBox="0 0 100 10" className="w-full h-2 fill-none stroke-current" strokeWidth="3" strokeLinecap="round">
                <path d="M5 5 C 20 8, 40 8, 60 5 C 75 3, 85 2, 95 6 C 80 5, 50 3, 20 6" />
              </svg>
            </span>
          </span> — Let&apos;s Build Together
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl text-slate-400 text-sm sm:text-base md:text-lg font-medium leading-relaxed">
          Turn your idea into a thriving digital product. With our hands-on support in strategy, design, and development, we&apos;ll craft a platform that ensures your launch is nothing short of remarkable. Ready to make it happen?
        </p>

        {/* Action Capsule Button */}
        <button className="h-12 px-8 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] text-white font-bold text-xs uppercase tracking-widest flex items-center gap-3 transition-all active:scale-95 shadow-[0_4px_20px_rgba(255,255,255,0.02)]">
          Start Today
          {/* Outward Diagonal Arrow SVG */}
          <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
          </svg>
        </button>

      </div>
    </section>
  );
}
```

### B. Logo Grid (Sleek Floating Capsules)
A minimal row showcasing corporate client social proofs inside dark gray glass cards.

```tsx
export function LogoGrid() {
  const logos = ['optic', 'TOMO', 'DQ', 'Quantec', 'stellar'];

  return (
    <div className="w-full bg-[#07070a] py-16 px-6 text-center">
      <div className="max-w-5xl mx-auto space-y-8">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
          Trusted by 100+ companies
        </span>
        
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
          {logos.map((logo, idx) => (
            <div 
              key={idx} 
              className="flex items-center justify-center h-16 rounded-2xl border border-white/[0.04] bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/10 transition-all duration-300"
            >
              <span className="text-white/60 font-bold text-sm tracking-widest uppercase hover:text-white transition-colors cursor-pointer">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
```

### C. 3D Graphic Cards & Dynamic Tabs
A layout displaying key value propositions using underlines and realistic mockups.

```tsx
import React, { useState } from 'react';

export function ValuePropositionTabs() {
  const tabs = ['End-to-End Partnership', 'Unrivaled Design Expertise', 'Smart, Scalable Development'];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="py-24 px-6 bg-[#07070a] text-center w-full">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Why We&apos;re the Right Choice <br /> for Your Startup
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base font-medium">
            We don&apos;t just guide you, we join you. As your business and technology partner, we&apos;re with you every step of the way, from ideation to development, ensuring your startup reaches its full potential.
          </p>
        </div>

        {/* Tab Headers with Gradient Underlines */}
        <div className="flex flex-wrap items-center justify-center gap-6 border-b border-white/[0.04] pb-6">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative pb-3 text-xs font-bold uppercase tracking-widest transition-colors ${
                activeTab === tab ? 'text-white' : 'text-slate-500 hover:text-white'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500" />
              )}
            </button>
          ))}
        </div>

        {/* Two-Column 3D Showcase Cards */}
        <div className="grid md:grid-cols-2 gap-8 text-left">
          
          {/* Card 1: 3D Target/Bullseye */}
          <div className="group rounded-3xl border border-white/[0.04] bg-white/[0.01] p-8 flex flex-col justify-between hover:border-white/10 hover:bg-white/[0.02] transition-all duration-500 min-h-[460px]">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Your Success Is Our Mission</h3>
                <p className="text-slate-400 text-sm max-w-xs font-medium">Our dedicated team works alongside you, offering tailored support through every phase of your journey.</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>
            </div>
            
            {/* Visual Frame */}
            <div className="relative mt-8 aspect-[16/9] rounded-2xl overflow-hidden bg-black/40 border border-white/[0.04] flex items-center justify-center">
              {/* Radial backdrop light representing the glow in the visual */}
              <div className="absolute w-24 h-24 rounded-full bg-slate-500/10 blur-xl pointer-events-none" />
              <div className="text-5xl animate-bounce">🎯</div>
            </div>
          </div>

          {/* Card 2: Glowing 3D Lightbulb */}
          <div className="group rounded-3xl border border-white/[0.04] bg-white/[0.01] p-8 flex flex-col justify-between hover:border-white/10 hover:bg-white/[0.02] transition-all duration-500 min-h-[460px]">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">From Vision to Reality</h3>
                <p className="text-slate-400 text-sm max-w-xs font-medium">We transform your ideas into actionable plans and exceptional digital products, ready to make an impact.</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center group-hover:bg-blue-500 transition-colors shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>
            </div>
            
            {/* Visual Frame with radial yellow backlights */}
            <div className="relative mt-8 aspect-[16/9] rounded-2xl overflow-hidden bg-black/40 border border-white/[0.04] flex items-center justify-center">
              <div className="absolute w-32 h-32 rounded-full bg-yellow-500/15 blur-2xl pointer-events-none animate-pulse" />
              <div className="text-5xl filter drop-shadow-[0_0_15px_rgba(234,179,8,0.6)]">💡</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
```

---

## 📱 3. RESPONSIVE DESIGN RULES

- **Radio / Sliders Wrap**: Ensure sliders or custom tab headers scroll horizontally (`overflow-x-auto whitespace-nowrap`) on narrow screens to prevent container clipping.
- **Button Flex scaling**: On mobile, primary and contact CTA buttons should stack (`flex-col sm:flex-row`) with full-width scaling (`w-full sm:w-auto`).
- **Responsive Text scale**: Hero titles should adapt seamlessly:
  - Mobile: `text-4xl` or `text-5xl`.
  - Desktop: `text-7xl` or `text-8xl`.

---

## ⚠️ 4. CRITICAL JSX & DESIGN PITFALLS

- **NEVER use generic icons** without a soft colored background badge or a dedicated glow backdrop.
- **NEVER overlap tabs** with page navigation wrappers; ensure tab bars use standard responsive padding blocks.
- **Gradient constraints**: Underline animations should use strict inline gradient layers rather than absolute color styles.

---

## 🚀 CHECKLIST FOR SERVICES PAGES

- `[ ]` Base background set to deep premium dark gray (`#07070a`).
- `[ ]` Ambient cyan/indigo radial glows placed behind the main headers.
- `[ ]` Key words accented in Electric Yellow with custom handdrawn SVG underlines.
- `[ ]` Floating client logo cards are responsive and use translucent slate borders.
- `[ ]` Interactive segmented value tabs utilize gradient underlining animations.
- `[ ]` 3D graphic cards house realistic mockups with dynamic radial backlighting.
- `[ ]` All action triggers utilize crisp self-contained vector SVGs.
