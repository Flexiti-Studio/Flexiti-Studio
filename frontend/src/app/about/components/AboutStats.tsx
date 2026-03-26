const stats = [
  { value: '50+', label: 'Projects Built' },
  { value: '12+', label: 'Systems Developed' },
  { value: '30+', label: 'Clients Served' },
  { value: '15+', label: 'Tools Created' },
];

export default function AboutStats() {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-headline text-5xl font-extrabold text-primary mb-2">{stat.value}</div>
              <div className="font-label text-sm font-bold text-on-surface-variant uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
