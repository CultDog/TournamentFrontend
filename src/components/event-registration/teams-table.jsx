import { Table, Flex, List, Button, Typography, Modal } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import TeamModal from '@components/event-registration/team-modal'
import { useState } from 'react'

function TeamsTable({ TeamsData }) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)

  const deleteUserConfirm = () => {
    Modal.confirm({
      title: 'Вы уверены?',
      content: 'Вы уверены что хотите удалить эту команду?',
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

  const changeTeamData = () => {
    setIsEditModalOpen(false)
  }

  const columns = [
    {
      title: 'Команда',
      key: 'nameTeam',
      dataIndex: 'name',
      
    },
    {
      title: 'Компетенция',
      key: 'nomination',
      dataIndex: 'nomination'
    },
    {
        title: 'Участники',
        key: 'participants',
        render: (_, {participants}) => (
        <List
            locale={{
                emptyText: 'Участники пока отсутствуют',  
            }}
            split = {false}
            dataSource={participants}
            renderItem={(item) => (
            <List.Item><Typography.Text>{`${item.second_name} ${item.first_name} ${item.third_name}`}</Typography.Text></List.Item>
            )}
        />
        
        )
      
    },
    {
      title: "Статус",
      key: 'Status',
      dataIndex:'Status'
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
      <Table dataSource={TeamsData} columns={columns} />

      <TeamModal
        isOpen={isEditModalOpen}
        onOk={() => changeTeamData()}
        onCancel={() => setIsEditModalOpen(false)}
      />
    </>
  )
}

export default TeamsTable
