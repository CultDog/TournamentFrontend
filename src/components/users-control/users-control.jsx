import { Button, Typography } from 'antd';
import { useState } from "react";
import AdminPanelControls from "../admin-panel/admin-panel-controls.jsx";
import UserModal from "./user-modal.jsx";
import UsersTable from "./users-table.jsx";


function UsersControl() {
	const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);

	const dataUsers = [
		{
			key: '1',
			name: 'Иван',
			lastname: "Иванов",
			patronymic: "Иванович",
			role: "Судья"
		}
	];

	return (
		<div className="users-control">
			<Typography.Title level={2}>Управление пользователями</Typography.Title>
			
			<AdminPanelControls>
				<Button type="primary" onClick={() => setIsAddUserModalOpen(true)}>Добавить пользователя</Button>
			</AdminPanelControls>

			<div className="users-control__users">
				<UsersTable usersData={dataUsers} />
			</div>

			<UserModal
				isOpen={isAddUserModalOpen}
				onOk={() => setIsAddUserModalOpen(false)}
				onCancel={() => setIsAddUserModalOpen(false)}
			/>
		</div>
	);
}

export default UsersControl;