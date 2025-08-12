import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";

const Coffee = () => {
  const [coffeeData, setCoffeeData] = useState([]);

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });

    axios
      .get("http://localhost:3000/api/coffee")
      .then((response) => {
        setCoffeeData(response.data);
      })
      .catch((error) => {
        console.error("Gagal mengambil data kopi:", error);
      });
  }, []);

  const formatPrice = (price) => {
    const numericPrice = Number(price);
    return !isNaN(numericPrice)
      ? new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
          minimumFractionDigits: 0,
        }).format(numericPrice)
      : "Rp0";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 py-12">
      <div className="container mx-auto px-4">
        <div data-aos="fade-up" className="text-center mb-12">
          <h1 className="text-6xl text-amber-950 font-bold mb-4 pt-10">
            Coffee Menu
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our selection of premium coffee beverages, crafted with the
            finest beans and expert care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {coffeeData.map((coffee, index) => {
            const imageSrc =
                coffee?.coffee_image
                ? `http://localhost:3000/${coffee.coffee_image}`
                : "/asset/coffee-placeholder.png";

            const coffeeTypes = (coffee?.coffee_type || "")
              .split(",")
              .map((type) => type.trim())
              .filter((type) => type.length > 0);

            return (
              <a key={coffee.coffee_id || index} href="#">
                <div
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="shadow-lg hover:scale-105 transition-transform duration-500 ease-in-out object-cover w-full h-full rounded-2xl bg-amber-100"
                >
                  <div className="relative">
                    <img
                      src={imageSrc}
                      alt={coffee?.coffee_name || "Coffee"}
                      className="w-full h-80 px-2 py-3 object-cover rounded-4xl"
                    />
                    <div className="absolute top-7 right-4">
                      <div className="flex gap-1">
                        {coffeeTypes.map((type, idx) => (
                          <span
                            key={idx}
                            className={`px-2 py-1 text-xs rounded-full font-medium ${
                              type === "hot"
                                ? "bg-red-100 text-red-800"
                                : "bg-blue-100 text-blue-800"
                            }`}
                          >
                            {type}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-amber-950 mb-2">
                      {coffee?.coffee_name || "Unnamed Coffee"}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2 line-clamp-3">
                      {coffee?.coffee_description ||
                        "No description available."}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-amber-600">
                        {formatPrice(coffee?.coffee_price)}
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Coffee;
