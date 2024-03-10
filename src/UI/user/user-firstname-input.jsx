import React from 'react';
import {Flex, Input, Typography} from "antd";
import {UserOutlined} from "@ant-design/icons";
import FormItem from "antd/es/form/FormItem";

function UserFirstnameInput(props) {
    return (
        <FormItem
            name="First_Name"
            hasFeedback
            validateFirst
            rules={[
                {
                    required: true,
                    message: 'Пожалуйста введите имя',
                },
                {
                    max: 255,
                    message: "Максимальное значение 255"
                }
            ]}
        >
            <Flex vertical>
                <Typography.Text>Имя</Typography.Text>
                <Input
                    allowClear
                    prefix={<UserOutlined />}
                    placeholder="Введите имя"
                    id="user_fname_input"
                    maxLength={255}
                />
                <Typography.Text type="secondary">Пример: Иван</Typography.Text>
            </Flex>

        </FormItem>
    );
}

export default UserFirstnameInput;