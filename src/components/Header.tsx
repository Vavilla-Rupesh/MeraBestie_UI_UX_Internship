import React from 'react';
import { Gift, Search, ShoppingCart, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  return (
    <header className="glass sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Gift className="h-8 w-8 text-pink-500" />
              <span className="text-2xl font-bold dark:text-white">Mera Bestie</span>
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <Link
              to="/shop"
              className="text-gray-700 dark:text-gray-200 hover:text-pink-500 dark:hover:text-pink-400"
            >
              Shop
            </Link>
            <Link
              to="/about"
              className="text-gray-700 dark:text-gray-200 hover:text-pink-500 dark:hover:text-pink-400"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 dark:text-gray-200 hover:text-pink-500 dark:hover:text-pink-400"
            >
              Contact
            </Link>
          </div>
          
          <div className="flex-1 max-w-lg mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for gifts..."
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <nav className="flex items-center space-x-6">
            <ThemeToggle />
            <Link
              to="/account"
              className="text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400"
            >
              <User className="h-6 w-6" />
            </Link>
            <Link
              to="/cart"
              className="text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 relative"
            >
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
