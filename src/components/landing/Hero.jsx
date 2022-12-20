import React from "react";
import style from "./landing.module.scss";

function Hero() {
	return (
		<div className={style.Hero} id="home">
			<h1 className={style.headertxt}>
				Hi, I'm Francis,
				<br />a Frontend developer
			</h1>
		</div>
	);
}

export default Hero;
