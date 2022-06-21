import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../context/CartContextProvider";
import { shorten } from "../services/shorten";
import { isInCart, quantityCount } from "../services/shorten";
import styles from "./Product.module.css";
import delet from "../../images/delete.svg";
import plus from "../../images/plus.svg";
import minus from "../../images/minus.svg";
import add from "../../images/add.svg"
import discount from "../../images/discount.svg"

function Product({ productdata }) {
  const { state, dispatch } = useContext(cartContext);
  return (
    <div className={styles.container}>
      {(productdata.off===true) && <div className={styles.discount}><img src={discount} alt="discount"/>
      <span>{productdata.discount}% </span></div>}

      <Link  to={`/Detailes/${productdata.id}`}>
        <img  className={styles.image} src={productdata.image} alt="" />
        <h2>{shorten(productdata.title)}</h2>
        <br />
      </Link>

      <h3>Price : $ {productdata.price} </h3>
      <div className={styles.buttonContainer}>
        {quantityCount(state, productdata.id) > 1 && (
          <>
            <img
              src={minus}
              alt="minus"
              onClick={() => {
                dispatch({ type: "DECREASE", payload: productdata });
              }}
            />

            <span>{quantityCount(state, productdata.id)}</span>
          </>
        )}
        {quantityCount(state, productdata.id) === 1 && (
          <img
            src={delet}
            alt="delet"
            onClick={() => {
              dispatch({ type: "REMOVE", payload: productdata });
            }}
          />
        )}
        {isInCart(state, productdata.id) ? (
          <img
            src={plus}
            alt="plus"
            onClick={() => dispatch({ type: "INCREASE", payload: productdata })}
          />
        ) : (
          <button
            onClick={() =>
              dispatch({ type: "ADD_TO_CART", payload: productdata })
            }
          >
            <img className={styles.add} src={add} alt="add"/>
            Add TO Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default Product;
