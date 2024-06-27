import { Typography, Upload, message, Button, Flex } from 'antd'
import FormItem from 'antd/es/form/FormItem'
import { UploadOutlined } from '@ant-design/icons';

function EventRegulation({ name }) {
  return (
    <FormItem
      name={name}
      hasFeedback
      validateFirst
    >
      <Flex gap="middle">
        <Typography.Text>Положение о проведении мероприятия: </Typography.Text>
        <Upload 
          name = 'file'
          action = 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload'
          onChange= {(info) =>{
              if (info.file.status !== 'Загрузка') {
                console.log(info.file, info.fileList);
              }
              if (info.file.status === 'Готово') {
                message.success(`${info.file.name} Файл успешно загружен`);
              } else if (info.file.status === 'error') {
                message.error(`${info.file.name} Ошибка загрузки файла`);
              }
            }
          }
        >
          <Button icon={<UploadOutlined />}>Нажмите что бы загрузить</Button>
        </Upload>
      </Flex>
    </FormItem>
  )
}
export default EventRegulation
