import React from 'react'
import FormItem from 'antd/es/form/FormItem'
import { Flex, Input, Space, Typography, AutoComplete } from 'antd'
import { FlagOutlined } from '@ant-design/icons'

function CompitationNameInput({ name }) {
  return (
    <div style={{ marginBottom: '24px' }}>
      <Typography.Text>Компитенция</Typography.Text>
      <Flex>
        <Space.Compact
          style={{
            width: '100%',
          }}
        >
          <Input
            prefix={<FlagOutlined />}
            style={{ width: '38px', height: '32px', border: 'none' }}
            disabled
          />
          <FormItem
            name={name}
            hasFeedback
            validateFirst
            rules={[
              {
                required: true,
                message: 'Пожалуйста, выбирите мероприятие',
              },
              {
                min: 5,
                message: 'Минимальное значение 5',
              },
            ]}
          >
            <Flex vertical>
              <AutoComplete
                allowClear
                style={{ width: '100%' }}
                placeholder="Выбирите компетенцию"
                maxLength={255}
                options={[
                  { value: 'Робофутбол' },
                  { value: 'Веб-разработка' },
                  { value: 'Робосуммо' },
                ]}
              />
              <Typography.Text type="secondary">
                Пример: Робофутбол
              </Typography.Text>
            </Flex>
          </FormItem>
        </Space.Compact>
      </Flex>
    </div>
  )
}
export default CompitationNameInput
