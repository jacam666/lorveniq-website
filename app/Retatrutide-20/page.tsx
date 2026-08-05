'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import CartNavLink from '../components/CartNavLink';
import { addCartItem } from '../lib/cart';

export default function Retatrutide20Page() {
  const [added, setAdded] = useState(false);
  const price = 50;
  const priceFormatter = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
  });

  const highlights = [
    {
      title: 'Protocol Precision',
      description: 'A 20MG profile that supports targeted protocol design and comparative research sequencing.',
    },
    {
      title: 'Reliable Experimental Fit',
      description: 'Prepared for teams that prioritize controlled repeatability and scientific consistency.',
    },
    {
      title: 'Laboratory-Use Alignment',
      description: 'Distributed only for qualified researchers operating under applicable institutional standards.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-20 border-b border-slate-800/80 bg-black backdrop-blur">
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/LORVENIQ-logo-black.png"
              alt="LORVENIQ logo"
              width={180}
              height={36}
              priority
              className="h-auto w-[180px] sm:w-[210px]"
            />
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

      <section className="mx-auto max-w-7xl px-6 py-10 sm:py-14">
        <div className="relative mb-10 overflow-hidden rounded-3xl border border-cyan-100 bg-gradient-to-r from-cyan-50 via-white to-slate-100 p-8 shadow-sm sm:p-10">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-200/40 blur-2xl" />
          <div className="absolute -bottom-14 left-1/3 h-44 w-44 rounded-full bg-slate-200/40 blur-2xl" />

          <div className="relative z-10 grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div>
              <p className="mb-3 inline-flex rounded-full border border-cyan-200 bg-cyan-100/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800">
                Research Profile
              </p>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Retatrutide 20MG
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
                A lower concentration option designed for measured protocol steps in advanced metabolic studies.
              </p>
              <p className="mt-4 text-2xl font-bold text-slate-900">{priceFormatter.format(price)}</p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    addCartItem({
                      id: '7',
                      name: 'Retatrutide 20MG',
                      image: '/images/RETATRUTIDE_40mg__2_-removebg-preview.png',
                      price,
                      link: '/Retatrutide-20',
                    });
                    setAdded(true);
                  }}
                  className="rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
                >
                  Add to Cart
                </button>
                <Link
                  href="/Cart"
                  className="rounded-full border border-cyan-200 px-5 py-2 text-sm font-semibold text-cyan-700 transition hover:bg-cyan-50"
                >
                  View Cart
                </Link>
              </div>
              {added ? <p className="mt-3 text-sm font-semibold text-cyan-700">Added to cart.</p> : null}
            </div>

            <div className="group relative h-72 overflow-hidden rounded-2xl border border-cyan-100/90 bg-gradient-to-b from-cyan-50 via-white to-slate-100 sm:h-80">
              <Image
                src="/images/RETATRUTIDE_40mg__2_-removebg-preview.png"
                alt="Retatrutide 20MG"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain p-8 transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="mb-8 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800">Research Highlights</p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Why Researchers Choose Retatrutide 20MG</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="group overflow-hidden rounded-2xl border border-cyan-100/90 bg-white/90 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-200/40"
            >
              <p className="mb-3 inline-flex rounded-full border border-cyan-200 bg-cyan-100/80 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-800">
                Research Grade
              </p>
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
              <div className="mt-5 h-px w-full bg-gradient-to-r from-cyan-200/60 to-transparent" />
              <p className="mt-3 text-xs font-medium text-cyan-700">For laboratory research use only.</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
