import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
// eslint-disable-next-line
import "swiper/css/bundle";
import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import About from "./pages/About";
import ProductView from "./pages/ProductView";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductView />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
