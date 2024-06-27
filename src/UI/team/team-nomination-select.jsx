import { Flex, Input, Select, Space, Typography } from 'antd'
import { FlagOutlined } from '@ant-design/icons'
import FormItem from 'antd/es/form/FormItem'

function TeamNominationInput({ name, options }) {
  const filterOption = (input, option) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())

  return (
    <Flex
      vertical
      style={{
        marginBottom: '24px',
      }}
    >
      <Typography.Text>Компетенция</Typography.Text>
      <Flex>
        <Space.Compact
          style={{
            width: '100%',
          }}
        >
          <Input prefix={<FlagOutlined />} style={{ width: '38px' }} disabled />
          <FormItem
            name={name}
            style={{
              width: '100%',
              marginBottom: '0px',
            }}
          >
            <Select
              name="team_nomination_select"
              value=""
              showSearch
              filterOption={filterOption}
              options={options}
            />
          </FormItem>
        </Space.Compact>
      </Flex>
      <Typography.Text type="secondary">Робофутбол</Typography.Text>
    </Flex>
  )
}

export default TeamNominationInput
