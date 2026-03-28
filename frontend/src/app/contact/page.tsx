import { Metadata } from 'next';
import ContactHeroForm from './components/ContactHeroForm';
import ContactTrust from './components/ContactTrust';
import ContactCTA from './components/ContactCTA';

export const metadata: Metadata = {
  title: "Contact | Flexiti Studio — Let's Build Something Powerful",
  description: "Have an idea or project? Tell us about it and let's build something powerful together.",
};

export default function ContactPage() {
  return (
    <>
      <main
        className="pt-32 pb-24 min-h-screen"
        style={{
          background:
            'radial-gradient(circle at top right, #dde1ff 0%, transparent 40%), radial-gradient(circle at bottom left, #f2f3ff 0%, transparent 40%)',
        }}
      >
        <div className="max-w-7xl mx-auto px-8">
          {/* Hero Header */}
          <div className="mb-20 max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label text-xs font-bold tracking-widest uppercase mb-6">
              Contact Us
            </span>
            <h1 className="font-headline text-6xl md:text-7xl font-bold text-on-surface tracking-tight leading-[1.1] mb-8">
              Let&apos;s Work Together
            </h1>
            <p className="text-on-surface-variant text-xl md:text-2xl leading-relaxed font-body max-w-2xl">
              Have an idea or project? Tell us about it and let&apos;s build something powerful together.
            </p>
          </div>

          {/* Form + Sidebar */}
          <ContactHeroForm />
        </div>
      </main>

      <ContactTrust />
      <ContactCTA />
    </>
  );
}