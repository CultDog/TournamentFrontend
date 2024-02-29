import './sass/events.scss';
import EventBlock from './event-block.jsx';
import AdminPanelControls from "../admin-panel/admin-panel-controls.jsx";
import Button from "@components/UI/button/button.jsx";

function Events(){
    return(
        <div>
            <div class="admin-panel__content">
                <h2>Мероприятия</h2>

                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb mt-3">
                        <li class="breadcrumb-item active" aria-current="page">Мероприятия</li>
                    </ol>
                </nav>

                <AdminPanelControls>
                    <Button>Добавить мероприятие</Button>
                </AdminPanelControls>
            </div>

            <div>
            <EventBlock
                name = 'РобИн-2024'
                date = '23.03.2024'
                link = ''
                compitations = {['Роботехника', 'Веб-дизайн' , 'Веб-Разработка', 
                                 'Следование по линии', 'Робосумо', 'Графический дизайн']}            
            />

            <EventBlock
                name = 'РобИн-2024'
                date = '23.03.2024'
                link = ''
                compitations = {['Роботехника', 'Веб-дизайн' , 'Веб-Разработка', 
                'Следование по линии', 'Робосумо', 'Графический дизайн']}            
            />

            <EventBlock
                name = 'РобИн-2024'
                date = '23.03.2024'
                link = ''
                compitations = {['Роботехника', 'Веб-дизайн' , 'Веб-Разработка', 
                'Следование по линии', 'Робосумо', 'Графический дизайн']}             
            />
            </div>
        </div>
    )
}

export default Events;