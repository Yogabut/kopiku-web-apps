import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { coffeeData } from "../../utils/data/CoffeeData";

const Coffee = () => {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: true,
        });
    }, []);

    // Format harga ke format Rupiah
    const formatPrice = (price) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(price); 
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 py-12">
            <div className="container mx-auto px-4">
                <div data-aos="fade-up" className="text-center mb-12">
                    <h1 className="text-6xl text-amber-950 font-bold mb-4 pt-10">Coffee Menu</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Explore our selection of premium coffee beverages, crafted with the finest beans and expert care.
                    </p>
                </div>

                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {coffeeData.map((coffee, index) => (
                        <a href="">
                        <div 
                            key={coffee.id}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="shadow-lg hover:scale-105 transition-transform duration-500 ease-in-out object-cover w-full h-full rounded-2xl"
                        >
                            <div className="relative">
                                <img 
                                    src={coffee.image || "./asset/coffee-placeholder.png"} 
                                    alt={coffee.name} 
                                    className="w-full h-70 px-3 py-5"
                                />
                                <div className="absolute top-7 right-4">
                                    <div className="flex gap-1">
                                        {coffee.type.map((type, idx) => (
                                            <span 
                                                key={idx}
                                                className={`px-2 py-1 text-xs rounded-full font-medium ${
                                                    type === 'hot' 
                                                        ? 'bg-red-100 text-red-800' 
                                                        : 'bg-blue-100 text-blue-800'
                                                }`}
                                            >
                                                {type}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-amber-950 mb-2">
                                    {coffee.name}
                                </h3>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                    {coffee.description}
                                </p>
                                <div className="flex justify-between items-center">
                                    <span className="text-2xl font-bold text-amber-600">
                                        {formatPrice(coffee.price)}
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

export default Coffee;