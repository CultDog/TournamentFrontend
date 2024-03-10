import React from 'react';
import {Button, Flex, Typography} from "antd";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";

const ParticipantsTable = () => {
    const columns = [
        {
            title: 'ФИО',
            key: 'fullname',
            render: (_, { name, lastname, patronymic }) => (
                <Typography.Text>{`${lastname} ${name} ${patronymic}`}</Typography.Text>
            )
        },
        {
            title: 'Действия',
            key: 'action',
            render: () => (
                <Flex>
                    <Button type="text" icon={<EditOutlined/>} onClick={() => openEditModal()}></Button>
                    <Button type="text" icon={<DeleteOutlined/>} onClick={() => deleteUserConfirm()}></Button>
                </Flex>
            ),
        },
    ]

    return (
        <div>

        </div>
    );
};

export default ParticipantsTable;