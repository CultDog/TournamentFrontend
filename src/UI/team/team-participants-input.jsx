import { Flex, Input, Select, Space, Typography } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import FormItem from 'antd/es/form/FormItem'

function TeamParticipantsInput({ name, options }) {

    const filterOption = (input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
  return (
    <Flex
      vertical
      style={{
        marginBottom: '24px',
      }}
    >
      <Typography.Text>Участники</Typography.Text>
      <Flex>
        <Space.Compact
          style={{
            width: '100%',
          }}
        >
          <Input
            prefix={<UserOutlined />}
            style={{ width: '38px' }}
            disabled
          />
          <FormItem
            name={name}
            style={{
              width: '100%',
              marginBottom: '0px',
            }}
          >
            <Select
              allowClear
              mode="multiple"
              showSearch
              name="team_participant_select"
              value=""
              filterOption={filterOption}
              options={options}
            />
          </FormItem>
        </Space.Compact>
      </Flex>
      <Typography.Text type="secondary">
        Робофутбол
      </Typography.Text>
    </Flex>
  )
}

export default TeamParticipantsInput

