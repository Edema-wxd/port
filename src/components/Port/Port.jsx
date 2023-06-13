import React from "react";
import style from "./port.module.css";
import Card from "../Shared/Card";
import Button from "../Shared/Button";
import miqr from "../../assets/miqr.png";
import ticked from "../../assets/ticked.png";
import air from "../../assets/air.png";
function Port() {
	return (
		<div className={style.Port} id="portfolio">
			<h1 className={style.Phead}>Portfolio</h1>
			<div className={style.cardbox}>
				<Card>
					<h3 className={style.ptxt}>MiQR</h3>
					<div className={style.feats}>
						<div className={style.pbb}>Web</div>
						<div className={style.pbb}>DJango</div>
						<div className={style.pbb}>PostgreSQL</div>
						<div className={style.pbb}>CSS </div>
					</div>
					<img
						className={style.portimg}
						src={miqr}
						alt="MiQR - a QRcode generation site"
					/>
					<a href="http://" target="_blank" rel="noopener noreferrer">
						<Button>Visit</Button>
					</a>
				</Card>
				<Card>
					<h3 className={style.ptxt}>Ticked</h3>
					<div className={style.feats}>
						<div className={style.pbb}>Web</div>
						<div className={style.pbb}>React</div>
						<div className={style.pbb}>Sass</div>
						<div className={style.pbb}>Axios</div>
					</div>
					<img
						className={style.portimg}
						src={ticked}
						alt="Ticked - a time management webapp"
					/>
					<a href="https://ticked.hng.tech/">
						<Button>Visit</Button>
					</a>
				</Card>
				<Card>
					<h3 className={style.ptxt}>
						Metabnb
					</h3>
					<div className={style.feats}>
						<div className={style.pbb}>Web3</div>
						<div className={style.pbb}>React</div>
						<div className={style.pbb}>Sass</div>
						<div className={style.pbb}>Wallet connect</div>
					</div>
					<img className={style.portimg} src={air} alt="" />
					<a href="https://task3-sigma.vercel.app/">
						<Button>Visit</Button>
					</a>
				</Card>
			</div>
		</div>
	);
}

export default Port;
