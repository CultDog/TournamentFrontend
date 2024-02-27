import Button from "@components/UI/button/Button.jsx";
import AdminPanelControls from "../admin-panel/admin-panel-controls.jsx";
import UserCard from "./user-card.jsx";

function UsersControl() {
	return (
		<div className="users-control">
			<h2>Управление пользователями</h2>
			<AdminPanelControls>
				<Button>Добавить пользователя</Button>
			</AdminPanelControls>

			<div className="users-control__users">
				<UserCard fio="Иванов Иван Иванович" role="Суперадминистратор" />
				<UserCard fio="Иванов Иван Иванович" role="Суперадминистратор" />
				<UserCard fio="Иванов Иван Иванович" role="Суперадминистратор" />
			</div>
		</div>
	);
}

export default UsersControl;