import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom'; // Import Link from React Router

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-transparent z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block text-white ">Celebrating </span>
                <span className="block text-pink-500">Friendship & Love</span>
                <span className="block text-pink-500">One Gift at a Time</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Find the perfect personalized gift for your bestie. From custom engravings to heartfelt message cards, make every occasion special.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    to="/shop"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-500 hover:bg-pink-600 md:py-4 md:text-lg md:px-10"
                  >
                    Explore Gifts
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1513885535751-8b9238bd345a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Gift boxes with ribbons"
        />
      </div>
    </div>
  );
}
