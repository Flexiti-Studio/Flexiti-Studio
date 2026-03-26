export default function LandingAbout() {
  return (
    <section className="py-32 bg-surface-container-low" id="about">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-20 items-center">
        <div className="rounded-lg overflow-hidden h-[500px] shadow-2xl relative">
          <img alt="Team Collaboration" className="w-full h-full object-cover" data-alt="A diverse team of young developers and designers collaborating in a modern, plant-filled tech studio in Lagos, high-energy atmosphere" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCylo7xjcBakczlNSBj5DqaYriS58VSiSFUJvkc7ji4-DngqOJvoUGdEuJ9MENA2ix6M85UtTeN5grXQ57x80fL4JEEx3a1nGYfZMFswruT1ULZTGrzC9dynSZNOHsdGCW75Z6FRg89TpvRmEcbnwpISb_Cv3fHcW_UbGaRo9KVuPSXtoqBilWIps8rrF759yLWPUnsLm6GXAXK7e4OW6HPbeOF29ijS6aj36AVnUwVSOK-NItqMnnAsZTG9fto--becXxdjYCNHKQY"/>
          <div className="absolute bottom-6 left-6 bg-white p-6 rounded-DEFAULT shadow-lg max-w-xs">
            <p className="text-on-surface font-headline font-bold mb-1">African-born, Global reach.</p>
            <p className="text-sm text-on-surface-variant">We build with the grit of local challenges and the standards of Silicon Valley.</p>
          </div>
        </div>
        <div>
          <h2 className="font-headline text-4xl font-bold mb-8">Engineering Impact</h2>
          <p className="text-on-surface-variant text-xl leading-relaxed mb-8">
             Flexiti Studio builds flexible, scalable, and impactful digital solutions for businesses and founders. We aren&apos;t just developers; we are partners in your growth journey.
          </p>
          <div className="grid gap-6">
            <div className="flex items-start gap-4">
              <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                <span className="material-symbols-outlined text-sm" data-icon="check">check</span>
              </div>
              <div>
                <h4 className="font-bold">Scalable Systems</h4>
                <p className="text-sm text-on-surface-variant">Code that grows with your user base.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                <span className="material-symbols-outlined text-sm" data-icon="check">check</span>
              </div>
              <div>
                <h4 className="font-bold">Modern Tech Stack</h4>
                <p className="text-sm text-on-surface-variant">Using the latest industry-standard frameworks.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                <span className="material-symbols-outlined text-sm" data-icon="check">check</span>
              </div>
              <div>
                <h4 className="font-bold">Clean Architecture</h4>
                <p className="text-sm text-on-surface-variant">Maintainable code for long-term health.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
