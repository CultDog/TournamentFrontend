import React from 'react';
import {Flex, Input, Typography} from "antd";
import {MailOutlined} from "@ant-design/icons";
import FormItem from "antd/es/form/FormItem";

function UserEmailInput(props) {
    return (
        <FormItem
            name="Email"
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
            <Flex vertical>
                <Typography.Text>Email</Typography.Text>
                <Input
                    prefix={<MailOutlined />}
                    type="email"
                    // pattern="+@gmail.com"
                    id="user_email_input"
                    placeholder="Введите Email"
                />
                <Typography.Text type="secondary">Пример: example@example.com</Typography.Text>
            </Flex>
        </FormItem>
    );
}

export default UserEmailInput;