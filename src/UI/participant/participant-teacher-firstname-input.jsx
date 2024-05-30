import React from 'react'
import FormItem from 'antd/es/form/FormItem'
import { Flex, Input, Typography } from 'antd'
import { TeamOutlined } from '@ant-design/icons'

function ParticipantTeacherFirstnameInput({ name }) {
  return (
    <FormItem
      name={name}
      hasFeedback
      validateFirst
      rules={[
        {
          required: true,
          message: 'Пожалуйста, введите имя педагога',
        },
        {
          max: 255,
          message: 'Максимальное значение 255',
        },
      ]}
    >
      <Flex vertical>
        <Typography.Text>Имя педагога</Typography.Text>
        <Input
          allowClear
          prefix={<TeamOutlined />}
          placeholder="Введите имя педагога"
          id="participant_teacher_fname_input"
          maxLength={255}
        />
        <Typography.Text type="secondary">Пример: Иван</Typography.Text>
      </Flex>
    </FormItem>
  )
}

export default ParticipantTeacherFirstnameInput
