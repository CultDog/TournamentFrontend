import { Button, Typography, Breadcrumb,DatePicker, Table, Flex, message, Input, Form, Space} from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import FormItem from 'antd/es/form/FormItem';
import dayjs from 'dayjs';
import { useState } from 'react';

function EventSettings(){
    const [loadings, setLoadings] = useState([]);
    const columns = [
        {
          title: 'Название компетенции',
          dataIndex: 'name_compitation',
          key: 'name_nomination',
        },
        {
          title: 'Количество зарегестрированных участников',
          dataIndex: 'porticipants_count',
          key: 'porticipants_count',
        },
        {
          title: 'Действия',
          key: 'action',
          render: () => (
            <Flex>
                <Button type="text" icon = {<EditOutlined/>}></Button>
                <Button type="text" icon = {<DeleteOutlined/>}></Button>
            </Flex>
          ),
        },
      ];
      const data = [
        {
            key: '1',
            name_compitation: 'Робототехника',
            porticipants_count: 30,

        },
        {
            key: '2',
            name_compitation: 'Веб-дизайн',
            porticipants_count: 23,
  
        },
        {
            key: '3',
            name_compitation: 'Веб-разработка',
            porticipants_count: 43,
  
        },
        {
            key: '4',
            name_compitation: 'Следование по линии',
            porticipants_count: 30,
  
        },
        {
            key: '5',
            name_compitation: 'Робосумо',
            porticipants_count: 30,
  
        },
        {
            key: '6',
            name_compitation: 'Графический дизайн',
            porticipants_count: 30,
  
        },
          
      ];

    const configDate = {
        rules: [
            {
                type: 'object',
                required: true,
                message: 'Пожалуйста выбирите дату мероприятия',
            },
        ],
    };

    const onFinish = () => {

        const formattedEventDate = dayjs(event_date).format('YYYY-MM-DD');
        console.log("Formatted date:", formattedEventDate);
        message.success('Всё в порядке!');
    };

    const onFinishFailed = () => {
        const formattedEventDate = dayjs(event_date).format('YYYY-MM-DD');
        console.log("Formatted date:", formattedEventDate);
        message.error('Проверьте поля для ввода!');
    };

    const enterLoading = (index) => {
        setLoadings((prevLoadings) => {
          const newLoadings = [...prevLoadings];
          newLoadings[index] = true;
          return newLoadings;
        });
        setTimeout(() => {
          setLoadings((prevLoadings) => {
            const newLoadings = [...prevLoadings];
            newLoadings[index] = false;
            return newLoadings;
          });
        }, 6000);
      };
    return(

        <Flex vertical gap = "middle">
            <div>
                    <Typography.Title level={2}>Редактирование мероприятия</Typography.Title>
                    <Breadcrumb
                        items={[
                        {
                            title: 'Мероприятия',
                            href: './'
                        },
                        {
                            title: "РобИн-2024"
                        },
                        ]}
                    />
            </div>
            <Form
                layout="vertical"
                variant="filled"
                requiredMark = "Default"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Flex vertical align="center">
                    <Typography.Title level={3}>Данные мероприятия</Typography.Title>
                </Flex>
                <FormItem
                    name="event_name"
                    hasFeedback
                    validateFirst
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста введите название мероприятия',
                        },
                        {
                            max: 255,
                            message : "Максимальное значение 255"
                        },
                    ]}
                >
                    <Flex vertical>
                    <Typography.Title>Название мероприятия</Typography.Title>
                    <Input
                        allowClear
                        placeholder="Введите название мероприятия"
                        id = "event_name_input"
                        maxLength={255}
                        style={{"width": "20%"}}
                    />
                    </Flex>
                </FormItem>
                <Typography.Title>Дата мероприятия</Typography.Title>
                <FormItem
                    name="event_date"
                    hasFeedback
                    validateFirst
                    {...configDate}
                >   
                        <DatePicker
                        placeholder="Выберите дату мероприятия"
                        style={{"width": "20%"}}
                        />
                </FormItem>
                <Button 
                    type='primary' 
                    htmlType='submit'
                    loading={loadings[0]} onClick={() => enterLoading(0)}
                    >Сохранить данные
                </Button>
            </Form>
            <Space direction="vertical" size = "middle">
                <Flex vertical align="center">
                    <Typography.Title level={3}>Компетенции</Typography.Title>
                </Flex>
                <Flex vertical align = "flex-end">
                    <Button type='primary'> Добавить компетенцию </Button>
                </Flex>
                <Table 
                    columns={columns} 
                    dataSource={data} 
                    //pagination={{position:'bottom'}}
                />
            </Space>
        </Flex>
    );
}

export default EventSettings;