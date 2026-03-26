const logos = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCproLtqV_CoSktr-Rj3WP3ofd3XlKymFExDD5XEX7XeZec_UqfaTLouPwf0YAJbgI8K9Ug8jtZTqAgk5jIbpMFZP9HVP-UbzGA0P1zIMtyQ46KDJuLO7zqXWdcj17KncYq6y5lZo-MxJk7EPt3v1Rh1qZl9DGPB8G0b2ANRLZxusUnNLFdA-u0LcSaiTlCtCfbK_qwuYRIF6aSCq2tma7y03qclHqB0_z3S83ND-lIIzRnVPy2uWzQ2cSTnFcTs9vR9LB-h6x0lqoy',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAo90c1O6ZhHqJVR8aCt2V7uptDWLMbYb5tlYnbsqSE1BI4Aay9eXlOFfaXaNZpKN4TkbGcvLozJ44CrjiWNqTHxbHOsIP4EdhfYf1TgNmsf1uiyiew-9OIG0lW1CXX_4NsQ0rEV26crNs7U3_tArnuFo0wNADicKY_UMMz53fcgfkx-Jh39fmV1h2sNQMbu5fZ8KA2odjQvjIUi-HyaTw5w_x_5nanXcu7YZAnqHVdQsBb2wLgQOoMItj6-EUl7_btVmIpCv-qvXwg',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCdkDuEOtLZEhWByq1upiHt3W502fDcbM1gjkt_SVahS8InT0m_arkO8_icgjN6M0AMe0r9OwUilI7KBdzYjZqpoTqm8KSiRUC4zkEXqm7utBzNuyqY7QghL916ZiSTuwuLqtlBM63zqQHHym4zifX_b8RxzHFysOM1uzZrjZ-jb7JLpvs2VZYNIcQSE6qSC5FiJDm2d9F23N5q3FeDmiHFSoZwJ1-8LcVu7MN4VDWBWBrid6EzesjI1EPYFtZnl1zn5-150nX9QdHZ',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBUYJ5MuEwFlFrwRkXiJvWbaPvL5NnEWTa4JDeKEDcxDw2ByOQoTcoAZpkf2tyCYpj866Zxni5pPpZ_Nw6jwGO4GiS-674Be1enrqy6v8z5MLZoILmZifXCWua03SP3YhzZsTbyG8wZy2VxuqYhP534aeUsh4kIxhctUIWi1zawAdU5VKSvnDZJ9dzTGPL_ViBwWHQlu20zYl3q6jyn32ymaHKeKI-Wx09f-SOqd5D28j6oQZ4c-vqGoEQOJ9TB4uy_zTbJKLJTdooS',
];

export default function ContactTrust() {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8">
        <p className="text-center font-label text-sm font-bold text-outline uppercase tracking-[0.2em] mb-12">
          Trusted by startups and businesses
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
          {logos.map((src, i) => (
            <img key={i} alt="Partner Logo" className="h-8 md:h-10 object-contain" src={src} />
          ))}
        </div>
      </div>
    </section>
  );
}
