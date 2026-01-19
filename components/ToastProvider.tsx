/**
 * Toast Notification Provider
 * Wraps the app with react-hot-toast Toaster
 */

'use client';

import { Toaster } from 'react-hot-toast';

export function ToastProvider() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        // Default options for all toasts
        duration: 3000,
        style: {
          background: '#1e3a8a', // blue-900 - WCAG compliant
          color: '#fff',
          padding: '16px',
          borderRadius: '8px',
          fontSize: '14px',
          fontWeight: '500',
        },
        // Success toast style
        success: {
          duration: 3000,
          style: {
            background: '#15803d', // green-700 - WCAG compliant
            color: '#fff',
          },
          iconTheme: {
            primary: '#fff',
            secondary: '#15803d',
          },
        },
        // Error toast style
        error: {
          duration: 4000,
          style: {
            background: '#dc2626', // red-600 - WCAG compliant
            color: '#fff',
          },
          iconTheme: {
            primary: '#fff',
            secondary: '#dc2626',
          },
        },
      }}
    />
  );
}
