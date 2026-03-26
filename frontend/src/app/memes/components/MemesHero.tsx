export default function MemesHero() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] bg-slate-900 p-12 flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-transparent opacity-50"></div>
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-primary/20 rounded-full blur-[100px]"></div>
      </div>
      <div className="relative z-10 max-w-xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary-fixed border border-primary/30 mb-6">
          <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
          <span className="text-[11px] font-bold tracking-wider uppercase">New Collection Dropped</span>
        </div>
        <h2 className="text-5xl font-extrabold text-white font-headline leading-[1.1] mb-6">Free Meme Videos</h2>
        <p className="text-lg text-slate-300 leading-relaxed mb-8">
          The world&apos;s most curated library of high-fidelity meme templates and reaction clips. Professional-grade assets for modern storytellers and digital curators.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="px-8 py-4 bg-gradient-to-r from-primary to-primary-container text-white rounded-xl font-headline font-bold text-sm tracking-wide uppercase shadow-lg shadow-primary/25 hover:scale-[1.02] transition-transform active:scale-95">
            Browse Videos
          </button>
          <button className="px-8 py-4 bg-white/10 text-white rounded-xl font-headline font-bold text-sm tracking-wide uppercase backdrop-blur-md hover:bg-white/20 transition-all">
            Suggest Category
          </button>
        </div>
      </div>
      <div className="relative z-10 w-full md:w-80 grid grid-cols-2 gap-4">
        <div className="space-y-4">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl -rotate-3">
            <img className="w-full h-full object-cover" alt="Meme asset 1"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4xKoZYGjCX8j7onsz9rahmpcfXnpzT9dXszHAfWy5mn_1aCmXNAYa0SVHGHuuEAzonTHbbofVU9_XpEIkm0zYwcuTtqhLhwt71fxPwvPnJ7Lc94M41B0H5o1cq2_ciI7HMV4dg2oEdXiRuMNpTZwP1tpR6XixqbAMbjbYTDgLFyBNJDVfKAmIwv9lbKN4UUO6qBys9nAKZYEG5iF1fhplM_mr5rsVf6_7SM9Jzhn5RVc4Hd4yGfEbK6QekVuYPC3NSFuhzNmZA9YF" />
          </div>
          <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl rotate-2">
            <img className="w-full h-full object-cover" alt="Meme asset 2"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOtq0Zby2BVGjZQIZnW0OfJK0CcjBuaiUD_gvrYFS8-sYy9vorL-bD4uI-AyF0--Y8y7P_tq8PM_HRI1g6VP5yu7rVHvgL8B7AB71sgLOTexuI2h1YG4PyjvN-AKsgbhPFrDZs-YBVerV9oAZedNqzT1x4moHkJy2TDvA9G17ZaM_AhCiMp9UHWdW4cB3tR2MpoVF493edSlx4pOL_dUzdsTDiqndPUm3SxRmGnIHsRrxI7v2qrxM3VQnws9b9z_EX1s9plZtj7kIr" />
          </div>
        </div>
        <div className="space-y-4 pt-8">
          <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl rotate-[4deg]">
            <img className="w-full h-full object-cover" alt="Meme asset 3"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpLFY7BRK356CHX4ouF7bLFgcs1KuV8mRZASxtdC2Ys0agjwymt_DZIPhZ4wT6Q3f02RiX0JacdSHvrCeBPxJJMB2JG0-1M9ph6vc8fasNUD7ETesASvEd15RAn_8btm8zZVSW2d8T09dDao63uvCfgeCX0vb8AEos22GTTJsgfLER8CzzOj1GZt7_hZOYZVSJ-HC48Yu4UX4auIq9q48zC2ghegnVv3_2kUUgUypI4CKpmia1eFWvwWlks2vJQOX-WAkobWu6xMhE" />
          </div>
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl -rotate-2">
            <img className="w-full h-full object-cover" alt="Meme asset 4"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNLg0Re5Bndu_6V1B7nVotLmIKkrn1ynM7W1tClVlhVeeQw0NhkLDFR1WURmsrR8x1uyHToFWEnDpT9w7gD4Uw5rb9qbrKSr5Pr-RWC0HHebh-eRKYljrqqLYbnkNJ6w27s1HW_qvmr8qb_iHCCRSAL9ZIu3EUfVhrX2SqiTviXtoExq5YgNVjaoshneDyyFoUtYt0MXa3w7gQRsfj-d9O49zFeeZ5Pv9LrB2YxOEomdvGyi-CwEzquH-OT-bOfUEqRTiYj7ex562j" />
          </div>
        </div>
      </div>
    </section>
  );
}
