import React from "react";
import Button from "../Shared/Button";
import style from "./Contact.module.css";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { TiLocation } from "react-icons/ti";

function Contact() {
	const [name, setName] = useState("");
	const [note, setNote] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [btnDisabled, setbtnDisabled] = useState(true);

	const handleNameChange = (e) => {
		if (name === "") {
			setbtnDisabled(true);
			setMessage("");
		} else if (name !== "" && name.trim().length <= 5) {
			setMessage("Name must be longer than that");
			setbtnDisabled(true);
		} else if (
			name !== "" &&
			name.trim().length >= 5 
		) {
			setMessage("");
		}
		setName(e.target.value);
	};
	const handleNoteChange = (e) => {
		if (note === "") {
			setbtnDisabled(true);
			setMessage(null);
		} else if (note !== "" && note.trim().length <= 10 && name !== "") {
			setMessage("Message must be longer than that");
			setbtnDisabled(true);
		} else {
			setMessage(null);
			setbtnDisabled(false);
		}
		setNote(e.target.value);
	};
	const handleEmailChange = (e) => {
		if (email === "") {
			setbtnDisabled(true);
		} else if (email !== "" && email.trim().length <= 7) {
			setbtnDisabled(true);
		}
		setEmail(e.target.value);
	};

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
						<a href="https://www.linkedin.com/in/francis-edema-woods">
							<FaLinkedin className={style.icons} />
						</a>
						<a href="https://github.com/Edema-wxd">
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
						value={name}
						placeholder="Your name"
						onChange={handleNameChange}
						required
					/>
					<br />
					<input
						className={style.infield}
						type="email"
						id="email"
						name="email"
						value={email}
						placeholder="Your email"
						onChange={handleEmailChange}
						required
					/>
					<br />
					<textarea
						className={style.infield}
						id={style.messtxt}
						name="textarea"
						rows="5"
						placeholder="Send me a Message"
						wrap="hard"
						value={note}
						onChange={handleNoteChange}
						required
					></textarea>
					<br />
					<Button isDisabled={btnDisabled} type={"submit"}>
						Send
					</Button>
					<br />
					{message && <div className={style.message}>{message}</div>}
				</form>
			</div>
		</>
	);
}

export default Contact;
