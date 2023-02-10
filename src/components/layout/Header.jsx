import React from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.css";

function Header() {
	const [openMenu, setOpenMenu] = useState(false);
	const toggleMenu = () => {
		setOpenMenu(!openMenu);
	};

	return (
		<div className={style.header}>
			<p className={style.linktxt}>Francis.wxd</p>

			<div class={style.drop}>
				<button onclick="myFunction()">Dropdown</button>
				<div className={style.linkarrdrop} id="myDropdown">
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
