import React from "react";
import PropTypes from "prop-types";
import style from "./Button.module.css";

function Button({ children, isDisabled, type }) {
	return (
		<button type={type} disabled={isDisabled} className={style.btn}>
			{children}
		</button>
	);
}

Button.defaultProps = {
	isDisabled: false,
	type: "button",
};

Button.propTypes = {
	children: PropTypes.node.isRequired,
	isDisabled: PropTypes.bool,
	type: PropTypes.string,
};

export default Button;
