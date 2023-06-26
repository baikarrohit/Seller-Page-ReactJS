import { useState } from "react";
import FormInput from "./components/FormInput";
import ProductList from "./components/ProductsCategory/ProductList";

function App() {
  const [productList, setProductList] = useState([]);
  const submitHandler = (productData) => {
    setProductList((prevProductList) => {
      return [
        ...prevProductList,
        {
          id: productData.id,
          price: productData.price,
          name: productData.name,
          category: productData.category,
        },
      ];
    });
  };
  return (
    <div>
      <header style={{ background:'green' ,textAlign: "center"}}>
        <h2>Welcome To Our Selling Page</h2>
      </header>

      <FormInput onSubmit={submitHandler} />
      <ProductList products={productList} />
    </div>
  );
}

export default App;
