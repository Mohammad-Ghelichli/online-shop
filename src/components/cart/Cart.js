import React, { useContext, useState } from "react";
import { cartContext } from "../cart/context/CartContextProvider";
import CartItems from "../cart/CartItems";
import styles from "./Cart.module.css";
function Cart() {
  const [discount, setDiscount] = useState("100");
  const { state, dispatch } = useContext(cartContext);
  const discountHandler = (event) => {
    if (event.target.value === "mamad") {
      setDiscount(20);
    } else if (event.target.value === "zahra") {
      setDiscount(50);
    } else {
      setDiscount(0);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.checkout}>
        <h1>Order Detailes</h1>

        <h3>Total Item : {state.itemCounter}</h3>
        <h3>Total Price : {state.total}</h3>
        <div className={styles.discount}>
          <h1>Discount</h1>

          <h3>
          <label>Code :{""} </label>
          <input type="text" onChange={discountHandler} />
          <br/>
          <br/>

            Total Price after discount : {""} 
            {state.total -
              ((state.total * parseInt(discount)) / 100).toFixed(2)} $
          </h3>
        </div>
        <div>
          <button> Check Out</button>
        </div>
      </div>
      <div className={styles.itemcontainer}>
        <div className={styles.header}>
          <span>Item</span>
          <span>Price</span>
          <span>Count</span>
          <span>Total Price</span>
        </div>
        <div>
          {state.selectedItem.map((item) => (
            <CartItems key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cart;
