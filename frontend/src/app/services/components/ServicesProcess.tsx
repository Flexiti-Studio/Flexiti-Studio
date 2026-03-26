const steps = [
  { icon: 'search', label: 'Discovery', desc: 'Defining goals and technical requirements.', active: true },
  { icon: 'brush', label: 'Design', desc: 'UX strategy and technical architecture.', active: false },
  { icon: 'code', label: 'Development', desc: 'Clean, scalable code and agile sprints.', active: false },
  { icon: 'biotech', label: 'Testing', desc: 'QA automation and rigorous security audits.', active: false },
  { icon: 'support_agent', label: 'Support', desc: 'Post-launch monitoring and optimization.', active: false },
];

export default function ServicesProcess() {
  return (
    <section className="py-24 bg-on-surface text-surface">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="font-headline text-[2rem] font-bold mb-4">Our Architecture Process</h2>
          <p className="text-slate-400 max-w-xl mx-auto">A structured engineering methodology designed for predictable outcomes and flawless execution.</p>
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Progress Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-slate-800 -translate-y-12"></div>
          {steps.map((step) => (
            <div key={step.label} className="relative z-10 text-center">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${step.active ? 'bg-primary shadow-xl shadow-primary/20' : 'bg-slate-800'}`}>
                <span className="material-symbols-outlined text-white">{step.icon}</span>
              </div>
              <h4 className="font-headline font-semibold mb-2">{step.label}</h4>
              <p className="text-xs text-slate-400">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
