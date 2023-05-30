import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import HomePage from "./pages/HomePage";
import ShoppingCart from "./pages/ShoppingCart";
import SingleProductView from "./components/Card/SingleProductView";
import MainLayout from "./components/Layout/MainLayout";
import Categories from "./pages/Categories";
import Shop from "./pages/Shop";

const App = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
          <Route path="/product/:id" element={<SingleProductView />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};
export default App;
