import React from "react";
import style from "./Footer.module.css";

function Footer() {
	return (
		<footer className={style.foot}>
			<hr className={style.fhr} />
			Developed by Francis Woods &copy; Copyright 2021 -{" "}
			{new Date().getFullYear()}. All right reserved.
		</footer>
	);
}

export default Footer;
