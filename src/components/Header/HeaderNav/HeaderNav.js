import React, { useEffect} from "react";

import "./HeaderNav.css";

function HeaderNav(props) {

  const [windowOuterWidth, setWindowOuterWidth] = React.useState(window.innerWidth);

useEffect(() => {
  function handleSize(){
    setWindowOuterWidth(window.innerWidth)
  }

  window.addEventListener("resize", handleSize
  );

  return() => window.removeEventListener("resize", handleSize
  );
})

  if (windowOuterWidth < 769) {
    function clickBurger() {
      const menuBtn = document.querySelector(".header-nav__burger");
      const menu = document.querySelector(".header-nav__menu");
      menuBtn.addEventListener("click", function () {
        menu.classList.toggle("header-nav__menu_active");
        menuBtn.classList.toggle("active");
        menu.classList.toggle("header-nav__opacity-menu");
      });
    }

    return (
      <div className="header-nav">
        <button
          className="header-nav__burger"
          type="button"
          onClick={clickBurger}
        ></button>
        <div className="header-nav__menu">
          <nav className="header-nav__nav">
            <ul className="header-nav__ul-burger">
              <li className="header-nav__li-burger">
                <a href="#about-project"className="header-nav__link-burger">
                  Как это работает
                </a>
              </li>
              <li className="header-nav__li-burger">
                <a href="#about-project" className="header-nav__link-burger">
                  3-й блок
                </a>
              </li>
              <li className="header-nav__li-burger">
                <a href="#about-project"
                  className="header-nav__link-burger"
                >
                  Вопросы и ответы
                </a>
              </li>
              <li className="header-nav__li-burger">
                <a href="#about-project"
                  className="header-nav__link-burger  header-nav__link-burger_small"
                >
                  Форма
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
        <a href="#about-project" className="header-nav__link">
          {" "}
          Как это работает
        </a>
      </li>

      <li className="header-nav__li">
        <a href="#about-project" className="header-nav__link">
          {" "}
          3-й блок
        </a>
      </li>

      <li className="header-nav__li">
        <a href="#about-project" className="header-nav__link">
          {" "}
          Вопросы и ответы
        </a>
      </li>

      <li className="header-nav__li">
        <a href="#about-project" className="header-nav__link">
          {" "}
          Форма
        </a>
      </li>

    </ul>
  );
}

export { HeaderNav };