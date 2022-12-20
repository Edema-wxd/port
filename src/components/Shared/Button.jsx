import PropTypes from "prop-types";
import style from "./Button.module.scss";

function Button({ children, isDisabled }) {
	return (
		<button disabled={isDisabled} className={style.btn}>
			{children}
		</button>
	);
}

Button.defaultProps = {
	isDisabled: false,
};

Button.propTypes = {
	children: PropTypes.node.isRequired,
	isDisabled: PropTypes.bool,
};

export default Button;
