import React from 'react'
import FormItem from 'antd/es/form/FormItem'
import { Flex, Input, Typography } from 'antd'
import { BankOutlined } from '@ant-design/icons'

function ParticipantAdditionalOrganiztionInput({ name }) {
  return (
    <FormItem name={name}>
      <Flex vertical>
        <Typography.Text>
          Дополнительное учереждение образования
        </Typography.Text>
        <Input
          prefix={<BankOutlined />}
          placeholder="Введите дополнительное учереждение образования"
          id="participant_additionalorganization_input"
        />
        <Typography.Text type="secondary">
          Пример: Очумелые ручки
        </Typography.Text>
      </Flex>
    </FormItem>
  )
}
export default ParticipantAdditionalOrganiztionInput
