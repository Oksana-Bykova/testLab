import React from "react";

import "./Promo.css";

function Promo() {
  return (
    <section className="promo">
      <h1 className="promo__title">
        Говорят, никогда не поздно сменить профессию
      </h1>
      <p className="promo__text">
        Сделай круто тестовое задание и у тебя получится
      </p>
      <div className="promo__container">
      <button className="promo__button">Проще простого!</button>
      </div>
      
    </section>
  );
}

export default Promo;
