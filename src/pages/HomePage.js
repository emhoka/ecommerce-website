import React, {useState, useEffect} from "react";
import ProductCard from "../components/Card/ProductCard";
import Banner from "../components/Banner";
import Filter from "../components/Filter";
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
      <>
      <Banner />
      {/* <Filter /> */}
<ProductCard products={products} />
</>
    )
}
export default HomePage;