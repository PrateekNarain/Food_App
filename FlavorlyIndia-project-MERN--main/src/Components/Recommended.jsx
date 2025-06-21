import React, { useEffect, useState, useMemo } from "react";

const MealCard = ({ meal, wishlist, toggleWishlist }) => {
  const [inCart, setInCart] = useState(false);

  const { price, rating } = useMemo(() => {
    return {
      price: (parseInt(meal.idMeal.slice(-3)) % 400) + 100,
      rating: (parseInt(meal.idMeal.slice(-1)) % 5) + 1,
    };
  }, [meal.idMeal]);

  const isWishlisted = wishlist.includes(meal.idMeal);

  return (
    <div className="relative border p-4 flex flex-col items-center shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300 bg-white">
      {/* Heart Icon */}
      <button
        onClick={() => toggleWishlist(meal.idMeal)}
        aria-label="Toggle Wishlist"
        className="absolute top-3 right-3 text-2xl focus:outline-none"
      >
        {isWishlisted ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="red"
            viewBox="0 0 24 24"
            stroke="red"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 
                 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09 
                 C13.09 3.81 14.76 3 16.5 3 
                 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="gray"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 
                 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09 
                 C13.09 3.81 14.76 3 16.5 3 
                 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
          </svg>
        )}
      </button>

      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="mb-4 w-full h-[150px] object-cover rounded-lg"
      />
      <h3 className="font-semibold text-center text-lg mb-1">{meal.strMeal}</h3>
      <p className="text-gray-500 text-sm mb-2 text-center">A delicious meal for you!</p>
      <div className="mb-2 flex items-center justify-center gap-3">
        <span className="font-bold text-green-600 text-xl">₹{price}</span>
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-5 h-5 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.287 3.974c.3.922-.755 1.688-1.54 1.118l-3.39-2.462a1 1 0 00-1.176 0l-3.39 2.462c-.784.57-1.838-.196-1.539-1.118l1.286-3.974a1 1 0 00-.363-1.118L2.045 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
            </svg>
          ))}
        </div>
      </div>

      <button
        onClick={() => setInCart((prev) => !prev)}
        className={`w-full py-2 rounded-lg transition-colors ${
          inCart ? "bg-green-600 hover:bg-green-700 hover:scale-102" : "bg-red-500 hover:bg-red-600 hover:scale-102"
        } text-white whitespace-nowrap`}
        style={{ minWidth: "150px" }}
      >
        {inCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>
  );
};

