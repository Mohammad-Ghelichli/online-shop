import React from "react";
import styles from "./Footer.module.css";
import logo from "../images/g.svg";
import linkedin from "../images/linkedin.svg"
import telegram from "../images/telegram.svg"
import whatsapps from "../images/whatsapp.svg"
import instagram from "../images/instagram.svg"
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={logo} alt="ghelichli" />
        <h3>©2021.All Rights Reserved</h3>
      </div>
      <div className={styles.contact}>
        <h1>CONTACTS</h1>
      <br/>

        <br/>
        <h2>Phone : +98 937 339 2343</h2>
        <h2>Email : mohammad.ut.ac@gmail.com</h2>
        <h2>Address : family st Firozkuh Tehran Iran</h2>
        <p>
        <Link to=""><img src={instagram} alt="insta"/></Link>
          <Link to=""><img src={telegram} alt="telegram"/></Link>
          <Link to=""><img src={whatsapps} alt="whatsapps"/></Link>
          <Link to=""><img src={linkedin} alt="linkedin"/></Link>

        </p>
      </div>
      <div className={styles.news}>

      <h1>RECENT NEWS</h1>
      <br/>
      <br/>

      <h3>About Us</h3>
      <h3>Get in Touch</h3>
      <h3> Services</h3>
      </div>
    </div>
  );
}

export default Footer;
