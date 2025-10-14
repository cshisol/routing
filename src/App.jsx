import { Routes, Route } from "react-router";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Product from "./components/Product/Product";

export default function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="product/:id" element={<Product />} />
    </Routes>
  );
}
