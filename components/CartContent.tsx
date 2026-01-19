/**
 * Cart Content Component
 * Displays cart items or empty state
 */

'use client';

import { useCartStore } from '@/lib/store';
import { CartItem } from './CartItem';
import { CartSummary } from './CartSummary';
import { EmptyCart } from './EmptyCart';

export function CartContent() {
  const items = useCartStore((state) => state.items);

  if (items.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="mt-8 grid gap-8 lg:grid-cols-3">
      {/* Cart Items */}
      <div className="lg:col-span-2">
        <div className="space-y-4">
          {items.map((item) => (
            <CartItem key={item.product.id} item={item} />
          ))}
        </div>
      </div>

      {/* Cart Summary */}
      <div className="lg:col-span-1">
        <CartSummary />
      </div>
    </div>
  );
}
