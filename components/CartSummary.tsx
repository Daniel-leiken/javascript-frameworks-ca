/**
 * Cart Summary Component
 * Displays cart totals and checkout button
 */

'use client';

import Link from 'next/link';
import { useCartStore } from '@/lib/store';
import { formatCurrency } from '@/lib/utils';

export function CartSummary() {
  const totalItems = useCartStore((state) => state.getTotalItems());
  const totalPrice = useCartStore((state) => state.getTotalPrice());

  return (
    <div className="rounded-2xl border border-border-custom bg-white p-6 sticky top-24">
      <h2 className="text-lg font-semibold text-foreground">Order Summary</h2>

      <div className="mt-6 space-y-4">
        {/* Items Count */}
        <div className="flex justify-between text-sm">
          <span className="text-text-secondary">
            Items ({totalItems})
          </span>
          <span className="font-medium text-foreground">
            {formatCurrency(totalPrice)}
          </span>
        </div>

        {/* Divider */}
        <div className="border-t border-border-custom" />

        {/* Total */}
        <div className="flex justify-between">
          <span className="text-lg font-semibold text-foreground">Total</span>
          <span className="text-lg font-bold text-foreground">
            {formatCurrency(totalPrice)}
          </span>
        </div>
      </div>

      {/* Checkout Button */}
      <Link
        href="/checkout/success"
        className="mt-6 block w-full rounded-xl bg-brand px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
      >
        Proceed to Checkout
      </Link>

      {/* Continue Shopping */}
      <Link
        href="/"
        className="mt-3 block w-full rounded-xl border border-border-custom bg-white px-6 py-3 text-center text-sm font-medium text-text-secondary transition-colors hover:bg-surface"
      >
        Continue Shopping
      </Link>

      {/* Info Message */}
      <p className="mt-4 text-xs text-text-secondary text-center">
        Taxes and shipping calculated at checkout
      </p>
    </div>
  );
}
