import React from "react";

const Food = (props) => {
  return (
    <div>
      <h2>Foods</h2>
      <ul>
        {props.products.map((product,index) => (
          <li key={product.id}>
            <strong>Product {index+1}:</strong> {product.name} - Price: {product.price} - Category: {product.category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Food;
