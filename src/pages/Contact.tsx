import React from 'react';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

export function Contact() {
  return (
    <div className="min-h-screen dark:bg-gray-900">
      <div className="relative">
        <div className="animated-bg absolute inset-0 opacity-10" />
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">Contact Us</h2>
            <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
              We'd love to hear from you! Get in touch with us for any questions.
            </p>
          </div>

          <div className="mt-12 glass rounded-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 bg-pink-500">
                <div className="space-y-8 text-white">
                  <div>
                    <h3 className="text-2xl font-bold">Get in Touch</h3>
                    <p className="mt-2 text-pink-100">
                      Have questions about our products or services? We're here to help!
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <Phone className="h-6 w-6" />
                      <span>+91 123 456 7890</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Mail className="h-6 w-6" />
                      <span>support@merabestie.com</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <MapPin className="h-6 w-6" />
                      <span>123 Gift Street, Mumbai, India</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-white dark:bg-gray-800">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Name
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Email
                    </label>
                    <input
                      type="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-3d w-full py-3 bg-pink-500 text-white rounded-lg font-medium"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}