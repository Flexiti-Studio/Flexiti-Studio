# 🌌 TECH LANDING PAGE SKILL (Dark Space & Neon Glow)

This skill defines the technical implementation and design system guidelines for constructing state-of-the-art, high-fidelity landing pages. It codifies the premium **Dark Space Glassmorphism & Neon Glow** design system.

---

## 🎨 1. CORE DESIGN TOKENS & SYSTEM

All landing pages implemented under this system must adhere strictly to these visual tokens:

### A. Color Palette
- **Background (Base)**: Deep Cosmic Black (`#030014` or `bg-[#030014]`).
- **Glow Accents**: Neon Violet (`#7c3aed` / `to-purple-600`) and Electric Indigo (`#4f46e5` / `from-indigo-600`).
- **Glass Fills**: Translucent slate/white (`bg-white/[0.02]` or `bg-[#ffffff]/[0.02]`).
- **Borders**: Micro-glass boundaries (`border-white/[0.06]` or `border-slate-800/50`).
- **Text**: Premium White (`text-white` / `text-slate-100`) and Slate Gray (`text-slate-400` / `text-slate-500` for description text).

### B. Effects & Shapes
- **Large Atmospheric Glows**: Large radial/conic gradients with extreme blur (`blur-3xl`, `opacity-30` to `opacity-50`).
- **Glow Horizon/Arch**: A signature top-positioned arch representing a glowing planetary horizon or a halo behind the main headline.
- **Glassmorphic Cards**: `backdrop-blur-xl border border-white/[0.06] rounded-3xl`.
- **Micro-Animations**: Hover-scale transitions (`hover:scale-[1.02] duration-300 ease-out`), directional indicator shifts (`group-hover:translate-x-0.5 group-hover:-translate-y-0.5`).

---

## 📋 2. PAGE COMPONENT ARCHITECTURE & CODE

### A. The Hero Section (With Planet Halo / Horizon Glow)
A premium header featuring the signature planetary arch horizon backdrop, high-contrast typography, and floating call-to-actions.

```tsx
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-[#030014] pt-32 pb-16 px-4 md:px-8">
      {/* Planetary Arch Horizon Glow */}
      <div className="absolute top-[-10%] md:top-[-20%] left-1/2 -translate-x-1/2 w-[140%] md:w-[100%] aspect-square rounded-full bg-gradient-to-b from-[#7c3aed]/40 via-[#4f46e5]/10 to-transparent blur-[80px] md:blur-[120px] pointer-events-none" />
      <div className="absolute top-[-5%] left-1/2 -translate-x-1/2 w-[90%] md:w-[70%] aspect-square rounded-full border-t-[3px] border-[#a78bfa]/30 filter blur-[2px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl text-center space-y-6 md:space-y-8">
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tight text-white leading-[1.05]">
          Innovating Tomorrow.<br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500">
            Building Today.
          </span>
        </h1>

        {/* Tagline */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-slate-400 font-medium leading-relaxed">
          Empowering businesses with next-gen technology solutions from custom software to AI-driven platforms, we engineer your digital success.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button className="w-full sm:w-auto h-12 px-8 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-sm transition-all duration-300 shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_25px_rgba(124,58,237,0.5)] active:scale-95">
            Get a Free Consultation
          </button>
          <button className="w-full sm:w-auto h-12 px-8 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md text-white font-semibold text-sm transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20 active:scale-95">
            See Our Work
          </button>
        </div>
      </div>
    </section>
  );
}
```

### B. Floating Trust Badge Bar
A floating glass-morphic container housing social proofs and ratings.

```tsx
export function TrustBadgeBar() {
  const badges = [
    { name: 'Trustpilot', icon: '★' },
    { name: 'Capterra', icon: '▲' },
    { name: 'Google', icon: 'G' },
    { name: 'Capterra Secondary', icon: '▲' },
  ];

  return (
    <div className="relative z-20 max-w-5xl mx-auto px-4 md:px-8 -mt-8 md:-mt-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-8 py-6 rounded-[2.5rem] border border-white/[0.06] bg-white/[0.01] backdrop-blur-xl shadow-2xl">
        {/* Rating Column */}
        <div className="flex items-center gap-4 text-center md:text-left">
          <div className="space-y-1">
            <div className="text-[#fbbf24] text-sm tracking-wider">★★★★★</div>
            <div className="text-xl font-bold text-white tracking-tight">1,200+</div>
            <div className="text-[10px] text-slate-500 font-extrabold uppercase tracking-widest">Rated 4.9/5 by users</div>
          </div>
        </div>

        {/* Separator line on desktop */}
        <div className="hidden md:block h-12 w-[1px] bg-white/10" />

        {/* Badge Logos Grid */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {badges.map((badge, idx) => (
            <div key={idx} className="flex items-center gap-2 text-slate-300 font-medium tracking-wide text-sm opacity-80 hover:opacity-100 transition-opacity">
              <span className="text-indigo-400 font-bold">{badge.icon}</span>
              <span>{badge.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
```

### C. Featured Service/Capabilities Grid
A layout showcasing services using dark glass cards, featuring one **Accent Card (High-Contrast/Vibrant Purple)** that represents the highlighted offering.

