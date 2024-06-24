import {
    Button,
    Typography,
    message,
  } from 'antd'
  import { useNavigate } from 'react-router-dom'
  import { useState , useEffect} from 'react'
  import Loader from '@components/loader/loader'
  import AdminPanelControls from '@components/admin-panel/admin-panel-controls'
  import ApiPath from '@components/enums.js'
  import EventTable from '@components/judgment/events/judgment-events-table'
  
  function JudgmentEvents() {
  const [isLoading, setIsLoading] = useState(true)
  const [dataEvents, setEvents] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    if (isLoading) {
      fetch(`${ApiPath}/event/events_with_nominations?offset=0&limit=49`, {
        method: 'GET',
        headers: {
          accept: 'application/json',
        },
        redirect: 'follow',
        credentials: 'include',
      })
        .then((response) => response.json())
        .then((data) => setEvents(data))
        .catch(() =>
          message.error('Невозможно получить данные. Обратитесь к администратору')
        )
        .finally(() => setIsLoading(false))
    }
  }, [isLoading]);
  return(
    <>
    <Loader show={isLoading} /> 
    <Typography.Title level={2}>Редактирование мероприятий</Typography.Title>
    <AdminPanelControls>
          <Button type="primary" onClick={() => navigate(`/judgment/events/create`)}>
            Добавить мероприятие
          </Button>
    </AdminPanelControls>
  
    <EventTable EventsData={dataEvents} />
    </>
  )
  }
  
  export default JudgmentEvents;
  