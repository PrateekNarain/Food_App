import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import pizza from "../assets/pizza.webp";
import playstore from "../assets/playstore.png";
import appstore from "../assets/appstore.png";
import time from "../assets/time.png";
import star from "../assets/star.png";
import staroutline from "../assets/star-outline.png";
import tomatocut from "../assets/tomatocut.png";
import cabbage from "../assets/cabbage.png";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".textDiv",
        start: "0% 20%",
        end: "50% 10%",
        markers: true,
        scrub: true,
      },
    });

    tl.to(".text-area-hover", {
      width: "100%",
    });
  }, []);

  return (
    <div className=" bg-orange-50 h-[600px]" id="home">
      <div className="flex items-center justify-center p-5 max-w-7xl mx-auto relative">
        <div className=" w-1/2 space-y-6 px-10 relative">
          <div className="flex gap-2">
            <img src={playstore} alt="playstore" className="w-28 h-10" />
            <img src={appstore} alt="appstore" className="w-28 h-10" />
          </div>

          <div className="textDiv">
            <h1 className="font-bold text-6xl tracking-normal absolute text-area">
              {" "}
              <span className="text-red-500">Delicious</span> <span className="opacity-40">Meals Delivered to
              Your Doorsteps</span>
            </h1>

            <h1 className="font-bold text-6xl tracking-normal opacity-100 absolute  w-[0%] whitespace-nowrap text-area-hover overflow-hidden">
              {" "}
              <span className="text-orange-500">Delicious</span> Meals <br/> Delivered  to
              Your <br/> Doorsteps
            </h1>
          </div>

          <p className="text-sm text-gray-600 my-3 mt-55">
            Discover a world of culinary delights with our food delivery
            service. Enjoy fast, reliable delivery and a wide selection of
            mouthwatering dishes.
          </p>

          <div className="flex gap-3">
            <button className="bg-red-500 z-10 text-white px-3 py-2 rounded-lg hover:bg-red-600 hover:scale-110 transition-all">
              Order Now
            </button>
            <button className="bg-white text-red-500 px-3 py-2 border border-red-500 rounded-lg hover:bg-white hover:scale-110 transition-all" 
            >
              <a href='#contact'>Contact Now</a>
            </button>
          </div>
        </div>

        <div className="w-1/2 relative">
          <img src={pizza} alt="pizza" className="mx-auto spin" />

          <div className="bg-red-50 gap-1 text-lg flex border-red-200 border  items-center rounded-full px-4 py-2 absolute bottom-16 right-14">
            <img src={time} alt="time" className="w-12 h-12" />
            <p className="leading-4 text-sm font-semibold">
              {" "}
              Super Fast <br />
              Delivery
            </p>
          </div>

          <div
            variant="outline"
            className="bg-red-50 leading-none flex flex-col gap-1 text-lg px-4 py-2 border border-red-200 absolute top-10 right-36 rounded-full items-center"
          >
            <p className="leading-4 text-sm font-semibold">Good Rating</p>
            <div className="flex">
              <img src={star} alt="star" width={15} height={15} />
              <img src={star} alt="star" width={15} height={15} />
              <img src={star} alt="star" width={15} height={15} />
              <img src={star} alt="star" width={15} height={15} />
              <img src={staroutline} alt="star" width={15} height={15} />
            </div>
          </div>

          <div className="flex flex-col bg-red-50 border-red-200 border px-6 py-2 absolute top-16 left-24 rounded-full">
            <h1 className="text-red-500 text-2xl font-bold text-center">
              100+
            </h1>
            <p className="text-sm font-semibold">Restaurants</p>
          </div>

          <img
            src={tomatocut}
            alt="tomato-cut"
            className="absolute w-32 bottom-20 left-4"
          />
        </div>
      </div>
      <img
        src={cabbage}
        alt=""
        className="absolute top-[480px] left-10 w-44 z-1"
      />
    </div>
  );
};

export default Hero;
