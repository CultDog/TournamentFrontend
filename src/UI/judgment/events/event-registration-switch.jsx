import { Typography, Switch, Flex } from 'antd'
import FormItem from 'antd/es/form/FormItem'

function EventName({ name }) {
  return (
    <FormItem
      name={name}
      hasFeedback
      validateFirst
    >
      <Flex vertical>
        <Typography.Text>Регистрация открыта/закрыта</Typography.Text>
        <Switch onChange={console.log("switched")} style={{width : '10%'}}/>
      </Flex>
    </FormItem>
  )
}
export default EventName
