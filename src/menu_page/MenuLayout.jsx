import React from "react";
import Coffee from "./CoffeeMenu/Coffee";
import Food from "./FoodMenu/Food";
import NonCoffee from "./NonCoffeeMenu/NonCoffee";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const MenuLayout = () => {
    return (
        <div>

            <Router>
                <Routes>
                    <Route path="/Coffee" element={<Coffee />} />
                    <Route path="/NonCoffee" element={<NonCoffee />} />
                    <Route path="/Food" element={<Food />} />
                </Routes>
            </Router>
        </div>
    );
}
export default MenuLayout;