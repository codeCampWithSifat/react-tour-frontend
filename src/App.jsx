import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Blogs from "./Pages/Blogs";
import Home from "./Pages/Home";
import Layout from "./Pages/Layout";
import PlacesRoute from "./Pages/PlacesRoute";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 900,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/places" element={<PlacesRoute />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
