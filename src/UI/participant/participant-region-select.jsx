import React from 'react'
import FormItem from 'antd/es/form/FormItem'
import { Select, Flex, Input, Space, Typography } from 'antd'
import { EnvironmentOutlined } from '@ant-design/icons'

function ParticipantRegionSelect({ name }) {
  return (
    <div style={{ marginBottom: '24px' }}>
      <Typography.Text>Регион</Typography.Text>
      <Flex>
        <Space.Compact
          style={{
            width: '100%',
          }}
        >
          <Input
            prefix={<EnvironmentOutlined />}
            style={{ width: '38px', height: '32px', border: 'none' }}
            disabled
          />
          <FormItem
            name={name}
            style={{
              width: '100%',
              marginBottom: '0px',
            }}
            hasFeedback
            validateFirst
            rules={[
              {
                required: true,
                message: 'Пожалуйста, выбирите регион',
              },
            ]}
          >
            <Select
              // disabled={disabled}
              value={''}
              id="participant_region_select"
              placeholder="Выберите регион"
              options={[
                {
                  value: 'г.Минск',
                  label: 'г.Минск',
                },
                {
                  value: 'Минская область',
                  label: 'Минская область',
                },
                {
                  value: 'Могилевская область',
                  label: 'Могилевская область',
                },
                {
                  value: 'Гродненская область',
                  label: 'Гродненская область',
                },
                {
                  value: 'Гомельская область',
                  label: 'Гомельская область',
                },
                {
                  value: 'Брестская область',
                  label: 'Брестская область',
                },
                {
                  value: 'Витебская область',
                  label: 'Витебская область',
                },
              ]}
            />
          </FormItem>
        </Space.Compact>
      </Flex>
    </div>
  )
}
export default ParticipantRegionSelect
