const services = [
  {
    icon: 'web',
    title: 'Web App Dev',
    description: 'High-performance React and Next.js applications optimized for speed, SEO, and seamless user interaction.',
  },
  {
    icon: 'smartphone',
    title: 'Mobile App Dev',
    description: 'Native-feel cross-platform apps built with Flutter or React Native for iOS and Android deployment.',
  },
  {
    icon: 'cloud_done',
    title: 'SaaS Product Dev',
    description: 'End-to-end multi-tenant architectures featuring complex billing, role management, and scalability.',
  },
  {
    icon: 'rocket_launch',
    title: 'MVP Dev',
    description: 'Rapid development cycles to get your core product to market in weeks, not months, without technical debt.',
  },
  {
    icon: 'psychology',
    title: 'AI & Automation',
    description: 'Integrating LLMs, custom machine learning models, and automated workflows into your existing stack.',
  },
  {
    icon: 'hub',
    title: 'System Integration',
    description: 'Connecting fragmented tools and legacy systems through robust custom API layers and middleware.',
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="font-headline text-[2rem] font-bold text-on-surface mb-4">Core Competencies</h2>
            <p className="text-on-surface-variant">We bridge the gap between complex engineering and elegant user experiences across the entire digital landscape.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-surface-container-lowest p-10 rounded-lg hover:shadow-xl transition-all duration-500 group">
              <div className="w-12 h-12 bg-primary-fixed rounded-xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-on-primary">{service.icon}</span>
              </div>
              <h3 className="font-headline text-xl font-semibold text-on-surface mb-4">{service.title}</h3>
              <p className="text-sm leading-relaxed mb-6">{service.description}</p>
              <div className="h-1 w-0 bg-primary group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
