import React from 'react';
import {Flex, Input, Typography} from "antd";
import {BankOutlined} from "@ant-design/icons";
import FormItem from "antd/es/form/FormItem";

function UserOrganizationInput({name}) {
    return (
        <Flex vertical style={{
            marginBottom: '24px'
        }}>
            <Typography.Text>Учереждение образования</Typography.Text>
            <FormItem
                name={name}
                hasFeedback
                validateFirst
                style={{
                    marginBottom: '0px'
                }}
            >
                <Input
                    prefix={<BankOutlined />}
                    placeholder="Введите учереждение образования"
                />
            </FormItem>
            <Typography.Text type="secondary">Пример: ГУО "Гимназия-колледж искусств"</Typography.Text>
        </Flex>
    );
}

export default UserOrganizationInput;