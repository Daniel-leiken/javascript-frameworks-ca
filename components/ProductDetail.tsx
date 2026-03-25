/**
 * Product Detail Component
 * Displays full product information with Add to Cart functionality
 */

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/types';
import { useCartStore } from '@/lib/store';
import { formatCurrency, calculateDiscountPercentage, hasDiscount } from '@/lib/utils';
import { showToast } from '@/lib/toast';

interface ProductDetailProps {
  product: Product;
}

export function ProductDetail({ product }: ProductDetailProps) {
  const addItem = useCartStore((state) => state.addItem);
  const showDiscount = hasDiscount(product.price, product.discountedPrice);
  const discountPercentage = showDiscount
    ? calculateDiscountPercentage(product.price, product.discountedPrice)
    : 0;

  const handleAddToCart = () => {
    addItem(product);
    showToast.addedToCart(product.title);
  };

  return (
    <div className="mx-auto max-w-7xl">
      {/* Breadcrumb */}
      <nav className="mb-6 sm:mb-8 flex items-center space-x-2 text-xs sm:text-sm text-text-secondary overflow-x-auto">
        <Link href="/" className="hover:text-brand-dark whitespace-nowrap">
          Products
        </Link>
        <span>/</span>
        <span className="text-foreground truncate">{product.title}</span>
      </nav>

      <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden rounded-2xl bg-surface">
          {showDiscount && (
            <div className="absolute right-2 top-2 sm:right-4 sm:top-4 z-10 rounded-full bg-brand px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm font-bold text-white shadow-lg">
              -{discountPercentage}% OFF
            </div>
          )}
          <Image
            src={product.image.url}
            alt={product.image.alt || product.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Product Information */}
        <div className="flex flex-col">
          <h1 className="font-serif text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
            {product.title}
          </h1>

          {/* Rating */}
          {product.rating > 0 && (
            <div className="mt-3 sm:mt-4 flex items-center">
              <div className="flex items-center text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className={`h-4 w-4 sm:h-5 sm:w-5 ${
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
              <span className="ml-2 text-xs sm:text-sm text-text-secondary">
                {product.rating.toFixed(1)} / 5.0
              </span>
              {product.reviews.length > 0 && (
                <span className="ml-2 text-xs sm:text-sm text-text-secondary">
                  ({product.reviews.length} {product.reviews.length === 1 ? 'review' : 'reviews'})
                </span>
              )}
            </div>
          )}

          {/* Price */}
          <div className="mt-4 sm:mt-6">
            {showDiscount ? (
              <div className="flex items-baseline gap-2 sm:gap-3">
                <span className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
                  {formatCurrency(product.discountedPrice)}
                </span>
                <span className="text-lg sm:text-xl text-text-secondary line-through">
                  {formatCurrency(product.price)}
                </span>
              </div>
            ) : (
              <span className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
                {formatCurrency(product.price)}
              </span>
            )}
            {showDiscount && (
              <p className="mt-2 text-xs sm:text-sm text-brand-dark font-medium">
                You save {formatCurrency(product.price - product.discountedPrice)}
              </p>
            )}
          </div>

          {/* Description */}
          <div className="mt-4 sm:mt-6">
            <h2 className="text-base sm:text-lg font-semibold text-foreground">Description</h2>
            <p className="mt-2 text-sm sm:text-base text-text-secondary leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Tags */}
          {product.tags.length > 0 && (
            <div className="mt-4 sm:mt-6">
              <h2 className="text-base sm:text-lg font-semibold text-foreground">Tags</h2>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-brand-light px-2 sm:px-3 py-1 text-xs sm:text-sm text-brand-dark"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="mt-6 sm:mt-8 w-full rounded-xl bg-brand px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white transition-colors hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Reviews Section */}
      {product.reviews.length > 0 && (
        <div className="mt-10 sm:mt-12 lg:mt-16">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-foreground">Customer Reviews</h2>
          <div className="mt-4 sm:mt-6 space-y-4 sm:space-y-6">
            {product.reviews.map((review) => (
              <div
                key={review.id}
                className="rounded-2xl border border-border-custom bg-white p-6"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-foreground">{review.username}</p>
                    <div className="mt-1 flex items-center text-yellow-400">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                          key={i}
                          className={`h-4 w-4 ${
                            i < review.rating ? 'fill-current' : 'fill-gray-300'
                          }`}
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-text-secondary">{review.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
