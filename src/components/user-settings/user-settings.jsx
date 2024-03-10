import { Button, Typography, message, Form, Col, Row } from 'antd';
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

function UsersSettings() {
	const [isLoading, setIsLoading] = useState(false);

	const onFinish = () => {
		message.success('Всё в порядке!');
	};

	const onFinishFailed = () => {
		message.error('Проверьте поля для ввода!');
		setIsLoading(false);
	};

	return (
		<>
			<Typography.Title level={2}>Настройки пользователя</Typography.Title>

			<Form
				layout="vertical"
				variant="filled"
				requiredMark="Default"
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
			>
				<Row gutter={[32, 0]}>
					<Col span={8}>
						<UserLastnameInput />
						<UserFirstnameInput />
						<UserPatronymicInput />

						<UserRoleInput disabled={true} />
					</Col>
					<Col span={8}>
						<UserEmailInput />
						<UserPasswordInput />
					</Col>
					<Col span={8}>
						<UserPhoneInput />
						<UserOrganizationInput />
					</Col>
				</Row>

				<Row>
					<FormItem>
						<Button
							type="primary"
							htmlType="submit"
							loading={isLoading} onClick={() => setIsLoading(true)}
						>Сохранить настройки</Button>
					</FormItem>
				</Row>
			</Form>
		</>
	);
}

export default UsersSettings;