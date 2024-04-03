import './sass/auth.scss';
import { Form, message, Button } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import { useState } from "react";
import logo from '@src/assets/img/logo.png';
import AuthEmailInput from "@src/UI/auth/auth-email-input";
import AuthPasswordInput from "@src/UI/auth/auth-password-input";
import {useNavigate} from "react-router-dom";
import Loader from "@components/loader/loader";

function Auth() {
	const loginUrl = 'http://127.0.0.1:8000/api/auth/login';

	const [isLoading, setIsLoading] = useState(true);
	const [isFormLoading, setIsFormLoading] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();

	if(isLoading) {
		try {
			fetch('http://127.0.0.1:8000/api/user/profile', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				},
				redirect: "follow",
				credentials: 'include'
			}).then(
				response => {
					if(response.ok) {
						navigate('/admin/settings');
					}else{
						setTimeout(() => setIsLoading(false), 1000);
					}
				}
			)
		} catch (error) {
			message.error('Ошибка: Невозможно получить данные. Обратитесь к администратору...');
		}
	}

	const handleSubmit = async (event) => {
		event.preventDefault();
		setIsFormLoading(true);

		const requestBody = {
			email: email,
			password: password
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
				navigate('/admin/settings')
			} else {
				message.error('Ошибка: Неверный email или пароль.');
			}
		} catch (error) {
			message.error('Ошибка: Невозможно авторизовать пользователя. Попробуйте еще раз...');
		}

		setIsFormLoading(false);
	}

	const onFinish = () => {
		setIsFormLoading(false);
	};

	const onFinishFailed = () => {
		message.error('Проверьте поля для ввода!');

		setIsFormLoading(false);
	};

	return (
		<>
			<Loader show={isLoading} />
			<div className="auth">
				<div className="auth__container">
					<div className="auth__header">
						<div className="auth__logo">
							<a href="https://zubronok.by/" target="_blank">
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
							<AuthEmailInput value={email} onChange={setEmail} />
							<AuthPasswordInput value={password} onChange={setPassword} />

							<FormItem>
								<Button
									type="primary"
									htmlType="submit"
									loading={isFormLoading}
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
		</>
	)
}

export default Auth;