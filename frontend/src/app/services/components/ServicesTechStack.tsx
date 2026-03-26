const stack = [
  { color: 'bg-blue-400', label: 'React' },
  { color: 'bg-slate-900', label: 'Next.js' },
  { color: 'bg-green-500', label: 'Node.js' },
  { color: 'bg-blue-300', label: 'Flutter' },
  { color: 'bg-sky-400', label: 'TypeScript' },
  { color: 'bg-orange-500', label: 'AWS' },
];

export default function ServicesTechStack() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <h2 className="font-headline text-2xl font-bold mb-12">Our Core Ecosystem</h2>
        <div className="flex flex-wrap justify-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all">
          {stack.map((tech) => (
            <span key={tech.label} className="px-6 py-3 bg-surface-container-high rounded-full font-headline text-sm font-semibold text-on-surface-variant flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${tech.color}`}></span>
              {tech.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
