import React from 'react'
import styles from "./card.module.css"
/*
const handleCompraYa =()=>{
    window.location.href = "https://www.lenovo.com/es/es/legion";
}*/


const Card = ({id,title, primero, segundo, tercero, imagen, handleHighlight, highlight}) => {
  return (    
        <article className={`${styles["card"]} ${highlight === id ? styles["highlight"] : ""}`}>
            <img src={imagen} alt=''/>
            <h2>{title}</h2>
            <ul>
                <li>{primero}</li>
                <li>{segundo}</li>
                <li>{tercero}</li>
            </ul>
            <button onClick={() => handleHighlight(id)} className="button">Comprar ahora</button>
        </article>
  )
}

export default Card