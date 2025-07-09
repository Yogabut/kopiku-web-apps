import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { NonCoffeeData } from "../../utils/data/NonCoffeeData";

const NonCoffee = () => {
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
                    <h1 className="text-6xl text-amber-950 font-bold mb-4 pt-10">Non-Coffee Menu</h1>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                        Enjoy our refreshing range of tea, chocolate, mocktails, and frappes — perfect for those who prefer something different.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {NonCoffeeData.map((item, index) => (
                        <a href="" key={item.id}>
                            <div 
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                                className="shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-500 ease-in-out rounded-2xl overflow-hidden h-120"
                            >
                                <div className="relative">
                                    <img 
                                        src={item.image.trim() !== "" ? item.image : "./asset/food-placeholder.png"} 
                                        alt={item.name} 
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute top-4 right-4">
                                        <span className="bg-amber-600 text-white px-2 py-1 text-xs rounded-full font-medium">
                                            {item.sub.length} variants
                                        </span>
                                    </div>
                                </div>
                                
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-amber-950 mb-2">
                                        {item.name}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-4">
                                        {item.description}
                                    </p>
                                    
                                    {/* Sub-menu variants */}
                                    <div className="mb-4">
                                        <h4 className="text-sm font-bold text-gray-700 mb-2">Variants:</h4>
                                        <div className="flex flex-wrap gap-1">
                                            {item.sub.map((variant, idx) => (
                                                <span 
                                                    key={idx}
                                                    className="px-2 py-1 text-xs rounded-full bg-amber-400 text-gray-200 font-medium"
                                                >
                                                    {variant}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    <div className="flex justify-between items-center">
                                        <span className="text-2xl font-bold text-amber-600">
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

export default NonCoffee;
