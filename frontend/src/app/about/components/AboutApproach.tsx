import Image from 'next/image';

const steps = [
  {
    num: '01',
    title: 'Problem-First Thinking',
    desc: "We don't just build; we solve. Every project starts with identifying the core business challenge.",
  },
  {
    num: '02',
    title: 'Scalable Architecture',
    desc: 'Our systems are designed to handle 10x growth from day one without breaking a sweat.',
  },
  {
    num: '03',
    title: 'Performance-Focused',
    desc: 'Clean code and optimized assets ensure your users never have to wait for a loading screen.',
  },
];

export default function AboutApproach() {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="font-headline text-4xl font-bold text-on-surface mb-12">The Flexiti Approach</h2>
            <div className="space-y-12">
              {steps.map((step) => (
                <div key={step.num} className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center font-bold text-primary">
                    {step.num}
                  </div>
                  <div>
                    <h4 className="font-headline text-xl font-bold text-on-surface mb-2">{step.title}</h4>
                    <p className="text-on-surface-variant">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-surface-container rounded-lg p-2 overflow-hidden">
            <Image
              alt="Design Process — Designer hand sketching a UI flow on a tablet"
              className="rounded-lg shadow-lg w-full object-cover aspect-[4/3]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMJFgiOt0Dp9F7tUF27_tefqUpxcFi5fzINksWGEd6nXTG4uxWCFqSOpH91qr6BbH_4okqQJE4sanxeyDdP4hlXa1_HEFCF3rqbxNplCatngsXAIlm3C3pKYix9xoFCM9Dbc7I-GI9S46-Rzx37WCxap_U-6trANPa_Gm2qXOIHLbQ6Oc3eW_jNq9K-U1emKvNMa4Q0PDz9WayPECPu9nQZyMcirhZpRysXjyequC8b0Js9L2n_EKKbT3H3jpcfRUzvLBA2zF_erkz"
              width={800}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
