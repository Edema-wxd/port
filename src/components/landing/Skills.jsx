import React from "react";
import style from "./skills.module.css";
import Icons from "../../data/Icons";

function Skills() {
  return (
    <>
      <div className={style.skills} id="skills">
        <h1>Skills & Technologies</h1>
        <div className={style.skillbox}>
          {Object.keys(Icons).map((id) => (
            <div className={style.skill} key={id}>
              <img className={style.Sicon} src={Icons[id].image} alt="" />
              <div className={style.Stext}>
                <h3>{Icons[id].title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
