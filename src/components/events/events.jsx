import { Button, Typography, Breadcrumb, Card, Space, List,Calendar, theme, Flex } from 'antd';
import { useState, useEffect } from 'react';
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
		setEvents(await response.json());
		console.log(events);
		}catch (error){
			console.error(error);
		}
	}
	
	useEffect(() => {
		GetEvents();
	  }, []);

	const EventsList = events.map((event, index) => {
		return(
			<Card 
				key={index}
				size="default"
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
							{item.name}
						</List.Item>
					)}
				/>
			</Card>
		)
	})
   const eventslist = EventsList;
   const wrapperStyle = {
		width: 390,
		height: 360
   };
   return (
		<Flex vertical gap="large" style={{ display: 'flex' }}>
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
			<Flex gap="small" >
				<Card style={wrapperStyle}>
					<Calendar fullscreen = {false}/>
				</Card>
				<div style={{width : "85%"}}>
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
						dataSource={eventslist}
						renderItem={(item) => (
							<List.Item>
								{item}
							</List.Item>
						)}
					/>
				</div>
			</Flex>
		</Flex>
   );
}

export default Events;