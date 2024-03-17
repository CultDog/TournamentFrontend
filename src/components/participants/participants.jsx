import { Button, DatePicker, Input, Typography, message, Flex, Form, Space } from 'antd';
import { UserOutlined, BankOutlined, MailOutlined, CalendarOutlined, TeamOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { useState } from "react"
import FormItem from 'antd/es/form/FormItem';
import dayjs from 'dayjs';
import AdminPanelControls from "@components/admin-panel/admin-panel-controls";

function Participants() {
    const [isLoading, setIsLoading] = useState(false);

    const configDate = {
        rules: [
            {
                type: 'object',
                required: true,
                message: 'Пожалуйста, выбирите дату рождения',
            },
        ],
    };

    const onFinish = () => {

        const formattedEventDate = dayjs(event_date).format('YYYY-MM-DD');
        console.log("Formatted date:", formattedEventDate);
        message.success('Всё в порядке!');

        setIsLoading(false);
    };

    const onFinishFailed = () => {
        const formattedEventDate = dayjs(event_date).format('YYYY-MM-DD');
        console.log("Formatted date:", formattedEventDate);
        message.error('Проверьте поля для ввода!');

        setIsLoading(false);
    };

    return (
        <>
            <Typography.Title level={2}>Управление участниками</Typography.Title>

            <AdminPanelControls>
                <Button type="primary">Добавить участника</Button>
            </AdminPanelControls>


        </>
    )
}
export default Participants;