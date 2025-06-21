import { Link } from "react-router-dom"; // ✅ Import Link
import chili from "../assets/chili-pepper.png";

const Navbar = () => {
  return (
    <header className="sticky mx-auto z-50 top-0 bg-orange-100 border-2 border-orange-200 transition-all py-5">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center px-10">
          <div className="font-semibold flex gap-1 items-center">
            <img src={chili} alt="" className="w-10" />
            <h1 className="text-red-500 text-xl font-bold">
              Flavorly<span className="text-gray-800 font-semibold">India</span>
            </h1>
          </div>
          <div className="flex items-center gap-x-6">
            <ul className="flex items-center cursor-pointer gap-8 text-black font-semibold">
              <li className="hover:text-red-500 transition-all">
                <a href="#home">Home</a>
              </li>
              <li className="hover:text-red-500 transition-all">
                <Link to="/menu">Menu</Link> {/* ✅ Route to Meal.jsx */}
              </li>
              <li className="hover:text-red-500 transition-all">
                <a href="#footer">About</a>
              </li>
              <li className="hover:text-red-500 transition-all">
                <a href="#contact">Contact</a>
              </li>
              <button className="bg-red-500 px-4 py-2 text-white rounded-lg">
                Order Now
              </button>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
