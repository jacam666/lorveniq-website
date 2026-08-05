import Link from "next/link";

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-cyan-100 bg-gradient-to-r from-slate-950 via-slate-900 to-cyan-950/80 text-slate-200">
      <div className="mx-auto max-w-7xl px-6 py-8 sm:py-10">
        <div className="mb-4 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-200">
          Important Compliance Notice
        </div>

        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          All products offered by LORVENIQ are intended strictly for laboratory and scientific research purposes only.
          They are not for human or animal consumption, medical use, therapeutic use, diagnostic use, or resale in
          finished consumer products.
        </p>

        <p className="mt-3 text-sm leading-relaxed text-slate-300">
          By purchasing, you acknowledge that you are a qualified researcher and agree to follow all applicable laws,
          regulations, and institutional safety protocols in your jurisdiction.
        </p>

        <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-cyan-300/35 to-transparent" />

        <nav className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-300">
          <Link href="/" className="transition hover:text-cyan-300">
            Home
          </Link>
          <Link href="/Cart" className="transition hover:text-cyan-300">
            Cart
          </Link>
          <Link href="/Products" className="transition hover:text-cyan-300">
            Products
          </Link>
          <Link href="/#contact" className="transition hover:text-cyan-300">
            Contact
          </Link>
        </nav>

        <p className="mt-4 text-xs text-slate-400">
          Copyright {currentYear} LORVENIQ. Research Use Only.
        </p>
      </div>
    </footer>
  );
}
