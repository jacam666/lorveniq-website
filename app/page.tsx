import Image from "next/image";

const bestSellers = [
  
  {
    name: "RETATRUTIDE 40mg",
    image: "/images/RETATRUTIDE_40mg__2_-removebg-preview.png",
    description: "Premium potency for demanding protocols.",
    Link: "/Retatrutide",
  },
  {
    name: "MOTS-C 40mg",
    image: "/images/MOTS-C_40mg-removebg-preview.png",
    description: "A balanced compound for daily research use.",
    Link: "/MOTS-C",
  },
  {
    name: "MT2 10mg",
    image: "/images/MT2_10mg-removebg-preview.png",
    description: "High-purity peptide with clean consistency.",
    Link: "/MT2",
  },
  
  {
    name: "KLOW 80mg",
    image: "/images/KLOW_80mg-removebg-preview.png",
    description: "Precision formulation for advanced support.",
    Link: "/KLOW",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-20 border-b border-slate-800/80 bg-black backdrop-blur">
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

      <section id="products" className="relative isolate overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/peptide-image.webp"
            alt="Peptide science background"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-32"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.24),_transparent_55%)]" />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6">
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
                className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 shadow-lg shadow-cyan-950/20"
              >
                <div className="relative h-56 w-full bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900/40">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-contain p-4"
                  />
                </div>
                <div className="space-y-3 border-t border-white/10 bg-white/5 p-6">
                  <h3 className="text-xl font-semibold text-white/95">{product.name}</h3>
                  <p className="text-sm leading-relaxed text-slate-200">{product.description}</p>
                  <a
                    href={product.Link}
                    className="inline-flex text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
                  >
                    Learn more →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
