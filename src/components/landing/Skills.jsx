import React from "react";
import style from "./landing.module.css";

function Skills() {
	return (
		<div className={style.Skills} id="skills">
			<h2>Skills and Tools</h2>
			<img src="img/ai.svg" alt="Adobe Illustrator" />
			<img src="img/django-seeklogo.com.svg" alt="Django" />
			<img src="img/html.svg" alt="Html" />
			<img src="img/js.svg" alt="Javascript" />
			<img src="img/python-seeklogo.com.svg" alt="Python" />
		</div>
	);
}

export default Skills;
