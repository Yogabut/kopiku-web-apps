import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";

const Merchandise = () => {
  const [merchData, setMerchData] = useState([]);

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });

    axios
      .get("http://localhost:3000/api/merchandise")
      .then((res) => {
        setMerchData(res.data);
      })
      .catch((err) => {
        console.error("Error fetching merchandise data:", err);
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
            Merchandise
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Temukan koleksi eksklusif merchandise kami, cocok untuk hadiah dan koleksi pribadi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {merchData.map((item, index) => {
            const imageSrc =
              item?.merchandise_image
                ? `http://localhost:3000/${item.merchandise_image}`
                : "/asset/merch-placeholder.png";

            return (
              <a key={item.merchandise_id || index} href="#">
                <div
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="shadow-lg hover:scale-105 transition-transform duration-500 ease-in-out object-cover w-full h-full rounded-2xl bg-amber-50"
                >
                  <div className="relative">
                    <img
                      src={imageSrc}
                      alt={item?.merchandise_name || "Merch"}
                      className="w-full h-80 px-2 py-3 object-cover rounded-4xl"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-amber-950 mb-2">
                      {item?.merchandise_name || "Unnamed Merchandise"}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {item?.merchandise_description || "No description available."}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-amber-600">
                        {formatPrice(item?.merchandise_price)}
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

export default Merchandise;
