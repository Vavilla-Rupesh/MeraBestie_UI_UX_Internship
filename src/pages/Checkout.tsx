import React from 'react';
import { CreditCard, Truck, Package } from 'lucide-react';

export function Checkout() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Checkout Form */}
        <div className="glass p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-6 dark:text-white">Checkout</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium dark:text-gray-300">First Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium dark:text-gray-300">Last Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium dark:text-gray-300">Address</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2">
                <label className="block text-sm font-medium dark:text-gray-300">Card Number</label>
                <div className="mt-1 relative">
                  <input
                    type="text"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                  />
                  <CreditCard className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium dark:text-gray-300">CVV</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn-3d w-full py-3 bg-pink-500 text-white rounded-lg font-medium"
            >
              Complete Purchase
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="space-y-6">
          <div className="glass p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 dark:text-white">Order Summary</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    className="h-16 w-16 rounded object-cover"
                    src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt="Product"
                  />
                  <div>
                    <h4 className="font-medium dark:text-white">Custom Photo Frame</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Quantity: 1</p>
                  </div>
                </div>
                <p className="font-medium dark:text-white">₹1,299</p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="flex justify-between">
                <p className="text-gray-600 dark:text-gray-400">Subtotal</p>
                <p className="font-medium dark:text-white">₹1,299</p>
              </div>
              <div className="flex justify-between mt-2">
                <p className="text-gray-600 dark:text-gray-400">Shipping</p>
                <p className="font-medium dark:text-white">₹99</p>
              </div>
              <div className="flex justify-between mt-2 text-lg font-semibold">
                <p className="dark:text-white">Total</p>
                <p className="dark:text-white">₹1,398</p>
              </div>
            </div>
          </div>

          <div className="glass p-6 rounded-xl space-y-4">
            <div className="flex items-center space-x-3">
              <Package className="h-6 w-6 text-pink-500" />
              <p className="text-sm dark:text-gray-300">Free gift wrapping included</p>
            </div>
            <div className="flex items-center space-x-3">
              <Truck className="h-6 w-6 text-pink-500" />
              <p className="text-sm dark:text-gray-300">Delivery within 3-5 business days</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}