import './sass/auth.scss';
import { Form, message, Input, Flex, Typography, Button } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import { useState } from "react"
import { EyeInvisibleOutlined } from '@ant-design/icons';
import logo from '@src/assets/img/logo.png';
import AuthEmailInput from "@src/UI/auth/auth-email-input";
import AuthPasswordInput from "@src/UI/auth/auth-password-input";
const { Text } = Typography;

function Auth() {
	const [loadings, setLoadings] = useState([]);

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
								loading={loadings[0]} onClick={() => enterLoading(0)}
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