import { Button, Select, Input, Typography, message, Space, Form } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import {useState} from "react"
import FormItem from 'antd/es/form/FormItem';

const {Title,Text} = Typography;

function UsersSettings(){

    const [loadings, setLoadings] = useState([]);

    const onFinish = () => {
        message.success('Всё в порядке!');
    };

    const onFinishFailed = () => {
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
        <Space direction="vertical" size="small" style={{ display: 'flex' }}>
			<Title level={2}>Настройки пользователя</Title>
            {/* Полее ввода данных */}
            <Form  
                layout="vertical"
                variant="filled"
                requiredMark = "Default"
                style={{
                maxWidth: 300,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                    {/* ФИО */}
                    <FormItem
                        name="Last_Name"
                        hasFeedback
                        validateFirst
                        rules={[
                            {
                                required: true,
                                message: 'Пожалуйста введите фамилию',
                            },
                            {
                                max: 255,
                                message : "Максимальное значение 255"
                            }
                        ]}
                    >
                        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                            <Text>Фамилия</Text>
                            <Input
                            allowClear
                            placeholder="Введите фамилию"
                            id = "user_lname_input"
                            maxLength={255}
                            />
                            <Text type="secondary">Пример: Иванов</Text>
                        </Space>

                    </FormItem>

                    <FormItem
                        name="First_Name"
                        hasFeedback
                        validateFirst
                        rules={[
                            {
                                required: true,
                                message: 'Пожалуйста введите имя',
                            },
                            {
                                max: 255,
                                message : "Максимальное значение 255"
                            }
                        ]}
                    >
                        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                            <Text>Имя</Text>
                            <Input
                            allowClear
                            placeholder="Введите имя"
                            id = "user_fname_input"
                            maxLength={255}
                            />
                            <Text type="secondary">Пример: Иван</Text>
                        </Space>

                    </FormItem>

                    <FormItem
                    name="Sur_Name"
                    hasFeedback
                    validateFirst
                    rules={[
                        {
                            max: 255,
                            message : "Максимальное значение 255"
                        }
                    ]}>
                        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                            <Text>Отчество(если таковое имеется)</Text>
                            <Input
                            allowClear
                            placeholder="Введите отчество"
                            id = "user_sname_input"
                            maxLength={255}
                            />
                            <Text type="secondary">Пример: Иванович</Text>
                        </Space>

                    </FormItem>
                    {/* Роль пользователя */}
                    <FormItem>
                        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                            <Text>Роль пользователя</Text>
                            <Select
                            id="user_role_select"
                            defaultValue="Участник"
                            options={[
                                {
                                    value: 'Судья',
                                    label: 'Судья',
                                },
                                {
                                    value: 'Специалист',
                                    label: 'Специалист',
                                },
                                {
                                    value: 'Участник',
                                    label: 'Участник',
                                },
                            ]}
                            />
                            <Text type="secondary">Обратитесь к администратору сайта, чтобы изменить роль</Text>
                            </Space>
                    </FormItem>
                    {/* Email */}
                    <FormItem
                        name="Email"
                        hasFeedback
                        validateFirst
                        rules={[
                            {
                                required: true,
                                message: 'Пожалуйста введите Email',
                            },
                        ]}
                    >
                    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                        {/* {Дописать onSerch on Select} */}
                        <Text>Email</Text>
                        {/* Реализовать AutoComplite позже */}
                        <Input
                        type="email"
                        // pattern="+@gmail.com"
                        id = "user_email_input"
                        placeholder="Введите Email"
                        />
                        <Text type="secondary">Пример: example@example.com</Text>
                        </Space>
                    </FormItem>
                    {/* Пароль */}
                    <FormItem
                        name="Password"
                        hasFeedback
                        validateFirst
                        rules={[
                            {
                                required: true,
                                message: 'Пожалуйста введите пароль',
                            },
                            {
                                min: 8,
                                message: 'Минимальная длина пароля - 8 символов',
                            }
                        ]}
                    >
                        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>  
                        <Text>Пароль</Text>
                        <Input.Password 
                        placeholder="Введите Пароль"
                        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        id = "user_password_input"
                        />  
                        </Space>     
                    </FormItem>
                    {/* Телефон */}
                    <FormItem
                        name="Telephone"
                        hasFeedback
                        validateFirst
                        rules={[
                            {
                                required: true,
                                message: 'Пожалуйста введите телефон',
                            },
                        ]}
                    >
                        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                        <Text>Телефон</Text>
                        {/* Починить pattern при вводе автоматически разделял "-" */}
                        <Input
                            type="tel"
                            // pattern="+375 (99) 999-99-99"
                            allowClear
                            placeholder="Введите телефон"                    
                            maxLength={12}
                            id="user_phone_input"
                        />
                        <Text type="secondary">Пример: +375 25 123-45-67</Text>
                        </Space>
                        </FormItem>
                    {/* Организация */}
                    <FormItem
                        name="Organization"
                        hasFeedback
                        validateFirst
                        rules={[
                            {
                                required: true,
                                message: 'Пожалуйста введите учереждение образования',
                            },
                        ]}
                    >
                        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>  
                        <Text>Учереждение образования</Text>
                        <Input
                        placeholder="Введите учереждение образования"
                        id ="user_organization_input"                    
                        />
                        <Text type="secondary">Пример: ГУО "Гимназия-колледж искусств</Text>   
                        </Space>             
                    </FormItem>
                    {/* Кнопка  добавления пользователя */}
                    <FormItem>
                        {/* Подвязать submit к loading */}
                        <Button 
                            type="primary" 
                            htmlType="submit" 
                            loading={loadings[0]} onClick={() => enterLoading(0)}
                        >
                            Сохранить настройки
                        </Button>
                    </FormItem>
            </Form>
        </Space>
    );
}

export default UsersSettings;