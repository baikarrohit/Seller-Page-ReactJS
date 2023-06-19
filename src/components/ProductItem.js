import React from "react";

const ProductItem = (props) => {
  return (
    <li>
      <div>
        <div>{props.id}</div>
        <div>{props.price}</div>
        <div>{props.name}</div>
        <div>{props.category}</div>
      </div>
    </li>
  );
};

export default ProductItem;
