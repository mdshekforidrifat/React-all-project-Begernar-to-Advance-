import React, { useState } from "react";
import ProductList from "../component/ProductList";
import AllProduct from "../component/AllProduct";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Interface = () => {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);

  const filterProduct = AllProduct.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );
  const CartBtn = (productName) => {
    setCart((prevCart) => [...prevCart, productName]);
    toast.success(`${productName} Added To Card`,{
      position:"top-right",
      autoClose:1500
    })
  };

  return (
    <div className="bg-gray-100 min-h-screen px-20 py-10 text-black">
      <div className="w-full mb-10 flex justify-center">
        <h1 className="text-[25px] lg:text-3xl font-semibold text-center ">KCS Product Store</h1>
      </div>
      <div className="w-full flex items-center justify-center">
        <input
          className="w-150 px-2 py-1 lg:w-130 lg:px-5 lg:py-3 border-1 border-gray-500 rounded-md outline-offset-1 outline-sky-600 focus:outline-1 "
          type="text"
          placeholder="Search Product"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <ProductList products={filterProduct} onAddCartBtn={CartBtn} />
      <div className="text-center p-6">
        <h2 className="text-xl lg:text-3xl font-semibold mb-3">Card Summary</h2>
        {cart.length > 0 ? (
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="text-lg">
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No product yet</p>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Interface;
