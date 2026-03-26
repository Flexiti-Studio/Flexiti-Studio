const capabilities = [
  { icon: 'language', title: 'Web App Dev', desc: 'Modern, responsive, and blazing-fast web applications built with the latest frameworks.' },
  { icon: 'smartphone', title: 'Mobile App Dev', desc: 'Native and cross-platform mobile experiences that users love to interact with daily.' },
  { icon: 'cloud_done', title: 'SaaS Platforms', desc: 'Multi-tenant, scalable software-as-a-service architectures built for high volume.' },
  { icon: 'speed', title: 'MVP Dev', desc: 'Rapid prototyping and development to get your product to market and validated fast.' },
  { icon: 'smart_toy', title: 'AI & Automation', desc: 'Integrating intelligent workflows and machine learning to optimize your operations.' },
  { icon: 'architecture', title: 'System Design', desc: 'High-level consulting on tech stacks, database design, and cloud infrastructure.' },
];

export default function AboutCapabilities() {
  return (
    <section className="py-32 bg-surface-container-low rounded-lg mx-4">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <span className="font-label text-sm font-bold text-primary tracking-widest uppercase mb-4 block">Core Capabilities</span>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-on-surface">Architecting Solutions</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap) => (
            <div key={cap.title} className="bg-surface-container-lowest p-8 rounded-lg hover:shadow-xl transition-all group">
              <span className="material-symbols-outlined text-primary text-4xl mb-6 block group-hover:scale-110 transition-transform">{cap.icon}</span>
              <h4 className="font-headline text-xl font-bold text-on-surface mb-3">{cap.title}</h4>
              <p className="text-on-surface-variant leading-relaxed">{cap.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
