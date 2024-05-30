import React from 'react'
import { DatePicker, Flex, Input, Space, Typography } from 'antd'
import { CalendarOutlined } from '@ant-design/icons'
import FormItem from 'antd/es/form/FormItem'

const ParticipantBirthdayInput = () => {
  return (
    <>
      <Typography.Text>Дата рождения</Typography.Text>
      <Flex>
        <Space.Compact style={{ width: '100%' }}>
          <Input
            prefix={<CalendarOutlined />}
            disabled
            style={{ width: '38px', height: '57%', border: 'none' }}
          />
          <FormItem
            name="event_date"
            hasFeedback
            validateFirst
            rules={[
              {
                type: 'object',
                required: true,
                message: 'Пожалуйста, выбирите дату рождения',
              },
            ]}
            style={{ width: '100%' }}
          >
            <DatePicker
              format="DD-MM-YYYY"
              style={{ width: '100%' }}
              placeholder="Выберите дату рождения"
            />
          </FormItem>
        </Space.Compact>
      </Flex>
    </>
  )
}

export default ParticipantBirthdayInput
