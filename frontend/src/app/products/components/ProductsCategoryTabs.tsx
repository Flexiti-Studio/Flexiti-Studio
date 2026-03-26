const tabs = ['All Products', 'SaaS Platforms', 'Business Tools', 'AI & Automation', 'Internal Tools', 'Experimental'];

export default function ProductsCategoryTabs() {
  return (
    <section className="max-w-7xl mx-auto px-8 pb-16">
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 p-2 bg-surface-container-low rounded-full w-max mx-auto border border-outline-variant/10">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            className={`px-6 py-2.5 rounded-full text-sm transition-all ${
              i === 0
                ? 'bg-white shadow-sm text-primary font-semibold'
                : 'text-on-surface-variant font-medium hover:text-on-surface'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </section>
  );
}
