// src/components/Merchandise.jsx
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import MerchandiseData from "../utils/data/merchandise";

const Merchandise = () => {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const formatPrice = (price) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(price);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-yellow-100 py-12">
            <div className="container mx-auto px-4">
                <div data-aos="fade-up" className="text-center mb-12">
                    <h1 className="text-6xl text-yellow-900 font-bold mb-4 pt-10">Merchandise</h1>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                        Explore our exclusive Kopiku merchandise — perfect for gifts or your personal collection.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {MerchandiseData().map((item, index) => (
                    <a href="">
                        <div
                            key={item.id}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-500 ease-in-out rounded-2xl overflow-hidden"
                        >
                            <div className="relative">
                                <img 
                                    src={item.image.trim() !== "" ? item.image : "./asset/merch-placeholder.png"}
                                    alt={item.name}
                                    className="w-full h-48 object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-yellow-900 mb-2">{item.name}</h3>
                                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-2xl font-bold text-yellow-600">
                                        {formatPrice(item.price)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Merchandise;
