import React, { useState } from "react";
import styles from "./App.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Content from "../Content/Content";
import Features from "../Features/Features";
import Modelos from "../Modelos/Modelos";
import PopUp from "../PopUp/PopUp";

const App = () => {

  const [showPopUp, setShowPopUp] = useState(false);

  const handleShowPopUp = (show) => setShowPopUp(show);
  
  return (
    <div className={styles["app_wrapper"]}>
      <Header />
      <Content handleShowPopUp={handleShowPopUp} />
      <Features />
      <Modelos/>
      <Footer year={2022} />
      <PopUp display={showPopUp} handleShowPopUp={handleShowPopUp}/>
    </div>
  );
};

export default App;
