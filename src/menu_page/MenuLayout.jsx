import React from "react";
import Coffee from "./CoffeeMenu/Coffee";
import Food from "./FoodMenu/Food";
import NonCoffee from "./NonCoffeeMenu/NonCoffee";

const MenuLayout = () => {
    return (
        <div>
            <Coffee />
            <Food />
            <NonCoffee />
        </div>
    );
}
export default MenuLayout;