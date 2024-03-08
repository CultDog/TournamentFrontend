import { Button, DatePicker, Input, Typography, message, Flex, Form, Space } from 'antd';
import { UserOutlined, BankOutlined, MailOutlined, CalendarOutlined, TeamOutlined, EnvironmentOutlined} from '@ant-design/icons';
import {useState} from "react"
import FormItem from 'antd/es/form/FormItem';
import dayjs from 'dayjs';
const {Title,Text} = Typography;

function ParticipantSettings(){
    const [loadings, setLoadings] = useState([]);

    const configDate = {
        rules: [
            {
                type: 'object',
                required: true,
                message: 'Пожалуйста выбирите дату рождения',
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
        <Flex vertical gap = "small">
            <Title level={2}>Редактирование анкеты участника</Title>
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
                {/*  ФИО */}
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
                            id = "participant_lname_input"
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
                            id = "participant_fname_input"
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
                            id = "participant_sname_input"
                            maxLength={255}
                            />
                            <Text type="secondary">Пример: Иванович</Text>
                        </Flex>
                    </FormItem>
                    {/* Дата рождения */}
                    <Text>Дата рождения</Text>
                    <Flex>
                        <Space.Compact style={{width : "100%"}} >
                            <Input prefix = {<CalendarOutlined />} disabled style={{width: "11%", height : "57%", border : "none"}}/>
                            <FormItem
                            name="event_date"
                            hasFeedback
                            validateFirst
                            {...configDate}
                            >   
                                <DatePicker
                                style={{width:"auto",}} 
                                placeholder="Выберите дату рождения"
                                />  
                            </FormItem>
                        </Space.Compact>
                    </Flex>  
                     {/*  Email */}
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
                            id = "participant_email_input"
                            placeholder="Введите Email"
                        />
                        <Text type="secondary">Пример: example@example.com</Text>
                        </Flex>
                    </FormItem>

                        {/* Регион */}
                    <FormItem
                        name="Region"
                        hasFeedback
                        validateFirst
                        rules={[
                            {
                                required: true,
                                message: 'Пожалуйста введите регион',
                            },
                        ]}
                    >
                        <Flex vertical>  
                        <Text>Регион</Text>
                        <Input
                        prefix ={<EnvironmentOutlined />}
                        placeholder="Введите учереждение образования"
                        id ="participant_region_input"                    
                        />
                        <Text type="secondary">Пример: Борисовский район</Text>   
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
                        id ="participant_organization_input"                    
                        />
                        <Text type="secondary">Пример: ГУО "Гимназия-колледж искусств</Text>   
                        </Flex>             
                    </FormItem>

                    {/*  ФИО Учителя */}
                <FormItem
                        name="Teacher_Last_Name"
                        hasFeedback
                        validateFirst
                        rules={[
                            {
                                required: true,
                                message: 'Пожалуйста введите фамилию ',
                            },
                            {
                                max: 255,
                                message : "Максимальное значение 255"
                            }
                        ]}
                    >
                        <Flex vertical>
                            <Text>Фамилия Учителя</Text>
                            <Input
                            prefix = {<TeamOutlined />}
                            allowClear
                            placeholder="Введите фамилию"
                            id = "participant_teacher_lname_input"
                            maxLength={255}
                            />
                            <Text type="secondary">Пример: Иванов</Text>
                        </Flex>

                    </FormItem>

                    <FormItem
                        name="Teacher_First_Name"
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
                            <Text>Имя Учителя</Text>
                            <Input
                            allowClear
                            prefix = {<TeamOutlined />}
                            placeholder="Введите имя"
                            id = "participant_teacher_fname_input"
                            maxLength={255}
                            />
                            <Text type="secondary">Пример: Иван</Text>
                        </Flex>

                    </FormItem>

                    <FormItem
                    name="Teacher_Sur_Name"
                    hasFeedback
                    validateFirst
                    >
                        <Flex vertical>
                            <Text>Отчество Учителя(если таковое имеется)</Text>
                            <Input
                            prefix = {<TeamOutlined />}
                            allowClear
                            placeholder="Введите отчество"
                            id = "participant_teacher_sname_input"
                            maxLength={255}
                            />
                            <Text type="secondary">Пример: Иванович</Text>
                        </Flex>
                    </FormItem>

                    {/* Доп Организация */}
                    <FormItem
                        name="AdditionalOrganization"
                    >
                        <Flex vertical>  
                        <Text>Дополнительное учереждение образования</Text>
                        <Input
                        prefix ={<BankOutlined />}
                        placeholder="Введите дополнительное учереждение образования"
                        id ="participant_additionalorganization_input"                    
                        />
                        <Text type="secondary">Пример: Очумелые ручки</Text>   
                        </Flex>             
                    </FormItem>

                    <Button 
                    type='primary' 
                    htmlType='submit'
                    loading={loadings[0]} onClick={() => enterLoading(0)}
                    >Сохранить данные
                    </Button>

            </Form>

        </Flex>
    )
}
export default ParticipantSettings;