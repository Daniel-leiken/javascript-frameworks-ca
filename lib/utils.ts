/**
 * Utility functions for the application
 */

import { FormErrors, ContactFormData } from './types';

/**
 * Calculate discount percentage
 */
export function calculateDiscountPercentage(
  originalPrice: number,
  discountedPrice: number
): number {
  if (originalPrice <= discountedPrice) return 0;
  return Math.round(((originalPrice - discountedPrice) / originalPrice) * 100);
}

/**
 * Check if product has a discount
 */
export function hasDiscount(originalPrice: number, discountedPrice: number): boolean {
  return discountedPrice < originalPrice;
}

/**
 * Format currency (NOK)
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('no-NO', {
    style: 'currency',
    currency: 'NOK',
  }).format(amount);
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate contact form
 */
export function validateContactForm(data: ContactFormData): FormErrors {
  const errors: FormErrors = {};

  // Full Name validation (minimum 3 characters)
  if (!data.fullName || data.fullName.trim().length < 3) {
    errors.fullName = 'Full name must be at least 3 characters';
  }

  // Subject validation (minimum 3 characters)
  if (!data.subject || data.subject.trim().length < 3) {
    errors.subject = 'Subject must be at least 3 characters';
  }

  // Email validation (valid format)
  if (!data.email) {
    errors.email = 'Email is required';
  } else if (!isValidEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  // Message validation (minimum 10 characters)
  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters';
  }

  return errors;
}

/**
 * Truncate text to specified length
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
}

/**
 * Generate star rating display
 */
export function getStarRating(rating: number): string {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return '★'.repeat(fullStars) + 
         (hasHalfStar ? '½' : '') + 
         '☆'.repeat(emptyStars);
}
