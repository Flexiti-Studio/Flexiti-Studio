const stats = [
  { value: '99.9%', label: 'Uptime Guarantee' },
  { value: '10ms', label: 'Average Latency' },
  { value: '50+', label: 'Active Deployments' },
  { value: '4k+', label: 'Daily Users' },
];

export default function ProductsScalability() {
  return (
    <section className="py-32 bg-on-surface text-surface overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="space-y-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold font-headline tracking-tight leading-tight">
            Software built for <span className="text-primary-fixed-dim">scalability</span> and real-world growth.
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            We don&apos;t build just to &ldquo;build.&rdquo; Every line of code at Flexiti Studio is a solution to a specific business pain point. From high-frequency trading tools to educational management systems, we prioritize the end-user&apos;s friction-less experience.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold font-headline text-primary-fixed-dim">{stat.value}</div>
                <div className="text-sm text-slate-500 uppercase font-bold tracking-widest mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="rounded-lg overflow-hidden transform lg:rotate-6 lg:scale-110 shadow-2xl">
            <img
              alt="Code Scalability"
              className="w-full aspect-[4/5] object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIS50Ox79gwRBDfeQniacuGBX3A2MScnAOwizLmKAwX9qaOQ3g4zfmF_uHLFpPPaTufTmDtLbnXnccukp38B2iQSkfitIHs9owRf1_nzeqGHcabpHxuMXoE-4hjSw_VbQGWj_mzf5YJ6UjxSeHrcbVYU_gJ0fY-CRmIB5Xt14GhqoZrkjin8aEYXJD_mO9dWZOWlWbLPDpWSBIrW1owEOfYiLBTpOnsNftjPmvEfYV-VwyTvj68jtOMacCztJG1RCHWPBnlEpape9w"
            />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 blur-[120px] rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
