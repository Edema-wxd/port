import React from "react";
import style from "./skills.module.css";
import django from "../../assets/django-seeklogo.com.svg"
import python from "../../assets/python-seeklogo.com.svg"

function Skills() {
	return (
		<>
			<div className={style.skills} id="skills">
				<h1>Skills & Technologies</h1>
				<div className={style.skillbox}>
					

					<div className={style.skill}>React.js</div>
					<div className={style.skill}>
						<img className={style.Sicon} src={django} alt="" />
						<div className={style.Stext}>
							<h3>
								Django
							</h3>
						</div>
					</div>
					<div className={style.skill}>Web development</div>
				

					<div className={style.skill}>Node.js</div>
					<div className={style.skill}>Object Oriented Programming</div>
					<div className={style.skill}>PostgresSQl</div>
					
					
					<div className={style.skill}>Javascript</div>
					<div className={style.skill}>
					<img className={style.Sicon} src={python} alt="" />
						<div className={style.Stext}>
							<h3>
								Python
							</h3>
						</div>
					</div>
					<div className={style.skill}>SQL</div>
					
				</div>
			</div>
		</>
	);
}

export default Skills;
