import React from "react";
import styles from "./PopUp.module.css";
import Formulario from "../Form/Form"

const PopUp = ({ display, handleShowPopUp }) => {
  return (
    <div
      className={`${styles["pop-up-wrapper"]} ${
        display ? styles["display"] : ""
      }`}
    >
      <Formulario handleShowPopUp={handleShowPopUp}/>
    </div>
  );
};
/*<button onClick={()=> handleShowPopUp(false)}>Cerrar</button>*/
export default PopUp;
