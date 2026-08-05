'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getCartItems } from '../lib/cart';

type CartNavLinkProps = {
  className?: string;
};

function getCartCount() {
  return getCartItems().reduce((total, item) => total + item.quantity, 0);
}

export default function CartNavLink({ className }: CartNavLinkProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const refreshCount = () => setCount(getCartCount());

    refreshCount();

    window.addEventListener('storage', refreshCount);
    window.addEventListener('cart-updated', refreshCount);

    return () => {
      window.removeEventListener('storage', refreshCount);
      window.removeEventListener('cart-updated', refreshCount);
    };
  }, []);

  const label = count > 0 ? `Cart (${count})` : 'Cart';

  return (
    <Link href="/Cart" className={className} aria-label={label}>
      <span>Cart</span>
      {count > 0 ? (
        <span className="ml-1 inline-flex min-w-5 items-center justify-center rounded-full bg-cyan-300 px-1.5 text-[10px] font-bold leading-5 text-slate-900">
          {count}
        </span>
      ) : null}
    </Link>
  );
}
