/**
 * Toast utility functions
 * Consistent toast notifications throughout the app
 */

import toast from 'react-hot-toast';

export const showToast = {
  success: (message: string) => {
    toast.success(message);
  },

  error: (message: string) => {
    toast.error(message);
  },

  loading: (message: string) => {
    return toast.loading(message);
  },

  dismiss: (toastId: string) => {
    toast.dismiss(toastId);
  },

  // Specific toast messages for common actions
  addedToCart: (productName: string) => {
    toast.success(`${productName} added to cart!`, {
      icon: '🛒',
    });
  },

  removedFromCart: (productName: string) => {
    toast.success(`${productName} removed from cart`, {
      icon: '🗑️',
    });
  },

  checkoutSuccess: () => {
    toast.success('Order placed successfully! 🎉', {
      duration: 5000,
    });
  },

  formSubmitted: () => {
    toast.success('Message sent successfully! ✉️');
  },

  validationError: (message: string) => {
    toast.error(message, {
      icon: '⚠️',
    });
  },
};
