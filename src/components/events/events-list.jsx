import React from 'react';
import {Card, List, Flex, Space, Typography} from "antd";
import {Link} from "react-router-dom";
import dayjs from 'dayjs';
const EventsList = ({events}) => {
    const data = events.map((event, index) => {
        return (
            <Card
                key={index}
                size="default"
                title = {
                    <Space direction="vertical">
                        <Typography.Title level={2}>{event.name}</Typography.Title>
                        <Typography.Text type="secondary">{dayjs(event.date).format('DD-MM-YYYY')}</Typography.Text>
                    </Space>
                }
            >
                <List
                    
                    size="small"
                    header = {<Typography.Text>Компетенции: </Typography.Text>}
                    footer = {<Flex vertical>        
                                <Link to = {"/admin/events/settings"}>Перейти к мероприятию</Link>
                                <Typography.Text type="secondary">Регистрация открыта</Typography.Text>
                              </Flex>}
                    dataSource={event.nominations}
                    renderItem={(item) => (
                        <List.Item>
                            {item.name}
                        </List.Item>
                    )}
                />
            </Card>
        )
    })

    return (
        <List
            grid={{ gutter: 5, column: 3 }}
            pagination={{
                onChange: (page) => {
                    console.log(page);
                },
                hideOnSinglePage : true,
                pageSize : 3,
                position : "bottom",
                align    : "center",
            }}
            dataSource={data}
            renderItem={(item) => (
                <List.Item>
                    {item}
                </List.Item>
            )}
            locale={{
                emptyText: 'Мероприятия отсутствуют'
            }}
            style={{
                width: '100%'
            }}
        />
    );
};

export default EventsList;