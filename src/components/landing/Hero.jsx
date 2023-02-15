import React from "react";
import style from "./landing.module.css";
import Button from "../Shared/Button";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Hero() {
	return (
		<div className={style.hero} id="hero">
			<div className={style.Htxt}>
				<h1 className={style.headertxt}>
					Hi, I'm Francis,
					<br />a Frontend developer
				</h1>
				<p>I love building amazing websites</p>
				<AnchorLink href="#contact">
					<Button>Work with me</Button>
				</AnchorLink>

				<AnchorLink href="#portfolio">
					<Button>See My Past Works</Button>
				</AnchorLink>
			</div>

			<div className={style.Himg}>
				<img src="" alt="random" />
			</div>
		</div>
	);
}

export default Hero;
