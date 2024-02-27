import './sass/user-card.scss';

function UserCard(props) {
	return (
		<div className="user-card">
			<div className="user-card__body">
				<span>
					{props.fio}
					<span className="user-card__role">{props.role}</span>
				</span>
				<a href="#">Изменить</a>
			</div>
		</div>
	);
}

export default UserCard;