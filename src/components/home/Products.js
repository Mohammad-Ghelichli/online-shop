import React from "react";
import { Link } from "react-router-dom";
import styles from "./Products.module.css";
function Products() {
  return (
    <div className={styles.container}>
      <ul className={styles.ul}>
        <Link to="/Men">
          <li>men</li>
        </Link>
        <Link to="/Women">
          <li>women</li>
        </Link>
        <Link to="/Store">
          <li>jewelery</li>
        </Link>
        <Link to="/Electronic">
          <li>electronic</li>
        </Link>
        <Link to="/off">
          <li className={styles.off}>%OFF</li>
        </Link>
      </ul>
    </div>
  );
}

export default Products;
