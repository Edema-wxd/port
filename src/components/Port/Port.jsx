import React from "react";
import style from "./port.module.css";
import done from "../../data/Done";
import JobCard from "../Shared/JobCard";

function Port() {
  return (
    <div className={style.Port} id="portfolio">
      <h1 className={style.Phead}>Projects</h1>
      <div className={style.cardbox}>
        {Object.keys(done).map((job) => (
          <JobCard
            key={done[job].id}
            id={done[job].id}
            name={done[job].project}
            tools={done[job].tools}
            imgtag={done[job].picture}
            exlink={done[job].linkto}
          />
        ))}
      </div>
    </div>
  );
}

export default Port;
