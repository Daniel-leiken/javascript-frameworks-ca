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
      containerStyle={{
        top: '4.75rem',
      }}
      toastOptions={{
        // Default options for all toasts
        duration: 3000,
        style: {
          background: '#047857', // emerald-700 - WCAG compliant
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
            background: '#059669', // emerald-600 - WCAG compliant
            color: '#fff',
          },
          iconTheme: {
            primary: '#fff',
            secondary: '#059669',
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
