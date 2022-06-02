import React from "react";


const Slide = ({ background, title, info }) => {
  return (
    <article
      style={{
        backgroundImage: "url(" + background + ")",
      }}
    >
      <div>
        <h2>{title}</h2>
        <p>{info}</p>
      </div>
    </article>
  );
};

export default Slide;
