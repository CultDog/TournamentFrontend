import { Button, Typography, Breadcrumb, Card, Space, List } from 'antd';
import { Link } from 'react-router-dom';

const {Title,Text} = Typography;

function Events(){

    const events = [
        {
          key  : '1',
          title: 'РобИн-2024',
          date : '23.03.2024',
          compitations : [
            'Роботехника', 
            'Веб-дизайн' , 
            'Веб-Разработка', 
            'Следование по линии', 
            'Робосумо', 
            'Графический дизайн'
          ]
        },
        {
            key  : '2',
            title: 'РобИн-2024',
            date : '23.03.2024',
            compitations : [
              'Роботехника', 
              'Веб-дизайн' , 
              'Веб-Разработка', 
              'Следование по линии', 
              'Робосумо', 
              'Графический дизайн'
            ]
        },
        {
            key  : '3',
            title: 'РобИн-2024',
            date : '23.03.2024',
            compitations : [
              'Роботехника', 
              'Веб-дизайн' , 
              'Веб-Разработка', 
              'Следование по линии', 
              'Робосумо', 
              'Графический дизайн'
            ]
        },
        {
            key  : '4',
            title: 'РобИн-2024',
            date : '23.03.2024',
            compitations : [
              'Роботехника', 
              'Веб-дизайн' , 
              'Веб-Разработка', 
              'Следование по линии', 
              'Робосумо', 
              'Графический дизайн'
            ]
        },
        {
            key  : '5',
            title: 'РобИн-2024',
            date : '23.03.2024',
            compitations : [
              'Роботехника', 
              'Веб-дизайн' , 
              'Веб-Разработка', 
              'Следование по линии', 
              'Робосумо', 
              'Графический дизайн'
            ]
        },
        {
            key  : '5',
            title: 'РобИн-2024',
            date : '23.03.2024',
            compitations : [
              'Роботехника', 
              'Веб-дизайн' , 
              'Веб-Разработка', 
              'Следование по линии', 
              'Робосумо', 
              'Графический дизайн'
            ]
        },
      ];

        const EventsList = events.map((event, index) => {
        return(
            <Card 
            key={index}
            size="small"
            title = {
              <Space direction="vertical">
                <Title level={2}>{event.title}</Title>
                <Text type="secondary">{event.date}</Text>
              </Space>
            } 
            >
                <List
                    size="small"
                    header = {<Text>Компетенции: </Text>}
                    footer = {<Link to = {""}>Перейти к мероприятию</Link>}
                    dataSource={event.compitations}
                    renderItem={(item) => (
                        <List.Item>
                            {item}
                        </List.Item>
                    )}
                />
            </Card>
        )
   })
   const eventslist = EventsList;
   return(
        <Space direction="vertical" size="large" style={{ display: 'flex' }}>
            <div>
                <>
                    <Title level={2}>Мероприятия</Title>
                    <Breadcrumb
                        items={[
                        {
                            title: 'Мероприятия'
                        }]}
                    />
                </>
                <Button type="primary" style={{float : "right"}} href="./settings">Добавить мероприятие</Button>
            </div>
            <List
            grid={{ gutter: 5, column: 4 }}
            pagination={{
                onChange: (page) => {
                    console.log(page);
                  },
                pageSize : 4,
                position : "bottom",
                align    : "end",
              }}
            dataSource={eventslist}
            renderItem={(item) => (
                <List.Item>
                    {item}
                </List.Item>
            )}
            />
        </Space>
   );
}

export default Events;