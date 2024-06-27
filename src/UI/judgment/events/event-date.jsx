import { DatePicker, Typography } from 'antd'
import FormItem from 'antd/es/form/FormItem'
import Locale from '@src/UI/locale-settings.jsx'

function EventDate({ name }) {
  const configDate = {
    rules: [
      {
        type: 'object',
        required: true,
        message: 'Пожалуйста выбирите дату мероприятия',
      },
    ],
  }
  return (
    <>
      <Typography.Text>Дата мероприятия</Typography.Text>
      <FormItem name={name} hasFeedback validateFirst {...configDate}>
        <DatePicker
          locale={Locale}
          id="event_date"
          format="DD-MM-YYYY"
          placeholder="Выберите дату мероприятия"
          style={{ width: '100%' }}
        />
      </FormItem>
    </>
  )
}
export default EventDate
