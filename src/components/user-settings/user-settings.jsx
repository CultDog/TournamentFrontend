import './sass/user-settings.scss';
import Button from "@components/UI/button/button.jsx";
import Input from "@components/UI/input-panel/input-panel.jsx";
import Choose from "@components/UI/choose-panel/choose-panel.jsx";
import  {useState} from "react";
function UsersSettings(){
    
    const [showPassword, setShowPassword] = useState(false);

    return(
        <div className="user-settings">
			<h2>Настройки пользователя</h2>
            <div>
                <Input
                    for = 'user_fio_input'
                    name = 'ФИО'
                    type = 'text'
                    ID = 'user_fio_input'
                    // value = ''
                    description = 'Пример: Иванов Иван Иванович'
                />

                <Choose
                    for = 'user_role_select'
                    name = 'Роль пользователя'
                    ID = 'user_role_select'
                    options = {['Суперпользователь', 'Судья', 'Специалист']}
                    description = 'Обратитесь к администратору сайта, чтобы изменить роль'
                />

                <Input
                    for = 'user_email_input'
                    name = 'Email'
                    type = 'email'
                    ID = 'user_email_input'
                    value = ''
                    description = 'Пример: example@robin-zubronok.by'
                />

                <Input
                    for = 'user_password_input'
                    name = 'Пороль'
                    type = {showPassword ? "text" : "password"}
                    ID = 'user_password_input'
                    value = ''
                    description = ''
                />

                

                <Button Click = {() => setShowPassword(!showPassword)}>Показать</Button>
                <Button>Сгенирировать</Button>
                    
                

                <Input
                    for = 'user_phone_input'
                    name = 'Телефон'
                    type = 'tel'
                    ID = 'user_phone_input'
                    placeholder = '+375 '
                    description = 'Пример: +375 25 123-45-67'
                    Focus = {(e)=> {
                        if(e.target.value == ''){
                        e.target.value = e.target.placeholder;
                        } 
                    }}
                    Blur = {(e)=>{
                        if (e.target.value == e.target.placeholder){
                            e.target.value = ''
                        }
                    }}
                />
                

                <Input
                    for = 'user_organization_input'
                    name = 'Учереждение образования'
                    type = 'text'
                    ID = 'user_organization_input'
                    value = ''
                    description = 'Пример: ГУО "Гимназия-колледж искусств'
                />

                <Button>Сохранить настройки</Button>

            </div>
        </div>
    );
}

export default UsersSettings;