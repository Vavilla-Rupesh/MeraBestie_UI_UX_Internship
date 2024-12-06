import React, { useState } from 'react';
import { Truck, Star, Package, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const cartItems = [
  {
    id: 1,
    name: 'Custom Photo Frame',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    rating: 4.5,
    reviews: 28,
    status: 'Delivered',
    trackingNumber: 'MB123456789',
    quantity: 1
  },
  {
    id: 2,
    name: 'Friendship Bracelet Set',
    price: 899,
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    rating: 5,
    reviews: 42,
    status: 'In Transit',
    trackingNumber: 'MB987654321',
    quantity: 1
  }
];

export function Cart() {
  const [items, setItems] = useState(cartItems);

  // Handle item deletion
  const handleDelete = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  // Handle quantity change
  const handleQuantityChange = (id, action) => {
    setItems(items.map(item => 
      item.id === id 
        ? { ...item, quantity: action === 'increment' ? item.quantity + 1 : item.quantity - 1 }
        : item
    ));
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="min-h-screen dark:bg-gray-900">
      <div className="relative">
        <div className="animated-bg absolute inset-0 opacity-10" />
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Shopping Cart</h2>

            <div className="space-y-8">
              {items.map((item) => (
                <div key={item.id} className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6 p-6 bg-white dark:bg-gray-800 rounded-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full md:w-48 h-48 object-cover rounded-lg"
                  />
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-xl font-medium text-gray-900 dark:text-white">{item.name}</h3>
                      <p className="text-2xl font-bold text-pink-500">₹{item.price}</p>
                    </div>

                    <div className="flex items-center space-x-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(item.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        ({item.reviews} reviews)
                      </span>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                        <Package className="h-5 w-5" />
                        <span>Status: {item.status}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                        <Truck className="h-5 w-5" />
                        <span>Tracking: {item.trackingNumber}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 mt-4">
                      <button 
                        className="text-gray-500 dark:text-gray-400 hover:text-pink-500"
                        onClick={() => handleQuantityChange(item.id, 'decrement')}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span className="text-lg">{item.quantity}</span>
                      <button 
                        className="text-gray-500 dark:text-gray-400 hover:text-pink-500"
                        onClick={() => handleQuantityChange(item.id, 'increment')}
                      >
                        +
                      </button>
                    </div>

                    <div className="flex justify-between mt-4">
                      <button 
                        className="text-red-500 flex items-center"
                        onClick={() => handleDelete(item.id)}
                      >
                        <XCircle className="h-5 w-5 mr-2 inline-block" />
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8">
              <div className="flex justify-between text-xl font-bold text-gray-900 dark:text-white">
                <span>Total</span>
                <span>₹{calculateTotal()}</span>
              </div>
              <div className="mt-8 flex justify-end space-x-4">
                <Link
                  to="/shop"
                  className="btn-3d px-6 py-3 bg-gray-100 text-gray-700 rounded-lg dark:bg-gray-700 dark:text-gray-300"
                >
                  Continue Shopping
                </Link>
                <Link
                  to="/checkout"
                  className="btn-3d px-6 py-3 bg-pink-500 text-white rounded-lg"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
