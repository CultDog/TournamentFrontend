import { Button, Flex, Typography} from 'antd';
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
        <Flex vertical gap="small">
            <Typography.Title level={2}>Управление участниками</Typography.Title>

            <AdminPanelControls>
                <Button 
                    type="primary" 
                    onClick={() => setIsParticipantModalOpen(true)}
                >Добавить участника</Button>
            </AdminPanelControls>

            <div>
				<ParticipantsTable ParticipantData={ParticipantData} />
			</div>

			<ParticipantModal
				isOpen={isAddParticipantModalOpen}
				onOk={() => setIsAddParticipantModalOpen(false)}
				onCancel={() => setIsAddParticipantModalOpen(false)}
			/>

        </Flex>
    )
}
export default Participants;