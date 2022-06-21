import React, { useContext } from "react";
import { cartContext } from "../cart/context/CartContextProvider";
import styles from "./CartItems.module.css";
import { shorten } from "../cart/services/shorten";
import plus from "../images/plus.svg";
import delet from "../images/delete.svg";
import minus from "../images/minus.svg";

function CartItems(props) {
  const { state, dispatch } = useContext(cartContext);
  const { image, title, price, quantity } = props.data;
  return (
    <div className={styles.container}>
      <div>
        <img src={image} className={styles.TtemImg} alt="item" />
        <h3>{shorten(title)}</h3>
      </div>
      <div>
        <h3>{price} $</h3>
      </div>
      <div className={styles.button}>
        <div>
          <img
            src={plus}
            width={30}
            height={30}
            alt="a"
            onClick={() => dispatch({ type: "INCREASE", payload: props.data })}
          />
        </div>
        <div>
        <h3>{quantity}</h3>
        </div>

        {quantity > 1 ? (
          <div>
            <img
              src={minus}
              alt="minus"
              width={30}
              height={30}
              onClick={() =>
                dispatch({ type: "DECREASE", payload: props.data })
              }
            />
          </div>
        ) : (
          <div>
            <img
              src={delet}
              width={30}
              height={30}
              alt="delete"
              onClick={() => dispatch({ type: "REMOVE", payload: props.data })}
            />
          </div>
        )}
      </div>
      <h3>{(quantity * price).toFixed(2)} $</h3>
    </div>
  );
}

export default CartItems;
