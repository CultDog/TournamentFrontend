/* eslint-disable prettier/prettier */
import { Modal, Button, Flex, Table, InputNumber } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import { useState } from 'react'

function ModalGroupStage(match) {
  const [visible, setVisible] = useState(false)

  
  console.log(match)

  const data = [
    {
        key: '1',
        participants: match.match?.team1,
        result: 0,
    },
    {
        key: '2',
        participants: match.match?.team2,
        result: 0,
    }
  ]
  const columns = [
    {
        title: 'Участники',
        key: 'participants',
        dataIndex: 'participants',
    },
    {
        title: 'Счёт',
        key: 'result',
        dataIndex: 'result',
        render:() => (
            <div>
                <InputNumber></InputNumber>
            </div>
        )
    }
  ]

  const showModal = () => {
    setVisible(true)
  }

  const handleOk = () => {
    setVisible(false)
  }
  const handleCancel = () => {
    setVisible(false)
  }


  return (
    <>
      <Flex>
        <Button
          type="text"
          icon={<EditOutlined />}
          onClick={showModal}
        ></Button>
        <Modal
          title={'Сообщить счёт'}
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
          okText={'Отправить оценки'}
          cancelButtonProps={{
            style: {
                display: 'none'
            }
          }}
        >
            <Table
                columns={columns}
                pagination={false}
                dataSource={data}
            />
        </Modal>
      </Flex>
    </>
  )
}

export default ModalGroupStage
