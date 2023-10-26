import React from "react";
import Button from "./Button";
import style from "./Card.module.css";
import { useNavigate } from "react-router-dom";

function JobCard({ id, name, tools, imgtag, exlink }) {
  const navigate = useNavigate();

  return (
    <div className={style.card}>
      <h3 className={style.ptxt}>{name}</h3>
      <div className={style.feats}>
        {Object.keys(tools).map((item) => (
          <div className={style.pbb}>{tools[item]}</div>
        ))}
      </div>
      <img className={style.portimg} src={imgtag} alt="" />
      <div onClick={() => navigate(`details/${id}`)}>
        <Button>View</Button>
      </div>
    </div>
  );
}

export default JobCard;
