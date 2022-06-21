import React from "react";
import { Link, useParams } from "react-router-dom";
import { data } from "../shared/data";
import styles from "./Detailes.module.css";
const Detailes = () => {
  const params = useParams();
  const id = params.id;
  const product = data[id - 1];
  const { image, title, price, category, description,discount,off } = product;

  return (
    <div  className={styles.container}>
      <div>
        <img src={image} width="200px" alt="" />
        <div>
        <button>
          <Link to="/">back to shop</Link>
        </button>
      </div>
      </div>

      <div className={styles.title}>
        <div>
        <h2>Category :</h2>
          <h2>{category}</h2><br/>
          <h2>Title :</h2>
        <h2>{title}</h2><br/>
        <h2>Price :</h2>
        <h2>{price} $</h2>
        <br/>
        {off &&
        <span>Discount :  {discount} %</span>
        }
        </div>
        <p>

        <h2>more information :</h2>
        <br/>
        <h3>{description}</h3>
        
        </p>
      </div>
    </div>
  );
};

export default Detailes;
