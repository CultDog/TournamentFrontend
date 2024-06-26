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
                  value: 'Minsk',
                  label: 'г.Минск',
                },
                {
                  value: 'minskreg',
                  label: 'Минская область',
                },
                {
                  value: 'mogilev',
                  label: 'Могилевская область',
                },
                {
                  value: 'grodno',
                  label: 'Гродненская область',
                },
                {
                  value: 'gomel',
                  label: 'Гомельская область',
                },
                {
                  value: 'brest',
                  label: 'Брестская область',
                },
                {
                  value: 'vitebsk',
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
