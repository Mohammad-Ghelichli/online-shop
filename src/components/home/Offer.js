import React from "react";
import banner from "../images/banner.jpg";
import styles from "./Offer.module.css";
import offer1 from "../images/offer1.svg";
import { data } from "../cart/shared/data";
import { shorten } from "../cart/services/shorten";
import { Link } from "react-router-dom";

function Offer() {
  return (
    <div className={styles.Container}>
        <div className={styles.right}>
            <img src={offer1} alt="offer"/>
        </div>
      <div className={styles.left}>
        {data.map((item) =>
          item.discount >20 &&
         <Link to={`/Detailes/${item.id}`}>
         
          <div className={styles.card}>
            <img width={300} height={150} src={item.image} alt="offer"/>
            <h2>{shorten(item.title) }</h2>
            <h3>$ {item.price} </h3><span> $ {item.price - item.price*item.discount/100}  </span>
          </div>
         </Link>
        )}
        
       
      </div>
    </div>
  );
}

export default Offer;
