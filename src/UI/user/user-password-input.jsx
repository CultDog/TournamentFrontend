import React from 'react';
import {Flex, Input, Typography} from "antd";
import {EyeInvisibleOutlined, LockOutlined} from "@ant-design/icons";
import FormItem from "antd/es/form/FormItem";

function UserPasswordInput({name, required}) {
    return (
        <Flex vertical style={{
            marginBottom: '24px'
        }}>
            <Typography.Text>Пароль</Typography.Text>
            <FormItem
                name={name}
                hasFeedback
                validateFirst
                rules={[
                    {
                        required: required ?? false,
                        message: 'Пожалуйста введите пароль',
                    },
                    {
                        min: 8,
                        message: 'Минимальная длина пароля - 8 символов',
                    }
                ]}
                style={{
                    marginBottom: '0px'
                }}
            >
                <Input.Password
                    prefix={<LockOutlined />}
                    placeholder="Введите Пароль"
                    iconRender={() => <EyeInvisibleOutlined />}
                />
            </FormItem>
        </Flex>
    );
}

export default UserPasswordInput;