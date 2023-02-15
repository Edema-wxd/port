import React from "react";
//import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.css";

function Header() {
	return (
		<div className={style.header}>
			<p className={style.linktxt}>Francis.wxd</p>

			<div className={style.drop}>
				<button className={style.menubtn}>Dropdown</button>
				<div className={style.linkarr} id="myDropdown">
					<Link className={style.link} to={"/"}>
						About
					</Link>
					<Link className={style.link} to={"/"}>
						Services
					</Link>
					<Link className={style.link} to={"#portfolio"}>
						Portfolio
					</Link>
					<Link className={style.link} to="#contact">
						Contact
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Header;
