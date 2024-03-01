import { Button, Select, Input, Typography, AutoComplete, InputNumber, Card, Space } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import {useState} from "react"

const {Title,Text} = Typography;

function UsersSettings(){
    
    const [loadings, setLoadings] = useState([]);

    const [options, setOptions] = useState([]);


    const handleSearch = (value) => {

        let res = [];

        const domainOptions = ['gmail.com', 'mail.ru', 'yandex.ru'];


        if (!value || value.indexOf('@') >= 0) {

        res = [];

        } else {

        domainOptions.forEach((domain) => {

            res.push({

            value: `${value}@${domain}`,

            label: `${value}@${domain}`,

            });

        });

        }

        setOptions(res);

    };

    return(
        <>
			<Title level={2}>Настройки пользователя</Title>
            {/* Полее ввода данных */}
            <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                {/* ФИО */}
                <Card>
                    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                        <Text>ФИО</Text>
                        <Input
                        style={{'width':'30%'}} 
                        allowClear
                        placeholder="Введите ФИО"
                        variant="filled"
                        id = "user_fio_input"
                        maxLength={255}
                        />
                        <Text type="secondary">Пример: Иванов Иван Иванович</Text>
                    </Space>

                </Card>
                {/* Роль пользователя */}
                <Card>
                <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                    <Text>Роль пользователя</Text>
                    <Select
                    style={{'width':'30%'}}
                    id="user_role_select"
                    variant="filled"
                    defaultValue="Суперпользователь"
                    options={[
                        {
                          value: 'Суперпользователь',
                          label: 'Суперпользователь',
                        },
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
                </Card>
                {/* Email */}
                <Card>
                <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                    {/* {Дописать onSerch on Select} */}
                    <Text>Email</Text>
                    {/* Реализовать AutoComplite позже */}
                    <Input
                    style={{'width':'30%'}}
                    id = "user_email_input"
                    variant="filled"
                    placeholder="Введите Email"
                    />
                    <Text type="secondary">Пример: example@robin-zubronok.by</Text>
                    </Space>
                </Card>
                {/* Пороль */}
                <Card>
                    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>  
                    <Text>Пороль</Text>
                    <Input.Password
                    style={{'width':'30%'}}
                    placeholder="Введите Пороль"
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    variant="filled"
                    id = "user_password_input"
                    />  
                    </Space>     
                </Card>
                {/* Телефон */}
                <Card>
                <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                <Text>Телефон</Text>
                {/* Поченить formmatter при вводе автоматически разделял "-" */}
                <InputNumber
                    style={{'width':'30%'}}
                    placeholder="+375 "
                    defaultValue={+375 }
                    formatter={(value) => `+${value} `.replace(/(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/, '$1 ($2) $3-$4-$5')}
                    maxLength={14}
                    variant="filled"
                    id="user_phone_input"
                />
                <Text type="secondary">Пример: +375 25 123-45-67</Text>
                </Space>
                </Card>
                {/* Организация */}
                <Card>
                    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>  
                      <Text>Учереждение образования</Text>
                      <Input
                      style={{'width':'30%'}}
                      placeholder="Введите учереждение образования"
                      variant="filled"
                      id ="user_organization_input"                    
                      />
                      <Text type="secondary">Пример: ГУО "Гимназия-колледж искусств</Text>   
                    </Space>             
                </Card>
                <Button type="primary" loading={loadings[0]} onClick={() => enterLoading(0)}>Сохранить настройки</Button>
            </Space>
            
        </>
    );
}

export default UsersSettings;