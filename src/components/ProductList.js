import React from "react";
import ProductItem from "./ProductItem";

const ProductList = (props) => {
  console.log(props.items)
  return (
    <ul>
      {props.items.map((product) => (
        <ProductItem
          id={product.id}
          price={product.price}
          name={product.name}
          category={product.category}
        />
      ))}
    </ul>
  );
};

export default ProductList;
