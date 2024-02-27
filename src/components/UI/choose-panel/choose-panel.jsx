import './choose-panel.scss';
function ChoosePanel(props){
    
    return(
        <div>
            <label for={props.for} class="form-label">{props.name ?? ""}</label>
            <select id={props.ID} class="form-select" disabled>
                {props.options.map((option, index) => (
                        <option key={index}>{option}</option>
                    ))}

                {/* {props.options.map((option) => (
                        <option>{option}</option>
                    ))} */}
            </select>
            <div class="form-text">{props.description ?? ""}</div>
        </div>
    )
}

export default ChoosePanel;