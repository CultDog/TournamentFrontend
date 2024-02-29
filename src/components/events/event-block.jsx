function EventBlock(props) {

	return (
		<div className="card event-card mb-2">
			<div className="card-body p-2 p-sm-3">
				<h5 className="card-title">{props.name}</h5>
				<h6 className="card-subtitle mb-2 text-body-secondary">{props.date}</h6>
				<p className="card-text">
					<span>Компетенции:</span>
					<ul className="event-card__nomination-list">
					{props.compitations.map((compitation, index) => (
                        <li key={index}>{compitation}</li>
                    ))}
					</ul>
				</p>
				<a href={props.link} className="card-link" data-bs-toggle="modal" data-bs-target="#userEditModal">Перейти к мероприятию</a>
			</div>
		</div>
	);
}

export default EventBlock;