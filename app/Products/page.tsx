'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import CartNavLink from '../components/CartNavLink';
import { addCartItem } from '../lib/cart';

export default function ProductsPage() {
  const [lastAdded, setLastAdded] = useState<string | null>(null);
  const priceFormatter = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
  });

  const products = [
    { id: 1, name: 'Retatrutide 40MG', image: '/images/RETATRUTIDE_40mg__2_-removebg-preview.png', price: 80, link: '/Retatrutide' },
    { id: 2, name: 'KLOW 80MG', image: '/images/KLOW_80mg-removebg-preview.png', price: 80, link: '/Klow80' },
    { id: 3, name: 'Glow 70MG', image: '/images/GLOW_70mg-removebg-preview.png', price: 70, link: '/Glow70' },
    { id: 4, name: 'MT2 10MG', image: '/images/mt2_10mg-removebg-preview.png', price: 20, link: '/Mt2-10' },
    { id: 5, name: 'MOTS-C 40MG', image: '/images/MOTS-C_40mg-removebg-preview.png', price: 50, link: '/Mots-c40' },
    { id: 6, name: 'Retatrutide 30MG', image: '/images/RETATRUTIDE_40mg__2_-removebg-preview.png', price: 65, link: '/Retatrutide-30' },
    { id: 7, name: 'Retatrutide 20MG', image: '/images/RETATRUTIDE_40mg__2_-removebg-preview.png', price: 50, link: '/Retatrutide-20' },
    { id: 8, name: 'Retatrutide 10MG', image: '/images/RETATRUTIDE_40mg__2_-removebg-preview.png', price: 30, link: '/Retatrutide-10' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
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
            <Link href="/Products" className="transition hover:text-cyan-400">
              Products
            </Link>
            <a href="#contact" className="transition hover:text-cyan-400">
              Contact
            </a>
          </nav>
        </div>
      </header>
      <div className="mx-auto max-w-7xl px-6 py-10 sm:py-14">
        
        <div className="relative mb-12 overflow-hidden rounded-3xl border border-cyan-100 bg-gradient-to-r from-cyan-50 via-white to-slate-100 p-8 shadow-sm sm:p-10">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-200/40 blur-2xl" />
          <div className="absolute -bottom-14 left-1/3 h-44 w-44 rounded-full bg-slate-200/40 blur-2xl" />
          <Image
          // src="/images/dna-bg-image.png"
          src="/images/create-a-premium-cinematic-16-9-website-background-inspired-by-p-20260901_193928Z.jpg"
          alt="Laboratory equipment background"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-100"

        />

          <div className="relative z-10">
            <p className="mb-3 inline-flex rounded-full border border-cyan-200 bg-cyan-100/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800">
              Product Catalog
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl">
              Premium Peptide Products
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-100 sm:text-base">
              Explore our flagship compounds, formulated for consistency and research-focused performance.
            </p>
            {lastAdded ? (
              <p className="mt-3 text-sm font-semibold text-cyan-700">Added to cart: {lastAdded}</p>
            ) : null}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="group overflow-hidden rounded-2xl border border-cyan-100/90 bg-white/90 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-200/40"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full bg-gradient-to-b from-cyan-50 via-white to-slate-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-contain p-8 transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Product Info */}
              <div className="space-y-2 border-t border-cyan-100 bg-gradient-to-r from-white via-cyan-50/45 to-slate-50 p-5">
                <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-100/80 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-800">
                  Research Grade
                </p>
                <h2 className="text-lg font-semibold text-slate-900 truncate">
                  {product.name}
                </h2>
                <p className="text-sm font-semibold text-slate-700">{priceFormatter.format(product.price)}</p>
                <p className="text-sm text-slate-600">Quality-controlled for protocol consistency.</p>
                <div className="flex items-center justify-between gap-3 pt-1">
                  {product.link ? (
                    <Link
                      href={product.link}
                      className="inline-block text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
                    >
                      Learn More →
                    </Link>
                  ) : (
                    <span className="text-sm font-semibold text-slate-400">No details yet</span>
                  )}
                  <button
                    type="button"
                    onClick={() => {
                      addCartItem({
                        id: String(product.id),
                        name: product.name,
                        image: product.image,
                        price: product.price,
                        link: product.link,
                      });
                      setLastAdded(product.name);
                    }}
                    className="rounded-full border border-cyan-300 bg-cyan-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-800 transition hover:bg-cyan-200"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
