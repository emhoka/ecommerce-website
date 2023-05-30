import React, {useState} from "react";
import AddTocartPopup from "../AddToCartPopup";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
const ProductCard =(props)=>{
  const [cartPopUpMsg, setCartPopUpMsg] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [cartArray, setCartArray] = useState(JSON.parse(localStorage.getItem("cartArray")) || "[]");
  const [productCartDetails, setProductCartDetails] = useState([]);
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  const modalShowView = (id) => {
    let quantity = 1;
    let productsArray = { productId: id, quantity: quantity };
    console.log("The array", productsArray);
    productCartDetails.push(productsArray);
    const unique = [];
    for (const item of productCartDetails) {
      const isDuplicate = unique.find((obj) => obj.productId === item.productId);
      if (!isDuplicate) {
        unique.push(item);
        setCartPopUpMsg("Product successfully added to your Shopping Cart");
      }else{
        setCartPopUpMsg("Product has already been added to your Cart");
      }
    }
    console.log("New Array", unique);
    let cartArray = [];
    let cartArrayTemp = {
      id: 1,
      userId: 1,
      date: new Date().toISOString(),
      products: unique,
    };
    cartArray.push(cartArrayTemp);
    console.log("cartArray", cartArray);
    localStorage.setItem("cartArray", JSON.stringify(cartArray));
    setShowModal(true);
  };
  function buyNow(id) {
    navigate("/product/" + id);
  }
    return(
    <div className="bg-white mx-auto container px-2 sm:px-6 lg:px-8">
      {showModal ? (
        <AddTocartPopup
          setShowModal={setShowModal}
          cartPopUpMsg={cartPopUpMsg}
          cartArray= {cartArray}
        />
      ) : null}
      <div className="md:grid md:grid-cols-1 xl:grid-cols-2 gap-4 ">
        {props.products && props.products.length > 0 ? (
          props.products.map((product, index) => {
            return (
              <div class="flex rounded-lg border border-gray-100 shadow-sm hover:shadow-lg animate__animated animate__zoomIn ">
                <div class="flex-none w-56 relative">
                  <img
                    src={product.image}
                    alt=""
                    class="relative inset-0 h-100 object-scale-down w-96 rounded-lg p-4"
                    loading="lazy"
                  />
                </div>
                <form class="flex-auto p-6 overflow-hidden">
                  <div class="flex flex-wrap">
                    <h1 class="flex-auto font-medium text-slate-900 truncate w-40">
                      {product.title}
                    </h1>
                    <div class="w-full flex-none mt-2 order-1 text-3xl font-bold text-gray-700 ">
                      ${product.price}
                    </div>
                  </div>
                  <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-gray-100 w-full">
                    <div class="space-x-2 flex text-sm py-2">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-[#ff9800]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>First star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <span className="text-md font-semibold ml-1 py-0.5 -mt-1">
                        {product.rating.rate} {index + 1}
                      </span>
                      <span className="text-md mr-2 px-2.5 py-0.5 text-slate-400">
                        ({product.rating.count} Reviews)
                      </span>
                    </div>
                  </div>
                  <div class="flex space-x-4 mb-5 text-sm font-medium">
                    <div class="flex-auto flex space-x-4">
                      <button
                        class="h-10 px-6 font-semibold rounded-full bg-gray-700 text-white hover:bg-[#ff9800] hover:text-gray-700"
                        type="submit"
                        onClick={() => buyNow(product.id)}
                      >
                        Buy now
                      </button>
                      <button
                        class="mt-1 flex-none flex items-center justify-center w-9 h-9 rounded-full text-white hover:text-gray-700 hover:bg-[#ff9800] bg-gray-200"
                        type="button"
                        //  onClick={()=> [setCount(count + 1), addToCart(product)]}
                        onClick={() => [
                          setCount(count + 1),
                          modalShowView(product.id),
                        ]}
                      >
                        <FontAwesomeIcon icon={faCartPlus} className="py-3" />
                      </button>
                    </div>
                    <button
                      class="mt-1 flex-none flex items-center justify-center w-9 h-9 rounded-full text-[#ff9800] hover:text-gray-700 bg-orange-50"
                      type="button"
                      aria-label="Like"
                    >
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        />
                      </svg>
                    </button>
                  </div>
                  <p class="text-sm text-slate-500 truncate">
                    {product.description}
                  </p>
                </form>
              </div>
            );
          })
        ) :""}
      </div>
    </div>
    );
}
export default ProductCard;