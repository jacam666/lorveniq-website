import Image from "next/image";

const bestSellers = [
  {
    name: "KLOW 80mg",
    image: "/images/KLOW 80mg.png",
    description: "Precision formulation for advanced support.",
  },
  {
    name: "GLOW 70mg",
    image: "/images/GLOW 70mg.png",
    description: "A balanced compound for daily research use.",
  },
  {
    name: "MT2 10mg",
    image: "/images/mt2 10mg.png",
    description: "High-purity peptide with clean consistency.",
  },
  {
    name: "RETATRUTIDE 40mg",
    image: "/images/RETATRUTIDE 40mg (2).png",
    description: "Premium potency for demanding protocols.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-20 border-b border-slate-800/80 bg-black/80 backdrop-blur">
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <a href="#home" className="flex items-center gap-3">
            <Image
              src="/images/LORVENIQ-logo-black.png"
              alt="LORVENIQ logo"
              width={180}
              height={36}
              priority
              className="h-auto w-[180px] sm:w-[210px]"
            />
          </a>

          <nav className="flex items-center gap-5 text-sm font-medium text-slate-300">
            <a href="#about" className="transition hover:text-cyan-400">
              About
            </a>
            <a href="#products" className="transition hover:text-cyan-400">
              Products
            </a>
            <a href="#contact" className="transition hover:text-cyan-400">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section id="home" className="relative flex min-h-[calc(100vh-73px)] flex-col items-center justify-center px-6 py-20 text-center">
        <div className="absolute inset-0 z-10">
          <Image
            src="/images/molecule-image.png"
            alt="Molecular science background"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.28),_transparent_55%)]" />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="relative z-10 max-w-3xl space-y-6 rounded-3xl border border-white/10 bg-black/35 p-8 shadow-2xl backdrop-blur-sm sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Precision Peptide Science
          </p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Research-grade compounds built for performance and trust.
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-300 sm:text-xl">
            LORVENIQ brings together clean formulation, scientific focus, and premium quality in a modern landing experience.
          </p>
          <p className="mx-auto max-w-2xl text-lg text-slate-300 sm:text-xl">
            For research purposes only
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a
              href="#about"
              className="rounded-full bg-cyan-500 px-7 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Shop Now
            </a>
            <a
              href="#contact"
              className="rounded-full border border-slate-700 px-7 py-3 font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <section id="products" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Best Sellers
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Featured compounds for your next protocol
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {bestSellers.map((product) => (
            <article
              key={product.name}
              className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 shadow-lg shadow-cyan-950/20"
            >
              <div className="relative h-56 w-full bg-slate-800">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-contain p-4"
                />
              </div>
              <div className="space-y-3 p-6">
                <h3 className="text-xl font-semibold text-white">{product.name}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{product.description}</p>
                <a
                  href="#contact"
                  className="inline-flex text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
                >
                  Learn more →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer id="contact" className="border-t border-slate-800 bg-slate-950/90">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-base font-semibold text-white">LORVENIQ</p>
            <p className="mt-1">Premium compounds crafted with precision and trust.</p>
          </div>

          <div className="flex flex-col gap-2 sm:items-end">
            <a href="mailto:hello@lorveniq.com" className="transition hover:text-cyan-400">
              hello@lorveniq.com
            </a>
            <a href="#home" className="transition hover:text-cyan-400">
              Back to top
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
