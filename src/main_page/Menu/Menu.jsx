import React, { useEffect } from 'react';
import Aos from 'aos';

// Sample card data
const getCardData = () => [
  {
    id: 1,
    title: 'Coffee',
    description: 'Discover our premium coffee selection, sourced from the finest beans.',
    imageUrl: './asset/coffee.png',
    tags: ['Espresso', 'Latte', 'Cappuccino', 'Americano'],
    link: '/menu/Coffee',
  },
  {
    id: 2,
    title: 'Non-Coffee',
    description: 'Explore our range of non-coffee beverages, from refreshing teas to rich hot chocolate.',
    imageUrl: './asset/noncoffee.png',
    tags: ['Tea', 'Matcha', 'Chocolate', 'Mocktails'],
    link: '/menu/NonCoffee',
  },
  {
    id: 3,
    title: 'Food',
    description: 'Savor our delicious food offerings, including rice bowls, croissants, and sandwiches.',
    imageUrl: './asset/food.png',
    tags: ['Rice Bowls', 'Croissants', 'Sandwiches', 'Cookies'],
    link: '/menu/Food',
  },
];

// Card Component
const Card = ({ card }) => (
  <a
    className="group flex flex-col focus:outline-none"
    href={card.link}
    data-aos="zoom-in-up"
  >
    <div className="relative w-full h-100 overflow-hidden bg-gray-100 rounded-2xl dark:bg-neutral-800">
      <img
        className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover w-full h-full rounded-2xl"
        src={card.imageUrl}
        alt={`${card.title} Image`}
      />
    </div>
    <div className="pt-4">
      <h2 className="relative font-sans font-extrabold text-2xl text-gray-600 text-start">
        {card.title}
      </h2>
      <p className="mt-1 text-gray-600 dark:text-neutral-400 text-start">{card.description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {card.tags.map((tag, index) => (
          <span
            key={index}
            className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </a>
);

// Menu Component
const Menu = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  const cards = getCardData();

  return (
    <div className="py-20 px-6 text-center" id='menu'>
      <div className="mb-12" data-aos="fade-down">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-4">Our Menu</h1>
        <p className="max-w-xl mx-auto text-gray-600">
          Enjoy our curated selection of beverages and foods crafted to elevate your experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
