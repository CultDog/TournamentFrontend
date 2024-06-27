import {
  Typography,
  Breadcrumb,
  message,
  Card,
  Calendar,
  Flex,
} from 'antd'
import { useState } from 'react'
import EventsList from '@components/events/events-list'
import Loader from '@components/loader/loader'
import Locale from '@src/UI/locale-settings.jsx'
import ApiPath from '@components/enums.js'


function Events() {
  const [isLoading, setIsLoading] = useState(true)
  const [events, setEvents] = useState([])

  if (isLoading) {
    fetch(`${ApiPath}/event/events_with_nominations?offset=0&limit=10`, {
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
      .finally(() => setTimeout(() => setIsLoading(false), 300))
  }

  return (
    <>
      <Loader show={isLoading} />
      <Typography.Title level={2}>Мероприятия</Typography.Title>
      <Flex vertical gap={50}>
        <Breadcrumb
          items={[
            {
              title: 'Мероприятия',
            },
          ]}
        />
        <Flex gap="small">
          <EventsList events={events} />
          <Card
            style={{
              minWidth: 390,
              width: 390,
              minHeight: 360,
              height: 360,
            }}
          >
            <Calendar fullscreen={false} locale={Locale} />
          </Card>
        </Flex>
      </Flex>
    </>
  )
}

export default Events
