import React from "react";
import style from "./Contact.module.css";
/**
import { FaGithub, FaLinkedin, FaMapPin } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
 */
function Contact() {
	return (
		<>
			<div className={style.Contact} id="contact">
				<form>
					<h1>Contact me</h1>
					<br />
					<label className={style.labels} for="text">
						Name
					</label>
					<br />
					<input type="text" id="name" name="text" />
					<br />
					<label className={style.labels} for="email">
						Email
					</label>
					<br />
					<input type="email" id="email" name="email" />
					<br />
					<label className={style.labels} for="textarea">
						Message
					</label>
					<br />
					<textarea
						id="mess-text"
						name="textarea"
						rows="3"
						cols="25"
						placeholder="Send me a Message"
						wrap="hard"
					></textarea>
					<br />
					<br />
				</form>
			</div>
		</>
	);
}

export default Contact;
