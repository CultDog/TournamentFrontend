import {
  Button,
  Typography,
  message,
  Flex,
} from 'antd'
import { useState } from 'react'
import TeamModal from '@components/event-registration/team-modal'
import TeamsTable from '@components/event-registration/teams-table'
import Loader from '@components/loader/loader'
import AdminPanelControls from '@components/admin-panel/admin-panel-controls'
import ApiPath from '@components/enums.js'

function EventsRegistration() {
const [isAddTeamModalOpen, setIsAddTeamModalOpen] = useState(false)
const [isLoading, setIsLoading] = useState(true)
const [dataTeams, setTeams] = useState([])
if (isLoading) {
  fetch(`${ApiPath}/team/teams?offset=0&limit=49`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
    redirect: 'follow',
    credentials: 'include',
  })
    .then((response) => response.json())
    .then((data) => setTeams(data))
    .catch(() =>
      message.error('Невозможно получить данные. Обратитесь к администратору')
    )
    .finally(() => setTimeout(() => setIsLoading(false), 300))
}
return(
  <>
  <Loader show={isLoading} /> 
  <Typography.Title level={2}>Регистрация участников</Typography.Title>

  <AdminPanelControls>
        <Button type="primary" onClick={() => setIsAddTeamModalOpen(true)}>
          Добавить команду
        </Button>
  </AdminPanelControls>

  <TeamsTable TeamsData={dataTeams} />

  <TeamModal
        isOpen={isAddTeamModalOpen}
        onOk={() => setIsAddTeamModalOpen(false)}
        onCancel={() => setIsAddTeamModalOpen(false)}
      />
  </>
)
}

export default EventsRegistration;
