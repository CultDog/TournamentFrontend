import { Button,message, Typography } from 'antd';
import { useState } from "react";
import AdminPanelControls from "../admin-panel/admin-panel-controls.jsx";
import UserModal from "./user-modal.jsx";
import UsersTable from "./users-table.jsx";
import ApiPath from "@components/enums.js";

function UsersControl() {
	const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [dataUsers , setUsers] = useState([]);

	if(isLoading) {
		fetch(
			`${ApiPath}/user/users`,
			{
				method: "GET",
				headers: {
					"accept": "application/json"
				},
				redirect: "follow",
				credentials: 'include',
			}
		).then((response) => response.json())
			.then((data) => setUsers(data))
			.catch(() => message.error('Невозможно получить данные. Обратитесь к администратору'))
			.finally(
				() => setTimeout(
					() => setIsLoading(false),
					300
				)
			)
	}

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