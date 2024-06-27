import { Typography, Upload, message, Button, Flex } from 'antd'
import FormItem from 'antd/es/form/FormItem'
import { UploadOutlined } from '@ant-design/icons';

const UPLOADING = 'uploading';
const DONE = 'done';
const ERROR = 'error';

function EventRegulation({ name }) {

  const props = {
    name : 'file',
    action : 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    onChange(info) {
      if (info.file.status !== UPLOADING) {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === DONE) {
        message.success(`${info.file.name} Файл загружен успешно`);
      } else if (info.file.status === ERROR) {
        message.error(`${info.file.name} Ошибка загрузки файла`);
      }
    },
  };
    
  return (
    <FormItem
      name={name}
      hasFeedback
      validateFirst
    >
      <Flex gap="middle">
        <Typography.Text>Положение о проведении мероприятия: </Typography.Text>
        <Upload {...props} >
          <Button icon={<UploadOutlined />}>Нажмите что бы загрузить</Button>
        </Upload>
      </Flex>
    </FormItem>
  )
}
export default EventRegulation
