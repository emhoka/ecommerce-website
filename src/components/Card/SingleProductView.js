import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
const SingleProductView =()=>{
    const [singleProduct, setSingleProduct] = useState({});
    const params = useParams();
    const navigate = useNavigate();
    useEffect(() => {
      fetch("https://fakestoreapi.com/products/" + params.id)
        .then((response) => response.json())
        .then((data) => {
          setSingleProduct(data);
          console.log(params.id);
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, [params.id]);
  
    return (
      <>
        <div>
          <div className="container px-5 py-24 mx-auto animate__animated animate__zoomIn">
            <div className="lg:w-4/5 mx-auto flex flex-wrap ">
              <img
                alt="ecommerce"
                className="lg:w-1/2 w-full h-200 object-scale-down border-x-2 border-gray-100 "
                src={singleProduct.image}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  {singleProduct.category}
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {singleProduct.title}
                </h1>
                <div className="flex mb-4">
                  <span className="flex items-center">
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-orange-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <span>{singleProduct.rating?.rate}</span>
                    <span className="text-gray-600 ml-3">
                      {singleProduct.rating?.count} Reviews
                    </span>
                  </span>
                </div>
                <p className="leading-relaxed">{singleProduct.description}</p>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                  <div className="flex items-center">
                    <span className="mr-3 font-semibold">Quantity</span>
                    <div className="relative">
                      <div class="relative mb-3 bg-gray-100" data-te-input-wrapper-init>
                        <input
                          type="number"
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent  px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="exampleFormControlInputNumber"
                          placeholder="Example label"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <span className="title-font font-medium text-2xl text-gray-900">
                   $ {singleProduct.price}
                  </span>
                  <button className="flex ml-auto text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded">
                  <FontAwesomeIcon icon={faCartPlus} className="mt-1"/> <span className="ml-2">Add To cart</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
export default SingleProductView;