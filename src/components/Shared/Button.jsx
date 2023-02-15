import React from "react";
import PropTypes from "prop-types";
import style from "./Button.module.css";

function Button({ children, isDisabled, type, className }) {
	return (
		<button type={type} disabled={isDisabled} className={className}>
			{children}
		</button>
	);
}

Button.defaultProps = {
	isDisabled: false,
	type: "button",
	className: style.btn,
};

Button.propTypes = {
	children: PropTypes.node.isRequired,
	isDisabled: PropTypes.bool,
	type: PropTypes.string,
	className: PropTypes.string,
};

export default Button;
