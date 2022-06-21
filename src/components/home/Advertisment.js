import React from "react";
import adver1 from "../images/adver1.jpg"
import adver2 from "../images/adver2.jpg"

import styles from "./Advertisment.module.css"
function Advertisment() {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img src={adver1}  alt="dd" />
      </div>
      <div className={styles.img}>
        <img src={adver2}  alt="dd" />
      </div>
    </div>
  );
}

export default Advertisment;
