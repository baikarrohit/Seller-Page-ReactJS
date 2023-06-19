import FormInput from "./components/FormInput";
import ProductList from "./components/ProductList";

function App(props) {
  return (
    <div>
      <h2>Welcome to our selling page</h2>
      <FormInput/>
      <ProductList id={props.id} price={props.price} name={props.name} category={props.category}/>
    </div>
  );
}

export default App;
