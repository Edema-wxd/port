import React from "react";
import style from "./landing.module.css";
import Button from "../Shared/Button";
import AnchorLink from "react-anchor-link-smooth-scroll";
import portimg from "../../assets/portrait.png"

function Hero() {
	return (
		<div className={style.hero} id="hero">
			<div className={style.Htxt}>
				<h1 className={style.headertxt}>Hi, I'm Francis,</h1>
				<h3>Fullstack Developer(Frontend Heavy)</h3>
				<p className={style.HTt}>
					I'm a fullstack software developer, with a passion for frontend
					development. I am proficient in scripting languages such as Python and
					Javascript, as well as web development languages such as HTML, CSS,
					and frameworks like Django and React. On a team level, I am a
					self-aware, critical thinker and a responsible team member who is
					willing to go above and beyond when necessary. On a personal level, I
					am steadfast and level-headed, thinking outside the box and willing to
					take the lead as it is needed.
				</p>
				<div className={style.btnbox}>
				<AnchorLink href="#contact">
					<Button>Contact me</Button>
				</AnchorLink>

				<a href="http://">
					<Button className={style.btnx}>See My Resume</Button>
				</a>

				</div>
			</div>

			<div className={style.Himg}>
				<img src={portimg} className={style.HIimg} alt="random" />
			</div>
		</div>
	);
}

export default Hero;
