import React, {useState, useEffect} from "react";
import ProductCard from "../components/Card/ProductCard";
const HomePage =()=>{
const [products, setProducts] = useState([]);
useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data)=>{
        setProducts(data)
    })
    .catch((err)=>{
      console.log(err);
    })

  },[])
    return(
       <ProductCard products={products} />
    )
}
export default HomePage;