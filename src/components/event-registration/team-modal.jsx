import React from 'react'
import { useState } from 'react'
import { Button, Flex, Form, Modal, message} from 'antd'
import TeamNameInput from '@src/UI/team/team-name-input'


function TeamModal({ isOpen, onOk, onCancel }) {
    const [isLoading, setIsLoading] = useState(false)
    const [form] = Form.useForm()
  
    const onFinish = () => {
      message.success('Всё в порядке!')
      setIsLoading(false)
    }
  
    const onFinishFailed = () => {
      message.error('Проверьте поля для ввода!')
      setIsLoading(false)
    }
  
    const create_team_request = async () => {
      const myHeaders = new Headers()
      myHeaders.append('accept', 'application/json')
      myHeaders.append('Content-Type', 'application/json')
  
      const raw = JSON.stringify({
        name: form.getFieldValue('teamName'),
      })
  
      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
        credentials: 'include',
      }
      await fetch(`${ApiPath}/team/teams`, requestOptions)
    }
  
    return (
      <Modal
        title="Добавление команды"
        style={{
          top: 20,
        }}
        open={isOpen}
        onOk={onOk}
        onCancel={onCancel}
        footer={[]}
      >
        <Form
          form={form}
          layout="vertical"
          variant="filled"
          requiredMark="Default"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
            <TeamNameInput name="teamName" />
            <Flex gap="middle">
                <Button
                type="primary"
                htmlType="submit"
                loading={isLoading}
                onClick={() => {
                    setIsLoading(true)
                    create_team_request()
                  }}
                >
                Сохранить
                </Button>
                <Button onClick={onCancel}>Отмена</Button>
            </Flex>
        </Form>
      </Modal>
    )
  }
  
  export default TeamModal