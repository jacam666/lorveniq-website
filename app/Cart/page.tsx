'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {
  clearCartItems,
  getCartItems,
  removeCartItem,
  type CartItem,
  updateCartItemQuantity,
} from '../lib/cart';
import CartNavLink from '../components/CartNavLink';

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>(() => getCartItems());
  const priceFormatter = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
  });

  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

  const changeQuantity = (id: string, nextQuantity: number) => {
    if (nextQuantity <= 0) {
      setItems(removeCartItem(id));
      return;
    }
    setItems(updateCartItemQuantity(id, nextQuantity));
  };

  const clearAll = () => {
    setItems(clearCartItems());
  };

  return (
    <main className="min-h-screen bg-gray-50">
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
            <CartNavLink className="inline-flex items-center text-cyan-300 transition hover:text-cyan-200" />
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

          <div className="relative z-10 text-center sm:text-left">
            <p className="mb-3 inline-flex rounded-full border border-cyan-200 bg-cyan-100/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800">
              Shopping Cart
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Your Research Selection
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Review selected compounds before continuing. All products are for research purposes only.
            </p>
          </div>
        </div>

        {items.length === 0 ? (
          <div className="rounded-2xl border border-cyan-100/90 bg-white/90 p-8 text-center shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">Your cart is empty</h2>
            <p className="mt-3 text-sm text-slate-600">
              Browse products and add compounds to start building your research selection.
            </p>
            <Link
              href="/Products"
              className="mt-6 inline-flex rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
            <div className="space-y-4">
              {items.map((item) => (
                <article
                  key={item.id}
                  className="flex flex-col gap-4 rounded-2xl border border-cyan-100/90 bg-white/90 p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-5"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative h-20 w-20 overflow-hidden rounded-xl border border-cyan-100 bg-gradient-to-b from-cyan-50 via-white to-slate-100">
                      <Image src={item.image} alt={item.name} fill sizes="80px" className="object-contain p-2" />
                    </div>
                    <div>
                      <p className="text-base font-semibold text-slate-900">{item.name}</p>
                      <p className="text-sm font-semibold text-slate-700">
                        {priceFormatter.format(item.price)} each
                      </p>
                      {item.link ? (
                        <Link href={item.link} className="text-sm font-medium text-cyan-600 transition hover:text-cyan-500">
                          View product
                        </Link>
                      ) : null}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <p className="mr-2 min-w-18 text-right text-sm font-semibold text-slate-800">
                      {priceFormatter.format(item.price * item.quantity)}
                    </p>
                    <button
                      type="button"
                      onClick={() => changeQuantity(item.id, item.quantity - 1)}
                      className="h-9 w-9 rounded-full border border-cyan-200 text-lg font-semibold text-slate-700 transition hover:bg-cyan-50"
                      aria-label={`Decrease quantity for ${item.name}`}
                    >
                      -
                    </button>
                    <span className="min-w-8 text-center text-sm font-semibold text-slate-900">{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => changeQuantity(item.id, item.quantity + 1)}
                      className="h-9 w-9 rounded-full border border-cyan-200 text-lg font-semibold text-slate-700 transition hover:bg-cyan-50"
                      aria-label={`Increase quantity for ${item.name}`}
                    >
                      +
                    </button>
                    <button
                      type="button"
                      onClick={() => setItems(removeCartItem(item.id))}
                      className="ml-2 rounded-full border border-rose-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-rose-600 transition hover:bg-rose-50"
                    >
                      Remove
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <aside className="h-fit rounded-2xl border border-cyan-100/90 bg-white/90 p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Summary</h3>
              <p className="mt-3 text-sm text-slate-600">Total items: {totalItems}</p>
              <p className="mt-1 text-sm text-slate-600">Subtotal: {priceFormatter.format(totalPrice)}</p>
              <p className="mt-4 text-xs leading-relaxed text-slate-500">
                All products are sold exclusively for scientific and laboratory research by qualified professionals.
              </p>

              <div className="mt-5 space-y-3">
                <Link
                  href="/Products"
                  className="block rounded-full border border-cyan-200 px-4 py-2 text-center text-sm font-semibold text-cyan-700 transition hover:bg-cyan-50"
                >
                  Continue Browsing
                </Link>
                <button
                  type="button"
                  onClick={clearAll}
                  className="block w-full rounded-full border border-rose-200 px-4 py-2 text-sm font-semibold text-rose-600 transition hover:bg-rose-50"
                >
                  Clear Cart
                </button>
              </div>
            </aside>
          </div>
        )}
      </section>
    </main>
  );
}
