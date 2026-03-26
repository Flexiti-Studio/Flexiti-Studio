export default function ContactHeroForm() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
      {/* Main Form */}
      <div className="lg:col-span-8">
        <div className="bg-surface-container-lowest p-8 md:p-12 rounded-lg shadow-[0_12px_40px_rgba(19,27,46,0.06)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
          <form className="space-y-8 relative z-10">
            {/* Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="font-label text-sm font-semibold text-on-surface">Full Name</label>
                <input
                  className="w-full px-5 py-4 bg-surface-container-low border-0 rounded focus:ring-2 focus:ring-primary transition-all font-body"
                  placeholder="John Doe"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="font-label text-sm font-semibold text-on-surface">Email Address</label>
                <input
                  className="w-full px-5 py-4 bg-surface-container-low border-0 rounded focus:ring-2 focus:ring-primary transition-all font-body"
                  placeholder="john@company.com"
                  type="email"
                />
              </div>
            </div>
            {/* Company + Project Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="font-label text-sm font-semibold text-on-surface">
                  Company <span className="text-outline text-xs font-normal">(Optional)</span>
                </label>
                <input
                  className="w-full px-5 py-4 bg-surface-container-low border-0 rounded focus:ring-2 focus:ring-primary transition-all font-body"
                  placeholder="Your Startup Inc."
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="font-label text-sm font-semibold text-on-surface">Project Type</label>
                <select className="w-full px-5 py-4 bg-surface-container-low border-0 rounded focus:ring-2 focus:ring-primary transition-all font-body appearance-none">
                  <option>Web App</option>
                  <option>Mobile App</option>
                  <option>SaaS Product</option>
                  <option>MVP Development</option>
                  <option>AI Tool</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            {/* Budget + Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="font-label text-sm font-semibold text-on-surface">Budget Range</label>
                <select className="w-full px-5 py-4 bg-surface-container-low border-0 rounded focus:ring-2 focus:ring-primary transition-all font-body">
                  <option>₦50k – ₦200k</option>
                  <option>₦200k – ₦500k</option>
                  <option>₦500k – ₦1M</option>
                  <option>₦1M+</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="font-label text-sm font-semibold text-on-surface">Timeline</label>
                <select className="w-full px-5 py-4 bg-surface-container-low border-0 rounded focus:ring-2 focus:ring-primary transition-all font-body">
                  <option>ASAP</option>
                  <option>1–2 weeks</option>
                  <option>1–2 months</option>
                  <option>Flexible</option>
                </select>
              </div>
            </div>
            {/* Message */}
            <div className="space-y-2">
              <label className="font-label text-sm font-semibold text-on-surface">Project Description</label>
              <textarea
                className="w-full px-5 py-4 bg-surface-container-low border-0 rounded focus:ring-2 focus:ring-primary transition-all font-body"
                placeholder="Tell us about your goals, key features, and any specific challenges you're facing..."
                rows={5}
              ></textarea>
            </div>
            <button
              className="w-full py-5 rounded-full bg-gradient-to-r from-primary to-primary-container text-on-primary font-headline font-bold text-lg hover:opacity-90 transition-all hover:-translate-y-1 active:scale-95 shadow-xl shadow-primary/20"
              type="submit"
            >
              Start Your Project
            </button>
          </form>
        </div>
      </div>

      {/* Sidebar */}
      <div className="lg:col-span-4 space-y-12">
        {/* Direct Contact */}
        <section className="space-y-6">
          <h3 className="font-headline text-2xl font-bold text-on-surface">Get in touch directly</h3>
          <div className="space-y-4">
            <a className="flex items-center gap-4 p-4 rounded bg-surface-container hover:bg-surface-container-high transition-colors group" href="mailto:hello@flexitistudio.com">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <div>
                <p className="font-label text-xs font-bold text-outline uppercase tracking-wider">Email Us</p>
                <p className="font-headline font-semibold text-on-surface">hello@flexitistudio.com</p>
              </div>
            </a>
            <a className="flex items-center gap-4 p-4 rounded bg-surface-container hover:bg-surface-container-high transition-colors group" href="#">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all">
                <span className="material-symbols-outlined">chat_bubble</span>
              </div>
              <div>
                <p className="font-label text-xs font-bold text-outline uppercase tracking-wider">WhatsApp</p>
                <p className="font-headline font-semibold text-on-surface">Chat with our team</p>
              </div>
            </a>
            <a className="flex items-center gap-4 p-4 rounded border-2 border-primary/20 hover:border-primary transition-all group" href="#">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-on-primary shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined">calendar_today</span>
              </div>
              <div>
                <p className="font-label text-xs font-bold text-primary uppercase tracking-wider">Discovery Call</p>
                <p className="font-headline font-semibold text-on-surface">Book a 15-min intro</p>
              </div>
            </a>
          </div>
        </section>

        {/* Info Cards */}
        <div className="grid grid-cols-1 gap-4">
          {[
            { icon: 'speed', color: 'text-primary', title: 'Fast Response', desc: 'We reply within 24 hours. Your vision is our priority.' },
            { icon: 'sync_alt', color: 'text-primary', title: 'Seamless Onboarding', desc: 'From first contact to kick-off, we keep things simple and clear.' },
            { icon: 'check_circle', color: 'text-tertiary', title: 'Current Availability', desc: 'Accepting 2 new projects for Q3 2024. Secure your slot.' },
          ].map((card) => (
            <div key={card.title} className="p-6 bg-surface-container-low rounded-lg border border-outline-variant/10">
              <div className="flex items-center gap-3 mb-3">
                <span
                  className={`material-symbols-outlined ${card.color}`}
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {card.icon}
                </span>
                <h4 className="font-headline font-bold text-on-surface">{card.title}</h4>
              </div>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
