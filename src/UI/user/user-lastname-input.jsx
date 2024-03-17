import {Flex, Input, Typography} from "antd";
import {UserOutlined} from "@ant-design/icons";
import FormItem from "antd/es/form/FormItem";

function UserLastnameInput() {
	return (
		<FormItem
			name="Last_Name"
			hasFeedback
			validateFirst
			rules={[
				{
					required: true,
					message: 'Пожалуйста, введите фамилию',
				},
				{
					max: 255,
					message: "Максимальное значение 255"
				}
			]}
		>
			<Flex vertical>
				<Typography.Text>Фамилия</Typography.Text>
				<Input
					prefix={<UserOutlined />}
					allowClear
					placeholder="Введите фамилию"
					id="user_lname_input"
					maxLength={255}
				/>
				<Typography.Text type="secondary">Пример: Иванов</Typography.Text>
			</Flex>
		</FormItem>
	)
}

export default UserLastnameInput;