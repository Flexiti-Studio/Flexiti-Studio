export default function PortfolioFilters() {
  return (
    <section className="px-8 max-w-7xl mx-auto mb-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b border-outline-variant/20">
        <div className="flex flex-wrap gap-2">
          <button className="bg-primary text-on-primary px-5 py-2 rounded-full text-sm font-semibold">All</button>
          <button className="bg-surface-container-low text-on-surface-variant px-5 py-2 rounded-full text-sm font-medium hover:bg-surface-container transition-colors">Web Apps</button>
          <button className="bg-surface-container-low text-on-surface-variant px-5 py-2 rounded-full text-sm font-medium hover:bg-surface-container transition-colors">Mobile Apps</button>
          <button className="bg-surface-container-low text-on-surface-variant px-5 py-2 rounded-full text-sm font-medium hover:bg-surface-container transition-colors">SaaS</button>
          <button className="bg-surface-container-low text-on-surface-variant px-5 py-2 rounded-full text-sm font-medium hover:bg-surface-container transition-colors">AI Tools</button>
        </div>
        <div className="flex items-center gap-4 text-sm font-medium text-on-surface-variant">
          <span className="text-xs uppercase tracking-widest opacity-50">Industry:</span>
          <select className="bg-transparent border-none focus:ring-0 cursor-pointer font-bold text-on-surface">
            <option>All Industries</option>
            <option>Education</option>
            <option>Finance</option>
            <option>Healthcare</option>
          </select>
        </div>
      </div>
    </section>
  );
}
