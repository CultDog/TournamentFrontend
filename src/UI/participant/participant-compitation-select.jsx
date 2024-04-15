import React from 'react';
import FormItem from "antd/es/form/FormItem";
import {Select, Flex, Input, Space, Typography} from "antd";
import {FlagOutlined} from "@ant-design/icons";

function ParticipantCompitationSelect ({name}){
    return(
        <div style={{marginBottom: '24px'}}>
            <Typography.Text>Компетенция</Typography.Text>
            <Flex>
                <Space.Compact style={{
                    width: "100%"
                }}>
                    <Input
                        prefix={<FlagOutlined />}
                        style={{ width: "38px", height: "32px", border: "none" }}
                        disabled
                    />
                    <FormItem 
                        name={name} 
                        style={{
                        width: "100%",
                        marginBottom: '0px'
                        }}
                        hasFeedback
                        validateFirst
                        // rules={[
                        //     {
                        //         required: true,
                        //         message: 'Пожалуйста, выбирите компетенцию',
                        //     },
                        // ]}
                    >
                        <Select
                            // disabled={disabled}
                            id="user_compitation_select"
                            placeholder = "Выберите компетенцию"
                            options={[
                                {
                                    value: 'robofootball',
                                    label: 'Робофутбол',

                                },
                                {
                                    value: 'veb',
                                    label: 'Веб-разработка',

                                },
                                {
                                    value: 'robosumo',
                                    label: 'Робосумо'
                                },
                            ]}
                        />
                    </FormItem>
                </Space.Compact>
            </Flex>
        </div>
    )
}
export default ParticipantCompitationSelect;