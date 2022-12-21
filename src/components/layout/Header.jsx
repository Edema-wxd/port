import React from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.css";

function Header() {
	return (
		<div className={style.header}>
			<img src="" alt="logo" />
			<div className={style.linkarr}>
				<Link to={"/"}>Home</Link>
				<Link to={"/portfolio"}>Portfolio</Link>
				<Link to={"/contact"}>Connect</Link>
			</div>
		</div>
	);
}

export default Header;
