import React from "react";
import swiggy from "../assets/swiggy.png";
import zomato from "../assets/zomato.png";
import magicpin from "../assets/magicpin.png";
import chowman from "../assets/Chowman-Logo.png";

const Partners = () => {
  return (
    <div className="py-10 bg-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-red-500">Our Partners</h1>
        <p className="text-xl">
          Proudly partnering with those who share our passion for authentic
          flavors and meaningful connections.
        </p>
        <div
          style={{
            maskImage:
              "lineargradient(to right,  hsl(0, 0%, 0%, /0), hsl(0, 0%, 0%, 1)) 10% hsl(0, 0%, 0%, 1) 90% hsl(0, 0%, 0%, /0))",
            webkitMaskImage:
              "linear-gradient(to right, hsl(0, 0%, 0%, /0), hsl(0, 0%, 0%, 1)) 10% hsl(0, 0%, 0%, 1) 9% hsl(0, 0%, 0%, /0)",
          }}
          className="max-w-6xl mx-auto mt-1 py-2 flex gap-4 flex-nowrap overflow-hidden"
        >
          <div className="flex gap-4 loop-scroll">
            <div className="shadow-orange-200 shadow-md p-4 w-80 bg-white">
              <img src={swiggy} />
            </div>
            <div className="shadow-orange-200 shadow-md p-4 w-80 bg-white">
              <img src={zomato} />
            </div>
            <div className="shadow-orange-200 shadow-md p-4 w-80 bg-white">
              <img src={magicpin} />
            </div>
            <div className="shadow-orange-200 shadow-md p-4 w-80 bg-white">
              <img src={chowman} />
            </div>
          </div>
          <div className="flex gap-4 loop-scroll">
            <div className="shadow-orange-200 shadow-md p-4 w-80 bg-white">
              <img src={swiggy} />
            </div>
            <div className="shadow-orange-200 shadow-md p-4 w-80 bg-white">
              <img src={zomato} />
            </div>
            <div className="shadow-orange-200 shadow-md p-4 w-80 bg-white">
              <img src={magicpin} />
            </div>
            <div className="shadow-orange-200 shadow-md p-4 w-80 bg-white">
              <img src={chowman} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
