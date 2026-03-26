export default function BlogNewsletter() {
  return (
    <section className="mt-20 p-12 rounded-lg bg-surface-container relative overflow-hidden">
      <div className="relative z-10 max-w-lg">
        <h3 className="text-3xl font-bold font-headline mb-4 text-on-surface">Engineering secrets, delivered.</h3>
        <p className="text-on-surface-variant mb-8">
          Join 15,000+ developers and founders who receive our weekly deep-dive into product development and growth strategies.
        </p>
        <form className="flex flex-col sm:flex-row gap-4">
          <input
            className="flex-grow bg-surface-container-lowest border-outline-variant/20 rounded-full px-6 py-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-outline"
            placeholder="Enter your work email"
            type="email"
          />
          <button
            className="bg-on-surface text-surface-container-lowest px-8 py-4 rounded-full font-bold hover:bg-primary transition-colors whitespace-nowrap"
            type="submit"
          >
            Subscribe Now
          </button>
        </form>
      </div>
      <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
    </section>
  );
}
