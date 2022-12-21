import React from "react";
import style from "./landing.module.css";
import Button from "../Shared/Button";

function Hero() {
	return (
		<div className={style.hero} id="home">
			<div className={style.Htxt}>
				<h1 className={style.headertxt}>
					Hi, I'm Francis,
					<br />a Frontend developer
				</h1>
				<p>I love building amazing websites</p>
				<Button>Work with me</Button>

				<Button>See My Past Works</Button>
			</div>

			<div className={style.Himg}>
				<img src="" alt="random" />
			</div>
		</div>
	);
}

export default Hero;
