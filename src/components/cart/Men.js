import React, { useContext} from "react";
import Product from "./shared/Product";
import styles from "./Store.module.css"
import { ProductsContext } from "../cart/context/ProductsContextProvider";
function Men() {
  const products = useContext(ProductsContext);
  return (
    <div className={styles.container}>
      {products.map((product) => (product.category ==="men's clothing") &&
        <Product key={product.id} productdata={product} />)}
      

      
    </div>
  );
}

export default Men;
