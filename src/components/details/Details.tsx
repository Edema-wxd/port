import React from "react";
import style from "./Details.module.css";
import Imgcaro from "../Shared/imgcaro/Imgcaro";
import { useParams, useNavigate } from "react-router-dom";
import done from "../../data/Done";

import Button from "../Shared/Button";
type PortfolioParams = {
  portId?: string;
};

function Details() {
  const navigate = useNavigate();
  let { portId } = useParams<PortfolioParams>();
  let num = parseInt(portId!);

  return (
    <div className={style.Details}>

      <Imgcaro portid={portId!} />
      <div className="DInfo">
        <p>{done[num].summary}</p>
        <ul>{Object.keys(done[num].kpi.map((item) => <li>item</li>))}</ul>

        <a href={done[num].linkto}>
          <Button>Visit</Button>
        </a>
        <div onClick={() => navigate(-1)}>
            <Button>Back</Button>
        </div>
      </div>
    </div>
  );
}

export default Details;
