import './input-panel.scss';

function InputPanel(props){

    return(
        <div>
            <label htmlFor={props.for} className="form-label">{props.name ?? ''}</label>
            <input
                type={props.type ?? "text"}
                className="form-control"
                id={props.ID}
                // value= {props.value}
                placeholder={props.placeholder ?? ''}
                onFocus={props.Focus}
                onBlur={props.Blur}
            />
            <div className="form-text">{props.description ?? ''}</div>

            
        </div>
    )
}

export default InputPanel;