export default function LandingStats() {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div>
            <div className="text-5xl font-headline font-extrabold text-primary mb-2">100+</div>
            <div className="text-on-surface-variant font-medium">Projects Completed</div>
          </div>
          <div>
            <div className="text-5xl font-headline font-extrabold text-primary mb-2">50+</div>
            <div className="text-on-surface-variant font-medium">Clients Served</div>
          </div>
          <div>
            <div className="text-5xl font-headline font-extrabold text-primary mb-2">500+</div>
            <div className="text-on-surface-variant font-medium">Systems Built</div>
          </div>
          <div>
            <div className="text-5xl font-headline font-extrabold text-primary mb-2">99.9%</div>
            <div className="text-on-surface-variant font-medium">Uptime</div>
          </div>
        </div>
      </div>
    </section>
  );
}
