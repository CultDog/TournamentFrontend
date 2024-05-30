import React from 'react'
import { Flex, Input, Typography } from 'antd'
import { MailOutlined } from '@ant-design/icons'
import FormItem from 'antd/es/form/FormItem'

function ParticipnatEmailInput({ name }) {
  return (
    <Flex
      vertical
      style={{
        marginBottom: '24px',
      }}
    >
      <Typography.Text>Email</Typography.Text>
      <FormItem
        name={name}
        hasFeedback
        validateFirst
        shouldUpdate={true}
        rules={[
          {
            required: true,
            message: 'Пожалуйста, введите Email',
          },
          {
            type: 'email',
            message: 'Некоректный Email',
          },
        ]}
        style={{
          marginBottom: '0px',
        }}
      >
        <Input
          prefix={<MailOutlined />}
          type="email"
          placeholder="Введите Email"
        />
      </FormItem>
      <Typography.Text type="secondary">
        Пример: example@example.com
      </Typography.Text>
    </Flex>
  )
}

export default ParticipnatEmailInput
