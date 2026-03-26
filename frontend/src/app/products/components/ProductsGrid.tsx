const products = [
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJS8jIVQ7Mh5QRkqbiHwl3J95ipNwhN_Z84F1QZcjIpzczC2Iyfbsw7qKd4X8k5oil_V64Ij_NMoHc4B1jxUSBDndyIUr-8hMM0J1qkLAEqWAqTCTzd7VsFpAX0GDFeNXrqIcZHcG4EIJ1L1b2RkbTBHFE4jS5QQpHW_g6_yUBVxFd3WLrUIVHv_yHJcrfjBnDQfC2a7eu5YK9RTf8xAKNb_m9jOPprKVpzxXirOTa3aVH2RcIJRGGvwjH5vvZLdSU6ock8PwRboDE',
    tag: 'AI & Automation', status: 'Live',
    title: 'AI Chatbot System',
    desc: 'Enterprise-grade LLM integration for automated customer success.',
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAoMmEq9umsFm2-lPwrske0dU8szav3UeR8ZB0MS5GyvBTv1pH_hrtMnFWZ_oztKfXxvwH1D6Vl94mh9GBBM3VXs-ev7qMY0T5vLtYs5rZXi3iDWSoQe1IQu3soNJwds4sNdkdlX7RRstO8esmNNSsmYJAvmwy2gNB-d4e_iZMnEt3R4WbU_oibIYaLj5qTXEi2LPv9e2mTOLfAY0RHddWug5FJQKinSxBp5f8ysXDxWawgn21Bf3FZmSt4QFYmDZwlItNJqzhEjO_h',
    tag: 'FinTech', status: 'Private Beta',
    title: 'Trade Copier Tool',
    desc: 'Latency-optimized execution for professional trading desk synchronization.',
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRsa5YlqNey4XzleA8Al9bTMLY5isHrJ5wQSt1X_xYETl6yNxeaHddXrILUvBx7U6XetMPYoPVzc2_P69TLJiTMRcp-8j_SGdO16vHPC-1y8Q4J_V9FdSPqETUQZ4E1Yux20h1HOaAuPjbRwm02sjdA-76obfX5RYFaiWWx4nTeupkTS3hXoI77IE49QufYJo614T_0P1Ldt2iGmGTeG40zxX6NseDXIOfIAWkGbZBTMrGhemgr-ooDcDl_zRxHCO4waHYhTxLGZdy',
    tag: 'Internal Tools', status: 'Live',
    title: 'Escrow System',
    desc: 'Secure transactional layer for high-trust digital marketplace environments.',
  },
  {
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRkWOnHEOjHacJS-e0Y2760jBZlh1EBFjPxxoBP_IY2xhOYzFldYOH3GkQ45aucbxro1LHv_Vi4h01N9NnScDYnQ-MuS5FyTqHoUKXcI2XDnlukUjb4_tFJcRQ1ZoRZjSyTo6-rkCVI_mxUrSu1iLqTkes4V6NWha56V1QKzZTUgIdWgADAiUrWT6tMMkDZ0RBsLjzTpVY2hzDr3Entco1_ORa6PCH36Tv6OUKHsrS8DqyRzzThzhxlL8qSB-7myK_53JtC3mI0_lY',
    tag: 'Utilities', status: 'Open Source',
    title: 'YT Downloader',
    desc: 'High-speed media extraction tool for content creators and editors.',
  },
];

export default function ProductsGrid() {
  return (
    <section className="py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-bold font-headline text-on-surface mb-4">Our Ecosystem</h2>
            <p className="text-on-surface-variant max-w-xl">A growing collection of specialized tools built to solve specific industry bottlenecks.</p>
          </div>
          <div className="flex items-center gap-2 text-primary font-bold cursor-pointer hover:gap-4 transition-all">
            View All Solutions <span className="material-symbols-outlined">arrow_forward</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.title} className="bg-surface group rounded-lg overflow-hidden border border-outline-variant/10 hover:shadow-2xl transition-all duration-300">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={product.image}
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-bold text-primary bg-primary/5 px-2 py-1 rounded">{product.tag}</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{product.status}</span>
                </div>
                <h4 className="text-xl font-bold font-headline text-on-surface">{product.title}</h4>
                <p className="text-sm text-on-surface-variant line-clamp-2">{product.desc}</p>
                <button className="w-full py-2.5 rounded-full bg-surface-container text-primary font-bold text-sm hover:bg-primary hover:text-on-primary transition-all">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
