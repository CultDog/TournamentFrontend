import './sass/auth.scss';
import { Form, message, Button } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import { useState } from "react";
import logo from '@src/assets/img/logo.png';
import AuthEmailInput from "@src/UI/auth/auth-email-input";
import AuthPasswordInput from "@src/UI/auth/auth-password-input";

function Auth() {
	const loginUrl = 'http://127.0.0.1:8000/auth/login';
	
	const redirectURL = 'http://127.0.0.1:9000/admin/events'

	const [loadings, setLoadings] = useState([]);

	const handleSubmit = async (event) => {
		
		enterLoading(0)
		event.preventDefault();

		const username = document.getElementById('user_email_input').value;
		const password = document.getElementById('user_password_input').value;

		const requestBody = {
			email:	 username,
			password:password
		};

		try {
			const response = await fetch(loginUrl, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(requestBody),
				redirect: "follow",
            	credentials: 'include',
			});

			if (response.ok) {
				const response_json  = await response.json();
				console.log(response_json);
				window.location.href = redirectURL;
			} else {
				message.error('Error: Invalid username or password. Please try again.');
			}
		} catch (error) {
			message.error('Error: Unable to authenticate user. Please try again.');
		}
		stopLoading(0);

	}

	const onFinish = () => {
		message.success('Всё в порядке!');
	};

	const onFinishFailed = () => {
		message.error('Проверьте поля для ввода!');

		stopLoading(0);
	};

	const enterLoading = (index) => {
		setLoadings((prevLoadings) => {
			const newLoadings = [...prevLoadings];
			newLoadings[index] = true;
			return newLoadings;
		});
		setTimeout(() => {
			setLoadings((prevLoadings) => {
				const newLoadings = [...prevLoadings];
				newLoadings[index] = false;
				return newLoadings;
			});
		}, 6000);
	};

	const stopLoading = (index) => {
		setLoadings((prevLoadings) => {
			const newLoadings = [...prevLoadings];
			newLoadings[index] = false;
			return newLoadings;
		});
	};

	return (
		<div className="auth">
			<div className="auth__container">
				<div className="auth__header">
					<div className="auth__logo">
						<a href="https://zubronok.by/">
							<img src={logo} alt="" />
						</a>
					</div>	
				</div>
				<div className="auth__body">
					<Form
						layout="vertical"
						requiredMark="Default"
						onFinish={onFinish}
						onFinishFailed={onFinishFailed}
					>
						<AuthEmailInput />
						<AuthPasswordInput />

						<FormItem>
							<Button
								type="primary"
								htmlType="submit"
								loading={loadings[0]} 
								onClick={(e) => handleSubmit(e)}
								style={{ 
									width: "100%",
									marginTop: "15px"
								}}
							>Войти</Button>
						</FormItem>
					</Form>
				</div>
			</div>
		</div>
	)
}

export default Auth;