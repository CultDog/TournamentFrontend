import { Button, Select, Input, Typography, message, Flex, Form, Space } from 'antd';
import { EyeInvisibleOutlined, UserOutlined, PhoneOutlined, LockOutlined, BankOutlined, MailOutlined, CrownOutlined} from '@ant-design/icons';
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
        <Flex vertical gap = "small">
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
                        <Flex vertical>
                            <Text>Фамилия</Text>
                            <Input
                            prefix = {<UserOutlined />}
                            allowClear
                            placeholder="Введите фамилию"
                            id = "user_lname_input"
                            maxLength={255}
                            />
                            <Text type="secondary">Пример: Иванов</Text>
                        </Flex>

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
                        <Flex vertical>
                            <Text>Имя</Text>
                            <Input
                            allowClear
                            prefix = {<UserOutlined />}
                            placeholder="Введите имя"
                            id = "user_fname_input"
                            maxLength={255}
                            />
                            <Text type="secondary">Пример: Иван</Text>
                        </Flex>

                    </FormItem>

                    <FormItem
                    name="Sur_Name"
                    hasFeedback
                    validateFirst
                    >
                        <Flex vertical>
                            <Text>Отчество(если таковое имеется)</Text>
                            <Input
                            prefix = {<UserOutlined />}
                            allowClear
                            placeholder="Введите отчество"
                            id = "user_sname_input"
                            maxLength={255}
                            />
                            <Text type="secondary">Пример: Иванович</Text>
                        </Flex>

                    </FormItem>
                    {/* Роль пользователя */}
                    <FormItem>
                        <Flex vertical>
                            <Text>Роль пользователя</Text>
                            <div>
                                <Flex>
                                <Space.Compact>
                                    <Input prefix = {<CrownOutlined/>} disabled style={{"width": "12%", border : "none"}}/>
                                    <Select
                                        style={{"width":"88%"}}
                                        id="user_role_select"
                                        defaultValue="Специалист"
                                        options={[
                                            {
                                                value: 'Судья',
                                                label: 'Судья',
                                                
                                            },
                                            {
                                                value: 'Специалист',
                                                label: 'Специалист',
                                            },
                                        ]}
                                    />
                                </Space.Compact>
                                </Flex>
                            </div>
                            <Text type="secondary">Обратитесь к администратору сайта, чтобы изменить роль</Text>
                            </Flex>
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
                            { 
                                type: 'email', 
                                message : "Некоректный Email" ,
                            },
                        ]}
                    >
                    <Flex vertical>
                        <Text>Email</Text>
                        <Input
                            prefix = {<MailOutlined />}
                            type="email"
                            // pattern="+@gmail.com"
                            id = "user_email_input"
                            placeholder="Введите Email"
                        />
                        <Text type="secondary">Пример: example@example.com</Text>
                        </Flex>
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
                        <Flex vertical>  
                        <Text>Пароль</Text>
                        <Input.Password 
                            prefix = {<LockOutlined/>}
                            placeholder="Введите Пароль"
                            iconRender={() => <EyeInvisibleOutlined />}
                            id = "user_password_input"
                        />  
                        </Flex>     
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
                            {
                                min: 9,
                                message: "Телефон должен быть длиной 9 цифер"
                            },
                            {
                                type: "number" ,
                                message: "Телефон должен быть числом"
                            },
                        ]}
                    >
                        <Flex vertical>
                        <Text>Телефон</Text>
                        <Input
                            prefix = {<PhoneOutlined/>}
                            addonBefore={"+375"}
                            type="tel"
                            allowClear
                            placeholder="Введите телефон"                    
                            maxLength={9}
                            id="user_phone_input"
                        />
                        <Text type="secondary">Пример: 251234567</Text>
                        </Flex>
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
                        <Flex vertical>  
                        <Text>Учереждение образования</Text>
                        <Input
                        prefix ={<BankOutlined />}
                        placeholder="Введите учереждение образования"
                        id ="user_organization_input"                    
                        />
                        <Text type="secondary">Пример: ГУО "Гимназия-колледж искусств</Text>   
                        </Flex>             
                    </FormItem>
                    {/* Кнопка  добавления пользователя */}
                    <FormItem>
                        <Button 
                            type="primary" 
                            htmlType="submit" 
                            loading={loadings[0]} onClick={() => enterLoading(0)}
                        >Сохранить настройки
                        </Button>
                    </FormItem>
            </Form>
        </Flex>
    );
}

export default UsersSettings;