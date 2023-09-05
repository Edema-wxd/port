import React from "react";
import style from "./skills.module.css";
import django from "../../assets/django-seeklogo.com.svg";
import python from "../../assets/python-seeklogo.com.svg";
import git from "../../assets/git-seeklogo.com.svg";
import nodejs from "../../assets/nodejs-seeklogo.com.svg";
import react from "../../assets/react-seeklogo.com.svg";
import postgresql from "../../assets/postgresql-seeklogo.com.svg";
import js from "../../assets/js.svg";
import oop from "../../assets/oop.svg";
import code from "../../assets/code.svg";

function Skills() {
  return (
    <>
      <div className={style.skills} id="skills">
        <h1>Skills & Technologies</h1>
        <div className={style.skillbox}>
          <div className={style.skill}>
            <img className={style.Sicon} src={react} alt="" />
            <div className={style.Stext}>
              <h3>React.js</h3>
            </div>
          </div>
          <div className={style.skill}>
            <img className={style.Sicon} src={django} alt="" />
            <div className={style.Stext}>
              <h3>Django</h3>
            </div>
          </div>
          <div className={style.skill}>
            <img className={style.Sicon} src={code} alt="" />
            <div className={style.Stext}>
              <h3>Web development</h3>
            </div>
          </div>
          

          <div className={style.skill}>
            <img className={style.Sicon} src={nodejs} alt="" />
            <div className={style.Stext}>
              <h3>Node.js</h3>
            </div>
          </div>
          <div className={style.skill}>
            <img className={style.Sicon} src={oop} alt="" />
            <div className={style.Stext}>
              <h3>OOP</h3>
            </div>
          </div>
          <div className={style.skill}>
            <img className={style.Sicon} src={postgresql} alt="" />
            <div className={style.Stext}>
              <h3>PostgresSQL</h3>
            </div>
          </div>

          <div className={style.skill}>
            <img className={style.Sicon} src={js} alt="" />
            <div className={style.Stext}>
              <h3>Javascript</h3>
            </div>
          </div>
          <div className={style.skill}>
            <img className={style.Sicon} src={python} alt="" />
            <div className={style.Stext}>
              <h3>Python</h3>
            </div>
          </div>
          <div className={style.skill}>
            <img className={style.Sicon} src={git} alt="" />
            <div className={style.Stext}>
              <h3>Git</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
