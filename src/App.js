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
      ]
    });
  };
  return (
    <div>
      <h2>Welcome to our selling page</h2>
      <FormInput onSubmit={submitHandler} />
      <ProductList products={productList}/>
    </div>
  );
}

export default App;
