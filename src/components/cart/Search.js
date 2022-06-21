import React, { useState } from "react";
import { Link } from "react-router-dom";
import { data } from "./shared/data";
import styles from "./Search.module.css";
function Search() {
  const [search, setSearch] = useState("");
  const searchHandler = (event) => {
    setSearch(event.target.value);
  };
  return (
    <div className={styles.search}>
      <h1> what you want?</h1>
      <input
        type="search"
        value={search}
        name="search"
        placeholder="search"
        onChange={searchHandler}
      />
      <div className={styles.product}>
        {data.map(
          (product) =>
            product.title.toUpperCase().match(search.toUpperCase()) &&
            search.length > 1 && (
              <Link to={`/Detailes/${product.id}`}>
                <p>
                  <img src={product.image} alt="k" />
                  <span> {product.title}</span>
                </p>
              </Link>
            )
        )}
      </div>
    </div>
  );
}

export default Search;
