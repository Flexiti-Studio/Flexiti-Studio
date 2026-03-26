const tags = ['System Design', 'Fullstack Dev', 'Product Strategy'];

export default function AboutFounder() {
  return (
    <section className="py-32 bg-on-surface text-on-primary">
      <div className="max-w-7xl mx-auto px-8">
        <div className="bg-white/5 backdrop-blur-md rounded-lg p-8 md:p-16 border border-white/10 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-4">
            <div className="aspect-square rounded-lg overflow-hidden bg-surface-container-high">
              <img
                alt="Ola — Founder of Flexiti Studio"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKQKhMLV9vkAJnFYU5RSqbXrFLsd2c9LYeXPXK3fgh_IZV7WU0w7UfldojhcS502QpveVG3fbLXVw2y8AAeMOvirGkvwmzcXeGRiYqzfYawSDvyBdODda9xNlN2IEJamGTWPVBTToxorhM2tS0cEzYleVJ62vnv-96dVoUSKYfEsBd3e_U1x7Lk8EKcwTG0Du7JbeDH2uWYNWAJCfhT0t0JMY68DUbb1S3myKIg3iCc6Znw_LtjxZ72MqTQ52udpDhk3__V7ysY5GW"
              />
            </div>
          </div>
          <div className="md:col-span-8">
            <span className="text-primary-fixed-dim font-label font-bold tracking-widest mb-4 block uppercase">The Architect</span>
            <h2 className="font-headline text-4xl font-bold mb-6">Ola, Founder</h2>
            <p className="text-lg text-primary-fixed leading-relaxed mb-8">
              A builder focused on creating scalable digital systems that move the needle. With a background in heavy engineering and a passion for minimalist design, Ola founded Flexiti Studio to bridge the gap between complex backend logic and premium user experiences.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {tags.map((tag) => (
                <span key={tag} className="px-4 py-1.5 rounded-full bg-white/10 text-white text-sm font-label">{tag}</span>
              ))}
            </div>
            <p className="italic text-primary-fixed-dim border-l-2 border-primary-fixed-dim pl-6 py-2">
              &ldquo;Our vision is to empower the next generation of African builders by providing the infrastructure they need to scale globally.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
