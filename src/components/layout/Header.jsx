import React from "react";
//import { useState } from "react";
import style from "./Header.module.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Header() {
	return (
		<div className={style.header}>
			<p className={style.linktxt}>Francis.wxd</p>

			<div className={style.drop}>
				<button className={style.menubtn}>Dropdown</button>
				<div className={style.linkarr} id="myDropdown">
					<AnchorLink className={style.link} href="#hero">
						About
					</AnchorLink>
					<AnchorLink className={style.link} href="#skills">
						Services
					</AnchorLink>
					<AnchorLink className={style.link} href="#portfolio">
						Portfolio
					</AnchorLink>
					<AnchorLink className={style.link} href="#contact">
						Contact
					</AnchorLink>
				</div>
			</div>
		</div>
	);
}

export default Header;
