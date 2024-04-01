import React from 'react';
import {Flex, Input, Typography} from "antd";
import {BankOutlined} from "@ant-design/icons";
import FormItem from "antd/es/form/FormItem";

function ParticipantOrganizationInput({name}) {
    return (
        <Flex vertical style={{
            marginBottom: '24px'
        }}>
            <Typography.Text>Учреждение образования</Typography.Text>
            <FormItem
                name={name}
                hasFeedback
                validateFirst
                rules={[
                    {
                        required: true,
                        message: 'Пожалуйста, введите учереждение образования',
                    },
                    {
                        max: 255,
                        message: "Максимальное значение 255"
                    }
                ]}
                style={{
                    marginBottom: '0px'
                }}
            >
                <Input
                    prefix={<BankOutlined />}
                    placeholder="Введите учреждение образования"
                />
            </FormItem>
            <Typography.Text type="secondary">Пример: ГУО "Гимназия-колледж искусств"</Typography.Text>
        </Flex>
    );
}

export default ParticipantOrganizationInput;