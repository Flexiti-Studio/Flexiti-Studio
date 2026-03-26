const reasons = [
  {
    title: 'Modern Tech Stack',
    desc: 'We use bleeding-edge technologies (React, Node, Go, AWS) to ensure your product remains relevant.',
  },
  {
    title: 'Fast Execution',
    desc: 'Our agile processes and modular components allow us to ship high-quality products in record time.',
  },
  {
    title: 'Startup Focused',
    desc: "We understand the unique constraints and needs of founders—growth is always the primary metric.",
  },
  {
    title: 'Design First',
    desc: "Premium UI/UX isn't an afterthought; it's integrated into every feature we architect.",
  },
];

export default function AboutWhyUs() {
  return (
    <section className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="font-headline text-4xl font-bold text-on-surface mb-6 leading-tight">Why Choose Our Studio?</h2>
            <p className="text-on-surface-variant text-lg">We combine the speed of a startup with the precision of an enterprise engineering team.</p>
          </div>
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
            {reasons.map((reason) => (
              <div key={reason.title} className="p-8 rounded-lg bg-surface-container-lowest border border-outline-variant/15">
                <h4 className="font-headline font-bold text-on-surface mb-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  {reason.title}
                </h4>
                <p className="text-on-surface-variant">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
