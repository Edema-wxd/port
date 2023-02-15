import React from "react";
import style from "./skills.module.css";

function Skills() {
	return (
		<>
			<div className={style.skills} id="skills">
				<h1>Skills and Tools</h1>
				<div className={style.skillbox}>
					<div className={style.skill}>React/Next</div>
					<div className={style.skill}>Django</div>
					<div className={style.skill}>MySQL</div>
					<div className={style.skill}>Mongodb</div>
					<div className={style.skill}>PostgreSQl</div>
					<div className={style.skill}>Node.js</div>
					<div className={style.skill}>Git/Github</div>
					<div className={style.skill}>Python</div>
					<div className={style.skill}>R</div>
					<div className={style.skill}>SQL</div>
				</div>
			</div>
		</>
	);
}

export default Skills;
