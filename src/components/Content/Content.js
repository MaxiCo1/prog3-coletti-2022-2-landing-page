import React from 'react'
import styles from "./content.module.css";


const Content = ({handleShowPopUp}) => {
  return (
    <section className={styles["hero"]}>
      <div>
        <h2>
          Sumergite en la última tecnología Gamer
        </h2>
        <p>
          La serie Legion de Lenovo es una máquina de rendimiento sólido y diseño elegante que complementa a la perfección al jugador que llevas dentro.
        </p>
        <button className="button" onClick={()=> handleShowPopUp(true)}>
          Ver Mas
        </button>
      </div>
    </section>
  )
}

export default Content