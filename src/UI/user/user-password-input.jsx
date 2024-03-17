import React from 'react';
import {Flex, Input, Typography} from "antd";
import {EyeInvisibleOutlined, LockOutlined} from "@ant-design/icons";
import FormItem from "antd/es/form/FormItem";

function UserPasswordInput(props) {
    return (
        <FormItem
            name="Password"
            hasFeedback
            validateFirst
            rules={[
                {
                    required: true,
                    message: 'Пожалуйста, введите пароль',
                },
                {
                    min: 8,
                    message: 'Минимальная длина пароля - 8 символов',
                }
            ]}
        >
            <Flex vertical>
                <Typography.Text>Пароль</Typography.Text>
                <Input.Password
                    prefix={<LockOutlined />}
                    placeholder="Введите Пароль"
                    iconRender={() => <EyeInvisibleOutlined />}
                    id="user_password_input"
                />
            </Flex>
        </FormItem>
    );
}

export default UserPasswordInput;