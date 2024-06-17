import { Flex, Input, Select, Space, Typography } from 'antd'
import { CrownOutlined } from '@ant-design/icons'
import FormItem from 'antd/es/form/FormItem'

function UserRoleInput({ name, ...props }) {
  const disabled = props.disabled ?? false

  return (
    <Flex
      vertical
      style={{
        marginBottom: '24px',
      }}
    >
      <Typography.Text>Роль пользователя</Typography.Text>
      <Flex>
        <Space.Compact
          style={{
            width: '100%',
          }}
        >
          <Input
            prefix={<CrownOutlined />}
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
              disabled={disabled}
              name="role_select"
              value="specialist"
              options={[
                {
                  value: 'admin',
                  label: 'Администратор',
                },
                {
                  value: 'judge',
                  label: 'Судья',
                },
                {
                  value: 'specialist',
                  label: 'Специалист',
                },
              ]}
            />
          </FormItem>
        </Space.Compact>
      </Flex>
      <Typography.Text type="secondary">
        Обратитесь к администратору сайта, чтобы изменить роль
      </Typography.Text>
    </Flex>
  )
}

export default UserRoleInput
