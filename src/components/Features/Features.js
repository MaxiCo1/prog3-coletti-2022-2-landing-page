import React from "react";
import styles from "./features.module.css";
import Slide from "../Slide/Slide";
import imgUrl1 from "../../assets/fondo-pantalla.webp";
import imgUrl2 from "../../assets/fondo-bateria.jpg";
import imgUrl3 from "../../assets/fondo-refrigeracion.jpg";
import Slider from "react-slick";


const data = [
  {
    titulo: "El superpredador de las pantallas de portátiles para videojuegos",
    info: "Si quieres disfrutar de lo mejor en pantallas de portátiles para videojuegos, no busques más. Los fascinantes paneles WQXGA (2560 x 1600) de 40,64 cm (16¨) de la serie Legion 7 te ofrecen lo que estás buscando, con más espacio en pantalla vertical para jugar y aumentar tu productividad. Y para rematar, disfruta de un rendimiento inigualable con pantallas de frecuencia de actualización variable de hasta 240 Hz para velocidades de cuadro máximas sin fragmentación de la pantalla.",
    background: imgUrl1,
  },
  {
    titulo:
      "Una batería de portátil para videojuegos que vale la pena. Por fin.",
    info: "Seamos honestos, las baterías de los portátiles para videojuegos han dejado mucho que desear. Hasta ahora. Hemos hecho todo lo posible y hemos equipado los últimos dispositivos de la serie Legion 7 con baterías de 99,99 Wh. Rozando el límite legal, literalmente. Así nos aseguramos de que un dispositivo que está deseando acompañarte a todas partes no muera tan pronto como llegue a su destino.",
    background: imgUrl2,
  },
  {
    titulo:
      "Refrigeración de última generación. Velocidades de cuadro de última generación.",
    info: "Siente la matriz térmica más potente del mundo en un portátil para videojuegos con los sistemas térmicos Legion Coldfront 4.0 de la serie Legion 7, que cuentan con tecnología de cámara de vapor masiva revolucionaria y remasterizada*. Gracias a la potencia gráfica de hasta 175 W para ofrecer el mejor rendimiento de su clase, tu máquina no derramará ni una sola gota de sudor ni siquiera bajo la presión del videojuego más épico.",
    background: imgUrl3,
  },
];

const Features = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <section className={styles["features"]}>
      <h2>Caracteristicas</h2>
      <Slider {...settings}>
        {data.map(({ titulo, info, background }, index) => (
          <Slide
            key={index}
            background={background}
            title={titulo}
            info={info}
          />
        ))}
      </Slider>
    </section>
  );
};

export default Features;
