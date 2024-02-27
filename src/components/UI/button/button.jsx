import './button.scss';

function Button(props) {
	const btnClasses = `button button--${props.style ?? 'primary'}`;

	return (
		<button type={props.type} className={btnClasses}>
			{props.children}
		</button>
	);
}

export default Button;