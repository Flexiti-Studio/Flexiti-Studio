const reasons = [
  {
    icon: 'speed',
    title: 'Fast Execution',
    desc: 'We prioritize momentum without sacrificing structural integrity.',
  },
  {
    icon: 'layers',
    title: 'Scalable Architecture',
    desc: 'Systems designed to handle 10x growth from day one.',
  },
  {
    icon: 'verified',
    title: 'Business Focused',
    desc: 'We build for ROI, not just for the sake of the tech stack.',
  },
  {
    icon: 'security',
    title: 'Secure by Design',
    desc: 'Enterprise-grade security standards in every line of code.',
  },
];

export default function ServicesWhyUs() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="bg-surface-container-low rounded-lg p-12 md:p-20 relative">
          <div className="absolute right-0 top-0 w-1/3 h-full hidden lg:block">
            <img
              className="object-cover h-full w-full opacity-20"
              alt="Modern tech office interior with clean glass walls, designer furniture, and soft natural lighting"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbJY7D_iauf102qghO5-q7qhJtewZrrZRclr4sy18VARNDZA82sHWwJzyYiyC2Gcb3uqFlYRtJ_BCZYSaTTTri0xgLE2iiOcheM2ZkBcIP8nsQK50DtqlRgjFsK9l6TllMhy-rQcADpnj2qtmPU_VcY2erOnyhVAm-LiQsDQ2k7n-QnACmi48NYQoFONXbwGG8AmDH4mELLkRO5IyhWuM8VEW7RMaSinh-4ujHgWjQhJTK6a3KQpxE3Jas4AHr9HKb7QHrlVDbiF22"
            />
          </div>
          <div className="lg:w-2/3">
            <h2 className="font-headline text-[2.5rem] font-bold text-on-surface mb-8">Why High-Growth Companies Choose Flexiti</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {reasons.map((r) => (
                <div key={r.title} className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary bg-primary-container/20 p-2 rounded-lg">{r.icon}</span>
                  <div>
                    <h4 className="font-headline font-semibold">{r.title}</h4>
                    <p className="text-sm text-on-surface-variant">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
