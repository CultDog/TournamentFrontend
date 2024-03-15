import { Button, Typography, message, Form, Col, Row } from 'antd';
import { useState, useRef } from "react"
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
	const loginUrl = 'http://127.0.0.1:8000/user/create_user';
	const redirectURL = 'http://localhost:9000/admin/users';
	
	
	const CreateUser = async () =>{

		setIsLoading(true)

		const myHeaders = new Headers();
		myHeaders.append("accept", "application/json");
		myHeaders.append("Content-Type", "application/json");

		const raw = JSON.stringify({
		first_name: document.getElementById('user_fname_input').value,
		second_name: document.getElementById('user_lname_input').value,
		third_name: document.getElementById('user_sname_input').value,
		role: RoleSelectRef.current.value,
		email: document.getElementById('user_email_input').value,
		password: document.getElementById('user_password_input').value,
		phone: document.getElementById('user_phone_input').value,
		educational_institution: document.getElementById('user_organization_input').value,
		});

		const requestOptions = {
		method: "POST",
		headers: myHeaders,
		body: raw,
		redirect: "follow",
		credentials: 'include',
		};

		console.log(document.getElementById('user_role_select'))

		try {
			const response = await fetch(loginUrl, requestOptions);

			if (response.ok) {
				const response_json  = await response.json();
				console.log(response_json);
				window.location.href = redirectURL;
			} 
		} catch (error) {
			console.error(error);
		}
		setIsLoading(false)
	};

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

						<UserRoleInput />
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
							loading={isLoading} onClick={() => CreateUser()}
						>Сохранить настройки</Button>
					</FormItem>
				</Row>
			</Form>
		</>
	);
}

export default UsersSettings;