import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Blogs from "./Pages/Blogs";
import Home from "./Pages/Home";
import Layout from "./Pages/Layout";
import PlacesRoute from "./Pages/PlacesRoute";

const App = () => {
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
