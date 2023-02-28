import React from "react";
import style from "./port.module.css";
import Card from "../Shared/Card";
import Button from "../Shared/Button";
function Port() {
	return (
		<div className={style.Port} id="portfolio">
			<h1 className={style.Phead}>Portfolio</h1>
			<div className={style.cardbox}>
				<Card>
					<h3 className={style.ptxt}>Bread and eggs</h3>
					<div className={style.feats}>
						<div className={style.pbb}>Web development</div>
						<div className={style.pbb}>Web development</div>
						<div className={style.pbb}>Web development</div>
						<div className={style.pbb}>Web development</div>
					</div>
					<img className={style.portimg} src="" alt="" />
					<a href="http://" target="_blank" rel="noopener noreferrer">
						<Button>Visit</Button>
					</a>
				</Card>
			</div>
		</div>
	);
}

export default Port;
