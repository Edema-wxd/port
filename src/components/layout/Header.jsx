import React from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.css";

function Header() {
	return (
		<div className={style.header}>
			<p className={style.linktxt}>Francis Woods</p>
			<div className={style.linkarr}>
				<Link className={style.link} to={"/"}>
					About
				</Link>
				<Link className={style.link} to={"/"}>
					Services
				</Link>
				<Link className={style.link} to={"/portfolio"}>
					Portfolio
				</Link>
				<Link className={style.link} to="#contact">
					Contact
				</Link>
			</div>
		</div>
	);
}

export default Header;
