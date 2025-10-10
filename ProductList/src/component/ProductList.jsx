import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products, onAddCartBtn }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {products.length >0?(
        products.map((product,index)=>(
          <ProductCard
          key={index}
          name={product.name}
          price={product.price}
          image={product.image}
          onAddCartBtn={onAddCartBtn}
          />
        ))
      ):(
        <p className="mt-15 text-2xl text-gray-500 font-stretch-50%">product none</p>
      )
      }
    </div>
  );
};

export default ProductList;
