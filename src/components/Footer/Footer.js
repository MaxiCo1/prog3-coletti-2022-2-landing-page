import React from 'react'
import styles from "./footer.module.css";

import twitter from "../../assets/twitter-logo.png"
import instagram from "../../assets/instagram-logo.webp"
import whatsapp from "../../assets/whatsapp-logo.png"
import facebook from "../../assets/facebook-logo.webp"

const Footer = ({ year }) => {
    //const { year } = props
  return (
    <div className={styles["footer"]}>
      <ul>
        <li><img src={ twitter } alt="" /></li>  
        <li><img src={ instagram } alt="" /></li>  
        <li><img src={ whatsapp } alt="" /></li>  
        <li><img src={ facebook } alt="" /></li>  
      </ul> 
      <p>Copyright Year {year} Maximiliano Coletti </p>
    </div>
  )
}

export default Footer