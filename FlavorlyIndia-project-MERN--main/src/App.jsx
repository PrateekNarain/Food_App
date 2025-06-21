import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lenis from "lenis"; // keep your version, unscoped

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import PopularDishes from "./Components/PopularDishes";
import Partners from "./Components/Partners";
import Keyfeatures from "./Components/Keyfeatures";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Meal from "./Components/Meal";

function App() {
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

  return (
    <>
      <Router>
        <Navbar /> {/* Always shown */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <PopularDishes />
                <Partners />
                <Keyfeatures />
                <Testimonials />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="/menu" element={<Meal />} />
        </Routes>
      </Router>

      {/* <Meal /> */}
    </>
  );
}

export default App;
