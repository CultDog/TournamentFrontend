import { Table, Flex, List, Button, Typography, Modal } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
function JudgmentEventsTable({ EventsData }) {
  const navigate = useNavigate()
  
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
              <Typography.Text>{`${item.name}`}</Typography.Text>
            </List.Item>
          )}
        />
      ),
    },
    {
      title: 'Дата мероприятия',
      key: 'dateEvent',
      dataIndex: 'date',
    },
    {
      title: 'Действия',
      key: 'action',
      render: ({id}) => (
        <Flex>
          <Button
            type="text"
            icon={<EditOutlined />}
            onClick={() => navigate(`/judgment/events/${id}/settings`)}
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
    </>
  )
}

export default JudgmentEventsTable
