import React, { useContext} from "react";
import Product from "../cart/shared/Product";
import styles from "./Off.module.css"
import { ProductsContext } from "../cart/context/ProductsContextProvider";
function Off() {
  const products = useContext(ProductsContext);
  return (
    <div className={styles.container}>
      {products.map((product) => (product.off) &&
        <Product key={product.id} productdata={product} />)}
      

      
    </div>
  );
}

export default Off;
