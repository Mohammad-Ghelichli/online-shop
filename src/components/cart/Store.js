import React, { useContext} from "react";
import Product from "./shared/Product";
import styles from "./Store.module.css"
import { ProductsContext } from "../cart/context/ProductsContextProvider";
function Store() {
  const products = useContext(ProductsContext);
  return (
    <div className={styles.container}>
      {products.map((product) => (product.category ==="jewelery") &&
        <Product key={product.id} productdata={product} />)}
      

      
    </div>
  );
}

export default Store;
