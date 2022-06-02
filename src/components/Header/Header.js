//rafce para creacion rapida
import styles from "./header.module.css";
import React from 'react'
import logo from "../../assets/logo.jpg"

const Header = () => {
  return (
    <nav className={styles["nav"]}>
      <img src= { logo } alt="" />
      <ul>
        <li>Home</li>
        <li>Productos</li>
        <li>Ofertas</li>
        <li>Ayuda</li>
        <li>Contactos</li>
      </ul>
    </nav>
  )
}

export default Header