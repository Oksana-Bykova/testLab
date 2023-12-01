import React from "react";
import logo from "../../images/Group 75.svg";
import "./Header.css";
import { HeaderNav } from "./HeaderNav/HeaderNav";

function Header() {
  return (
    <section className="header">
      <div className="header__wrapper">
        <div className="header__logo-container">
          <img className="header__logo" alt="логотип" src={logo}></img>
        </div>

        <div className="header__container">
          <HeaderNav></HeaderNav>
        </div>
      </div>
    </section>
  );
}

export default Header;
