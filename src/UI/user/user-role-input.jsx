import React, { useRef } from 'react';
import {Flex, Input, Select, Space, Typography} from "antd";
import {CrownOutlined} from "@ant-design/icons";
import FormItem from "antd/es/form/FormItem";

function UserRoleInput(props) {
    const disabled = props.disabled ?? false;
    return (
        <FormItem>
            <Flex vertical>
                <Typography.Text>Роль пользователя</Typography.Text>
                    <Flex>
                        <Space.Compact style={{
                            width: "100%"
                        }}>
                            <Input
                                prefix={<CrownOutlined />}
                                style={{ "width": "38px" }}
                                disabled
                            />
                            <Select
                                disabled={disabled}
                                id="user_role_select"
                                defaultValue="specialist"
                                onSelect={(value) => props.onSelect(value)}
                                value={props.value}
                                options={[
                                    {
                                        value: 'judge',
                                        label: 'Судья',

                                    },
                                    {
                                        value: 'specialist',
                                        label: 'Специалист',
                                    },
                                ]}
                            />
                        </Space.Compact>
                    </Flex>
                <Typography.Text type="secondary">Обратитесь к администратору сайта, чтобы изменить роль</Typography.Text>
            </Flex>
        </FormItem>
    );
}

export default UserRoleInput;