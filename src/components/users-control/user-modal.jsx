import {Modal, Form, Button, message, Space} from 'antd';
import { useState } from "react"
import FormItem from 'antd/es/form/FormItem';
import UserLastnameInput from "@src/UI/user/user-lastname-input.jsx";
import UserFirstnameInput from "@src/UI/user/user-firstname-input.jsx";
import UserPatronymicInput from "@src/UI/user/user-patronymic-input.jsx";
import UserRoleInput from "@src/UI/user/user-role-input.jsx";
import UserEmailInput from "@src/UI/user/user-email-input.jsx";
import UserPasswordInput from "@src/UI/user/user-password-input.jsx";
import UserPhoneInput from "@src/UI/user/user-phone-input.jsx";
import UserOrganizationInput from "@src/UI/user/user-organization-input.jsx";


function UserModal({ isOpen, onOk, onCancel }) {
	const [isLoading, setIsLoading] = useState(false);

	const onFinish = () => {
		message.success('Всё в порядке!');
		setIsLoading(false);
	};

	const onFinishFailed = () => {
		message.error('Проверьте поля для ввода!');
		setIsLoading(false);
	};

	return (
		<Modal
			title="Добавить пользователя"
			style={{
				top: 20,
			}}
			open={isOpen}
			onOk={onOk}
			onCancel={onCancel}
			footer={[]}
		>
			<Form
				layout="vertical"
				variant="filled"
				requiredMark="Default"
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
			>
				<UserLastnameInput />
				<UserFirstnameInput />
				<UserPatronymicInput />

				<UserRoleInput />

				<UserEmailInput />
				<UserPasswordInput />

				<UserPhoneInput />
				<UserOrganizationInput />

				<Space>
					<FormItem>
						<Button
							type="primary"
							htmlType="submit"
							loading={isLoading} onClick={() => setIsLoading(true)}
						>Добавить пользователя</Button>
					</FormItem>
					<FormItem>
						<Button onClick={onCancel}>Отмена</Button>
					</FormItem>
				</Space>
			</Form>
		</Modal>
	)
}

export default UserModal;