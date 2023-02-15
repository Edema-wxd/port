import React from "react";
import Button from "../Shared/Button";
import style from "./Contact.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { TiLocation } from "react-icons/ti";

function Contact() {
	return (
		<>
			<div className={style.contact} id="contact">
				<div className={style.conlink}>
					<h1>Contact me</h1>

					<p>
						Please reach out to me through my email, phone number, social media.
					</p>
					<div className={style.add}>
						<div className={style.addblock}>
							<TiLocation className={style.icons} />
							<p className={style.addtxt}>Ibadan - Nigeria</p>
						</div>
						<div className={style.addblock}>
							<BsTelephone className={style.icons} />
							<p className={style.addtxt}>+2348127576854</p>
						</div>
						<div className={style.addblock}>
							<FiMail className={style.icons} />
							<p className={style.addtxt}>woodsedema@gmail.com</p>
						</div>
					</div>

					<div className={style.conlinkarr}>
						<a href="http://" target="_blank" rel="noopener noreferrer">
							<FaLinkedin className={style.icons} />
						</a>
						<a href="http://" target="_blank" rel="noopener noreferrer">
							<FaGithub className={style.icons} />
						</a>
					</div>
				</div>
				<form className={style.conform}>
					<br />
					<input
						className={style.infield}
						type="text"
						id="name"
						name="text"
						placeholder="Your name"
					/>
					<br />
					<input
						className={style.infield}
						type="email"
						id="email"
						name="email"
						placeholder="Your email"
					/>
					<br />
					<textarea
						className={style.infield}
						id={style.messtxt}
						name="textarea"
						rows="4"
						cols="30"
						placeholder="Send me a Message"
						wrap="hard"
					></textarea>
					<br />
					<Button type={"submit"}>send</Button>
					<br />
				</form>
			</div>
		</>
	);
}

export default Contact;
