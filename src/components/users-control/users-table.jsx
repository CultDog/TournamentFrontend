import {Table, Flex, Button, Typography, Modal} from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import UserModal from "@components/users-control/user-modal";
import {useState} from "react";

function UsersTable({ usersData }) {
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);

	const deleteUserConfirm = () => {
		Modal.confirm({
			title: 'Вы уверены?',
			content: 'Вы уверены что хотите удалить этого пользователя?',
			footer: (_, { OkBtn, CancelBtn }) => (
				<>
					<OkBtn />
					<CancelBtn />
				</>
			),
			okText: 'Да',
			cancelText: 'Отмена'
		});
	}

	const openEditModal = () => {
		setIsEditModalOpen(true);
	}

	const changeUserData = () => {
		setIsEditModalOpen(false);
	}

	const columns = [
		{
			title: 'ФИО',
			key: 'fullname',
			render: (_, { name, lastname, patronymic }) => (
				<Typography.Text>{`${lastname} ${name} ${patronymic}`}</Typography.Text>
			)
		},
		{
			title: 'Роль',
			key: 'role',
			dataIndex: 'role'
		},
		{
			title: 'Действия',
			key: 'action',
			render: () => (
				<Flex>
					<Button type="text" icon={<EditOutlined/>} onClick={() => openEditModal()}></Button>
					<Button type="text" icon={<DeleteOutlined/>} onClick={() => deleteUserConfirm()}></Button>
				</Flex>
			),
		},
	]

	return (
		<>
			<Table dataSource={usersData} columns={columns} />

			<UserModal
				isOpen={isEditModalOpen}
				onOk={() => changeUserData()}
				onCancel={() => setIsEditModalOpen(false)}
			/>
		</>
	)
}

export default UsersTable;