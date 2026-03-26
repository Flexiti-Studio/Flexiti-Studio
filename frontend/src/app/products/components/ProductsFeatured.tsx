export default function ProductsFeatured() {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-bold font-headline text-on-surface mb-2">Featured Products</h2>
          <p className="text-on-surface-variant">Our flagship solutions defining the next generation of business efficiency.</p>
        </div>
        <div className="space-y-16">

          {/* FlexBZ */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-surface-container-lowest p-8 md:p-12 rounded-lg group">
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-4xl">inventory_2</span>
                <h3 className="text-4xl font-bold font-headline text-on-surface">FlexBZ</h3>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full uppercase tracking-wider">Live</span>
              </div>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                A hyper-scalable inventory management SaaS designed for high-volume retail. Integrated real-time tracking, multi-channel sync, and predictive restocking alerts.
              </p>
              <ul className="space-y-3">
                {['Advanced API Ecosystem', 'Real-time Inventory Analytics', 'Automated Supplier Workflow'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-on-surface font-medium">
                    <span className="material-symbols-outlined text-primary scale-75">check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="px-8 py-3.5 rounded-full bg-primary text-on-primary font-bold hover:opacity-90 transition-opacity">
                Launch FlexBZ
              </button>
            </div>
            <div className="lg:col-span-7 rounded-lg overflow-hidden border border-outline-variant/10 shadow-lg group-hover:shadow-xl transition-shadow">
              <img
                alt="FlexBZ Dashboard"
                className="w-full aspect-video object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCS_BLys4XZFay7Lx_Gu2yOF91fiq38q_xTaEzgRFt-OIDNrSU8vh3Mjq23pHH3VHHmxsJSMMC9knmsR57Ynt401dB-j9XasAIfGwazpBEZzMaNhe8OzzWUO7tnk7JT4s6Aki95WUq9fsnsWjQDDM0beMpbjiGZFCfMwp1KCc7MNTYnwmOYXd1hV8XSGKTxoO9JtiXL8qQZqnRNiKNDmjwZ-fFS_V0hcCgHvjZwCy8Elntjet4zFNOMKMHk2XGLyRVj4aZOMl1R6w20"
              />
            </div>
          </div>

          {/* SchoolHub */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-surface-container-lowest p-8 md:p-12 rounded-lg group">
            <div className="lg:col-span-7 order-2 lg:order-1 rounded-lg overflow-hidden border border-outline-variant/10 shadow-lg group-hover:shadow-xl transition-shadow">
              <img
                alt="SchoolHub Dashboard"
                className="w-full aspect-video object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuChe5t4deVABDUuFOJedAcvG9U1EhGlsLYEz-nk1NbXfwaDlSCT1Rj0A6uPkOk7SksxW2PIuntKLDRhYT-g9ItllzpRzX-G3XQDuv1L9azMK3Thb7UsTi4JK-t4G3CESCSoiZEzB2dJkdePI7u167i5_VTa0QYX7QVCsUYYGiIt737hn2KdSrAiE0dpwji3LefzDHSCPG7YCEMUrwgTDOuPk80FkdPIsf1gfsa97RF27j8NGebpby-VOftv4ygWWKFpP3OwXAcpQdJa"
              />
            </div>
            <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-4xl">school</span>
                <h3 className="text-4xl font-bold font-headline text-on-surface">SchoolHub</h3>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full uppercase tracking-wider">Beta</span>
              </div>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                Redefining the educational experience with a unified platform for students, teachers, and administrators. Simplifies complex scheduling and grade tracking.
              </p>
              <ul className="space-y-3">
                {['Dynamic Resource Scheduling', 'Parent-Teacher Portals', 'AI-Powered Learning Insights'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-on-surface font-medium">
                    <span className="material-symbols-outlined text-primary scale-75">check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="px-8 py-3.5 rounded-full bg-primary text-on-primary font-bold hover:opacity-90 transition-opacity">
                Join the Beta
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
