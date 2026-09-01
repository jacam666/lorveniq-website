import Image from "next/image";
import Link from "next/link";
import CartNavLink from "./components/CartNavLink";

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
    Link: "/Mots-c40",
  },
  {
    name: "MT2 10mg",
    image: "/images/mt2_10mg-removebg-preview.png",
    description: "High-purity peptide with clean consistency.",
    Link: "/Mt2-10",
  },
  
  {
    name: "KLOW 80mg",
    image: "/images/KLOW_80mg-removebg-preview.png",
    description: "Precision formulation for advanced support.",
    Link: "/Klow80",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-20 border-b border-slate-800/80 bg-black backdrop-blur">
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <Link href="/" className="flex items-center">
            <div className="relative h-16 w-[174px] overflow-hidden sm:h-[72px] sm:w-[320px]">
              <Image
                src="/images/lorveniq-horizontal-logo-with-subtitle-v2.PNG"
                alt="LORVENIQ logo"
                fill
                priority
                sizes="(max-width: 640px) 240px, 320px"
                className="object-cover object-center"
              />
            </div>
          </Link>

          <nav className="flex items-center gap-5 text-sm font-medium text-slate-300">
             <CartNavLink className="inline-flex items-center transition hover:text-cyan-400" />
            <a href="/Products" className="transition hover:text-cyan-400">
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
            // src="/images/molecule-image.png"
            src="/images/lab-equip-bg-image.png"
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
              href="/Products"
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
          <div className="relative mb-12 overflow-hidden rounded-3xl border border-cyan-100 bg-gradient-to-r from-cyan-100 via-white to-teal-400 p-8 shadow-sm sm:p-10">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-200/40 blur-2xl" />
            <div className="absolute -bottom-14 left-1/3 h-44 w-44 rounded-full bg-slate-200/40 blur-2xl" />

            <div className="relative z-10 text-center">
              <p className="mb-3 inline-flex rounded-full border border-cyan-200 bg-cyan-100/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800">
                Best Sellers
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Featured Compounds
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                Explore top-performing research compounds from our current product lineup.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {bestSellers.map((product) => (
              <article
                key={product.name}
                className="group overflow-hidden rounded-2xl border border-cyan-100/90 bg-white/90 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-200/40"
              >
                <div className="relative h-56 w-full bg-gradient-to-b from-cyan-100 via-white to-teal-300">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-contain p-5 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-2 border-t border-cyan-100 bg-gradient-to-r from-white via-cyan-50/45 to-slate-50 p-5">
                  <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-100/80 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-800">
                    Research Grade
                  </p>
                  <h3 className="text-lg font-semibold text-slate-900">{product.name}</h3>
                  <p className="text-sm text-slate-600">{product.description}</p>
                  <a
                    href={product.Link}
                    className="inline-flex text-sm font-semibold text-cyan-600 transition hover:text-cyan-500"
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
