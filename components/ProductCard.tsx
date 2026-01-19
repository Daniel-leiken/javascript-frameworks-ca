/**
 * Product Card Component
 * Displays product information with discount badge
 */

import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/lib/types';
import { formatCurrency, calculateDiscountPercentage, hasDiscount } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const showDiscount = hasDiscount(product.price, product.discountedPrice);
  const discountPercentage = showDiscount
    ? calculateDiscountPercentage(product.price, product.discountedPrice)
    : 0;

  return (
    <Link
      href={`/products/${product.id}`}
      className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white transition-all hover:shadow-lg"
    >
      {/* Discount Badge */}
      {showDiscount && (
        <div className="absolute right-2 top-2 z-10 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
          -{discountPercentage}%
        </div>
      )}

      {/* Product Image */}
      <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
        <Image
          src={product.image.url}
          alt={product.image.alt || product.title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-sm font-medium text-gray-900 line-clamp-2 group-hover:text-blue-600">
          {product.title}
        </h3>

        {/* Rating */}
        {product.rating > 0 && (
          <div className="mt-2 flex items-center">
            <div className="flex items-center text-yellow-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(product.rating)
                      ? 'fill-current'
                      : 'fill-gray-300'
                  }`}
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <span className="ml-2 text-xs text-gray-600">
              {product.rating.toFixed(1)}
            </span>
          </div>
        )}

        {/* Price */}
        <div className="mt-auto pt-3">
          {showDiscount ? (
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-gray-900">
                {formatCurrency(product.discountedPrice)}
              </span>
              <span className="text-sm text-gray-500 line-through">
                {formatCurrency(product.price)}
              </span>
            </div>
          ) : (
            <span className="text-lg font-bold text-gray-900">
              {formatCurrency(product.price)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
