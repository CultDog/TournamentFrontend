import React from 'react';
import {Flex, Input, Typography} from "antd";
import {BankOutlined} from "@ant-design/icons";
import FormItem from "antd/es/form/FormItem";

function UserOrganizationInput(props) {
    return (
        <FormItem
            name="Organization"
            hasFeedback
            validateFirst
            rules={[
                {
                    required: true,
                    message: 'Пожалуйста, введите учереждение образования',
                },
            ]}
        >
            <Flex vertical>
                <Typography.Text>Учереждение образования</Typography.Text>
                <Input
                    prefix={<BankOutlined />}
                    placeholder="Введите учереждение образования"
                    id="user_organization_input"
                />
                <Typography.Text type="secondary">Пример: ГУО "Гимназия-колледж искусств</Typography.Text>
            </Flex>
        </FormItem>
    );
}

export default UserOrganizationInput;