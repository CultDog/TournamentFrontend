import { Button, Flex, Typography, Tooltip } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react'
import AdminPanelControls from '@components/admin-panel/admin-panel-controls'
import ParticipantModal from './participant-modal.jsx'
import ParticipantsTable from './participants-table.jsx'
import ApiPath from '@components/enums.js'

function Participants() {
  const [isAddParticipantModalOpen, setIsAddParticipantModalOpen] =
    useState(false)

  const [participants, setParticipants] = useState([])

  const participants_request = async () => {
    const myHeaders = new Headers()
    myHeaders.append('accept', 'application/json')

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
      credentials: 'include',
    }

    const response = await fetch(
      `${ApiPath}/participant/participant?offset=0&limit=10`,
      requestOptions
    )
    const data = await response.json()
    setParticipants(data)
  }

  useEffect(() => {
    participants_request()
  }, [])

  return (
    <>
      <Typography.Title level={2}>Управление участниками</Typography.Title>

      <AdminPanelControls>
        <Flex gap="small">
          <Tooltip title="Сохранить список участников">
            <Button type="primary" icon={<DownloadOutlined />} />
          </Tooltip>
          <Button
            type="primary"
            onClick={() => setIsAddParticipantModalOpen(true)}
          >
            Добавить участника
          </Button>
        </Flex>
      </AdminPanelControls>

      <div>
        <ParticipantsTable ParticipantData={participants} />
      </div>

      <ParticipantModal
        isOpen={isAddParticipantModalOpen}
        onOk={() => setIsAddParticipantModalOpen(false)}
        onCancel={() => setIsAddParticipantModalOpen(false)}
      />
    </>
  )
}
export default Participants
