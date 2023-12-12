import React from "react";
import style from "./Details.module.css";
import stylebtn from "../Shared/Button.module.css";
import Imgcaro from "../Shared/imgcaro/Imgcaro";
import { useParams, useNavigate } from "react-router-dom";
import done from "../../data/Done";

import Button from "../Shared/Button";

function Details() {
  const navigate = useNavigate();
  let { portId } = useParams();
  let num = parseInt(portId) - 1;

  return (
    <div className={style.Details}>
      <Imgcaro portid={num} />
      <div className={style.DInfo}>
        <h2>{done[num].project}</h2>
        <p>{done[num].summary}</p>
        <h4>Highlights</h4>
        <ul>
          {Object.keys(done[num].kpi).map((item) => (
            <li>{done[num].kpi[item]}</li>
          ))}
        </ul>
        <div className={style.DBtns}>
          <a href={done[num].linkto}>
            <Button className={stylebtn.btndets}>Visit</Button>
          </a>
          <div onClick={() => navigate(-1)}>
            <Button className={stylebtn.btndets}>Back</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
