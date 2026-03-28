import Link from 'next/link';

export default function ServicesCTABanner() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="bg-gradient-to-br from-primary to-primary-container rounded-lg p-16 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-white mb-8">Let&apos;s Build Something Powerful</h2>
  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
    <Link 
      href="/contact"
      className="bg-white text-primary px-10 py-4 rounded-full font-headline font-bold hover:bg-opacity-90 transition-all shadow-xl active:scale-95"
    >
      Start a Project
    </Link>
    <Link 
      href="/contact"
      className="border border-white/30 text-white px-10 py-4 rounded-full font-headline font-bold hover:bg-white/10 transition-all backdrop-blur-sm active:scale-95"
    >
      Contact Sales
    </Link>
  </div>
          </div>
        </div>
      </div>
    </section>
  );
}