const Recommended = ({ searchedMeals = [] }) => {
  const [categories, setCategories] = useState([]);
  const [areas, setAreas] = useState([]);
  const [meals, setMeals] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [priceRange, setPriceRange] = useState([100, 500]);
  const [ratingFilter, setRatingFilter] = useState(0);

  // Wishlist state: array of meal IDs
  const [wishlist, setWishlist] = useState(() => {
    // Load from localStorage to persist wishlist between page reloads
    const saved = localStorage.getItem("wishlist");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const toggleWishlist = (mealId) => {
    setWishlist((prev) =>
      prev.includes(mealId) ? prev.filter((id) => id !== mealId) : [...prev, mealId]
    );
  };

  // Load categories and areas
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => {
        const filteredCategories = data.categories.filter(
          (cat) => cat.strCategory.toLowerCase() !== "beef"
        );
        setCategories(filteredCategories);
        if (selectedCategory.toLowerCase() === "beef") {
          setSelectedCategory("");
        }
      });

    fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
      .then((res) => res.json())
      .then((data) => setAreas(data.meals));
  }, []);

  // Fetch meals by category/area or use searchedMeals
  useEffect(() => {
    if (searchedMeals.length > 0) {
      setMeals(searchedMeals);
      return;
    }

    const fetchMeals = async () => {
      if (selectedCategory) {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`
        );
        const data = await res.json();
        setMeals(data.meals || []);
      } else if (selectedArea) {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?a=${selectedArea}`
        );
        const data = await res.json();
        setMeals(data.meals || []);
      } else {
        const res = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
        const data = await res.json();
        const categoryList = data.categories.filter(
          (cat) => cat.strCategory.toLowerCase() !== "beef"
        );
        const mealPromises = categoryList.map((cat) =>
          fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat.strCategory}`)
            .then((res) => res.json())
            .then((data) => data.meals || [])
        );
        const allMeals = await Promise.all(mealPromises);
        setMeals(allMeals.flat());
      }
    };

    fetchMeals();
  }, [selectedCategory, selectedArea, searchedMeals]);

  const filteredMeals = useMemo(() => {
    return meals
      .map((meal) => {
        const price = (parseInt(meal.idMeal.slice(-3)) % 400) + 100;
        const rating = (parseInt(meal.idMeal.slice(-1)) % 5) + 1;
        return { ...meal, price, rating };
      })
      .filter(
        (meal) =>
          meal.price >= priceRange[0] &&
          meal.price <= priceRange[1] &&
          meal.rating >= ratingFilter
      );
  }, [meals, priceRange, ratingFilter]);

  const handlePriceChange = (e, index) => {
    const value = Number(e.target.value);
    setPriceRange((prev) => {
      const newRange = [...prev];
      newRange[index] = value;
      if (newRange[0] > newRange[1]) {
        if (index === 0) newRange[1] = newRange[0];
        else newRange[0] = newRange[1];
      }
      return newRange;
    });
  };

  const resetFilters = () => {
    setSelectedArea("");
    setPriceRange([100, 500]);
    setRatingFilter(0);
  };

  return (
    <div className="flex bg-orange-50">
      <aside className="w-72 bg-orange-50 p-6 shadow-lg sticky top-24 h-screen overflow-y-auto">
        <h2 className="text-xl font-bold mb-6 text-red-500">Filters</h2>

        <div className="mb-6">
          <label className="block font-semibold mb-2">Country (Area)</label>
          <select
            value={selectedArea}
            onChange={(e) => setSelectedArea(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            <option value="">All Areas</option>
            {areas.map((area) => (
              <option key={area.strArea} value={area.strArea}>
                {area.strArea}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-6">
          <label className="block font-semibold mb-2">Price Range (₹)</label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              min="100"
              max="500"
              value={priceRange[0]}
              onChange={(e) => handlePriceChange(e, 0)}
              className="w-20 border rounded px-2 py-1"
            />
            <span>to</span>
            <input
              type="number"
              min="100"
              max="500"
              value={priceRange[1]}
              onChange={(e) => handlePriceChange(e, 1)}
              className="w-20 border rounded px-2 py-1"
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block font-semibold mb-2">Minimum Rating</label>
          <select
            value={ratingFilter}
            onChange={(e) => setRatingFilter(Number(e.target.value))}
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            <option value={0}>All Ratings</option>
            {[1, 2, 3, 4, 5].map((r) => (
              <option key={r} value={r}>
                {r} star{r > 1 ? "s" : ""}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={resetFilters}
          className="bg-red-500 z-10 text-white px-3 py-2 rounded-lg hover:bg-red-600 hover:scale-110 transition-all"
        >
          Reset Filters
        </button>
      </aside>

      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6 text-orange-500">Recommended Categories</h1>
        <div className="flex flex-wrap gap-3 mb-8">
          <button
            className={`px-5 py-2 border rounded-full text-sm font-semibold ${
              selectedCategory === "" ? "bg-gray-300" : "bg-white"
            }`}
            onClick={() => setSelectedCategory("")}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.idCategory}
              className={`px-5 py-2 border rounded-full text-sm font-semibold ${
                selectedCategory === cat.strCategory ? "bg-gray-300" : "bg-white"
              }`}
              onClick={() => setSelectedCategory(cat.strCategory)}
            >
              {cat.strCategory}
            </button>
          ))}
        </div>

        {filteredMeals.length === 0 ? (
          <p className="text-center text-gray-500">No meals found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredMeals.map((meal) => (
              <MealCard
                key={meal.idMeal}
                meal={meal}
                wishlist={wishlist}
                toggleWishlist={toggleWishlist}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Recommended;