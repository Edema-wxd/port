import React from "react";
import style from "./port.module.css";
import done from "../../data/Done";
import JobCard from "../Shared/JobCard";

function Badges() {
  return (
    <div className={style.Badges} id="badges">
      <h1 className={style.Phead}>Badges</h1>
      <div className={style.cardbox}>
        <div
          data-iframe-width="150"
          data-iframe-height="270"
          data-share-badge-id="2c673bab-7cc7-4a9a-9e83-851d4cb4166c"
          data-share-badge-host="https://www.credly.com"
        ></div>
        <script
          type="text/javascript"
          async
          src="//cdn.credly.com/assets/utilities/embed.js"
        ></script>
      </div>
    </div>
  );
}

export default Badges;
