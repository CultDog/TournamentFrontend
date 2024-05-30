import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, List, Modal, Tooltip, Typography } from 'antd'
import {
  EditOutlined,
  EllipsisOutlined,
  DeleteOutlined,
} from '@ant-design/icons'
import dayjs from 'dayjs'
const EventsList = ({ events }) => {
  const data = events.map((event, index) => {
    const delete_user_request = async () => {
      const myHeaders = new Headers()
      myHeaders.append('accept', 'application/json')
      myHeaders.append('Content-Type', 'application/json')

      const raw = JSON.stringify({
        name: event.name,
      })

      const requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
        credentials: 'include',
      }

      await fetch(`${ApiPath}/event/event`, requestOptions)
    }
    const navigate = useNavigate()
    const deleteEventConfirm = () => {
      Modal.confirm({
        title: 'Вы уверены?',
        content: 'Вы уверены, что хотите удалить это мероприятие?',
        footer: (_, { OkBtn, CancelBtn }) => (
          <>
            <OkBtn />
            <CancelBtn />
          </>
        ),
        onOk: () => delete_user_request(),
        okText: 'Да',
        cancelText: 'Отмена',
      })
    }
    return (
      <Card
        key={index}
        size="default"
        cover={
          <img
            alt="test"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[
          <Tooltip title="Редактировать мероприятие">
            <EditOutlined
              key="edit"
              onClick={() => navigate('/admin/events/settings')}
            />
          </Tooltip>,
          <Tooltip title="Удалить мероприятие">
            <DeleteOutlined key="delete" onClick={() => deleteEventConfirm()} />
          </Tooltip>,
          <Tooltip title="Перейти к мероприятию">
            <EllipsisOutlined key="ellipsis" />
          </Tooltip>,
        ]}
        title={<Typography.Title level={2}>{event.name}</Typography.Title>}
        extra={
          <Typography.Text type="secondary">
            {dayjs(event.date).format('DD-MM-YYYY')}
          </Typography.Text>
        }
      >
        <List
          size="small"
          header={<Typography.Text>Компетенции: </Typography.Text>}
          footer={
            <Typography.Text type="secondary">
              Регистрация открыта
            </Typography.Text>
          }
          dataSource={event.nominations}
          renderItem={(item) => <List.Item>{item.name}</List.Item>}
        />
      </Card>
    )
  })

  return (
    <List
      grid={{ gutter: 5, column: 3 }}
      pagination={{
        hideOnSinglePage: true,
        pageSize: 3,
        position: 'bottom',
        align: 'center',
      }}
      dataSource={data}
      renderItem={(item) => <List.Item>{item}</List.Item>}
      locale={{
        emptyText: 'Мероприятия отсутствуют',
      }}
      style={{
        width: '100%',
      }}
    />
  )
}

export default EventsList
