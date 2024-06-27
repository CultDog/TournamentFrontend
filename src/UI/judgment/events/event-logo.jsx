import { Typography, Upload, message, Button, Flex } from 'antd'
import FormItem from 'antd/es/form/FormItem'
import { UploadOutlined } from '@ant-design/icons'
import { FILE_UPLOADING } from '@components/enums.js'
import './sass/events.scss'

function EventLogo({ name }) {
  const props = {
    name: 'file',
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    onChange(info) {
      if (info.file.status !== UPLOADING) {
        console.log(info.file, info.fileList)
      }
      if (info.file.status === DONE) {
        message.success(`${info.file.name} Файл загружен успешно`)
      } else if (info.file.status === ERROR) {
        message.error(`${info.file.name} Ошибка загрузки файла`)
      }
    },
  }

  return (
    <FormItem name={name} hasFeedback validateFirst>
      <Flex gap="middle">
        <Typography.Text>Логотип: </Typography.Text>
        <Upload
          {...FILE_UPLOADING.UPLOAD}
          onChange={(info) => {
            if (info.file.status !== FILE_UPLOADING.UPLOADING) {
            }
            if (info.file.status === FILE_UPLOADING.DONE) {
              message.success(`${info.file.name} Файл загружен успешно`)
            } else if (info.file.status === FILE_UPLOADING.ERROR) {
              message.error(`${info.file.name} Ошибка загрузки файла`)
            }
          }}
        >
          <Button icon={<UploadOutlined />}>Нажмите что бы загрузить</Button>
        </Upload>
      </Flex>
    </FormItem>
  )
}
export default EventLogo
