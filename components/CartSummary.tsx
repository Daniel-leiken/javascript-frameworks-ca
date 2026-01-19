/**
 * Cart Summary Component
 * Displays cart totals and checkout button
 */

'use client';

import Link from 'next/link';
import { useCartStore } from '@/lib/store';
import { formatCurrency } from '@/lib/utils';

export function CartSummary() {
  const items = useCartStore((state) => state.items);
  const totalItems = useCartStore((state) => state.getTotalItems());
  const totalPrice = useCartStore((state) => state.getTotalPrice());

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 sticky top-24">
      <h2 className="text-lg font-semibold text-gray-900">Order Summary</h2>

      <div className="mt-6 space-y-4">
        {/* Items Count */}
        <div className="flex justify-between text-sm">
          <span className="text-gray-700">
            Items ({totalItems})
          </span>
          <span className="font-medium text-gray-900">
            {formatCurrency(totalPrice)}
          </span>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200" />

        {/* Total */}
        <div className="flex justify-between">
          <span className="text-lg font-semibold text-gray-900">Total</span>
          <span className="text-lg font-bold text-gray-900">
            {formatCurrency(totalPrice)}
          </span>
        </div>
      </div>

      {/* Checkout Button */}
      <Link
        href="/checkout/success"
        className="mt-6 block w-full rounded-lg bg-blue-600 px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Proceed to Checkout
      </Link>

      {/* Continue Shopping */}
      <Link
        href="/"
        className="mt-3 block w-full rounded-lg border border-gray-300 bg-white px-6 py-3 text-center text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
      >
        Continue Shopping
      </Link>

      {/* Info Message */}
      <p className="mt-4 text-xs text-gray-500 text-center">
        Taxes and shipping calculated at checkout
      </p>
    </div>
  );
}
