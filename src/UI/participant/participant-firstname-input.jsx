import React from 'react'
import { Flex, Input, Typography } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import FormItem from 'antd/es/form/FormItem'

function ParticipantFirstnameInput({ name }) {
  return (
    <Flex
      vertical
      style={{
        marginBottom: '24px',
      }}
    >
      <Typography.Text>Имя</Typography.Text>
      <FormItem
        name={name}
        hasFeedback
        validateFirst
        rules={[
          {
            required: true,
            message: 'Пожалуйста введите имя',
          },
          {
            max: 255,
            message: 'Максимальное значение 255',
          },
        ]}
        style={{
          marginBottom: '0px',
        }}
      >
        <Input
          allowClear
          prefix={<UserOutlined />}
          placeholder="Введите имя"
          maxLength={255}
        />
      </FormItem>
      <Typography.Text type="secondary">Пример: Иван</Typography.Text>
    </Flex>
  )
}

export default ParticipantFirstnameInput
