import React from 'react';
import { Link } from 'react-router-dom';
import { Gift, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Gift className="h-8 w-8 text-pink-500" />
              <span className="text-2xl font-bold dark:text-white">Mera Bestie</span>
            </div>
            <p className="text-gray-500 dark:text-gray-400">
              Celebrating Friendship & Love, One Gift at a Time
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/shop" className="text-gray-500 hover:text-pink-500 dark:text-gray-400">Shop</Link></li>
              <li><Link to="/about" className="text-gray-500 hover:text-pink-500 dark:text-gray-400">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-500 hover:text-pink-500 dark:text-gray-400">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 dark:text-white">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link to="/shipping" className="text-gray-500 hover:text-pink-500 dark:text-gray-400">Shipping Info</Link></li>
              <li><Link to="/returns" className="text-gray-500 hover:text-pink-500 dark:text-gray-400">Returns</Link></li>
              <li><Link to="/faq" className="text-gray-500 hover:text-pink-500 dark:text-gray-400">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 dark:text-white">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-pink-500 dark:text-gray-400">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-pink-500 dark:text-gray-400">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-pink-500 dark:text-gray-400">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Mera Bestie. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}