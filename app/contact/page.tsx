/**
 * Contact Page
 */

import { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | ShopHub',
  description: 'Get in touch with our team. We\'re here to help with any questions or concerns.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-200 sm:text-4xl">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Contact Form */}
        <div className="mt-12">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
