# 📰 BLOGS PAGE SKILL (Beyond UI Premium Minimalist & Light Aesthetic)

This skill defines the technical implementation guidelines, color tokens, visual styles, and copy-pasteable TSX structures to engineer state-of-the-art Blog and Article showcase pages. It is modeled exactly after the premium **Beyond UI Light Minimalist & High-Readability** design system shown in your reference image.

---

## 🎨 1. CORE DESIGN TOKENS & SYSTEM

All components built under this system must adhere strictly to these visual parameters:

### A. Color Palette
- **Canvas / Background**: Pristine Snow White (`#ffffff`) or Soft Slate White (`#f8fafc`).
- **Typography & Headings**: Rich Charcoal Slate (`#0f172a` or `text-slate-900`) for headers, and Slate Gray (`#475569` or `text-slate-600`) for body/descriptions.
- **Accents & Primary CTAs**: Midnight Black (`#0f172a` or `bg-slate-900`) and pure White (`#ffffff` text).
- **Secondary Buttons & Outlines**: Clean translucent Slate outline (`border-slate-200` or `hover:bg-slate-50`).
- **Category Tags**: Subtle Dark Slate rounded pills (`bg-slate-900 text-white` or `bg-slate-100 text-slate-800`).
- **Card Separators**: Ultra-thin hairline grids (`border-slate-100` or `border-slate-200/60`).

### B. Effects & Details
- **Large-Radius Rounded Corners**: Standardized extremely smooth `rounded-[2rem]` (32px) for large article images and featured hero blocks.
- **Micro-Shadows**: Minimal elevation styles (`shadow-[0_8px_30px_rgb(0,0,0,0.02)]` or `shadow-sm`) to keep interfaces feeling flat, professional, and lightweight.
- **Author Meta Footers**: Small avatar circles (`w-6 h-6 rounded-full`), followed by clean inline metadata lists using dot indicators (`•`).

---

## 📋 2. COMPONENT ARCHITECTURE & TSX TEMPLATES

### A. Beyond UI Navbar Header
A minimal header showcasing professional navigation links and primary/secondary capsule CTA button actions.

```tsx
import React from 'react';
import Link from 'next/link';

export function BlogNavbar() {
  return (
    <nav className="w-full bg-white border-b border-slate-100 py-6 px-8 flex items-center justify-between">
      {/* Logo on Left */}
      <div className="flex items-center gap-3 cursor-pointer">
        <div className="w-8 h-8 rounded-xl bg-slate-900 flex items-center justify-center">
          <svg className="w-4.5 h-4.5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 22h20L12 2zm0 3.99L19.53 19H4.47L12 5.99z" />
          </svg>
        </div>
        <span className="text-lg font-black tracking-tight text-slate-900 font-headline">Beyond UI</span>
      </div>

      {/* Center Nav Links */}
      <div className="hidden md:flex items-center gap-8">
        {['Homepage', 'About us', 'Features', 'Blog', 'Contact us'].map((item) => (
          <Link 
            key={item} 
            href="#" 
            className="text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors"
          >
            {item}
          </Link>
        ))}
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-3">
        <button className="px-5 h-10 rounded-full border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 transition-colors">
          Demo
        </button>
        <button className="px-6 h-10 rounded-full bg-slate-900 text-xs font-bold text-white hover:bg-slate-800 transition-colors">
          Get Started
        </button>
      </div>
    </nav>
  );
}
```

### B. Featured Hero Banner & Stack (2-Column Grid)
A balanced dual-column layout highlighting a massive featured article on the left, next to a vertical list of trending posts on the right.

```tsx
import React from 'react';

export function BlogFeaturedSection() {
  const trending = [
    {
      img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=150&auto=format&fit=crop',
      title: 'Revolutionizing industries through SaaS implementation'
    },
    {
      img: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=150&auto=format&fit=crop',
      title: 'Synergizing saas and UX design for elevating digital experiences'
    },
    {
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=150&auto=format&fit=crop',
      title: 'Navigating saas waters with intuitive UI and UX'
    },
    {
      img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=150&auto=format&fit=crop',
      title: 'Sculpting saas success - the art of UI and UX design'
    },
    {
      img: 'https://images.unsplash.com/photo-1542744094-3a31f103e35f?q=80&w=150&auto=format&fit=crop',
      title: 'Transforming saas platforms - a UI/UX design odyssey'
    }
  ];

  return (
    <section className="bg-white py-16 px-8 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Big Featured Card */}
        <div className="lg:col-span-7 group cursor-pointer space-y-6">
          <div className="relative aspect-[16/10] w-full rounded-[2rem] overflow-hidden bg-slate-100 border border-slate-100">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
              alt="Unlocking Business Efficiency"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
            />
            {/* Soft dark overlay inside visual for premium look */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            
            {/* Embedded details on top of image overlay */}
            <div className="absolute bottom-8 left-8 right-8 text-white space-y-4">
              <span className="inline-block px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-white/20 backdrop-blur-md border border-white/10">
                Business
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                Unlocking Business Efficiency with SaaS Solutions
              </h2>
            </div>
          </div>
        </div>

        {/* Right Column: Other Featured Posts List */}
        <div className="lg:col-span-5 space-y-6">
          <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">Other featured posts</h3>
          
          <div className="divide-y divide-slate-100">
            {trending.map((post, idx) => (
              <div key={idx} className="group py-4 first:pt-0 last:pb-0 flex items-center gap-4 cursor-pointer">
                {/* Thumb Image */}
                <div className="w-16 h-12 rounded-xl overflow-hidden shrink-0 border border-slate-100">
                  <img src={post.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={post.title} />
                </div>
                {/* Headline */}
                <h4 className="text-xs font-bold leading-normal text-slate-800 group-hover:text-slate-900 transition-colors">
                  {post.title}
                </h4>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
```

