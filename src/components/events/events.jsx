import { Button, Typography, Breadcrumb, Card, Space, List } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Events() {
	const [events , setEvents] = useState([]);
	const loginUrl = "http://127.0.0.1:8000/event/events_with_nominations?offset=0&limit=10"
	const GetEvents = async () =>{
		const myHeaders = new Headers();
		myHeaders.append("accept", "application/json");

		const requestOptions = {
		method: "GET",
		headers: myHeaders,
		redirect: "follow",
		credentials: 'include',
		};
		try{
		const response = await fetch(loginUrl, requestOptions);
		const data = await response.json();
		console.log(data);
		setEvents(data)
		}catch (error){
			console.error(error);
		}
	}
	
		const EventsList = events.map((event, index) => {
			return(
				<Card 
					key={index}
					size="small"
					title = {
						<Space direction="vertical">
							<Typography.Title level={2}>{event.name}</Typography.Title>
							<Typography.Text type="secondary">{event.date}</Typography.Text>
						</Space>
					} 
				>
					<List
						size="small"
						header = {<Typography.Text>Компетенции: </Typography.Text>}
						footer = {<Link to = {""}>Перейти к мероприятию</Link>}
						dataSource={event.nominations}
						renderItem={(item) => (
							<List.Item>
								{item}
							</List.Item>
						)}
					/>
				</Card>
			)
   })
   GetEvents();
   const eventslist = EventsList;
   return (
		<Space direction="vertical" size="large" style={{ display: 'flex' }}>
			<div>
				<>
					<Typography.Title level={2}>Мероприятия</Typography.Title>
					<Breadcrumb
						items={[
						{
							title: 'Мероприятия'
						}]}
					/>
				</>
				<Button type="primary" style={{float : "right"}} href="./events/settings">Добавить мероприятие</Button>
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