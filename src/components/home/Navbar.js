import React, { useContext, useEffect, useState } from "react";
import { Link ,useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import { cartContext } from "../cart/context/CartContextProvider";

//icons
import account from "../images/account.svg";
import login from "../images/login.svg";
import logo from "../images/g.svg";
import cart from "../images/cart.svg";
import menu from "../images/menu.svg";
import { data } from "../cart/shared/data";
import Products from "./Products";
function Navbar() {
  const { state, dispatch } = useContext(cartContext);
  const [search, setSearch] = useState("");
  const [click, setClick] = useState(false);
  const searchHandler = (event) => {
    setSearch(event.target.value);
  };
  const history =useNavigate()
  useEffect(()=>{
    setClick(false);
  },[history])
  const clickHandler = () => {
    setClick(!click);
  };
  return (
    <div className={styles.container}>
      <div>
        <ul className={styles.firstRow}>
          <li className={styles.logo}>
            <Link to="/">
              <img className={styles.logo} src={logo} alt="logo" />
            </Link>
          </li>
          <li>
            <input
              type="search"
              value={search}
              name="search"
              placeholder="search"
              onChange={searchHandler}
            />
            <div className={styles.searchItem}>
              {data.map(
                (product) =>
                  product.title.toUpperCase().match(search.toUpperCase()) &&
                  search.length > 1 && (
                    <Link to={`/Detailes/${product.id}`}>
                      <div>
                        <img src={product.image} alt="k" />
                        <span> {product.title}</span>
                      </div>
                    </Link>
                  )
              )}
            </div>
          </li>
          <li className={styles.login}>
            <Link to="/Login">Login | </Link>
            <Link to="/SignUp">SignUp</Link>{" "}
            <img src={login} width="25px" alt="cart" />
          </li>

          <li className={styles.cart}>
            <Link to="/Cart">
              <img src={cart} width="40px" alt="cart" />
            </Link>
            <span>{state.itemCounter}</span>
          </li>
        </ul>
      </div>
      <div className={styles.secondRow}>
        <ul className={styles.ul}>
          <li className={styles.product}>
            <img onClick={clickHandler} src={menu} width="25px" alt="menu" />
            <div>{click && <Products  />}</div>
          </li>
          <li className={styles.off}>
            <Link to="/off">% OFF</Link>{" "}
          </li>
          <li className={styles.about}>About Us</li>
        </ul>
      </div>
      <p className={styles.account}>
        <Link to="/Login">
          <img src={account} alt="account" />
        </Link>
      </p>
    </div>
  );
}

export default Navbar;
