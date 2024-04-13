import {Form, message, Modal, Button, Space } from 'antd'
import { useState} from 'react';
import dayjs from 'dayjs';
import FormItem from 'antd/es/form/FormItem';
import EventName from '@src/UI/events/event-name';
import EventDate from '@src/UI/events/event-date';

function CreateEventModal({ isOpen, onOk, onCancel }) {

    const [isLoading, setIsLoading] = useState(false);
    const [form] = Form.useForm();

    const onFinish = () => {
		message.success('Всё в порядке!');
		setIsLoading(false);
	};

	const onFinishFailed = () => {
		message.error('Проверьте поля для ввода!');
		setIsLoading(false);
	};

    const create_event_request = async () => {
        const myHeaders = new Headers();
        myHeaders.append("accept", "application/json");
        myHeaders.append("Content-Type", "application/json");
        
        const raw = JSON.stringify({
          "name": form.getFieldValue("event_name"),
          "date": dayjs(form.getFieldValue("event_date")).format('YYYY-MM-DD'),
        });
        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
          credentials: 'include',
        };
        await fetch(`${ApiPath}/event/event`, requestOptions)
    }

    return (
		<Modal
			title="Добавить мероприятие"
			style={{
				top: 20,
			}}
			open={isOpen}
			onOk={onOk}
			onCancel={onCancel}
			footer={[]}
		>
			<Form
                
				form={form}
				layout="vertical"
				variant="filled"
				requiredMark="Default"
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
			>
                <EventName name="event_name"/>
                <EventDate name="event_date"/>			
				<Space>
					<FormItem>
						<Button
							type="primary"
							htmlType="submit"
							loading={isLoading}
							onClick={() => {setIsLoading(true); create_event_request()}}
						>Добавить мероприятие</Button>
					</FormItem>
					<FormItem>
						<Button onClick={onCancel}>Отмена</Button>
					</FormItem>
				</Space>
			</Form>
		</Modal>
	)
}
export default CreateEventModal;