```tsx
interface ServiceCardProps {
  title: string;
  desc: string;
  icon: React.ReactNode;
  isFeatured?: boolean;
}

export function ServiceCard({ title, desc, icon, isFeatured = false }: ServiceCardProps) {
  return (
    <div 
      className={`group relative p-8 rounded-[2rem] border transition-all duration-500 overflow-hidden cursor-pointer flex flex-col justify-between min-h-[260px] ${
        isFeatured 
          ? 'bg-gradient-to-br from-indigo-600 to-purple-700 border-indigo-500 shadow-[0_0_30px_rgba(99,102,241,0.25)] hover:scale-[1.03]' 
          : 'bg-white/[0.01] border-white/[0.06] hover:bg-white/[0.03] hover:border-white/10 hover:scale-[1.02]'
      }`}
    >
      {/* Hover background highlight for default cards */}
      {!isFeatured && (
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      )}

      {/* Header (Icon + UpRight Link) */}
      <div className="flex items-center justify-between">
        <div className={`p-3 rounded-2xl ${isFeatured ? 'bg-white/10 text-white' : 'bg-indigo-500/10 text-indigo-400'}`}>
          {icon}
        </div>
        <ArrowUpRight className={`size-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${isFeatured ? 'text-white' : 'text-slate-500 group-hover:text-white'}`} />
      </div>

      {/* Info Content */}
      <div className="mt-8 space-y-3">
        <h3 className={`text-xl font-bold tracking-tight ${isFeatured ? 'text-white' : 'text-slate-100'}`}>
          {title}
        </h3>
        <p className={`text-sm leading-relaxed ${isFeatured ? 'text-indigo-100' : 'text-slate-400'}`}>
          {desc}
        </p>
      </div>
    </div>
  );
}
```

### D. "Built on Trust" (Full-Width Accent Stripe)
A block spanning the full width of the screen using the primary deep violet color for high-impact brand statements.

```tsx
export function BuiltOnTrustSection() {
  const steps = [
    { num: '01', title: '10+ Years of Tech Expertise' },
    { num: '02', title: 'Transparent Agile Process' },
    { num: '03', title: 'Dedicated Full-Stack Teams' },
    { num: '04', title: '24/7 Support & Maintenance' }
  ];

  return (
    <section className="w-full bg-[#180066] py-20 px-4 md:px-8 border-y border-indigo-500/20 relative overflow-hidden">
      {/* Background soft ambient lights */}
      <div className="absolute inset-0 bg-radial-glow from-purple-700/20 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto space-y-12">
        {/* Title */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Built on Trust. Driven by Results.
          </h2>
          <p className="text-indigo-200 max-w-xl mx-auto text-sm md:text-base font-medium">
            We don't just build software, we build relationships. Our clients trust us to deliver technology that works.
          </p>
        </div>

        {/* 4-column Outline Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="group p-6 rounded-2xl border border-indigo-400/20 bg-indigo-950/20 hover:bg-indigo-950/40 transition-colors duration-300 flex flex-col justify-between min-h-[160px] cursor-pointer">
              <div className="flex items-center justify-between">
                <span className="text-indigo-300 font-extrabold tracking-tight text-lg">{step.num}</span>
                <ArrowUpRight className="size-4 text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </div>
              <h4 className="text-lg font-bold text-white tracking-tight mt-6 group-hover:text-indigo-200 transition-colors">
                {step.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## 📱 3. RESPONSIVENESS & MOBILE PRINCIPLES

- **No Rounded Corners on Cards on Small Screens**: On small viewports, reduce excessive card radii. Use `rounded-2xl md:rounded-[2.5rem]`.
- **Trust Badges Row Wrap/Scroll**: Ensure the floating Trust Badge Row wraps gracefully or supports horizontal swipe on mobile by applying `flex-wrap md:flex-nowrap justify-center`.
- **Text Scaling**:
  - Hero Titles: Scale from `text-4xl` on mobile to `text-6xl sm:text-7xl lg:text-8xl` on large monitors.
  - Spacing/Paddings: Standardize section vertical paddings to `py-12 md:py-24`.
- **Buttons block status**: Set buttons to `w-full md:w-auto` in CTAs so mobile users have large tap targets.

---

## ⚠️ 4. CRITICAL JSX & DESIGN PITFALLS

- **NEVER hardcode boring primary colors** like plain `#00f` or `#ff0000`. Only use rich HSL tones or gradient mixtures (e.g., `#7c3aed` to `#4f46e5`).
- **NEVER use Tailwind responsive prefixes directly on component attribute numbers**:
  - `❌ WRONG`: `<ArrowUpRight size={16} md:size={20} />`
  - `✅ CORRECT`: `<ArrowUpRight className="size-4 md:size-5" />`
- **Featured Card Accent constraint**: Ensure exactly **one** card in a grid utilizes the high-contrast colorful layout to provide visual interest and hierarchy without overwhelming the eyes.

---

## 🚀 CHECKLIST FOR TECH LANDING PAGES

- `[ ]` Background set to cosmic/nebula black (`#030014`).
- `[ ]` Top Planet-Arch Halo background implemented behind Hero titles.
- `[ ]` Headline styled with clean white text alongside vibrant blue-to-pink gradients.
- `[ ]` Trust Badge bar includes a floating glass background and clear separator.
- `[ ]` Features/Capabilities grid includes a mix of subtle glass cards and exactly one colorful featured card.
- `[ ]` Value proposition includes a full-width deep indigo banner spanning edge-to-edge.
- `[ ]` All links and interactive cards feature micro-animations (e.g. arrow icons sliding up-right `↗` on hover).
- `[ ]` Layout is responsive on mobile screens (buttons stretch to full-width, trust badges wrap safely).
