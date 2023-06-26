import React from "react";
import Electronics from "./Electronics";
import Food from "./Food";
import Skincare from "./Skincare";

const ProductList = (props) => {
    const electronics = props.products.filter((product) => product.category === 'Electronics');
    const food = props.products.filter((product) => product.category === 'Food');
    const skincare = props.products.filter((product) => product.category === 'Skincare');
     
    return (
        <div>
            {electronics.length > 0 && (
                <Electronics products={electronics}/>
            )}
            {food.length > 0 && (
                <Food products={food}/>
            )}
            {skincare.length > 0 && (
                <Skincare products={skincare}/>
            )}
            {props.products.length === 0 && <h3>No Orders Placed Yet</h3>}
        </div>
    )
}

export default ProductList;