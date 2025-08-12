import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";

const NonCoffee = () => {
    const [nonCoffeeData, setNonCoffeeData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [activeFilter, setActiveFilter] = useState("All");

    useEffect(() => {
        Aos.init({ duration: 1000, once: true });

        axios.get("http://localhost:3000/api/non-coffee")
            .then((res) => {
                setNonCoffeeData(res.data);
                setFilteredData(res.data);
            })
            .catch((err) => {
                console.error("Failed fetching non-coffee data:", err);
            });
    }, []);

    const formatPrice = (price) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
        }).format(price);
    };

    // Dapatkan semua kategori unik dari data
    const getSubCategories = () => {
        const uniqueSubs = new Set(nonCoffeeData.map(item => item.non_coffee_sub_name));
        return ["All", ...Array.from(uniqueSubs)];
    };

    const handleFilter = (category) => {
        setActiveFilter(category);
        if (category === "All") {
            setFilteredData(nonCoffeeData);
        } else {
            const filtered = nonCoffeeData.filter(item => item.non_coffee_sub_name === category);
            setFilteredData(filtered);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 py-12">
            <div className="container mx-auto px-4">
                <div data-aos="fade-up" className="text-center mb-8">
                    <h1 className="text-6xl text-amber-950 font-bold mb-4 pt-10">Non-Coffee Menu</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Enjoy our refreshing range of tea, chocolate, mocktails, and frappes — perfect for those who prefer something different.
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

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {filteredData.map((item, index) => {
                        const imageSrc =
                            item?.non_coffee_image
                                ? `http://localhost:3000/${item.non_coffee_image}`
                                : "/asset/food-placeholder.png";

                        const types = (item?.non_coffee_type || "")
                            .split(",")
                            .map(type => type.trim());

                        return (
                            <a href="#" key={item.non_coffee_id}>
                                <div
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                    className="shadow-lg hover:scale-105 transition-transform duration-500 ease-in-out object-cover w-full h-full rounded-2xl bg-amber-100"
                                >
                                    <div className="relative">
                                        <img
                                            src={imageSrc}
                                            alt={item.non_coffee_name}
                                            className="w-full h-80 px-2 py-3 object-cover rounded-4xl"
                                        />
                                        <div className="absolute top-4 right-4 flex gap-1">
                                            {types.map((type, idx) => (
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
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-amber-950 mb-2">
                                            {item.non_coffee_name}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                            {item.non_coffee_description}
                                        </p>
                                        <div className="flex justify-between items-center">
                                            <span className="text-2xl font-bold text-amber-600">
                                                {formatPrice(item.non_coffee_price)}
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

export default NonCoffee;
