import React from "react";
import Hero from "./Hero";
//import Skills from "./Skills";
import Port from "../Port/Port";
//import Footer from "../layout/Footer";
//import Header from "../layout/Header";
import Contact from "../contact/Contact";
import style from "./landing.module.css";

function Land() {
  return (
    <div className={style.land}>
      <Hero />
      <Port />
      <Contact />
    </div>
  );
}

export default Land;
