const labs = [
  {
    icon: 'biotech',
    title: 'Neural CRM',
    desc: 'Predictive customer behavior modeling using proprietary transformer architectures.',
    status: 'In Research',
  },
  {
    icon: 'cloud_done',
    title: 'VaporSync',
    desc: 'Next-gen peer-to-peer data replication with zero-latency consistency across regions.',
    status: 'Early Prototype',
  },
];

export default function ProductsLabs() {
  return (
    <section className="py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-tertiary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Flexiti Labs</span>
          <h2 className="text-4xl font-bold font-headline text-on-surface">Experimental Concepts</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {labs.map((lab) => (
            <div key={lab.title} className="p-8 rounded-lg bg-surface-container-low border border-outline-variant/5 flex gap-8 items-start hover:border-primary/20 transition-all">
              <div className="p-4 rounded-lg bg-white shadow-sm shrink-0">
                <span className="material-symbols-outlined text-primary text-3xl">{lab.icon}</span>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold font-headline">{lab.title}</h3>
                <p className="text-on-surface-variant text-sm">{lab.desc}</p>
                <span className="inline-flex items-center gap-2 text-xs font-bold text-primary">
                  {lab.status}
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
