import {
    Button,
    Typography,
    message,
  } from 'antd'
  import { useState , useEffect} from 'react'
  import Loader from '@components/loader/loader'
  import AdminPanelControls from '@components/admin-panel/admin-panel-controls'
  import ApiPath from '@components/enums.js'
  
  function JudjementEvents() {
  const [isAddEventModalOpen, setIsAddEventModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [dataEvent, setTeams] = useState([])
  
  useEffect(() => {
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
  }, [isLoading]);
  
  return(
    <>
    <Loader show={isLoading} /> 
    <Typography.Title level={2}>Редактирование мероприятий</Typography.Title>
    <AdminPanelControls>
          <Button type="primary" onClick={() => setIsAddEventModalOpen(true)}>
            Добавить мероприятие
          </Button>
    </AdminPanelControls>
  
    <EventTable TeamsData={dataEvent} />
  
    <EventModal
          isOpen={isAddEventModalOpen}
          onOk={() => setIsAddEventModalOpen(false)}
          onCancel={() => setIsAddEventModalOpen(false)}
        />
    </>
  )
  }
  
  export default JudjementEvents;
  