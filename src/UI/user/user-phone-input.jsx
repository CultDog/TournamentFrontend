import React from 'react';
import {Flex, Input, InputNumber, Typography} from "antd";
import {PhoneOutlined} from "@ant-design/icons";
import FormItem from "antd/es/form/FormItem";

function UserPhoneInput(props) {
    return (
        <FormItem
            name="Telephone"
            hasFeedback
            validateFirst
            rules={[
                {
                    required: true,
                    message: 'Пожалуйста введите телефон',
                },
                {
                    min: 9,
                    message: "Телефон должен быть длиной 9 цифер"
                },
                // {
                //     type: "number",
                //     message: "Телефон должен быть числом"
                // },
            ]}
        >
            <Flex vertical>
                <Typography.Text>Телефон</Typography.Text>
                <Input
                    prefix={<PhoneOutlined />}
                    addonBefore={"+375"}
                    type="tel"
                    allowClear
                    placeholder="Введите телефон"
                    maxLength={9}
                    id="user_phone_input"
                />
                <Typography.Text type="secondary">Пример: 25 123-45-67</Typography.Text>
            </Flex>
        </FormItem>
    );
}

export default UserPhoneInput;