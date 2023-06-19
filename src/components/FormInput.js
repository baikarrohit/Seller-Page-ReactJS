import React, { useState } from "react";

const FormInput = (props) => {
  const [enteredID, setEnteredID] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredCategory, setEnteredCategory] = useState("");

  const idChnageHandler = (event) => {
    setEnteredID(event.target.value);
  };

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
      id: enteredID,
      price: enteredPrice,
      name: enteredName,
      category: enteredCategory,
    };

    localStorage.setItem("data", JSON.stringify(productData));

    setEnteredID("");
    setEnteredPrice("");
    setEnteredName("");
    setEnteredCategory("");
  };
  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <label htmlFor="product-id">Product ID: </label>
        <input type="number" value={enteredID} onChange={idChnageHandler} />
        <label htmlFor="selling-price">Selling Price: </label>
        <input
          type="number"
          value={enteredPrice}
          onChange={priceChangeHandler}
        />
        <label htmlFor="product-name">Product Name: </label>
        <input type="text" value={enteredName} onChange={nameChangeHandler} />
        <label htmlFor="categeory">Choose a Category: </label>
        <select
          name="category"
          value={enteredCategory}
          onChange={categoryChangeHandler}
        >
          <option>Electronics</option>
          <option>Food</option>
          <option>Skincare</option>
        </select>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default FormInput;
