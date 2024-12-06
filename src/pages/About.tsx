import React from 'react';
import { Heart, Users, Gift, Clock } from 'lucide-react';

export function About() {
  return (
    <div className="min-h-screen dark:bg-gray-900">
      <div className="relative overflow-hidden">
        <div className="animated-bg absolute inset-0 opacity-10" />
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              About Mera Bestie
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
              Celebrating friendships and creating memories, one gift at a time.
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
              <div className="glass p-8 rounded-xl text-center">
                <div className="flex justify-center">
                  <Heart className="h-12 w-12 text-pink-500" />
                </div>
                <h3 className="mt-6 text-xl font-medium text-gray-900 dark:text-white">Our Story</h3>
                <p className="mt-4 text-gray-500 dark:text-gray-400">
                  Founded in 2024, Mera Bestie was born from the idea that every friendship deserves to be celebrated with thoughtful, personalized gifts.
                </p>
              </div>

              <div className="glass p-8 rounded-xl text-center">
                <div className="flex justify-center">
                  <Users className="h-12 w-12 text-pink-500" />
                </div>
                <h3 className="mt-6 text-xl font-medium text-gray-900 dark:text-white">Our Mission</h3>
                <p className="mt-4 text-gray-500 dark:text-gray-400">
                  To strengthen bonds between friends by providing unique, meaningful gifts that capture the essence of their relationship.
                </p>
              </div>

              <div className="glass p-8 rounded-xl text-center">
                <div className="flex justify-center">
                  <Gift className="h-12 w-12 text-pink-500" />
                </div>
                <h3 className="mt-6 text-xl font-medium text-gray-900 dark:text-white">Our Promise</h3>
                <p className="mt-4 text-gray-500 dark:text-gray-400">
                  Quality craftsmanship, timely delivery, and a touch of love in every gift we create and deliver.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}