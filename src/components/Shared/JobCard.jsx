import React from "react";
import Button from "./Button";
import style from "./Card.module.css";

function JobCard({ name, tools, imgtag, exlink }) {
  return (
    <div className={style.card}>
      <h3 className={style.ptxt}>{name}</h3>
      <div className={style.feats}>
        {Object.keys(tools).map((item) => (
          <div className={style.pbb}>{tools[item]}</div>
        ))}
      </div>
      <img className={style.portimg} src={imgtag} alt="" />
      <a href={exlink}>
        <Button>Visit</Button>
      </a>
    </div>
  );
}

export default JobCard;
