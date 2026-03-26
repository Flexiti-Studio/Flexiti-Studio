const stats = [
  { value: '12', label: 'Active SaaS Tools' },
  { value: '85k', label: 'End Users' },
  { value: '1.2M', label: 'Lines of Code' },
  { value: '06', label: 'In Development' },
];

export default function ProductsStats() {
  return (
    <section className="py-24 border-y border-outline-variant/15">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <div className="text-5xl font-extrabold font-headline text-on-surface">{stat.value}</div>
            <div className="text-sm text-on-surface-variant font-medium mt-2">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
