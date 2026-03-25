/**
 * Checkout Success Component
 * Displays confirmation and clears cart
 */

'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useCartStore } from '@/lib/store';
import { showToast } from '@/lib/toast';

export function CheckoutSuccess() {
  const clearCart = useCartStore((state) => state.clearCart);
  const totalItems = useCartStore((state) => state.getTotalItems());

  useEffect(() => {
    if (totalItems > 0) {
      clearCart();
      showToast.checkoutSuccess();
    }
  }, []); // Run once on mount

  return (
    <div className="mx-auto max-w-2xl text-center">
      {/* Success Icon */}
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand-light">
        <svg
          className="h-12 w-12 text-brand-dark"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>

      {/* Success Message */}
      <h1 className="mt-6 font-serif text-3xl font-bold text-foreground sm:text-4xl">
        Order Placed Successfully!
      </h1>
      <p className="mt-4 text-lg text-text-secondary">
        Thank you for your purchase. Your order has been received and is being processed.
      </p>

      {/* Order Details */}
      <div className="mt-8 rounded-2xl bg-white border border-border-custom p-6">
        <h2 className="text-lg font-semibold text-foreground">What&apos;s Next?</h2>
        <div className="mt-4 space-y-3 text-left text-sm text-text-secondary">
          <div className="flex items-start">
            <svg
              className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-brand"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p>You will receive an order confirmation email shortly</p>
          </div>
          <div className="flex items-start">
            <svg
              className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-brand"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p>Your order will be shipped within 2-3 business days</p>
          </div>
          <div className="flex items-start">
            <svg
              className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-brand"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p>Track your order status in your email notifications</p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-xl bg-brand px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
        >
          Continue Shopping
        </Link>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-xl border border-border-custom bg-white px-8 py-3 text-sm font-semibold text-text-secondary transition-colors hover:bg-surface"
        >
          Back to Home
        </Link>
      </div>

      {/* Additional Info */}
      <p className="mt-8 text-sm text-text-secondary">
        Need help? Contact our support team at{' '}
        <Link href="/contact" className="text-brand hover:text-brand-dark">
          support
        </Link>
      </p>
    </div>
  );
}
