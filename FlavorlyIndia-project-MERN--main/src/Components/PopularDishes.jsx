import React from "react";
import pizza1 from "../assets/pizza1.png";
import pizza2 from "../assets/pizza2.png";
import pizza3 from "../assets/pizza3.png";
import Card from "./Card";

const PopularDishes = () => {

  const menu = [
    {
      id: 1,
      name: "Pepperoni Pizza",
      pizza: pizza1,
      description: "Spicy pepperoni slices on a cheesy pizza base and thin crust.",
      ratting: 4,
    },
    {
      id: 2,
      name: "Sushi Pizza",
      pizza: pizza2,
      description: "Classic pizza with fresh mozzarella, tomatoes, and basil.",
      ratting: 4,
    },
    {
      id: 3,
      name: "Margarita Pizza",
      pizza: pizza3,
      description: "Pizzaed with fresh vegetables and a blend of cheeses.",
      ratting: 4,
    },
  ];
  
  return (
    <div className="py-20 bg-gray-800">
      <div className="text-center max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-red-500">Popular Dishes</h1>
        <p className="text-xl text-white pt-2">
          Check out our most popular and higly rated dishes
        </p>
        <div className="grid grid-cols-3 pt-11 gap-7">
          {menu.map((item) => {
            return <Card key={item.id} menu={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularDishes;
