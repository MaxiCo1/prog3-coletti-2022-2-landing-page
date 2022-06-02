import React, { useState } from "react";
import Card from "../Card/Card";
import styles from "./modelos.module.css";

import legion5Gen6 from "../../assets/lenovo-legion-5.webp";
import legion5iGen6 from "../../assets/lenovo-legion-5igen6.webp";
import legion5iGen7 from "../../assets/lenovo-legion-5igen7.webp";
import legion5iPro from "../../assets/lenovo-legion-5ipro.webp";

const Modelos = () => {
  const [highlight, setHighlight] = useState();

  const handleHighlight = (id) => {
    console.log("get high", id);
    setHighlight(id);
  };

  const data = [
    {
      id: 1,
      modelo: "Lenovo Legion 5 Gen 6",
      primero: "Portátil con AMD listo para cualquier batalla",
      segundo:
        "Pantalla WQHD de 39,62 cm (15,6¨) con frecuencia de actualización de hasta 165 Hz",
      tercero: "El sonido Nahimic 3D brinda una precisión milimétrica",
      imagen: legion5Gen6,
    },

    {
      id: 2,
      modelo: "Lenovo Legion 5i Gen 6",
      primero:
        "Procesadores Intel® Core de 11.ª generación y GPU NVIDIA® GeForce RTX™ para portátiles",
      segundo:
        "Pantalla WQHD de hasta 39,62 cm (15,6¨) con frecuencia alta de actualización",
      tercero: "Audio 3D de Nahimic con sonido inmersivo",
      imagen: legion5iGen6,
    },

    {
      id: 3,
      modelo: "Lenovo Legion 5i Gen 7",
      primero: "Máximo rendimiento de gráficos con NVIDIA® GeForce",
      segundo:
        "Pantalla WQHD nítida de hasta 39,62 cm (15,6″) con frecuencia alta de actualización",
      tercero: "Un sistema de enfriamiento mejorado y épico",
      imagen: legion5iGen7,
    },

    {
      id: 4,
      modelo: "Lenovo Legion 5i Pro Gen 7",
      primero: "Procesadores Intel® Core de hasta 12.ª generación",
      segundo: "GPU para portátiles NVIDIA® GeForce RTX™",
      tercero: "Una pantalla WQHD+ espectacular de hasta 39,62 cm (15,6¨)",
      imagen: legion5iPro,
    },
  ];
  return (
    <section className={styles["contenedor"]}>
      <h2>Modelos</h2>
      <div className={styles["modelos"]}>
        {data.map(({ id, modelo, primero, segundo, tercero, imagen }) => (
          <Card
            key={id}
            id={id}
            title={modelo}
            primero={primero}
            segundo={segundo}
            tercero={tercero}
            imagen={imagen}
            handleHighlight={handleHighlight}
            highlight={highlight}
          />
        ))}
      </div>
    </section>
  );
};

export default Modelos;
