import './sass/user-settings.scss';
import Button from "@components/UI/button/button.jsx";
import Input from "@components/UI/input-panel/input-panel.jsx";
import Choose from "@components/UI/choose-panel/choose-panel.jsx";
import { useState } from 'react';

function UsersSettings(){
    // написать(исправить)евенты потомучто уже 3 часа ночи
    const [FIO, setFIO] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [Telnumber, setTelnumber] = useState('+375 ');
    const [Organization, setOrganization] = useState('');

    return(
        <div class="user-settings">
			<h2>Настройки пользователя</h2>
            <div>
                <Input
                    for = 'user_fio_input'
                    name = 'ФИО'
                    type = 'text'
                    ID = 'user_fio_input'
                    value = {FIO}
                    event = {eFIO}
                    description = 'Пример: Иванов Иван Иванович'
                    onChange = {(eFIO) => setFIO(eFIO.target.value)}
                />

                <Choose
                    for = 'user_role_select'
                    name = 'Роль пользователя'
                    ID = 'user_role_select'
                    options = {['Суперпользователь 1', 'Судья 2', 'Специалист 3', 'Участник 4']}
                    description = 'Обратитесь к администратору сайта, чтобы изменить роль'
                />

                <Input
                    for = 'user_email_input'
                    name = 'Email'
                    type = 'email'
                    ID = 'user_email_input'
                    value = {Email}
                    description = 'Пример: example@robin-zubronok.by'
                    onChange = {(eEmail) => setEmail(eEmail.target.value)}
                />

                <Input
                    for = 'user_password_input'
                    name = 'Пороль'
                    type = 'password'
                    ID = 'user_password_input'
                    value = {Password}
                    description = ''
                    onChange = {(ePassword) => setPassword(ePassword.target.value)}
                />
                    {/* <Button>Показать</Button>
                    <Button>Сгенерировать новый</Button>

                </Input> */}
                

                <Input
                    for = 'user_phone_input'
                    name = 'Телефон'
                    type = 'tel'
                    ID = 'user_phone_input'
                    value = {Telnumber}
                    description = 'Пример: +375 25 123-45-67'
                    onChange = {(eTelnumber) => setTelnumber(eTelnumber.target.value)}
                />

                <Input
                    for = 'user_organization_input'
                    name = 'Учереждение образования'
                    type = 'text'
                    ID = 'user_organization_input'
                    value = {Organization}
                    description = 'Пример: ГУО "Гимназия-колледж искусств'
                    onChange = {(eOrganization) => setOrganization(eOrganization.target.value)}
                />

                <Button>Сохранить настройки</Button>

            </div>
        </div>
    );
}

export default UsersSettings;