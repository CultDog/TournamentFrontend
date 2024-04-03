import { Button, Typography, Breadcrumb,DatePicker, Table, Flex, message, Input, Form, Space} from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import FormItem from 'antd/es/form/FormItem';
import dayjs from 'dayjs';
import { useState } from 'react';
import ApiPath from "@components/enums.js"

function EventSettings(){
    const [loadings, setLoadings] = useState([]);

    const create_event_request = async () => {
        const myHeaders = new Headers();
        myHeaders.append("accept", "application/json");
        myHeaders.append("Content-Type", "application/json");
        
        const raw = JSON.stringify({
          "name": document.getElementById("event_name_input").value,
          "date": dayjs(document.getElementById("event_date").value).format('YYYY-MM-DD'),
        });
        
        console.log( dayjs(document.getElementById("event_date").value).format('YYYY-MM-DD'))

        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
          credentials: 'include',
        };
        
        const response = await fetch(`${ApiPath}/event/event`, requestOptions)
        const response_json = response.json();

        if("detail" in response_json || response.status != 200){

            alert("ERROR", response_json["detail"])
            return;
        }
        alert("OK")
    }

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
        // {
        //     key: '1',
        //     name_compitation: 'Робототехника',
        //     porticipants_count: 30,

        // },
        // {
        //     key: '2',
        //     name_compitation: 'Веб-дизайн',
        //     porticipants_count: 23,
  
        // },
        // {
        //     key: '3',
        //     name_compitation: 'Веб-разработка',
        //     porticipants_count: 43,
  
        // },
        // {
        //     key: '4',
        //     name_compitation: 'Следование по линии',
        //     porticipants_count: 30,
  
        // },
        // {
        //     key: '5',
        //     name_compitation: 'Робосумо',
        //     porticipants_count: 30,
  
        // },
        // {
        //     key: '6',
        //     name_compitation: 'Графический дизайн',
        //     porticipants_count: 30,
  
        // },
          
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
                    <Typography.Title level={2}>Данные мероприятия</Typography.Title>
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
                    <Typography.Text>Название мероприятия</Typography.Text>
                    <Input
                        allowClear
                        placeholder="Введите название мероприятия"
                        id = "event_name_input"
                        maxLength={255}
                        style={{"width": "20%"}}
                    />
                    </Flex>
                </FormItem>
                <Typography.Text>Дата мероприятия</Typography.Text>
                <FormItem
                    name="event_date"
                    hasFeedback
                    validateFirst
                    {...configDate}
                >   
                        <DatePicker
                        id="event_date"
                        format = "DD-MM-YYYY"
                        placeholder="Выберите дату мероприятия"
                        style={{"width": "20%"}}
                        />
                </FormItem>
                <Button 
                    type='primary' 
                    htmlType='submit'
                    loading={loadings[0]} onClick={
                        () => {enterLoading(0); create_event_request()}}
                    >Сохранить данные
                </Button>
            </Form>
            <Space direction="vertical" size = "middle">
                <Flex vertical align="center">
                    <Typography.Title level={2}>Компетенции</Typography.Title>
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