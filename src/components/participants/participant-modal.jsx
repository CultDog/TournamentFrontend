import React from 'react';
import { useState } from 'react';
import {Button, Flex, Form, Modal, message, Checkbox} from "antd";
import ParticipantAdditionalOrganizationInput from "@src/UI/participant/participant-additional-organization-input.jsx";
import ParticipantBirthdayInput from "@src/UI/participant/participant-birthday-input.jsx";
import ParticipantCompitationSelect from "@src/UI/participant/participant-compitation-select.jsx"
import ParticipantEmailInput from "@src/UI/participant/participant-email-input.jsx";
import ParticipantEquipmentInput from "@src/UI/participant/participant-equipment-input.jsx";
import ParticipantEventInput from "@src/UI/participant/participant-event-input.jsx";
import ParticipantFirstnameInput from"@src/UI/participant/participant-firstname-input.jsx";
import ParticipantLastnameInput from"@src/UI/participant/participant-lastname-input.jsx";
import ParticipantPatronymicInput from"@src/UI/participant/participant-patronymic-input.jsx";
import ParticipantRegionSelect from"@src/UI/participant/participant-region-select.jsx";
import ParticipantSoftwareInput from"@src/UI/participant/participant-software-input.jsx";
import ParticipantTeacherFirstnameInput from"@src/UI/participant/participant-teacher-firstname-input.jsx";
import ParticipantTeacherLastnameInput from"@src/UI/participant/participant-teacher-lastname-input.jsx";
import ParticipantTeacherPatronymicInput from"@src/UI/participant/participant-teacher-patronymic-input.jsx";
import ParticipantOrganizationInput from"@src/UI/participant/particopant-organization-input.jsx";


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
                <ParticipantLastnameInput name = "Lustname"/>
                <ParticipantFirstnameInput name ="Firstname" />
                <ParticipantPatronymicInput name = "Patronymic" />
                <ParticipantBirthdayInput name ="BirthDate"/>
                <ParticipantEmailInput name = "Email" />
                <ParticipantRegionSelect name = "Region"/>
                <ParticipantOrganizationInput name = "Organization"/>
                <ParticipantTeacherLastnameInput name ="TeacherLastname"/>
                <ParticipantTeacherFirstnameInput name = "TeacherFirstname"/>
                <ParticipantTeacherPatronymicInput name = "TeacherPatronymic"/>
                <ParticipantAdditionalOrganizationInput name = "AdditionalOrganization"/>
                <ParticipantEquipmentInput name = "Equipment"/>
                <ParticipantSoftwareInput name = "Software"/>
                <ParticipantEventInput name = "Event"/>
                <ParticipantCompitationSelect name = "Compitation"/>

                <Flex vertical gap="large"> 
                    <Checkbox>Даю согласие на обработку и хранение персональных данных, проведение фото и видеосъемок с моим участием, на размещение фото и видео материалов на сайтах и информационных площадках; использовать фотографии и видео на выставках, в презентациях, в докладах и иных материалах, не противоречащих действущему законодательству Республики Беларусь.</Checkbox>

                    <Flex  gap="middle">
                        <Button
                            type='primary'
                            htmlType='submit'
                            loading={isLoading} onClick={() => setIsLoading(true)}
                        >Сохранить данные
                        </Button>
                        <Button onClick={onCancel}>Отмена</Button>
                    </Flex>
                </Flex>
            </Form>
        </Modal>
    );
};

export default ParticipantModal;