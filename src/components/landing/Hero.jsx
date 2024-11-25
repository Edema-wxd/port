import React from "react";
import style from "./landing.module.css";
import Button from "../Shared/Button";
import AnchorLink from "react-anchor-link-smooth-scroll";
import portimg from "../../assets/portrait.png";

function Hero() {
  return (
    <div className={style.hero} id="hero">
      <div className={style.Htxt}>
        <h1 className={style.headertxt}>Hi, I'm Francis Woods</h1>
        <h2>Fullstack Developer</h2>
        <p className={style.HTt}>
          I'm a fullstack software developer, with a passion for frontend
          development. I am proficient in scripting languages such as Python and
          Javascript, as well as web development languages such as HTML, CSS,
          HAML, and frameworks like Django and React.
        </p>
        <div className={style.btnbox}>
          <AnchorLink href="#contact">
            <Button>Contact me</Button>
          </AnchorLink>

          <a href="http://">
            <Button className={style.btnx}>See My Resume</Button>
          </a>
        </div>
      </div>

      <div className={style.Himg}>
        <img src={portimg} className={style.HIimg} alt="random" />
      </div>
    </div>
  );
}

export default Hero;
