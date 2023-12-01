import React from "react";

import "./Three.css";
import img from "../../images/Three/Group 253.svg";

function Three() {
  return (
    <section className="three" id="three">
      <div className="three__wrapper">
        <div className="three__container-text">
          <h2 className="three__title">Круто, ты дошел до третьего блока</h2>
          <p className="three__text">
            63% опрошенных пользовались кредитами из-за того, что не могли
            покрыть непредвиденные расходы свыше 15 000 ₽.
          </p>
          <p className="three__text">
            Доступ к заработанным деньгам помогает отказаться от кредитов и
            экономить деньги на процентах и штрафах.
          </p>
        </div>
        <div className="three__container-img">
          <img className="three__img" src={img} alt="Изображение экрана телефона с различными графиками"></img>
        </div>
      </div>
    </section>
  );
}

export default Three;
