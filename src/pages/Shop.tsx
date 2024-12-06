import React, { useState } from "react";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { useLocation } from "react-router-dom";
import "./HeartAnimation.css"; // Import the animation CSS

const products = {
  birthday: [
    {
      id: 1,
      name: 'Personalized Birthday Photo Album',
      price: 1499,
      image: 'https://images.unsplash.com/photo-1593642532744-d377ab507dc8',
      rating: 4.8
    },
    {
      id: 2,
      name: 'Custom Birthday Message Lamp',
      price: 999,
      image: 'https://images.unsplash.com/photo-1507919909716-c8262e491cde',
      rating: 4.5
    }
  ],
  anniversary: [
    {
      id: 3,
      name: 'Couple Names Engraved Watch',
      price: 2499,
      image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314',
      rating: 4.9
    },
    {
      id: 4,
      name: 'Anniversary Memory Book',
      price: 1299,
      image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57',
      rating: 4.7
    }
  ],
  friendship: [
    {
      id: 5,
      name: 'Best Friends Forever Bracelet Set',
      price: 899,
      image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0',
      rating: 4.6
    },
    {
      id: 6,
      name: 'Friendship Quote Wall Art',
      price: 799,
      image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509',
      rating: 4.4
    }
  ],
  custom: [
    {
      id: 7,
      name: 'Custom Name Neon Sign',
      price: 3499,
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3',
      rating: 4.9
    },
    {
      id: 8,
      name: 'Personalized Message Cushion',
      price: 699,
      image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2',
      rating: 4.5
    }
  ],
  dateNight: [
    {
      id: 9,
      name: 'Romantic Picnic Basket Set',
      price: 1999,
      image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0',
      rating: 4.7
    },
    {
      id: 10,
      name: 'Movie Night Gift Box',
      price: 899,
      image: 'https://images.unsplash.com/photo-1585647347483-22b66260dfff',
      rating: 4.6
    }
  ],
  party: [
    {
      id: 11,
      name: 'Party Decoration Kit',
      price: 1299,
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d',
      rating: 4.8
    },
    {
      id: 12,
      name: 'LED Party Lights Set',
      price: 799,
      image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205',
      rating: 4.5
    }
  ]
};

export function Shop() {
  const location = useLocation();
  const [animations, setAnimations] = useState([]);

  const queryParams = new URLSearchParams(location.search);
  const selectedCategory = queryParams.get("category");

  const filteredProducts = selectedCategory
    ? { [selectedCategory]: products[selectedCategory] || [] }
    : products;

  const handleAnimation = (event, type) => {
    const rect = event.target.getBoundingClientRect();
    const newAnimation = {
      id: Date.now(),
      x: rect.left + rect.width / 2,
      y: rect.top,
      type,
    };
    setAnimations((prev) => [...prev, newAnimation]);

    // Remove animation after 1.5 seconds
    setTimeout(() => {
      setAnimations((prev) => prev.filter((anim) => anim.id !== newAnimation.id));
    }, 1500);
  };

  return (
    <div className="min-h-screen dark:bg-gray-900 relative">
      <div className="relative">
        <div className="animated-bg absolute inset-0 opacity-10" />
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          {Object.entries(filteredProducts).map(([category, items]) => (
            <div key={category} className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white capitalize mb-8">
                {category.replace(/([A-Z])/g, " $1").trim()} Gifts
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((product) => (
                  <div key={product.id} className="glass p-6 rounded-xl hover-lift">
                    <div className="relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                      <div className="absolute top-4 right-4 space-x-2">
                        <button
                          className="btn-3d p-2 bg-white dark:bg-gray-800 rounded-full text-pink-500 hover:bg-pink-50"
                          onClick={(e) => handleAnimation(e, "heart")}
                        >
                          <Heart className="h-5 w-5" />
                        </button>
                        <button
                          className="btn-3d p-2 bg-white dark:bg-gray-800 rounded-full text-pink-500 hover:bg-pink-50"
                          onClick={(e) => handleAnimation(e, "cart")}
                        >
                          <ShoppingCart className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                        {product.name}
                      </h3>
                      <div className="flex items-center mt-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(product.rating)
                                  ? "text-yellow-400 fill-current"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                          {product.rating}
                        </span>
                      </div>
                      <p className="mt-2 text-xl font-bold text-pink-500">₹{product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {animations.map((anim) => (
          <div
            key={anim.id}
            className={`floating-heart ${anim.type}`}
            style={{
              left: `${anim.x}px`,
              top: `${anim.y}px`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
