import { useState } from "react";
import FoodCard from "../FoodCard";

function Menu({ foods, addToCart }) {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredFoods = foods.filter((food) => {
    const matchSearch = food.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" || food.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <section className="bg-gray-50 min-h-screen py-16">

      <div className="container mx-auto px-6">

        <h1 className="text-5xl font-bold text-center text-gray-800">
          Explore Our Menu
        </h1>

        <p className="text-center text-gray-500 mt-4 mb-10">
          Freshly prepared every day with authentic South Indian flavors.
        </p>

        {/* Search */}
        <div className="flex justify-center mb-8">

          <input
            type="text"
            placeholder="🔍 Search your favorite food..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-2/3 lg:w-1/2 border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">

          {["All", "Breakfast", "Snacks", "Meals"].map((item) => (

            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`px-6 py-3 rounded-full font-semibold transition ${
                category === item
                  ? "bg-orange-500 text-white"
                  : "bg-white border hover:bg-orange-100"
              }`}
            >
              {item}
            </button>

          ))}

        </div>

        {/* Food Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredFoods.map((food) => (

            <FoodCard
              key={food.id}
              {...food}
              addToCart={() => addToCart(food)}
            />

          ))}

        </div>

        {/* Empty State */}
        {filteredFoods.length === 0 && (

          <div className="text-center mt-20">

            <h2 className="text-3xl font-bold text-gray-500">
              😔 No food found
            </h2>

            <p className="text-gray-400 mt-3">
              Try searching for another dish.
            </p>

          </div>

        )}

      </div>

    </section>
  );
}

export default Menu;