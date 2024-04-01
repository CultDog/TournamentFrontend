import React from 'react';
import {Button, Flex, Modal, Table, Typography} from "antd";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import ParticipantModal from './participant-modal';
import { useState } from 'react';

function ParticipantsTable ({ParticipantData}) {

    const columns = [
        {
            title: 'ФИО',
            key: 'participant_fullname',
            render: (_, { name, lastname, patronymic }) => (
                <Typography.Text>{`${lastname} ${name} ${patronymic}`}</Typography.Text>
            )
        },
        {
            title: 'Регион',
            dataIndex: 'participant_region',
            key: 'participant_region',
        },
        {
            title: 'Учреждение образования',
            dataIndex: 'participant_organization',
            key: 'participant_organization',
        },
        {
            title: 'Действия',
            key: 'action',
            render: () => (
                <Flex>
                    <Button type="text" icon={<EditOutlined/>} onClick={() => openEditModal()}></Button>
                    <Button type="text" icon={<DeleteOutlined/>} onClick={() => deleteParticipantConfirm()}></Button>
                </Flex>
            ),
        },
    ]

    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

	const deleteParticipantConfirm = () => {
		Modal.confirm({
			title: 'Вы уверены?',
			content: 'Вы уверены что хотите удалить этого участника?',
			footer: (_, { OkBtn, CancelBtn }) => (
				<>
					<OkBtn />
					<CancelBtn />
				</>
			),
			okText: 'Да',
			cancelText: 'Отмена'
		});
	}

	const openEditModal = () => {
		setIsEditModalOpen(true);
	}

	const changeParticipantData = () => {
		setIsEditModalOpen(false);
	}

    return (
        <div>
            <Table 
                dataSource={ParticipantData}
                columns={columns} 
            />

            <ParticipantModal
				isOpen={isEditModalOpen}
				onOk={() => changeParticipantData()}
				onCancel={() => setIsEditModalOpen(false)}
			/>
        </div>
    );
};

export default ParticipantsTable;