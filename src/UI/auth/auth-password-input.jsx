import React from 'react';
import {Flex, Input, Typography} from "antd";
import {EyeInvisibleOutlined} from "@ant-design/icons";
import FormItem from "antd/es/form/FormItem";

const AuthPasswordInput = () => {
    return (
        <FormItem
            name="Password"
            style={{
                width: 300,
            }}
            hasFeedback
            validateFirst
            rules={[
                {
                    required: true,
                    message: 'Пожалуйста введите пароль',
                }
            ]}
        >

            <Flex vertical>
                <Input.Password
                    placeholder="Пароль..."
                    iconRender={() => <EyeInvisibleOutlined />}
                    id="user_password_input"
                />
                <Typography.Text type="secondary">Забыли пароль? Обратитесь к администратору сайта</Typography.Text>
            </Flex>
        </FormItem>
    );
};

export default AuthPasswordInput;