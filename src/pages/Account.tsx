import React, { useState } from 'react';
import { Heart, Settings} from 'lucide-react';

export function Account() {
  const [formData, setFormData] = useState({
    email: 'mybestie@example.com',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Profile Section */}
        <div className="glass p-6 rounded-xl">
          <div className="text-center">
            <img
              className="mx-auto h-24 w-24 rounded-full"
              src="https://images.unsplash.com/photo-1611641277344-9863d05647f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZyaWVuZHNoaXB8ZW58MHx8MHx8fDA%3D"
              alt="Profile"
            />
            <h2 className="mt-4 text-xl font-semibold dark:text-white">My Bestie</h2>
            <p className="text-gray-500 dark:text-gray-400">mybestieh@example.com</p>
          </div>
        </div>

        {/* Wishlist Section */}
        <div className="glass p-6 rounded-xl md:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold dark:text-white">My Wishlist</h3>
            <Heart className="h-6 w-6 text-pink-500" />
          </div>
          <div className="space-y-4">
            {/* Wishlist Items */}
            <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg">
              <div className="flex items-center space-x-4">
                <img
                  className="h-16 w-16 rounded object-cover"
                  src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt="Gift item"
                />
                <div>
                  <h4 className="font-medium dark:text-white">Custom Photo Frame</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">₹1,299</p>
                </div>
              </div>
              <button className="btn-3d px-4 py-2 bg-pink-500 text-white rounded-lg">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Settings Section */}
        <div className="glass p-6 rounded-xl md:col-span-3">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold dark:text-white">Account Settings</h3>
            <Settings className="h-6 w-6 text-gray-500" />
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium dark:text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium dark:text-gray-300">New Password</label>
              <input
                type="password"
                name="password"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-end space-x-4">
              <button 
                type="button" 
                className="btn-3d px-4 py-2 text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-300"
                onClick={() => setFormData({ email: 'bestie@example.com', password: '' })}
              >
                Cancel
              </button>
              <button type="submit" className="btn-3d px-4 py-2 bg-pink-500 text-white rounded-lg">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}