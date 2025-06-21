import React, { useState } from "react";
import NavFilter from "./NavFilter";
import Recommended from "./Recommended";
import Lenis from "lenis";
import { useEffect } from "react";

const Meal = () => {

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1,
      direction: "vertical",
      markers: false,
    });

    // Sync lenis with rAF
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const [meals, setMeals] = useState([]);

  return (
    <>
      <NavFilter setMeals={setMeals} />
      <div className="pt-24"> {/* Padding to offset fixed navbar */}
        <Recommended searchedMeals={meals} />
      </div>
    </>
  );
};

export default Meal;
