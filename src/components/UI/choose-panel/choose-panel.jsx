import './choose-panel.scss';
function ChoosePanel(props){
    
    return(
        <div>
            <label htmlFor={props.for} className="form-label">{props.name ?? ""}</label>
            <select id={props.ID} className="form-select" >
                {props.options.map((option, index) => (
                        <option key={index}>{option}</option>
                    ))}

                {/* {props.options.map((option) => (
                        <option>{option}</option>
                    ))} */}
            </select>
            <div className="form-text">{props.description ?? ""}</div>
        </div>
    )
}

export default ChoosePanel;