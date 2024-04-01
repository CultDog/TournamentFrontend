import { Button, Flex, Typography} from 'antd';
import {DownloadOutlined} from "@ant-design/icons";
import { useState } from "react";
import AdminPanelControls from "@components/admin-panel/admin-panel-controls";
import ParticipantModal from "./participant-modal.jsx";
import ParticipantsTable from "./participants-table.jsx";

function Participants() {
    
    const [isAddParticipantModalOpen, setIsAddParticipantModalOpen] = useState(false);

    const ParticipantData = [
		{
			key: '1',
			name: 'Иван',
			lastname: "Иванов",
			patronymic: "Иванович",
			participant_region: "Минская область",
            participant_organization : "ГУО Минская гимназия №1"
		}
	];

    return (
        <>
            <Typography.Title level={2}>Управление участниками</Typography.Title>

            <AdminPanelControls>
                <Flex gap="small">
                    <Button type="primary" icon={<DownloadOutlined />}/>
                    <Button 
                        type="primary" 
                        onClick={() => setIsAddParticipantModalOpen(true)}
                    >Добавить участника</Button>
                </Flex>
            </AdminPanelControls>

            <div>
				<ParticipantsTable ParticipantData={ParticipantData} />
			</div>

			<ParticipantModal
				isOpen={isAddParticipantModalOpen}
				onOk={() => setIsAddParticipantModalOpen(false)}
				onCancel={() => setIsAddParticipantModalOpen(false)}
			/>

        </>
    )
}
export default Participants;