import React from "react";
import Slideshow from "./SlideShow";
import styles from "./HomePage.module.css";
import ProductGroup from "./ProductGroup";
import Offer from "./Offer";
import Advertisment from "./Advertisment";
import Footer from "./Footer";
import Search from "../cart/Search";

function HomePage() {
  return (
    <div className={styles.container}>
      <Slideshow />
      <ProductGroup />
      <Offer />
      <div className={styles.search}>
        <Search />
      </div>
      <Advertisment />
    </div>
  );
}

export default HomePage;
