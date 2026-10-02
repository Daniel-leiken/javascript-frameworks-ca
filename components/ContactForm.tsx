/**
 * Contact Form Component
 * Form with TypeScript-based validation
 */

'use client';

import { useState } from 'react';
import { ContactFormData, FormErrors } from '@/lib/types';
import { validateContactForm } from '@/lib/utils';
import { showToast } from '@/lib/toast';

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    subject: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateContactForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      showToast.validationError('Please fix the errors in the form');
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      showToast.formSubmitted();

      setFormData({
        fullName: '',
        subject: '',
        email: '',
        message: '',
      });
      setErrors({});
    } catch {
      showToast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Full Name */}
      <div>
        <label
          htmlFor="fullName"
          className="block text-sm font-medium text-foreground"
        >
          Full Name <span className="text-brand">*</span>
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-xl border ${
            errors.fullName ? 'border-red-500' : 'border-border-custom'
          } px-4 py-3 text-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand`}
          placeholder="John Doe"
        />
        {errors.fullName && (
          <p className="mt-2 text-sm text-red-600">{errors.fullName}</p>
        )}
      </div>

      {/* Subject */}
      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-foreground"
        >
          Subject <span className="text-brand">*</span>
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-xl border ${
            errors.subject ? 'border-red-500' : 'border-border-custom'
          } px-4 py-3 text-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand`}
          placeholder="How can we help?"
        />
        {errors.subject && (
          <p className="mt-2 text-sm text-red-600">{errors.subject}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-foreground"
        >
          Email <span className="text-brand">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-xl border ${
            errors.email ? 'border-red-500' : 'border-border-custom'
          } px-4 py-3 text-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand`}
          placeholder="john@example.com"
        />
        {errors.email && (
          <p className="mt-2 text-sm text-red-600">{errors.email}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-foreground"
        >
          Message <span className="text-brand">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className={`mt-1 block w-full rounded-xl border ${
            errors.message ? 'border-red-500' : 'border-border-custom'
          } px-4 py-3 text-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand`}
          placeholder="Tell us more about your inquiry..."
        />
        {errors.message && (
          <p className="mt-2 text-sm text-red-600">{errors.message}</p>
        )}
        <p className="mt-2 text-sm text-text-secondary">
          Minimum 10 characters
        </p>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
