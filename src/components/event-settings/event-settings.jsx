import {
  Button,
  Typography,
  Breadcrumb,
  Table,
  Flex,
  message,
  Form,
  Space,
} from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import dayjs from 'dayjs'
import { useState } from 'react'
import ApiPath from '@components/enums.js'
import CompitationModal from './event-settings-modal'
import EventName from '@src/UI/events/event-name'
import EventDate from '@src/UI/events/event-date'

function EventSettings() {
  const [loadings, setLoadings] = useState([])
  const [isAddCompitationModalOpen, setIsAddCompitationModalOpen] =
    useState(false)

  const update_event_request = async () => {
    const myHeaders = new Headers()
    myHeaders.append('accept', 'application/json')
    myHeaders.append('Content-Type', 'application/json')

    const raw = JSON.stringify({
      old_name: 'Робин',
      new_name: form.getFieldValue('event_name'),
      new_date: dayjs(form.getFieldValue('event_date')).format('YYYY-MM-DD'),
    }) //#TODO
    const requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
      credentials: 'include',
    }
    await fetch(`${ApiPath}/event/event`, requestOptions)
  }

  const columns = [
    {
      title: 'Название компетенции',
      dataIndex: 'name_compitation',
      key: 'name_nomination',
    },
    {
      title: 'Количество зарегестрированных участников',
      dataIndex: 'porticipants_count',
      key: 'porticipants_count',
    },
    {
      title: 'Действия',
      key: 'action',
      render: () => (
        <Flex>
          <Button type="text" icon={<EditOutlined />}></Button>
          <Button type="text" icon={<DeleteOutlined />}></Button>
        </Flex>
      ),
    },
  ]

  const onFinish = () => {
    message.success('Всё в порядке!')
  }

  const onFinishFailed = () => {
    message.error('Проверьте поля для ввода!')
  }

  const enterLoading = (index) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings]
      newLoadings[index] = true
      return newLoadings
    })
    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings]
        newLoadings[index] = false
        return newLoadings
      })
    }, 6000)
  }
  const [form] = Form.useForm()
  return (
    <Flex vertical gap="middle">
      <div>
        <Typography.Title level={2}>
          Редактирование мероприятия
        </Typography.Title>
        <Breadcrumb
          items={[
            {
              title: 'Мероприятия',
              href: './',
            },
            {
              title: 'Hастройка мероприятия',
            },
          ]}
        />
      </div>
      <Form
        form={form}
        layout="vertical"
        variant="filled"
        requiredMark="Default"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Flex vertical align="center">
          <Typography.Title level={2}>Данные мероприятия</Typography.Title>
        </Flex>
        <Flex
          vertical
          style={{
            width: '20%',
          }}
        >
          <EventName name="event_name" />
          <EventDate name="event_date" />
        </Flex>
        <Button
          type="primary"
          htmlType="submit"
          loading={loadings[0]}
          onClick={() => {
            enterLoading(0)
            update_event_request()
          }}
        >
          Сохранить данные
        </Button>
      </Form>
      <Space direction="vertical" size="middle">
        <Flex vertical align="center">
          <Typography.Title level={2}>Компетенции</Typography.Title>
        </Flex>
        <Flex vertical align="flex-end">
          <Button
            onClick={() => setIsAddCompitationModalOpen(true)}
            type="primary"
          >
            {' '}
            Добавить компетенцию{' '}
          </Button>
        </Flex>
        <Table
          columns={columns}
          //dataSource={data}
          //pagination={{position:'bottom'}}
        />
      </Space>
      <CompitationModal
        isOpen={isAddCompitationModalOpen}
        onOk={() => setIsAddCompitationModalOpen(false)}
        onCancel={() => setIsAddCompitationModalOpen(false)}
      />
    </Flex>
  )
}

export default EventSettings
