/**
 * Cart Item Component
 * Displays individual item in cart with quantity controls
 */

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { CartItem as CartItemType } from '@/lib/types';
import { useCartStore } from '@/lib/store';
import { formatCurrency } from '@/lib/utils';
import { showToast } from '@/lib/toast';

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { product, quantity } = item;
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity < 1) return;
    updateQuantity(product.id, newQuantity);
  };

  const handleRemove = () => {
    removeItem(product.id);
    showToast.removedFromCart(product.title);
  };

  const itemTotal = product.discountedPrice * quantity;

  return (
    <div className="flex gap-4 rounded-lg border border-gray-200 bg-white p-4">
      {/* Product Image */}
      <Link
        href={`/products/${product.id}`}
        className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md bg-gray-100"
      >
        <Image
          src={product.image.url}
          alt={product.image.alt || product.title}
          fill
          className="object-cover"
          sizes="96px"
        />
      </Link>

      {/* Product Info */}
      <div className="flex flex-1 flex-col">
        <div className="flex justify-between">
          <div className="flex-1">
            <Link
              href={`/products/${product.id}`}
              className="text-sm font-medium text-gray-900 hover:text-blue-600"
            >
              {product.title}
            </Link>
            <p className="mt-1 text-sm text-gray-700">
              {formatCurrency(product.discountedPrice)} each
            </p>
          </div>
          <p className="text-sm font-semibold text-gray-900">
            {formatCurrency(itemTotal)}
          </p>
        </div>

        {/* Quantity Controls */}
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handleQuantityChange(quantity - 1)}
              className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-300 text-gray-200 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
              disabled={quantity <= 1}
              aria-label="Decrease quantity"
            >
              -
            </button>
            <span className="w-12 text-center text-sm font-medium text-gray-900">
              {quantity}
            </span>
            <button
              onClick={() => handleQuantityChange(quantity + 1)}
              className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-300 text-gray-200 hover:bg-gray-50"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>

          {/* Remove Button */}
          <button
            onClick={handleRemove}
            className="text-sm text-red-600 hover:text-red-700"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
