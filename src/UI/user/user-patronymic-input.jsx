import React from 'react';
import {Flex, Input, Typography} from "antd";
import {UserOutlined} from "@ant-design/icons";
import FormItem from "antd/es/form/FormItem";

function UserPatronymicInput(props) {
    return (
        <FormItem
            name="Sur_Name"
            hasFeedback
            validateFirst
            rules={[
                {
                    max: 255,
                    message: "Максимальное значение 255"
                }
            ]}>
            <Flex vertical>
                <Typography.Text>Отчество (если таковое имеется)</Typography.Text>
                <Input
                    prefix={<UserOutlined />}
                    allowClear
                    placeholder="Введите отчество"
                    id="user_sname_input"
                    maxLength={255}
                />
                <Typography.Text type="secondary">Пример: Иванович</Typography.Text>
            </Flex>

        </FormItem>
    );
}

export default UserPatronymicInput;