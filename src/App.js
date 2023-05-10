import React from "react";
import { Routes, Route } from "react-router-dom";

//components
import Home from "./pages/HomePage";
import ShoppingCart from "./pages/ShoppingCart";
import SingleProductView from "./components/Card/SingleProductView";

const App=()=>{
return(
<Routes>
<Route path="/" element ={<Home />} />
<Route path="/shoppingcart" element ={<ShoppingCart />} />
<Route path="product/:id" element={<SingleProductView />}/>
<Route path="*" element ={<div>Page Not Found</div>} />
</Routes>
)
} 
export default App;
