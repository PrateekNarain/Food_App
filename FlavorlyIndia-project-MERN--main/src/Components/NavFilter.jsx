import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { useEffect, useState } from "react";
import chili from "../assets/chili-pepper.png";

const NavFilter = ({ setMeals }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query.trim() !== "") {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
          .then((res) => res.json())
          .then((data) => {
            setMeals(data.meals || []);
          });
      }
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [query, setMeals]);

  return (
    <nav className="flex items-center gap-4 px-6 py-4 bg-orange-100 shadow-md border-b-2 border-[#f3f3f3] fixed top-0 w-full z-50">
      {/* Left: Logo + Title */}
      <div className="font-semibold flex gap-1 items-center pl-25 pr-10">
        <img src={chili} alt="" className="w-10" />
        <a href="/"><h1 className="text-red-500 text-xl font-bold">
          Flavorly<span className="text-gray-800 font-semibold">India</span>
        </h1></a>
      </div>

      {/* Center: Search */}
      <div className="flex-1">
        <input
          className="pt-3 pb-3 pl-5 pr-5 outline-none rounded-lg w-full max-w-md bg-[#f7f6f6]"
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          placeholder="Search your meal..."
        />
      </div>

      {/* Right: Icons */}
      <div className="flex">
        <a href="#">
          <FiHeart className="w-6 h-6 ml-4 hover:text-orange-500" />
        </a>
        <a href="#">
          <AiOutlineShoppingCart className="w-6 h-6 ml-4 hover:text-orange-500" />
        </a>
        <a href="#">
          <AiOutlineUserAdd className="w-6 h-6 ml-4 hover:text-orange-500" />
        </a>
      </div>
    </nav>
  );
};

export default NavFilter;