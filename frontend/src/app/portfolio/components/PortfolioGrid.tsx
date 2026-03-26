export default function PortfolioGrid() {
  return (
    <section className="px-8 py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-headline font-bold mb-4">Expanding the Horizons</h2>
          <p className="text-on-surface-variant max-w-xl">A curated selection of diverse products we&apos;ve brought to life across various industries.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Project item */}
          <div className="group cursor-pointer">
            <div className="rounded-lg overflow-hidden bg-surface mb-4">
              <img alt="Data Tool" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Minimalist data visualization screens on a smartphone held by a designer in a bright studio" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxIhVLTFp7mpWg2PFypwaZtXRwrbLCKVxEiNFcRNaM0FPkL7HNgQXJKljTRQTev2Aeiu1nNfrHqqY7HyH1X_p3OyOc1skGKp26AAs58IGLYXTo52BT0R6x14Xl7lXxfNBsgQWWn-32BqHL8l9NGn3Supm-KYOPHO-IIgpgAaSw2pedgpHVw0ejEQc6BPnKe2Tq_osKnaq4QnJN3eDvY3s2WH-8j1GG6_u2S_MIyD6YYwd7H0WvXbHwr5E4wuvJjuzhuTZAT-MAhWHF"/>
            </div>
            <h3 className="font-headline font-bold text-xl mb-1">Nexus Analytics</h3>
            <p className="text-sm text-on-surface-variant">Real-time telemetry for IoT networks.</p>
          </div>
          {/* Project item */}
          <div className="group cursor-pointer">
            <div className="rounded-lg overflow-hidden bg-surface mb-4">
              <img alt="Code Editor" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Abstract code syntax highlighting in a dark editor with soft neon glows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCa05F4rklRhZ_6AdpmPRNil7HU_XjlX06aF4epH7cw0wXPl6kjwFbh4bFhneJ4WcLH6w1bEi8z08meNRkQnJ65G0hvpAVT19pre3wLc1yZCDCAWYEdyZVxeKUA13cPySnBFL5N2waQB2MjIj12CW4AhHBztgH3JaPQvRmu5NbdcAILfLwSjOuewhKyG9M5cbbKPvM6ZquPC13In0K_H5tVBvhZ-_b06IlwIv0ezmNHNX3QA_UqrxGRSGqUMVkkjO2-PCeNGN7HV7sz"/>
            </div>
            <h3 className="font-headline font-bold text-xl mb-1">DevFlow</h3>
            <p className="text-sm text-on-surface-variant">Agile project management for remote dev teams.</p>
          </div>
          {/* Project item */}
          <div className="group cursor-pointer">
            <div className="rounded-lg overflow-hidden bg-surface mb-4">
              <img alt="Laptop" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Top-down view of a high-end laptop with architectural diagrams on screen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC97Mki9jRKtGUfrp_Gr68ocRJXdzOFwmWGPv6-HRA3wu_7dFDOaxWNAvcDU-vr14MObAFuc268-o-kgtq3YbzNduLYjyp0QglGH7a-YBFmBdC8hFmfJT_wUPKHY9t1k8W8VmfvZdGAN1MnVoTJNuidAdjWPCQyH1Qv3r1Aoose80TJXgIGvO0cDebXK9J6cQ1Jz3tGo0aNd8-fZmVM1F8qRG8RXoHElXoBHKnOBIYLqiL10WyOTurjbNz_ytJrHMOdI1E0nHVxHjy9"/>
            </div>
            <h3 className="font-headline font-bold text-xl mb-1">Architex</h3>
            <p className="text-sm text-on-surface-variant">Collaborative 3D modeling platform.</p>
          </div>
        </div>
      </div>
    </section>
  );
}