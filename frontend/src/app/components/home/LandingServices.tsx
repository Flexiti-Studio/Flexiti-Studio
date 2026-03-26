export default function LandingServices() {
  return (
    <section className="py-32" id="services">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-20 max-w-2xl">
          <h2 className="font-headline text-4xl font-bold mb-6">Expert Solutions for Modern Challenges</h2>
          <p className="text-on-surface-variant text-lg">We combine engineering precision with creative vision to deliver products that dominate markets.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Card */}
          <div className="group p-8 rounded-DEFAULT bg-surface-container-lowest border border-outline-variant/15 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-3xl" data-icon="terminal">terminal</span>
            </div>
            <h3 className="text-xl font-headline font-bold mb-4">Web App Development</h3>
            <p className="text-on-surface-variant leading-relaxed">High-performance, scalable web applications built with React, Next.js, and robust backends.</p>
          </div>
          <div className="group p-8 rounded-DEFAULT bg-surface-container-lowest border border-outline-variant/15 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-3xl" data-icon="smartphone">smartphone</span>
            </div>
            <h3 className="text-xl font-headline font-bold mb-4">Mobile App Development</h3>
            <p className="text-on-surface-variant leading-relaxed">Native-feel cross-platform mobile experiences that users love to keep on their home screens.</p>
          </div>
          <div className="group p-8 rounded-DEFAULT bg-surface-container-lowest border border-outline-variant/15 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-3xl" data-icon="cloud_done">cloud_done</span>
            </div>
            <h3 className="text-xl font-headline font-bold mb-4">SaaS Product Development</h3>
            <p className="text-on-surface-variant leading-relaxed">Multi-tenant architectures, subscription management, and secure cloud infrastructure.</p>
          </div>
          <div className="group p-8 rounded-DEFAULT bg-surface-container-lowest border border-outline-variant/15 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-3xl" data-icon="rocket_launch">rocket_launch</span>
            </div>
            <h3 className="text-xl font-headline font-bold mb-4">MVP Development</h3>
            <p className="text-on-surface-variant leading-relaxed">Fast-track your idea to market with essential features and scalable code foundation.</p>
          </div>
          <div className="group p-8 rounded-DEFAULT bg-surface-container-lowest border border-outline-variant/15 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-3xl" data-icon="psychology">psychology</span>
            </div>
            <h3 className="text-xl font-headline font-bold mb-4">AI Tools &amp; Automation</h3>
            <p className="text-on-surface-variant leading-relaxed">Integrating LLMs and custom automation flows to supercharge your business efficiency.</p>
          </div>
          <div className="group p-8 rounded-DEFAULT bg-surface-container-lowest border border-outline-variant/15 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-3xl" data-icon="hub">hub</span>
            </div>
            <h3 className="text-xl font-headline font-bold mb-4">System Integration</h3>
            <p className="text-on-surface-variant leading-relaxed">Connecting disparate systems via custom APIs to create a unified digital ecosystem.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
