import React, { useState } from "react";

import img1 from "../../images/Reviews/Ellipse 21.svg";
import img2 from "../../images/Reviews/Ellipse 21 (1).svg";
import img3 from "../../images/Reviews/Ellipse 21 (2).svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from "swiper";
import "swiper/swiper-bundle.min.css";
import "./Reviews.scss";

function Reviews() {
  const array = [
    {
      name: "Константинов Михаил Павлович",
      id: "1",
      city: "Санкт-Петербург",
      img: img1,
      text: "Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы ",
    },

    {
      id: "2",
      name: "Иван Иванов",
      city: "Санкт-Петербург",
      img: img2,
      text: "Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.",
    },

    {
      id: "3",
      name: "Артем Корнилов",
      city: "Самара",
      img: img3,
      text: "Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.",
    },

    {
      id: "4",
      name: "Никита Быков",
      city: "Самара",
      img: img3,
      text: "Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.",
    },

    {
      id: "5",
      name: "Матвей Быков",
      city: "Самара",
      img: img3,
      text: "Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.",
    },
  ];

  const [countSlider, setCountSlider] = React.useState("3");

  function getSlidesPerView() {
    const screenWidth = window.innerWidth;

    if (screenWidth < 760) {
      setCountSlider("1");
    } else if (screenWidth >= 760 && screenWidth < 1550) {
      setCountSlider("2");
    } else {
      setCountSlider("3");
    }
  }

  window.addEventListener("resize", function () {
    getSlidesPerView();
  });

  return (
    <section className="reviews">
      <h2 className="reviews__title">Отзывы</h2>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube]}
        spaceBetween={32}
        slidesPerView={countSlider}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <ul className="reviews__list">
          {array.map((item) => (
            <SwiperSlide key={item.id}>
              <li className="reviews__card">
                <div className="reviews__container-for-information">
                  <img src={item.img} alt="фотография пользователя"></img>
                  <div className="reviews__wrapper">
                    <p className="reviews__name">{item.name}</p>
                    <p className="reviews__city">{item.city}</p>
                  </div>
                </div>
                <p className="reviews__text">{item.text}</p>
              </li>
            </SwiperSlide>
          ))}
        </ul>
      </Swiper>
    </section>
  );
}

export default Reviews;
