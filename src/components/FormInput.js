import React, { useState } from "react";

const FormInput = (props) => {
  //const [enteredID, setEnteredID] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredCategory, setEnteredCategory] = useState("");

  // const idChnageHandler = (event) => {
  //   setEnteredID(event.target.value);
  // };

  const priceChangeHandler = (event) => {
    setEnteredPrice(event.target.value);
  };

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const categoryChangeHandler = (event) => {
    setEnteredCategory(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const productData = {
      id: Math.random(),
      price: enteredPrice,
      name: enteredName,
      category: enteredCategory,
    };
    props.onSubmit(productData);
    localStorage.setItem("data", JSON.stringify(productData));

    //setEnteredID("");
    setEnteredPrice("");
    setEnteredName("");
    setEnteredCategory("");
  };
  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        {/* <label htmlFor="product-id">Product ID: </label>
        <input type="number" value={enteredID} onChange={idChnageHandler} /> */}

        <span class="col-sm">
          <label>Selling Price: </label>
          <input
            type="number"
            value={enteredPrice}
            onChange={priceChangeHandler}
          />
        </span>
        <span class="col-sm">
          <label>Product Name: </label>
          <input type="text" value={enteredName} onChange={nameChangeHandler} />
        </span>
        <span class="col-sm">
          <label>Choose a Category: </label>
          <select value={enteredCategory} onChange={categoryChangeHandler}>
            <option value="">Select Your Category</option>
            <option value="Electronics">Electronics</option>
            <option value="Food">Food</option>
            <option value="Skincare">Skincare</option>
          </select>
        </span>

        <button class="btn btn-primary" type="submit">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default FormInput;
