import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";

const Food = () => {
    const [foodData, setFoodData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [activeFilter, setActiveFilter] = useState("All");

    useEffect(() => {
        Aos.init({ duration: 1000, once: true });

        axios.get("http://localhost:3000/api/food")
            .then((res) => {
                setFoodData(res.data);
                setFilteredData(res.data);
            })
            .catch((err) => {
                console.error("Error fetching food data:", err);
            });
    }, []);

    const formatPrice = (price) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(price);
    };

    const getSubCategories = () => {
        const uniqueSubs = new Set(foodData.map(item => item.food_sub_name));
        return ["All", ...Array.from(uniqueSubs)];
    };

    const handleFilter = (category) => {
        setActiveFilter(category);
        if (category === "All") {
            setFilteredData(foodData);
        } else {
            setFilteredData(foodData.filter(item => item.food_sub_name === category));
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 py-12">
            <div className="container mx-auto px-4">
                <div data-aos="fade-up" className="text-center mb-8">
                    <h1 className="text-6xl text-amber-950 font-bold mb-4 pt-10">Food Menu</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Discover our delicious selection of freshly prepared meals, snacks, and main courses, perfect for any time of day.
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-10">
                    {getSubCategories().map((category, index) => (
                        <button
                            key={index}
                            onClick={() => handleFilter(category)}
                            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                                activeFilter === category
                                    ? "bg-amber-600 text-white"
                                    : "bg-white border border-amber-600 text-amber-600 hover:bg-amber-100"
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Food Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 center">
                    {filteredData.map((item, index) => {
                        const imageSrc =
                            item?.food_image
                                ? `http://localhost:3000/${item.food_image}`
                                : "/asset/food-placeholder.png";

                        return (
                            <a href="#" key={item.food_id}>
                                <div
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                    className="shadow-lg hover:scale-105 transition-transform duration-500 ease-in-out object-cover w-full h-full rounded-2xl bg-amber-50"
                                >
                                    <div className="relative">
                                        <img
                                            src={imageSrc}
                                            alt={item.food_name}
                                            className="w-full h-80 px-2 py-3 object-cover rounded-4xl"
                                        />
                                    </div>

                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-amber-950 mb-2">
                                            {item.food_name}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-4">
                                            {item.food_description}
                                        </p>
                                        <div className="flex justify-between items-center">
                                            <span className="text-2xl font-bold text-amber-600">
                                                {formatPrice(item.food_price)}
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

export default Food;
