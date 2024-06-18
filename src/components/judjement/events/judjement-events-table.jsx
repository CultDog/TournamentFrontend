import { Table, Flex, List, Button, Typography, Modal } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { useState } from 'react'

function JudjementEventsTable({ EventsData }) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)

  const deleteUserConfirm = () => {
    Modal.confirm({
      title: 'Вы уверены?',
      content: 'Вы уверены что хотите удалить это мероприятие?',
      footer: (_, { OkBtn, CancelBtn }) => (
        <>
          <OkBtn />
          <CancelBtn />
        </>
      ),
      okText: 'Да',
      cancelText: 'Отмена',
    })
  }

  const openEditModal = () => {
    setIsEditModalOpen(true)
  }

  const changeEventData = () => {
    setIsEditModalOpen(false)
  }

  const columns = [
    {
      title: 'Название мероприятия',
      key: 'nameEvent',
      dataIndex: 'name',
    },
    {
      title: 'Компетенции',
      key: 'nominations',
      render: (_, { nominations }) => (
        <List
          locale={{
            emptyText: 'Компетенции пока отсутствуют',
          }}
          split={false}
          dataSource={nominations}
          renderItem={(item) => (
            <List.Item>
              <Typography.Text>{`${item.second_name} ${item.first_name} ${item.third_name}`}</Typography.Text>
            </List.Item>
          )}
        />
      ),
    },
    {
      title: 'Дата мероприятия',
      key: 'dateEvent',
      dataIndex: 'ii',
    },
    {
      title: 'Действия',
      key: 'action',
      render: () => (
        <Flex>
          <Button
            type="text"
            icon={<EditOutlined />}
            onClick={() => openEditModal()}
          ></Button>
          <Button
            type="text"
            icon={<DeleteOutlined />}
            onClick={() => deleteUserConfirm()}
          ></Button>
        </Flex>
      ),
    },
  ]

  return (
    <>
      <Table dataSource={EventsData} columns={columns} />

      <EventModal
        isOpen={isEditModalOpen}
        onOk={() => changeEventData()}
        onCancel={() => setIsEditModalOpen(false)}
      />
    </>
  )
}

export default JudjementEventsTable