### C. Recent Posts Grid (3-Column Layout)
A highly read-optimized grid housing three columns of fresh posts complete with author profile ribbons.

```tsx
import React from 'react';

export function BlogRecentGrid() {
  const posts = [
    {
      img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop',
      title: 'Mastering UI Elements: A Practical Guide for Designers',
      desc: 'Dive into the world of user interfaces with our expert guides, latest trends, and practical tips.',
      author: {
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop',
        name: 'Jennifer Taylor',
        time: '3 min read'
      }
    },
    {
      img: 'https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?q=80&w=600&auto=format&fit=crop',
      title: 'Crafting Seamless Experiences: The Art of Intuitive UI Design',
      desc: 'Explore the principles and techniques that drive user-centric UI design, ensuring a seamless and intuitive experience.',
      author: {
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop',
        name: 'Jennifer Taylor',
        time: '5 min read'
      }
    },
    {
      img: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=600&auto=format&fit=crop',
      title: 'Beyond Aesthetics: The Power of Emotional UX Design',
      desc: 'Delve into the realm of emotional design and discover how incorporating empathy and psychology elevates product strategy.',
      author: {
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop',
        name: 'Ryan A.',
        time: '2 min read'
      }
    }
  ];

  return (
    <section className="bg-white py-16 px-8 max-w-7xl mx-auto w-full">
      <div className="space-y-12">
        
        {/* Header Block */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-6">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Recent Posts</h2>
          <button className="px-5 py-2.5 rounded-full border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 transition-colors">
            All Posts
          </button>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {posts.map((post, idx) => (
            <div key={idx} className="group flex flex-col justify-between cursor-pointer space-y-6">
              
              {/* Cover Photo */}
              <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden border border-slate-100">
                <img 
                  src={post.img} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700" 
                />
              </div>

              {/* Title & Body */}
              <div className="space-y-3">
                <h3 className="text-xl font-extrabold leading-tight text-slate-900 tracking-tight group-hover:text-slate-800 transition-colors">
                  {post.title}
                </h3>
                <p className="text-xs font-medium leading-relaxed text-slate-500 line-clamp-3">
                  {post.desc}
                </p>
              </div>

              {/* Meta Info Footer */}
              <div className="flex items-center gap-3 pt-2">
                <div className="w-6 h-6 rounded-full overflow-hidden border border-slate-100 shrink-0">
                  <img src={post.author.avatar} alt={post.author.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-600">
                  <span>{post.author.name}</span>
                  <span className="text-slate-300">•</span>
                  <span>{post.author.time}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
```

---

## 📱 3. RESPONSIVE DESIGN RULES

- **Flexible Column Wrapping**: Use standard Next/Tailwind grids (`grid-cols-1 md:grid-cols-3`) to allow mobile cards to stack smoothly into single-column structures.
- **Aspect Ratio Locking**: Article photo layers must be set using fixed utility helpers (`aspect-[16/10]` or `aspect-[16/9]`) to ensure layouts remain uniform and aligned on any browser dimensions.
- **Meta Footer Compression**: Meta list names and tags should drop text margins dynamically or leverage flexible containers to prevent line wrapping inside narrow portrait orientations.

---

## ⚠️ 4. CRITICAL JSX & DESIGN PITFALLS

- **NEVER use low-contrast text values**: Keep all title layers set inside strong values (`text-slate-900` or `#0f172a`) on light canvases.
- **NEVER leave hard sharp edges on elements**: Ensure all article thumbnails carry standard rounded modifiers (`rounded-[2rem]` or `rounded-xl`).
- **Separation rules**: Avoid massive vertical spaces. The Beyond UI design relies on precise light-gray lines (`border-slate-100`) rather than large structural padding margins.

---

## 🚀 CHECKLIST FOR BLOGS PAGES

- `[ ]` Base canvas background set to clean snow white (`#ffffff`).
- `[ ]` Large article images built with custom `rounded-[2rem]` smooth corners.
- `[ ]` Hero page arranged as a balanced 2-column split (Featured Post / Trending List).
- `[ ]` Row elements separated using thin slate hairline dividers (`border-slate-100`).
- `[ ]` Meta footer displays author profile avatar and reading indicators.
- `[ ]` Headings utilize heavy charcoal fontweights with outstanding tracking margins.
