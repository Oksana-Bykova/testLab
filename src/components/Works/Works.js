import React from "react";

import "./Works.css";
import clock from "../../images/Works/waiting.svg";
import secure from "../../images/Works/secure.svg";
import money from "../../images/Works/money-bags.svg";
import truck from "../../images/Works/delivery-truck.svg";

function Works() {
  return (
    <section className="works">
      <h2 className="works__title">Как это работает</h2>
      <ul className="works__list">
        <li>
          <img src={clock} className="works__img" alt="декоративная картинка"></img>
          <h3 className="works__subtitle">Прочитай задание внимательно</h3>
          <p className="works__text">Думаю у тебя не займет это больше двух-трех минут</p>
        </li>
        <li>
          <img src={truck} className="works__img" alt="декоративная картинка"></img>
          <h3 className="works__subtitle">Изучи весь макет заранее</h3>
          <p className="works__text">Подумай как это будет работать на разных разрешениях и при скролле</p>
        </li>
        <li>
          <img src={secure} className="works__img" alt="декоративная картинка"></img>
          <h3 className="works__subtitle">Сделай хорошо</h3>
          <p className="works__text">Чтобы мы могли тебе доверить подобные задачи в будущем</p>
        </li>
        <li>
          <img src={money} className="works__img" alt="декоративная картинка"></img>
          <h3 className="works__subtitle">Получи предложение</h3>
          <p className="works__text">Ну тут все просто, не я придумал правила, но думаю так и будет)))</p>
        </li>
      </ul>
    </section>
  );
}

export default Works;
