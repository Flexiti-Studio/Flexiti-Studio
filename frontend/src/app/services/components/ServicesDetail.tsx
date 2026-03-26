const details = [
  {
    icon: 'analytics',
    title: 'Web & Dashboards',
    items: ['Custom CRM Dashboards', 'Real-time Data Analytics', 'Interactive Visualization', 'SSR & Static Generation'],
  },
  {
    icon: 'payments',
    title: 'SaaS Infrastructure',
    items: ['Stripe/Paddle Integration', 'Multi-tenancy Isolation', 'RBAC & User Permissions', 'Automated Provisioning'],
  },
  {
    icon: 'smart_toy',
    title: 'AI Intelligence',
    items: ['Custom GPT Implementations', 'AI-Powered Chatbots', 'Predictive Maintenance', 'Intelligent Data Mining'],
  },
];

export default function ServicesDetail() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <h2 className="font-headline text-4xl font-bold text-on-surface mb-6 leading-tight">Expertise Deep Dive</h2>
            <p className="text-lg text-on-surface-variant mb-10">
              We don&apos;t just build features; we engineer systems that drive business objectives through specialized technical domains.
            </p>
            <img
              className="rounded-lg shadow-2xl w-full"
              alt="Minimalist dashboard interface with clean data visualization charts and soft blue accents"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzQ1ai9yzbfSA7R3yYAu46iNyd1Huh9lxQ-mxrYRmxIKeFMt-Qu6c4UyyXKZ06p2ZBfR7iQ2YJEU0QLsVtKC2t5jCuTg1yDLJzyyQ9pvh2fEfZzBYZs0vi-TT6-YMnnibxxmGvuI2CQzLlXhHzdI55-4NuGpouW7ebJ6N2tKhJWA1ZgOw4tpcZscOn77XfUWXD3ypRfSMZ8-trDt_RpJ_cN7KWbrtHgqHk2UyyiyLUDfcSgC0qGFBTUZY28EW-_RNkR0HPhLmKbkbE"
            />
          </div>
          <div className="lg:col-span-7 space-y-12">
            {details.map((detail) => (
              <div key={detail.title} className="p-8 rounded-lg bg-surface-container-low">
                <div className="flex items-center gap-4 mb-6">
                  <span className="material-symbols-outlined text-primary">{detail.icon}</span>
                  <h3 className="font-headline text-2xl font-bold">{detail.title}</h3>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {detail.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
