import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black px-6 py-20 text-center text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.18),_transparent_60%)]" />

      <div className="mb-8 flex items-center justify-center">
        <Image
          src="/images/LORVENIQ-logo-black.png"
          alt="LORVENIQ logo"
          width={380}
          height={60}
          priority
          className="h-auto w-full max-w-[280px] sm:max-w-[380px]"
        />
      </div>

      <div className="max-w-3xl space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
          Precision Peptide Science
        </p>
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          Research-grade compounds built for performance and trust.
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-300 sm:text-xl">
          LORVENIQ brings together clean formulation, scientific focus, and premium quality in a modern landing experience.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <a
            href="#about"
            className="rounded-full bg-cyan-500 px-7 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Learn More
          </a>
          <a
            href="#contact"
            className="rounded-full border border-slate-700 px-7 py-3 font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </main>
  );
}
