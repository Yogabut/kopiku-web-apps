import React from 'react';

const Promo = () => {
  const promoData = [
    {
      id: 1,
      image: "./asset/Promo/promo-1.png"
    },
    {
      id: 2,
      image: "./asset/Promo/promo-2.png"
    },
    {
      id: 3,
      image: "./asset/Promo/promo-3.png"
    }
  ];

  return (
    <div className="py-20 px-4 flex justify-center" id="promo">
      <div className="w-full max-w-7xl bg-[#FFECCC] rounded-[50px] shadow-md px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h1 className="text-5xl md:text-6xl font-bold text-emerald-800 mb-4">
            Grab Your Promo Now!
          </h1>
        </div>

        {/* Promo Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {promoData.map((promo, index) => (
            <div
              key={promo.id}
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <img
                src={promo.image}
                alt={`Promo ${promo.id}`}
                className="hover:scale-105 transition-transform duration-500 ease-in-out object-cover w-full h-full rounded-2xl"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Promo;
