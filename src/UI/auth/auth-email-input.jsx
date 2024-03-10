import React from 'react';
import {Input, Typography} from "antd";
import FormItem from "antd/es/form/FormItem";
const {Text} = Typography;

const AuthEmailInput = () => {
    return (
        <FormItem
            name="Email"
            style={{
                width: 300,
            }}
            hasFeedback
            validateFirst
            rules={[
                {
                    required: true,
                    message: 'Пожалуйста введите Email',
                },
                {
                    type: 'email',
                    message: "Некоректный Email",
                },
            ]}
        >
            <Input
                type="email"
                // pattern="+@gmail.com"
                id="user_email_input"
                placeholder="Email..."
            />
        </FormItem>
    );
};

export default AuthEmailInput;