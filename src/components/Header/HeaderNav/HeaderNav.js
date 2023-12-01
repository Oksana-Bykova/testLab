import React, { useEffect } from "react";

import "./HeaderNav.scss";
import logo from "../../../images/Group 75hi.svg";
import arrow from "../../../images/fi-sr-angle-small-right.svg";

function HeaderNav(props) {
  const [windowOuterWidth, setWindowOuterWidth] = React.useState(
    window.innerWidth
  );

  useEffect(() => {
    function handleSize() {
      setWindowOuterWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleSize);

    return () => window.removeEventListener("resize", handleSize);
  });

  if (windowOuterWidth < 900) {
    function clickBurger() {
      const menuBtn = document.querySelector(".header-nav__burger");
      const menu = document.querySelector(".header-nav__menu");
      const link = document.querySelectorAll(".header-nav__li-burger");
      menuBtn.addEventListener("click", function () {
        menu.classList.toggle("header-nav__menu_active");
        menuBtn.classList.toggle("active");
        // menu.classList.toggle("header-nav__opacity-menu");
      });

      link.forEach((item) => {
        item.addEventListener("click", function () {
          menu.classList.toggle("header-nav__menu_active");
          menuBtn.classList.toggle("active");
        });
      });
    }

    return (
      <div className="header-nav">
        <button
          className="header-nav__burger"
          type="button"
          onClick={clickBurger}
        >
          <span className="header-nav__span"></span>
          <span className="header-nav__span"></span>
        </button>
        <div className="header-nav__menu">
          <nav className="header-nav__nav">
            <img className="header-nav__logo" src={logo} alt="логотип"></img>
            <ul className="header-nav__ul-burger">
              <li className="header-nav__li-burger">
                <a href="#works" className="header-nav__link-burger">
                  Как это работает
                  <img
                    className="header-nav__img"
                    alt="стрелка"
                    src={arrow}
                  ></img>
                </a>
              </li>
              <li className="header-nav__li-burger">
                <a href="#three" className="header-nav__link-burger">
                  3-й блок
                  <img
                    className="header-nav__img"
                    alt="стрелка"
                    src={arrow}
                  ></img>
                </a>
              </li>
              <li className="header-nav__li-burger">
                <a href="#" className="header-nav__link-burger">
                  Вопросы и ответы
                  <img
                    className="header-nav__img"
                    alt="стрелка"
                    src={arrow}
                  ></img>
                </a>
              </li>
              <li className="header-nav__li-burger">
                <a
                  href="#"
                  className="header-nav__link-burger  header-nav__link-burger_small"
                >
                  Форма
                  <img
                    className="header-nav__img"
                    alt="стрелка"
                    src={arrow}
                  ></img>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }

  return (
    <ul className="header-nav">
      <li className="header-nav__li">
        <a href="#works" className="header-nav__link">
          {" "}
          Как это работает
        </a>
      </li>

      <li className="header-nav__li">
        <a href="#three" className="header-nav__link">
          {" "}
          3-й блок
        </a>
      </li>

      <li className="header-nav__li">
        <a href="#" className="header-nav__link">
          {" "}
          Вопросы и ответы
        </a>
      </li>

      <li className="header-nav__li">
        <a href="#" className="header-nav__link">
          {" "}
          Форма
        </a>
      </li>
    </ul>
  );
}

export { HeaderNav };
