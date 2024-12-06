import React from 'react';
import { Link } from 'react-router-dom';
import { Gift, Cake, Heart, Star, Coffee, Music } from 'lucide-react';

const categories = [
  { name: 'Birthday Gifts', key: 'birthday', icon: Cake, color: 'bg-blue-100 text-blue-600' },
  { name: 'Anniversary', key: 'anniversary', icon: Heart, color: 'bg-pink-100 text-pink-600' },
  { name: 'Friendship Day', key: 'friendship', icon: Star, color: 'bg-yellow-100 text-yellow-600' },
  { name: 'Custom Gifts', key: 'custom', icon: Gift, color: 'bg-purple-100 text-purple-600' },
  { name: 'Date Night', key: 'dateNight', icon: Coffee, color: 'bg-green-100 text-green-600' },
  { name: 'Party Supplies', key: 'party', icon: Music, color: 'bg-red-100 text-red-600' },
];

export function CategoryGrid() {
  return (
    <div className="bg-white dark:bg-transparent py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            Shop by Category
          </h2>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-300">
            Find the perfect gift for every occasion
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {categories.map((category) => (
              <Link
                key={category.key}
                to={`/shop?category=${category.key}`} // Navigate to the Shop page with the query string
                className="relative group bg-white dark:bg-gray-800 p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500 rounded-lg transition-all hover:shadow-lg cursor-pointer"
              >
                <div>
                  <span className={`rounded-lg inline-flex p-3 ${category.color}`}>
                    <category.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    {category.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
