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
        duration: 3000,
        style: {
          background: '#8E5A5C',
          color: '#fff',
          padding: '16px',
          borderRadius: '12px',
          fontSize: '14px',
          fontWeight: '500',
        },
        success: {
          duration: 3000,
          style: {
            background: '#C28285',
            color: '#fff',
          },
          iconTheme: {
            primary: '#fff',
            secondary: '#C28285',
          },
        },
        error: {
          duration: 4000,
          style: {
            background: '#dc2626',
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
