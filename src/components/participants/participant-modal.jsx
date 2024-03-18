import React from 'react';
import FormItem from "antd/es/form/FormItem";
import {Button, DatePicker, Flex, Form, Input, Space, Modal, message, Typography} from "antd";
import {
    BankOutlined,
    CalendarOutlined,
    EnvironmentOutlined,
    TeamOutlined,
} from "@ant-design/icons";
import { useState } from 'react';
import UserLastnameInput from "@src/UI/user/user-lastname-input";
import UserFirstnameInput from "@src/UI/user/user-firstname-input";
import UserPatronymicInput from "@src/UI/user/user-patronymic-input";
import UserEmailInput from "@src/UI/user/user-email-input";
import UserOrganizationInput from "@src/UI/user/user-organization-input";
import ParticipantBirthdayInput from "@src/UI/participant/participant-birthday-input";

const {Title, Text} = Typography;

function ParticipantModal ({ isOpen, onOk, onCancel })  {
    const [isLoading, setIsLoading] = useState(false);

    const onFinish = () => {
        message.success('Всё в порядке!');
        setIsLoading(false);
    };

    const onFinishFailed = () => {
        message.error('Проверьте поля для ввода!');
        setIsLoading(false);
    };

    return (
        <Modal
			title="Добавить участника"
			style={{
				top: 20,
			}}
			open={isOpen}
			onOk={onOk}
			onCancel={onCancel}
			footer={[]}
		>
            <Form
                layout="vertical"
                variant="filled"
                requiredMark="Default"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <UserLastnameInput />
                <UserFirstnameInput />
                <UserPatronymicInput />

                <ParticipantBirthdayInput />

                <UserEmailInput />

                {/* Регион */}
                <FormItem
                    name="Region"
                    hasFeedback
                    validateFirst
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста, введите регион',
                        },
                    ]}
                >
                    <Flex vertical>
                        <Text>Регион</Text>
                        <Input
                            prefix={<EnvironmentOutlined />}
                            placeholder="Введите учереждение образования"
                            id="participant_region_input"
                        />
                        <Text type="secondary">Пример: Борисовский район</Text>
                    </Flex>
                </FormItem>

                <UserOrganizationInput />

                {/*  ФИО Учителя */}
                <FormItem
                    name="Teacher_Last_Name"
                    hasFeedback
                    validateFirst
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста, введите фамилию учителя',
                        },
                        {
                            max: 255,
                            message: "Максимальное значение 255"
                        }
                    ]}
                >
                    <Flex vertical>
                        <Text>Фамилия Учителя</Text>
                        <Input
                            prefix={<TeamOutlined />}
                            allowClear
                            placeholder="Введите фамилию учителя"
                            id="participant_teacher_lname_input"
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
                            message: 'Пожалуйста, введите имя учителя',
                        },
                        {
                            max: 255,
                            message: "Максимальное значение 255"
                        }
                    ]}
                >
                    <Flex vertical>
                        <Text>Имя Учителя</Text>
                        <Input
                            allowClear
                            prefix={<TeamOutlined />}
                            placeholder="Введите имя учителя"
                            id="participant_teacher_fname_input"
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
                            prefix={<TeamOutlined />}
                            allowClear
                            placeholder="Введите отчество учителя"
                            id="participant_teacher_sname_input"
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
                            prefix={<BankOutlined />}
                            placeholder="Введите дополнительное учереждение образования"
                            id="participant_additionalorganization_input"
                        />
                        <Text type="secondary">Пример: Очумелые ручки</Text>
                    </Flex>
                </FormItem>

                <Button
                    type='primary'
                    htmlType='submit'
                    loading={isLoading} onClick={() => setIsLoading(true)}
                >Сохранить данные
                </Button>

            </Form>
        </Modal>
    );
};

export default ParticipantModal;